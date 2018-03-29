import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PacienteComponent } from './paciente/paciente.component';
import { DoacaoComponent } from './doacao/doacao.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'paciente',   component: PacienteComponent },
    { path: 'bolsa',          component: DoacaoComponent },

    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
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
