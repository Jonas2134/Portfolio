import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },

    { path: 'about-me', component: MainContentComponent, data: { scrollTo: 'about-me' } },
    { path: 'skills', component: MainContentComponent, data: { scrollTo: 'skills' } },
    { path: 'projects', component: MainContentComponent, data: { scrollTo: 'projects' } },
    { path: 'comments', component: MainContentComponent, data: { scrollTo: 'comments' } },
    { path: 'contact-me', component: MainContentComponent, data: { scrollTo: 'contact-me' } },

    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' },
];
