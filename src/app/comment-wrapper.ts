import { Comment } from "./comment";

export class CommentWrapper {
    private constructor(
        public comments: Comment[],
        public count: number,
        public totalPages: number,
        public pageSize: number
    ) {}

    static fromJson(json: any): CommentWrapper {
        const comments: Comment[] = (json.results as any[]).map(
          (comment: any): Comment => Comment.fromJson(comment)
        );
        const count = json.count;
        const totalPages = json.total_pages;
        const pageSize = json.page_size;
        const commentWrapper: CommentWrapper = new CommentWrapper(
          comments,
          count,
          totalPages,
          pageSize
        );
        return commentWrapper;
      }
    
}
