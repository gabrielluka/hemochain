import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { DoacaoComponent } from './pages/doacao/doacao.component';
import { BolsaComponent } from './pages/bolsa/bolsa.component';
import { DoadorComponent } from './pages/doador/doador.component';

const routes: Routes =[
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'paciente',   component: PacienteComponent },
    { path: 'doacao',     component: DoacaoComponent },
    { path: 'doador',     component: DoadorComponent },
    { path: 'bolsa',     component: BolsaComponent },

    { path: '',           redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
