import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "pacientes", loadComponent: () => import('./paciente/paciente').then(x => x.PacienteComponent) },
    { path: "calculadora", loadComponent: () => import('./calculadora/calculadora').then(x => x.Calculadora)},
];
