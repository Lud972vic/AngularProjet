import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurDePhotographiesComponent } from './mur-de-photographies.component';

describe('MurDePhotographiesComponent', () => {
  let component: MurDePhotographiesComponent;
  let fixture: ComponentFixture<MurDePhotographiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurDePhotographiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurDePhotographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
