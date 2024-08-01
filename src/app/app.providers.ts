import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../services/login/auth.service';

export const appProviders = [
    provideHttpClient(),
    AuthService
];