import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ProjectViewComponent } from './features/projects/project-view/project-view.component';
import { BlogHomeboard } from './features/blog/blog-component/blog-component.component';
import { ViewPostComponent } from './features/blog/view-post/view-post.component';
import { AdminComponent } from './features/admin/admin.component';
import { AdminblogComponent } from './features/admin/adminblog/adminblog.component';
import { AdminprojectsComponent } from './features/admin/adminprojects/adminprojects.component';
import { AdminresourcesComponent } from './features/admin/adminresources/adminresources.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'project/:id', component:ProjectViewComponent},
  {path:'blog', component:BlogHomeboard},
  {path:'blog/post/:id', component:ViewPostComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/blog', component:AdminblogComponent},
  {path:'admin/projects', component:AdminprojectsComponent},
  {path:'admin/resources', component:AdminresourcesComponent},
];
