import {Component, ElementRef, Input, OnInit, ViewChild, OnChanges, SimpleChange} from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import {Storage} from '@ionic/storage';

declare var google;

@Component({
  selector: 'app-testcenter-map',
  templateUrl: './testcenter-map.component.html',
  styleUrls: ['./testcenter-map.component.scss'],
})
export class TestcenterMapComponent implements OnInit, OnChanges {
  @ViewChild('mapElement', {static: true}) mapElement: ElementRef;
  @Input('isLoaded') isLoaded: boolean;

  constructor(
    private geolocation: Geolocation,
    public storage: Storage,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let changedProp = changes['isLoaded'];
    if(changedProp.currentValue) {
      this.storage.get('testcenters')
        .then((tcs) => {
          this.loadMap(tcs);
        });
    }
  }

  loadMap(testcenters) {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        const pos = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude,
        };
        const map = new google.maps.Map(this.mapElement.nativeElement);
        map.setCenter(pos);
        map.setZoom(10);

        //info window for location of user

        const patientIcon = {
          url: 'assets/icon/patienticon.png',
          scaledSize: new google.maps.Size(50, 50),
        };

        let marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Ihr Standort',
          icon: patientIcon,
        });

        const patientLocationText =
          '<div id="content">' + `<p>Ihr Standort</p>` + '</div>';
        const patientInfoWindow = new google.maps.InfoWindow({
          content: patientLocationText,
          maxWidth: 400,
          position: pos,
        });

        marker.addListener('click', function () {
          patientInfoWindow.open(map, marker)
        });

        //icons + info windows for test centers

        const testcenterIcon = {
          url: 'assets/icon/tcicon.png',
          scaledSize: new google.maps.Size(50, 50),
        };

        testcenters.forEach(tc => {
          let marker = new google.maps.Marker({
            position: tc.pos,
            map: map,
            title: tc.name,
            icon: testcenterIcon,
          });

          const tcLocationText = createTCLocationText(tc);

          const testCenterInfoWindow = new google.maps.InfoWindow({
            content: tcLocationText,
            maxWidth: 400,
            position: tc.pos,
          });

          marker.addListener('click', function () {
            testCenterInfoWindow.open(map, marker)
          })
        })
      })
      .catch(error => {
        console.log('Error getting location', error)
      });

    function createTCLocationText(tc) {

      let tcLocationText = '<div class="testcenter" id="content">' +
        '<div id="bodyContent">' +
        '<p>';

      if(tc.name){
        tcLocationText = tcLocationText + `<b>${tc.name}</b> <br>`;
      }
      if(tc.street){
        tcLocationText = tcLocationText + `${tc.street} <br>`;
      }
      if(tc.zipCode && tc.city){
        tcLocationText = tcLocationText + `${tc.zipCode} ${tc.city} <br>`;
      }
      tcLocationText = tcLocationText + '</p>' + '<p>';
      if(tc.waitingTime !== undefined){
        tcLocationText = tcLocationText + `Wartezeit: etwa ${tc.waitingTime} Minuten`;
      }
      tcLocationText = tcLocationText + '</p>';
      if(tc.id){
        tcLocationText = tcLocationText + `<ion-button color="medium" expand="block" href="../patient/queue-confirmation/${tc.id}">Auswählen</ion-button>`;
      }
      tcLocationText = tcLocationText + '</div></div>';

      return tcLocationText;

    }
  }
}
