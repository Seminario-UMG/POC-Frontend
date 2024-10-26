import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { OnlineBuyerComponent } from './shopping/buyer/online-buyer/online-buyer.component';
import { HistoryComponent } from './shopping/history/history/history.component';
import { TravelerComponent } from './delivery/traveler/traveler.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { QuoteRequestComponent } from './shopping/buyer/quote-request/quote-request.component';
import { CreateOrderComponent } from './shopping/buyer/create-order/create-order.component';
import { TravelerSelectorComponent } from './shopping/buyer/traveler-selector/traveler-selector.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'auth/profile', component: ProfileComponent },
  { path: 'auth/user-profile', component: UserProfileComponent },
  { path: 'shopping/buyer/online-buyer', component: OnlineBuyerComponent },
  { path: 'shopping/history/history', component: HistoryComponent },
  { path: 'delivery/traveler', component: TravelerComponent },
  { path: 'auth/reset-password', component: ResetPasswordComponent },
  { path: 'shopping/buyer/quote-request', component: QuoteRequestComponent },
  { path: 'shooping/buyer/create-order', component: CreateOrderComponent },
  { path: 'shopping/buyer/traveler-selector', component: TravelerSelectorComponent }
];

export const appRoutingProviders = [provideRouter(routes)];