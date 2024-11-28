import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/create/create.component';
import { InboxComponent } from './pages/inbox/inbox.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '',pathMatch: 'full'}
];
