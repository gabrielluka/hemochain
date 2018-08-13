import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { PacienteComponent } from './pages/paciente/paciente.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { ServiceHttp } from './https/service';
import { BolsaComponent } from './pages/bolsa/bolsa.component';
import { DoadorComponent } from './pages/doador/doador.component';
/*import { BolsaModel, RegistroPacienteBolsaModel, 
         RegistroDoacaoModel, PacienteModel, 
         DoadorModel, DoacaoModel } from './model/ativos';*/

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PacienteComponent,
    DoacaoComponent,
    BolsaComponent,
    DoadorComponent
    /*BolsaModel,
    DoacaoModel,
    DoadorModel,
    PacienteModel,
    RegistroDoacaoModel,
    RegistroPacienteBolsaModel*/

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ServiceHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
