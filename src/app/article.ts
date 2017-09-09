export class Article {

  private constructor(
    public id: number,
    public title: string,
    public intro: string,
    public body: string) { }

  static fromJson(json: any): Article {
    return new Article(
      json.id,
      json.title,
      json.intro,
      json.body
    );
  }

  static fromJsonToList(json: any): Article[] {
    return (json as any[]).map((post: any): Article => Article.fromJson(post));
  }

}
