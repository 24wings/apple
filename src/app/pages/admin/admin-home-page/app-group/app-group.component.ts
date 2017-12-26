import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-group',
  templateUrl: './app-group.component.html',
  styleUrls: ['./app-group.component.css']
})
export class AppGroupComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
