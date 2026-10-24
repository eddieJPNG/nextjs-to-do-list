'use client'

import { useState } from "react"
import { Plus } from "lucide-react"


interface TodoInputProps {
    onAdd: (text: string) => void;
}

export default function TodoInput( { onAdd }: TodoInputProps) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedText = text.trim()

        if (!trimmedText) {
            return;
        }

        onAdd(trimmedText);
        setText('')
    }

    const trimmedText = text.trim()

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nova Tarefa"
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button type="submit"
                className=" px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                disabled={!trimmedText}
            >

                <Plus size={18} />
                <span>Adicionar</span>
                
                
            </button>
        </form>
    )




}