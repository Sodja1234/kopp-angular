import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListArticleComponent } from './list-article/list-article.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kopp-web';
}
