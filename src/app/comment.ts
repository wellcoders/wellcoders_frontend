import { User } from "./user";

export class Comment {
    private constructor(
        public pk: number,
        public content: string,
        public post: number,
        public owner: User,
        public created_at: Date
    ) {}
    
    static fromJson(json: any): Comment {
      return new Comment(
        json.pk,
        json.content,
        json.post,
        json.owner,
        json.created_at
      );
    }
  
    static fromJsonToList(json: any): Comment[] {
      return (json.results as any[]).map((comment: any): Comment => Comment.fromJson(comment));
    }
  }

