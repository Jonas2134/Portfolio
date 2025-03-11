import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent, data: { active: 'Main', scrollTo: '' } },

    { path: 'about-me', component: MainContentComponent, data: { active: 'Main', scrollTo: 'about-me' } },
    { path: 'skills', component: MainContentComponent, data: { active: 'Main', scrollTo: 'skills' } },
    { path: 'projects', component: MainContentComponent, data: { active: 'Main', scrollTo: 'projects' } },
    { path: 'comments', component: MainContentComponent, data: { active: 'Main', scrollTo: 'comments' } },
    { path: 'contact-me', component: MainContentComponent, data: { active: 'Main', scrollTo: 'contact-me' } },

    { path: 'imprint', component: ImprintComponent, data: { active: 'Imprint' } },
    { path: 'privacy', component: PrivacyPolicyComponent, data: { active: 'Privacy' } },

    { path: '**', redirectTo: '' },
];
