import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation/ngx'

declare var google

@Component({
  selector: 'app-testcenter-map',
  templateUrl: './testcenter-map.component.html',
  styleUrls: ['./testcenter-map.component.scss'],
})
export class TestcenterMapComponent implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef

  testcenters: {
    testcenter: {
      id: string
      name: string
      street: string
      zipCode: string
      city: string
      pos: {
        lat: number
        lng: number
      }
      directions: string
      waitingTime: number
      openingHours: {
        day: number
        opensAt: string
        closesAt: string
      }[]
    }[]
  } = {
    testcenter: [
      {
        id: '1',
        name: 'Uni Klinikum Göttingen',
        street: 'Robert-Koch-Straße',
        zipCode: '37075',
        city: 'Göttingen',
        pos: {
          lat: 51.5502,
          lng: 9.9426,
        },
        directions: 'Anreise Anweisungen',
        waitingTime: 500,
        openingHours: [
          {
            day: 0,
            opensAt: '8:00',
            closesAt: '17:00',
          },
        ],
      },
      {
        id: '21273',
        name: 'Ev. Krankenhaus Göttingen',
        street: 'An der Lutter 24',
        zipCode: '37075',
        city: 'Göttingen',
        pos: {
          lat: 51.55569,
          lng: 9.94312,
        },
        directions: 'Anreise Anweisungen',
        waitingTime: 500,
        openingHours: [
          {
            day: 0,
            opensAt: '8:00',
            closesAt: '17:00',
          },
          {
            day: 1,
            opensAt: '8:00',
            closesAt: '17:00',
          },
          {
            day: 2,
            opensAt: '8:00',
            closesAt: '17:00',
          },
          {
            day: 3,
            opensAt: '8:00',
            closesAt: '17:00',
          },
          {
            day: 4,
            opensAt: '8:00',
            closesAt: '17:00',
          },
        ],
      },
    ],
  }

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    console.log(this.testcenters)
  }

  ngAfterContentInit(): void {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        const pos = {
          //lat: resp.coords.latitude,
          //lng: resp.coords.longitude
          lat: 51.545483,
          lng: 9.905548,
        }
        const map = new google.maps.Map(this.mapElement.nativeElement)
        const infoWindow = new google.maps.InfoWindow()
        map.setCenter(pos)
        map.setZoom(12)

        //info window for location of user

        const patientIcon = {
          url: 'assets/icon/patienticon.png',
          scaledSize: new google.maps.Size(50, 50),
        }

        let marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Ihr Standort',
          icon: patientIcon,
        })

        const patientLocationText =
          '<div id="content">' + `<p>Ihr Standort</p>` + '</div>'
        const patientInfoWindow = new google.maps.InfoWindow({
          content: patientLocationText,
          maxWidth: 400,
          position: pos,
        })

        marker.addListener('click', function() {
          patientInfoWindow.open(map, marker)
        })

        //icons + info windows for test centers

        const testcenterIcon = {
          url: 'assets/icon/tcicon.png',
          scaledSize: new google.maps.Size(50, 50),
        }

        this.testcenters.testcenter.forEach(tc => {
          let marker = new google.maps.Marker({
            position: tc.pos,
            map: map,
            title: tc.name,
            icon: testcenterIcon,
          })

          const contentString =
            '<div class="testcenter" id="content">' +
            '<div id="bodyContent">' +
            `<p><b>${tc.name}</b> <br> ${tc.street} <br> ${tc.zipCode} ${tc.city}</p>` +
            `<p>Heute: ${tc.openingHours[getCurrentDay()].opensAt}-${
              tc.openingHours[getCurrentDay()].closesAt
            } <br>` +
            `Wartezeit: etwa ${tc.waitingTime} Minuten</p>` +
            `<p><a href="../patient/queue-confirmation/${tc.id}">In Warteschlange stellen</a></p>` +
            '</div>' +
            '</div>'
          const testCenterInfoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400,
            position: tc.pos,
          })

          marker.addListener('click', function() {
            testCenterInfoWindow.open(map, marker)
          })
        })
      })
      .catch(error => {
        console.log('Error getting location', error)
      })

    function getCurrentDay() {
      var d = new Date()
      return d.getDay()
    }
  }
}
