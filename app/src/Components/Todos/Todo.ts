export interface Todo {
    _id?: string;
    todo: string;
    done: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }