import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent, NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles!: Article[];

  ngOnInit() {
    this.articles =[
      {
        id: 1,
        title: 'Angular',
        slug: 'angular',
        content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',
        auteur: 'John Doe',
        photo: 'https://angular.io/assets/images/logos/angular/angular.svg',
        created_at: '19/03/2025',
        nb_comments: 5,
        categories: ['Angular', 'Frontend', 'Framework'],
      },
      {
        id: 1,
        title: 'Angular',
        slug: 'angular',
        content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',
        auteur: 'John Doe',
        photo: 'https://angular.io/assets/images/logos/angular/angular.svg',
        created_at: '19/03/2025',
        nb_comments: 5,
        categories: ['Angular', 'Frontend', 'Framework'],
      }
    ];
  }
}
