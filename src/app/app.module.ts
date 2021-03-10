import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkingComponent } from './working/working.component';
import { PanelComponent } from './panel/panel.component';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ReccomendedComponent } from './reccomended/reccomended.component';
import { FormsModule } from '@angular/forms';
import { Quote } from '@angular/compiler';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
    PanelComponent,
    QuoteComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    ReccomendedComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 
        '',
        component: HomeComponent},
        {path: 
          'products/:page/:size',
          component: ProductListComponent},
          {path:
            'login/:username/:password',
            component: LoginComponent  },
            {path:
              'login',
              component: LoginComponent  },
            {path:
              'reccomended',
              component: ReccomendedComponent  },
              
            ]),
    BrowserModule,
    FormsModule  
],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
