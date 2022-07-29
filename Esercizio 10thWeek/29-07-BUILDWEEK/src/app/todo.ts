export interface Todo {
  id: number | Promise<any>;
  title: string;
  completed: boolean;
}
