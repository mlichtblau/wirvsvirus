import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestcenterQueuePage } from './testcenter-queue.page';

describe('TestcenterQueuePage', () => {
  let component: TestcenterQueuePage;
  let fixture: ComponentFixture<TestcenterQueuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcenterQueuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestcenterQueuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
