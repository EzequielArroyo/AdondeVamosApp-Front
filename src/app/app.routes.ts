import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(c => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(c => c.RegisterComponent)
      },
      {
        path: '', // Ruta principal de Dashboard
       loadComponent: () => import('./features/main-layout/main-layout.component').then(c => c.MainLayoutComponent),
        children: [
          {
            path: 'home', // Ruta hija para Home
            loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
          },
          {
            path: 'profile', // Ruta hija para Profile
            loadComponent: () => import('./features/profile/profile.component').then(c => c.ProfileComponent)
          },
          {
            path: '**', // Redirecciona a 'home' por defecto si la ruta hija no existe
            redirectTo: 'home'
          }
        ]
      },
      {
        path: '**', // Redirecciona a 'login' si la ruta no es válida
        redirectTo: 'login'
      }
    
]
