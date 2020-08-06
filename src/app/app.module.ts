import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {SlotMachineComponent} from './pages/slot-machine/slot-machine.component';
import {SpinnerComponent} from './pages/spinner/spinner.component';

@NgModule({
  declarations: [
    SlotMachineComponent,
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [SlotMachineComponent],
  exports: [HttpClientModule]
})
export class AppModule {
}
