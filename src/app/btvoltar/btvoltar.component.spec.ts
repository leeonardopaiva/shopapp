import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtvoltarComponent } from './btvoltar.component';

describe('BtvoltarComponent', () => {
  let component: BtvoltarComponent;
  let fixture: ComponentFixture<BtvoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtvoltarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtvoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
