import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'log-in', component: LoginComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '',pathMatch: 'full'}
];
