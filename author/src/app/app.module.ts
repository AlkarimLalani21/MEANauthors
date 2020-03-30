import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateComponent } from './homepage/update/update.component';
import { DetailsComponent } from './homepage/details/details.component';
import { CreateComponent } from './homepage/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UpdateComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
