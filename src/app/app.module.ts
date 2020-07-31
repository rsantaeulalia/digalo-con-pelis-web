import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { SlotMachineComponent } from './pages/slot-machine/slot-machine.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';

@NgModule({
  declarations: [
    SlotMachineComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [SlotMachineComponent]
})
export class AppModule { }
