'use client'
import { ReactNode, createContext, useContext, useState } from "react"
import { TodoContextType } from "../common/type";

const TodoContext = createContext({});

type Props = {
    children: ReactNode
}



export default function TodoProvider({ children }: Props) {
    const [todoItem, setTodoItem] = useState<string[]>([]);

    const handleAddTodoItem = (todoName: string) => {
        setTodoItem([...todoItem, todoName])
    }

    const context: TodoContextType = {
        todoItem,
        handleAddTodoItem
    }
    return (
        <TodoContext.Provider value={context}>
            {children}
        </TodoContext.Provider>
    )
}


export const useTodo = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};