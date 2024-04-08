import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgComponent } from './pg.component';

describe('PgComponent', () => {
  let component: PgComponent;
  let fixture: ComponentFixture<PgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
