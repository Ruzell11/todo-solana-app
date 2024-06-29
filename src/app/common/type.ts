export interface TodoContextType {
    todoItem: string[];
    handleAddTodoItem: (todoName: string) => void;
}