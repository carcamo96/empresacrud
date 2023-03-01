import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ListarComponent } from './pages/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    CrearComponent,
    ListarComponent,
  ],
  exports: [
    CrearComponent,
    ListarComponent,
    FormsModule
  ]
})
export class AppModule { }
