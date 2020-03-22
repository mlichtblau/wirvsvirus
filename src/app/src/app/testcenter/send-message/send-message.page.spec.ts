import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendMessagePage } from './send-message.page';

describe('SendMessagePage', () => {
  let component: SendMessagePage;
  let fixture: ComponentFixture<SendMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
