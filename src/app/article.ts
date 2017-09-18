import { User } from "./user";
import { Category } from "./category";

export class Article {
  private constructor(
    public id: number,
    public title: string,
    public summary: string,
    public body: string,
    public media: string,
    public publicationDate: Date,
    public category: Category,
    public owner: User
  ) {}

  static fromJson(json: any): Article {
    return new Article(
      json.id,
      json.title,
      json.summary,
      json.body,
      json.media,
      json.publish_date,
      json.category,
      json.owner
    );
  }

  static fromJsonToList(json: any): Article[] {
    return (json as any[]).map((post: any): Article => Article.fromJson(post));
  }
}
