export interface Article {
  id: number,
  title: string,
  slug: string,
  content: string,
  auteur: string,
  photo: string,
  created_at: string,
  nb_comments: number,
  categories: string[],
}
