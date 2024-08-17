import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleselectionComponent } from './templeselection.component';

describe('TempleselectionComponent', () => {
  let component: TempleselectionComponent;
  let fixture: ComponentFixture<TempleselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
