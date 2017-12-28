import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: any;
  @Input() form: FormGroup;
  timeout: number = 4000;
  constructor() { }
  get isValid() { return this.form.controls[this.field.key].valid; }
  ngOnInit() {
  }

}
