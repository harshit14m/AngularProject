import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPrComponent } from './rxjs-pr.component';

describe('RxjsPrComponent', () => {
  let component: RxjsPrComponent;
  let fixture: ComponentFixture<RxjsPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsPrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
