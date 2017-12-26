import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  removeApp(id){
     let isRemove= window.confirm('是否移除该应用?');
     if(isRemove){
       console.log('移除成功')
     }
  }
}
