import { Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { NumberInputComponent } from './number-input.component';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;
  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    spyOn(component.firstNumber, "emit");
    spyOn(component.secondNumber, "emit");
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain `First Number` text content', () => {
    let label = fixture.debugElement.query(By.css('#first')).nativeElement;
    expect(label.textContent).toBe('First Number');
  });
  it('should contain `Second Number` text content', () => {
    let label = fixture.debugElement.query(By.css('#second')).nativeElement;
    expect(label.textContent).toBe('Second Number');
  });
  it('should call numberInput function if a number is inputted in the first number', () => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#firstInput')).nativeElement;
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  });
  it('should call numberInput function if a number is inputted in the second number', () => {
    let spyNumberInput = spyOn(component, 'numberInput').and.callThrough();
    let input = fixture.debugElement.query(By.css('#secondInput')).nativeElement;
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(spyNumberInput).toHaveBeenCalled();
  });
  it('should change the firstNumber variable to which it has been called with and if variable which==0', () => {
    component.numberInput('1', 0);
    expect(component.firstNumber.emit).toHaveBeenCalledWith(Object({ value: 1, which: 0}));
    component.firstNumber.emit = Object({ value: 69, which: 1});
    expect(component.firstNumber.emit).toEqual(Object({ value: 69, which: 1}));
  });
  it('should change the secondNumber variable to which it has been called with and if variable which==1', () => {
    component.numberInput('10', 1);
    expect(component.secondNumber.emit).toHaveBeenCalledWith(Object({ value: 10, which: 1}));
    component.secondNumber.emit = Object({ value: 2, which: 1});
    expect(component.secondNumber.emit).toEqual(Object({ value: 2, which: 1}));
  });
  

});
