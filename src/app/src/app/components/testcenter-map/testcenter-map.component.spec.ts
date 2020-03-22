import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestcenterMapComponent } from './testcenter-map.component';

describe('TestcenterMapComponent', () => {
  let component: TestcenterMapComponent;
  let fixture: ComponentFixture<TestcenterMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcenterMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestcenterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
