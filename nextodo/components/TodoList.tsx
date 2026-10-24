'use client';

import { useState, useEffect } from "react";
import { Todo, FilterType } from "@/types";
import TodoItem from "./TodoItem";



interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoList( {todos, onToggle, onDelete}: TodoListProps ) {
    const [filter, setFilter] = useState<FilterType>('all');

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    })

    return (
        <div className=" space-y-4">
            {/* Buttons de filtros */}
            <button
             onClick={() => setFilter('all')}
             className={` px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
             }`}
            >
                Todas
            </button>

            <button
             onClick={() => setFilter('active')}
             className={` px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
             }`}
            >
                Pendentes
            </button>

            <button
             onClick={() => setFilter('completed')}
             className={` px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === 'all'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
             }`}
            >
                Concluidos
            </button>

            {/* Listas */}

            { filteredTodos.length === 0 ? (
            <p className=" text-center text-gray-500 text-sm py-8">
                Nenhuma tarefa encontrada
            </p> ) : (
                <div className=" space-y-2">
                    {
                        filteredTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={onToggle}
                                onDelete={onDelete}
                                />
                        ))
                    }
                </div>
            )
        } 

        </div>

    );

        
}