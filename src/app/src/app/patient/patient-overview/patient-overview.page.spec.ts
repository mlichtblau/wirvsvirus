import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientOverviewPage } from './patient-overview.page';

describe('PatientOverviewPage', () => {
  let component: PatientOverviewPage;
  let fixture: ComponentFixture<PatientOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientOverviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
