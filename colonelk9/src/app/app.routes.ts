import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProcessComponent } from './process/process.component';
import { CommunityComponent } from './community/community.component';
import { VeteranAssistanceComponent } from './veteran-assistance/veteran-assistance.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'process', component: ProcessComponent},
    {path: 'community', component: CommunityComponent},
    {path: 'veteran-assistance', component: VeteranAssistanceComponent}
];
