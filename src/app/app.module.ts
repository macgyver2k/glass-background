import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoViewComponent } from './demo-view/demo-view.component';
import { AutoImageDirective } from './auto-image.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RevealDirective } from './reveal.directive';

@NgModule({
   declarations: [
      AppComponent,
      DemoViewComponent,
      AutoImageDirective,
      RevealDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
