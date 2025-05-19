import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { ArtistListComponent } from './pages/artists/artist-list/artist-list.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { GenreEditComponent } from  './components/genre-edit/genre-edit.component';
import { GenreListComponent } from './pages/genres/genre-list/genre-list.component';

const routes: Routes = [
  // Öffentlicher Login-Bereich
  { path: 'auth/login', component: LoginComponent },

  // Geschützter Bereich mit Dashboard und Unterseiten
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'artists', component: ArtistListComponent, canActivate: [AuthGuard] },
  { path: 'artists/edit/new', component: ArtistEditComponent, canActivate: [AuthGuard] },
  { path: 'artists/edit/:id', component: ArtistEditComponent, canActivate: [AuthGuard] },
  { path: 'genres', component: GenreListComponent, canActivate: [AuthGuard] },
  { path: 'genres/edit/new', component: GenreEditComponent, canActivate: [AuthGuard] },
  { path: 'genres/edit/:id', component: GenreEditComponent, canActivate: [AuthGuard] },

  // Redirect von leerem Pfad auf Dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Fallback bei ungültiger URL
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
