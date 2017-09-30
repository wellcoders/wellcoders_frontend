import { User } from "./user";
import { Category } from "./category";
import { Article } from "./article";

export class ArticleWrapper {
  static latestList: string = "latest";
  static authorList: string = "author";
  static categoryList: string = "category";
  private constructor(
    public articles: Article[],
    public count: number,
    public totalPages: number,
    public pageSize: number
  ) {}

  static fromJson(json: any): ArticleWrapper {
    const articles: Article[] = (json.results as any[]).map(
      (article: any): Article => Article.fromJson(article)
    );
    const count = json.count;
    const totalPages = json.total_pages;
    const pageSize = json.page_size;
    const articleWrapper: ArticleWrapper = new ArticleWrapper(
      articles,
      count,
      totalPages,
      pageSize
    );
    return articleWrapper;
  }
}
