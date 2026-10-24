'use client'

import { useEffect, useState } from "react";
import { Todo } from "@/types";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";



export default function Home() {

 const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("todos");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),

    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => 
      prev.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };

  return(
    <main className=" min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-2xl mx-auto">
        <div className=" bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className=" mb-6">
            <h1 className=" text-3xl font-bold text-gray-900 tracking-tight">
              Minhas tarefas
            </h1>
            <p className=" mt-2 text-sm text-gray-500">
              Organize seu dia com a sua To-Do List
            </p>
          </div>

          <TodoInput onAdd={addTodo} />

          <TodoList 
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            />


        </div>
      </div>
    </main>
  )


}