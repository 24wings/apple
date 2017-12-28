import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap'

enum Views {
  List
}
@Component({
  selector: 'app-fruit-analysis',
  templateUrl: './fruit-analysis.component.html',
  styleUrls: ['./fruit-analysis.component.css']
})
export class FruitAnalysisComponent implements OnInit {
  Views = Views;
  state: Views = Views.List;
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
  constructor(public localService: BsLocaleService) { }

  ngOnInit() {
    this.localService.use('zh-cn');
  }

}
