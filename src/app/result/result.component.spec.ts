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
    
    fixture.detectChanges();
   
    
  });
  it('should call compute function with parameter 1 and the two numbers should be added together' , () => {
    component.receive=1;
    component.receive.first = '1';
    component.receive.second = '2';
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toEqual(3);
    
  });
  it('should call compute function with parameter 2 and the two numbers should be subtracted together' , () => {
    component.receive=2;
    component.receive.first = '3';
    component.receive.second = '1';
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toEqual(2);
    
  });
  it('should call compute function with parameter 1 and the two numbers should be multiplied together' , () => {
    component.receive=3;
    component.receive.first = '1';
    component.receive.second = '2';
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toEqual(2);
    
  });
  it('should call compute function with parameter 1 and the two numbers should be divided together' , () => {
    component.receive=4;
    component.receive.first = '4';
    component.receive.second = '2';
    fixture.detectChanges();
    component.compute();
    fixture.detectChanges();
    expect(component.result).toEqual(2);
    
  });
});

