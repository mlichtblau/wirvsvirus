import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestcenterLoginPage } from './testcenter-login.page';

describe('TestcenterLoginPage', () => {
  let component: TestcenterLoginPage;
  let fixture: ComponentFixture<TestcenterLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcenterLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestcenterLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
