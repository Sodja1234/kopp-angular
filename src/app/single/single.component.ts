import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  imports: [ ],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})

export class SingleComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  article!: Article
  service:ArticleService = inject(ArticleService)
  articleId = -1
  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id') );
    this.article = this.service.getOne(this.articleId)
  }
}
