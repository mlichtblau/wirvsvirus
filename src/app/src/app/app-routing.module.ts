import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then( m => m.QuestionnairePageModule)
  },
  {
    path: 'patient/overview',
    loadChildren: () => import('./patient/patient-overview/patient-overview.module').then( m => m.PatientOverviewPageModule)
  },
  {
    path: 'patient/queue-confirmation',
    loadChildren: () => import('./patient/patient-queue-confirmation/patient-queue-confirmation.module').then( m => m.PatientQueueConfirmationPageModule)
  },
  {
    path: 'patient/countdown',
    loadChildren: () => import('./patient/patient-countdown/patient-countdown.module').then( m => m.PatientCountdownPageModule)
  },
  {
    path: 'patient/testcenter-infos',
    loadChildren: () => import('./patient/patient-testcenter-infos/patient-testcenter-infos.module').then( m => m.PatientTestcenterInfosPageModule)
  },
  {
    path: 'patient/change-appointment',
    loadChildren: () => import('./patient/patient-change-appointment/patient-change-appointment.module').then( m => m.PatientChangeAppointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
