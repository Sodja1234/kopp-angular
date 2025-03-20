import { Routes } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { CategoryComponent } from './category/category.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [

  {
    path: '',
    component: ListArticleComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'articles/:id',
    component: SingleComponent
  }
];
