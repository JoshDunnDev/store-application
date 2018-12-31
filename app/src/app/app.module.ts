import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule, 
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
        path: 'store/sign-in', 
        component: SigninComponent
      },
      {
        path: 'store/register', 
        component: RegisterComponent
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
        component: ShortsComponent,
        //Admin Auth Guard Services
        // canActivate: [AuthGuardService, AdminAuthGuardService]
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
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    SigninComponent,
    RegisterComponent,
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
