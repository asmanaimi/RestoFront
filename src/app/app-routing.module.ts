import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { AddChefComponent } from './chefComponent/add-chef/add-chef.component';
import { ChefsComponent } from './chefComponent/chefs/chefs.component';
import { TableChefComponent } from './chefComponent/table-chef/table-chef.component';
import { ContactComponent } from './contact/contact.component';
import { ElementblogComponent } from './elementblog/elementblog.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SingleblogComponent } from './singleblog/singleblog.component';


const routes: Routes = [
  {path:"",component :HomeComponent},
  {path:"about",component :AboutComponent},
  {path:"menu",component :MenuComponent},
{path:"chefs",component :ChefsComponent},
{path:"addChef",component :AddChefComponent},
{path:"addChef/:id",component :AddChefComponent},
{path:"tableChef",component :TableChefComponent},

{path:"book",component :ReservationComponent},
{path:"contact",component :ContactComponent},
{path:"blog",component :BlogComponent},
{path:"singleblog",component :SingleblogComponent},
{path:"elementblog",component :ElementblogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
