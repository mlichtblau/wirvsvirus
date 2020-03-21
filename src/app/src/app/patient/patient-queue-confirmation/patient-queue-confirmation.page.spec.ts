import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientQueueConfirmationPage } from './patient-queue-confirmation.page';

describe('PatientQueueConfirmationPage', () => {
  let component: PatientQueueConfirmationPage;
  let fixture: ComponentFixture<PatientQueueConfirmationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientQueueConfirmationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientQueueConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
