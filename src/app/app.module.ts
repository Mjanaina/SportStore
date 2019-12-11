import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from './store/store.module'
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }