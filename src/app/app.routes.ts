import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ProductListPopupComponent } from '../components/product-list-popup/product-list-popup.component';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { ContentComponent } from '../components/content/content.component';
import { DisclaimerComponent } from '../components/disclaimer/disclaimer.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { CategoriesComponent } from '../components/categories/categories.component';

export const routes: Routes = [

    {component: ContentComponent, path: 'content'},
    {component: AboutUsComponent, path: 'about-us'},
    {component: PrivacyPolicyComponent, path: 'privacy-policy'},    
    {component: DisclaimerComponent, path: 'disclaimer'},
    {component: ContactUsComponent, path: 'contact-us'},
    {component: CategoriesComponent, path: 'categories'},
    {path: '', component: ContentComponent},
    {path: '**', component: ContentComponent},

];
