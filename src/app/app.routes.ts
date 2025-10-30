import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ViewPostComponent } from './blog/view-post/view-post.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { AdminComponent } from './admin/admin.component';
import { AdminblogComponent } from './admin/adminblog/adminblog.component';
import { AdminprojectsComponent } from './admin/adminprojects/adminprojects.component';
import { AdminresourcesComponent } from './admin/adminresources/adminresources.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'project/:id', component:ProjectViewComponent},
  {path:'blog', component:BlogComponentComponent},
  {path:'blog/post/:id', component:ViewPostComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin/blog', component:AdminblogComponent},
  {path:'admin/projects', component:AdminprojectsComponent},
  {path:'admin/resources', component:AdminresourcesComponent},
];
