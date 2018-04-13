import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardComponent } from './components/card/card.component';

import { ApiService } from './services/api.service';
import { SearchComponent } from './components/search/search.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CardComponent,
    SearchComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
      {path: 'list', component: HotelListComponent},
    ]),
    HttpClientModule,
    MyDatePickerModule,
    NouisliderModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
