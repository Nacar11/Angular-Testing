import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.receive = 1;
    fixture.detectChanges();
   
    
  });
  it('should call the compute function', () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    component.compute();
    fixture.detectChanges();
    expect(spyCompute).toHaveBeenCalled();
  });
  it('should call compute function with parameter 1 and the two numbers should be added together' , () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    component.receive = {op: 1, first: 1, second: 1};
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(2);
    expect(spyCompute).toHaveBeenCalled();
    
  });
  it('should call compute function with parameter 2 and the two numbers should be subtracted together' , () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    component.receive = {op: 2, first: 2, second: 1};
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(1);
    expect(spyCompute).toHaveBeenCalled();
    
  });
  it('should call compute function with parameter 3 and the two numbers should be divided together' , () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    component.receive = {op: 3, first: 9, second: 3};
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(3);
    expect(spyCompute).toHaveBeenCalled();
    
  });
  it('should call compute function with parameter 1 and the two numbers should be multiplied together' , () => {
    let spyCompute = spyOn(component, "compute").and.callThrough();
    component.receive = {op: 4, first: 18, second: 2};
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toBe(36);
    expect(spyCompute).toHaveBeenCalled();
    
  });
});

