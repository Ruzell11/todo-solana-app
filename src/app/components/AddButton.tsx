'use client'
import { useState } from "react"
import { useTodo } from "../store/TodoProvider";
import { TodoContextType } from "../common/type";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function
    AddButton() {
    const [todoName, setTodoName] = useState<string>('');
    const { handleAddTodoItem } = useTodo() as TodoContextType;


    const handleSubmit = () => {
        handleAddTodoItem(todoName)
        setTodoName('');
    }

    return (
        <section className="flex gap-2 justify-between items-center w-[100%]">
            <div className="flex gap-2">
                <button className="text-white flex 
        bg-slate-400 h-[40px] justify-center items-center w-100 p-5 rounded-md whitespace-nowrap"
                    onClick={() => handleSubmit()}>
                    Add To do
                </button>
                <input value={todoName} placeholder="Add todo" className="p-2 rounded-md bg-slate-300 w-[100%]" onChange={(e) => setTodoName(e.target.value)} required />
            </div>

            <WalletMultiButton style={{}} />
        </section>
    )
}