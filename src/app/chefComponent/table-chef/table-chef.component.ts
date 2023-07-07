import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefsService } from 'src/app/chefs.service';

@Component({
  selector: 'app-table-chef',
  templateUrl: './table-chef.component.html',
  styleUrls: ['./table-chef.component.css']
})
export class TableChefComponent implements OnInit {
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
  delete(id: number) {
   /* for (let i = 0; i < this.chefs.length; i++) {
      if (id === this.chefs[i].id) {
        console.log("test id", this.chefs[i]);
        this.chefs.splice(i, 1)
      }
    }
    localStorage.setItem("chefs", JSON.stringify(this.chefs))*/
    this.chefsService.deleteChef(id).subscribe((res)=>{
  this.getAllchefs()
  })
  }
  navigate(id:number)
  {
this.router.navigate(["addChef/"+id]);
  }

}
