import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../lib';


interface PathSeg{
  path:string,
  label:string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  level1PathSeg:PathSeg[]=[];
  level2PathSeg:PathSeg[]=[];
  pathSegs:PathSeg[]=[];

  constructor(public config:ConfigService) { }

  ngOnInit() {
    let level1Path:PathSeg[]=[];
    let level2Path:PathSeg[]=[];
   this.level1PathSeg= this.config.router.config.map(level1Route=>{return {path:level1Route.path,label:level1Route.data.label}});
    this.config.router.config.filter(level1Route=>!!level1Route.children).forEach(level1Route=>{
     level1Route.children.forEach(level2Route=>this.level2PathSeg.push({path:level2Route.path,label:level2Route.data.label}))
   });
   console.log(this.level1PathSeg,this.level2PathSeg);
   let paths =this.config.router.url.split('/').filter(path=>!!path);
  let seg1= this.level1PathSeg.find(pathSeg=>paths[0]==pathSeg.path);
  seg1.path='/'+seg1.path;
  this.pathSegs.push(seg1);
  let secondSegPath =  this.level2PathSeg.find(pathSeg=>paths[1]==pathSeg.path  ) ;
  if(secondSegPath){
  secondSegPath.path= this.config.router.url;
  this.pathSegs.push(secondSegPath);
  }
  console.log(this.pathSegs);
  }

}
