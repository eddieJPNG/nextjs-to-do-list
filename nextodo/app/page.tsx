'use client'

import { useEffect, useState } from "react";
import { Todo } from "@/types";

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) {
      try {
        setTodos(JSON.parse(stored))
      } catch {
        setTodos([]);
      }
    }
  }, []);

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
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-white bg-black"> To-Do List</h1>
      <p> Estado central carregado. Proximas fases vão adicionar os componentes</p>
    </div>
  )


}