import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { MenuComponent } from './menu/menu.component';
import { ChefsComponent } from './chefComponent/chefs/chefs.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReviewComponent } from './review/review.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { InformationComponent } from './information/information.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { ElementblogComponent } from './elementblog/elementblog.component';
import { AddChefComponent } from './chefComponent/add-chef/add-chef.component';
import { ChefComponent } from './chefComponent/chef/chef.component';
import { TableChefComponent } from './chefComponent/table-chef/table-chef.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    VideoComponent,
    MenuComponent,
    ChefsComponent,
    ReservationComponent,
    ReviewComponent,
    ExclusiveComponent,
    InformationComponent,
    BannerComponent,
    ContactComponent,
    BlogComponent,
    SingleblogComponent,
    ElementblogComponent,
    AddChefComponent,
    ChefComponent,
    TableChefComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
