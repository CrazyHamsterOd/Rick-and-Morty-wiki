import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItemPageComponent } from './character-item-page.component';

describe('CharacterItemPageComponent', () => {
  let component: CharacterItemPageComponent;
  let fixture: ComponentFixture<CharacterItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
