import { SearchTextService } from './services/searchtext.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { JacketsComponent } from './jackets/jackets.component';
import { ShortsComponent } from './shorts/shorts.component';
import { PantsComponent } from './pants/pants.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { ProductsService } from './services/products.service';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component'; 

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot([
      { 
        path: '',   
        redirectTo: 'store', 
        pathMatch: 'full' 
      },
      {
        path: 'store', 
        component: HomeComponent
      },
      {
        path: 'store/t-shirts', 
        component: TShirtsComponent
      },
      {
        path: 'store/jackets', 
        component: JacketsComponent
      },
      {
        path: 'store/shorts', 
        component: ShortsComponent
      },
      {
        path: 'store/pants', 
        component: PantsComponent
      },
      {
        path: 'store/search/:searchText', 
        component: SearchComponent
      },
      {
        path: '**', 
        component: NotFoundComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TShirtsComponent,
    JacketsComponent,
    ShortsComponent,
    PantsComponent,
    NotFoundComponent,
    ProductFilterPipe,
    SearchFilterPipe,
    SearchComponent,
  ],
  providers: [
    ProductsService,
    SearchTextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
