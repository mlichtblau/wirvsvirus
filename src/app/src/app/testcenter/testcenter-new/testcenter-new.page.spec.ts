import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestcenterNewPage } from './testcenter-new.page';

describe('TestcenterNewPage', () => {
  let component: TestcenterNewPage;
  let fixture: ComponentFixture<TestcenterNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcenterNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestcenterNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
