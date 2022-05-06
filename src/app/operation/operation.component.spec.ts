import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { OperationComponent } from './operation.component';
import { NumberInputComponent } from '../number-input/number-input.component'

describe('OperationComponent', () => {
  let component: OperationComponent;
  let fixture: ComponentFixture<OperationComponent>;
  
  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
   
    
  });


  it('should call `onButtonClick()` function with paremater 1 if the add button is clicked' , () => {
    let spyAdd = spyOn(component, 'onButtonClick').and.callThrough();
    let add  = fixture.debugElement.query(By.css('#add')).nativeElement;
    add.click();

    expect(spyAdd).toHaveBeenCalled();
  });
  it('should call `onButtonClick()` function with parameter 2 if the subtract button is clicked' , () => {
    let spySubt = spyOn(component, 'onButtonClick').and.callThrough();
    let subt  = fixture.debugElement.query(By.css('#subtract')).nativeElement;
    subt.click();

    expect(spySubt).toHaveBeenCalled();
  });
  it('should call `onButtonClick()` function with parameter 3 if the multiply button is clicked' , () => {
    let spyMult = spyOn(component, 'onButtonClick').and.callThrough();
    let mult  = fixture.debugElement.query(By.css('#multiply')).nativeElement;
    mult.click();

    expect(spyMult).toHaveBeenCalled();
  });
  it('should call `onButtonClick()` function with parameter 4 if the divide button is clicked' , () => {
    let spyDiv = spyOn(component, 'onButtonClick').and.callThrough();
    let div  = fixture.debugElement.query(By.css('#divide')).nativeElement;
    div.click();

    expect(spyDiv).toHaveBeenCalled();
  });
});
