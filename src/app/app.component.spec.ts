import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call the sendValue function', () => {
    let spyCompute = spyOn(component, "sendValue").and.callThrough();
    fixture.detectChanges();
    component.sendValue();
    expect(spyCompute).toHaveBeenCalled();
  });
  it('should call the receiveFromInput function', () => {
    let spyCompute = spyOn(component, "receiveFromInput").and.callThrough();
    fixture.detectChanges();
    component.receiveFromInput(1);
    expect(spyCompute).toHaveBeenCalled();
  });

  it('should call the receiveOperation function', () => {
    let spyCompute = spyOn(component, "receiveOperation").and.callThrough();
    fixture.detectChanges();
    component.receiveOperation(1);
    expect(spyCompute).toHaveBeenCalled();
  });


 



});