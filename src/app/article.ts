import { User } from "./user";
import { Category } from "./category";

export class Article {
  private constructor(
    public id: number,
    public pk: number,
    public title: string,
    public titleSlug: string,
    public summary: string,
    public content: string,
    public media: string,
    public publicationDate: Date,
    public category: Category,
    public owner: User,
    public numComments: number,
    public is_favorite: boolean = false,
    public status: string
  ) {}

  static fromJson(json: any): Article {
    return new Article(
      json.id,
      json.pk,
      json.title,
      json.title_slug,
      json.summary,
      json.content,
      json.media,
      json.publish_date,
      json.category,
      json.owner,
      json.num_comments,
      json.is_favorite,
      json.status
    );
  }

  static fromJsonToList(json: any): Article[] {
    return (json.results as any[]).map((article: any): Article => Article.fromJson(article));
  }
}
