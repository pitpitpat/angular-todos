import { Tag } from './tag';

export class Todo {
  todo_id: number;
  summary: string;
  description: string;
  tags: Tag[];
}
