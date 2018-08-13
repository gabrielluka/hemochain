import { async, ComponentFixture, TestBed } from '@angular/core/testing';import { BolsaComponent } from './bolsa.component';
3

describe('IconsComponent', () => {
  let component: BolsaComponent;
  let fixture: ComponentFixture<BolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
