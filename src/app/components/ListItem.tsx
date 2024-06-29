'use client'
import { TodoContextType } from "../common/type";
import { useTodo } from "../store/TodoProvider"

export default function ListItem() {
    const { todoItem } = useTodo() as TodoContextType;
    return (
        <ul className="border-b border-t border-b-slate-300 w-[100%] py-3">
            {todoItem.length < 1 ? (
                <li className="text-white">No items available</li>
            ) : (
                todoItem.map((item, index) => (
                    <li key={index} className="text-white">{item}</li>
                ))
            )}
        </ul>
    )
}