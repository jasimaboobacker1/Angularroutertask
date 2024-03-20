import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'Services',
        component:ServicesComponent
    },
    {
        path:'company',
        component:CompanyComponent
    },
    {
        path:'career',
        component:CareerComponent
    }, {
        path:'blog',
        component:BlogComponent
    },

];
