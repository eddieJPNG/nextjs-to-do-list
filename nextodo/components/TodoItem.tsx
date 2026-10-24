'use client'

import { Todo } from '@/types'
import { CheckCircle , Trash2 } from 'lucide-react'


interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem ( { todo, onToggle, onDelete}: TodoItemProps) {
    return (
        <div className=' flex items-center justify-between gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm'>
            <div className='flex items-center gap-3'>
                <button 
                    onClick={() => onToggle(todo.id)}
                    aria-label={todo.completed ? 'Marcar como pendente' : 'Marcar como concluído'}
                    className=' rounded-full p-1.5 transition-colors'
                    >
                     <CheckCircle
                        size={20}
                        className={`
                             ${todo.completed ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'}
                                 transition-colors
                                                 `}
                        
                        />

                </button>

                <span
                  className={`text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                >
                    {todo.text}
                </span>
            </div>

            <button
              onClick={() => onDelete(todo.id)}
              aria-label='Excluir Tarefa'
              className='text-gray-400 hover:text-red-500 transition-colors p-1.5'
            >
                <Trash2 size={18} />

            </button>
        </div>
    );
}