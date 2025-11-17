import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanditComponent } from './bandit.component';

describe('BanditComponent', () => {
  let component: BanditComponent;
  let fixture: ComponentFixture<BanditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
