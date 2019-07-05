import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCreatorComponent } from './repo-creator.component';

describe('RepoCreatorComponent', () => {
  let component: RepoCreatorComponent;
  let fixture: ComponentFixture<RepoCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
