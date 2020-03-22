import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoForPatientsPage } from './info-for-patients.page';

describe('InfoForPatientsPage', () => {
  let component: InfoForPatientsPage;
  let fixture: ComponentFixture<InfoForPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoForPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoForPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
