import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../services/login/auth.service';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MyHammerConfig } from '../config/hammer-config';

export const appProviders = [
    provideHttpClient(),
    AuthService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
];