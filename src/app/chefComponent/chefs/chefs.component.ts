import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefsService } from 'src/app/chefs.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefs: any = []

  constructor(private router:Router,private chefsService :ChefsService) { }
  ngOnInit() {
    this.getAllchefs()
  }
  getAllchefs() {
    //this.chefs = JSON.parse(localStorage.getItem("chefs" || '[]'))
    console.log("here chefs", this.chefs);
   this.chefsService.getAllChefs().subscribe((res)=>this.chefs=res
   );
   
  }
}
