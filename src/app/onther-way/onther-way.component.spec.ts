import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntherWayComponent } from './onther-way.component';

describe('OntherWayComponent', () => {
  let component: OntherWayComponent;
  let fixture: ComponentFixture<OntherWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntherWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntherWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
