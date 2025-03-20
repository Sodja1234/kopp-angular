import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Monkey D. Luffy',
      slug: 'Le roi des pirates, ce sera moi!',
      content: 'est un pirate et le principal protagoniste du manga et anime One Piece. Luffy est le fils du chef de l\'Armée Révolutionnaire, Monkey D.Dragon, le petit- fils du célèbre héros de la Marine, Monkey D.Garp, le fils adoptif d\'une bandit des montagnes, Curly Dadan ainsi que le frère adoptif du défunt Portgas D. Ace et de Sabo',
      auteur: 'Franklin D. Kopp',
      photo: 'https://i.pinimg.com/736x/52/8f/5e/528f5ec81db23521b1fb0340134d843b.jpg',
      created_at: '19/03/2025',
      nb_comments: 5,
      categories: ['Manga', 'Anime'],
    },
    {
      id: 2,
      title: 'Gol D. Roger',
      slug: 'le roi des pirates',
      content: ' fut le précédent et unique Seigneur des pirates et l\'ancien propriétaire du trésor légendaire, le One Piece.Roger était le capitaine de L\'Équipage des Pirates Roger, seul équipage à avoir été jusqu\'au bout de Grand Line et a voir les îles de Lodestar et Laugh Tale.Il était aussi le père de Portgas D.Ace, enfant qu\'il a eu avec Portgas D. Rouge. Il a été exécuté il y a plus de 20 ans à Loguetown, sa ville natale',
      auteur: 'Franklin D. Kopp',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7A3pS_nnpmseuWr5GDQw7tQFAXRxyfS3vw&s',
      created_at: '19/03/2025',
      nb_comments: 5,
      categories: ['Manga', 'Anime'],
    }
  ];


  getAll(): Article[] {
    return this.articles;
  }

  getOne(id: number): Article {
    return this.articles.find(article => article.id === id)!;
  }

  constructor() { }
}
