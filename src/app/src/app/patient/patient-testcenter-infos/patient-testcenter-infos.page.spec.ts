import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientTestcenterInfosPage } from './patient-testcenter-infos.page';

describe('PatientTestcenterInfosPage', () => {
  let component: PatientTestcenterInfosPage;
  let fixture: ComponentFixture<PatientTestcenterInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTestcenterInfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientTestcenterInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
