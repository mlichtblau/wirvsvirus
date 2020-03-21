import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientCountdownPage } from './patient-countdown.page';

describe('PatientCountdownPage', () => {
  let component: PatientCountdownPage;
  let fixture: ComponentFixture<PatientCountdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCountdownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientCountdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
