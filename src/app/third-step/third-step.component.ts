import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {

  frmStepThree: FormGroup;
  result: String ;

  constructor(private formBuilder: FormBuilder ,  private cdr :ChangeDetectorRef) {
    this.frmStepThree = this.formBuilder.group({
      qrResult: ['', Validators.required]
    });

  }

  getQrResultHandler(qrResult: any) {
    this.result=qrResult;
    console.log("Merchant detail " ,qrResult);
    this.frmStepThree.controls['qrResult'].setValue( qrResult);
    this.frmStepThree.controls['qrResult'].updateValueAndValidity();
    this.cdr.detectChanges();
  }


  ngOnInit(): void {
  }
}
