import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsService } from 'src/app/chefs.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  addChefForm:FormGroup
  chef:any={}
 id:any={};
 title:string="ADD Chef"
  constructor(private Route:Router,private activatedRoute:ActivatedRoute,private chefService:ChefsService) { }
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("here id ",this.id);
    if(this.id){
      this.title="Edit Chef"
      this.getChefById()
    }

  }
  addEditChef()
  {
    if (this.id) {
      
       this.chefService.updateChef(this.chef).subscribe((res)=>{
       this.Route.navigate(["tableChef"])
      })
      
    } else {
    let chefId= JSON.parse(localStorage.getItem("chefId")||"0")
    this.chef.id=chefId
this.chefService.addChef(this.chef).subscribe((res)=>{
  console.log("chef added");
  
  this.Route.navigate(["tableChef"]) 
})

 

    localStorage.setItem("chefId",JSON.stringify(chefId+1));
   // this.Route.navigate(["chefs"])  

    }
  
  }
getChefById(){

this.chefService.getChefById(this.id).subscribe((res)=>
{
  console.log("here into get",res);
  this.chef=res;
})
}
}
