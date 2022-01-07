import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { JoinUsComponent } from './components/join-us/join-us.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'join-us', component: JoinUsComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);