'use client' // 👈 use it here

import React, { useState } from "react";

interface toDoItem {
    id: number;
    text: string;
    completed: boolean;
}

export const ToDo: React.FC = () => {
    const [todos, setTodos] = useState<toDoItem[]>([]);
    const [input, setInput] = useState<string>("")

    const handleClick = () => {
        if (input) {
            const newToDo: toDoItem = { id: todos.length + 1, text: input, completed: false }
            setTodos([...todos, newToDo]);
            setInput("");
        }
    }

    function excluir(indice: number) {
        setTodos((todo) => todo.filter((todo) => todo.id !== indice))
    }

    const completar = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };



    return (
        <div style={{
            width: "400px",
            height: "500px",
            border: "solid 1px black",
        }}>
            <h1>ToDo</h1>
            <input value={input} type="text" placeholder="Insira seu Todo" onChange={(e) => setInput(e.currentTarget.value)} />
            <button onClick={handleClick}>Add</button>
            <ul className="ToDoList" style={{
                textDecoration: "none",
                paddingTop: "8px"
            }}>
                {todos.map((todo) => (
                    <div key={todo.id}
                        className="ToDoItem"
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            backgroundColor: todo.completed ? "#1aff00" : "#ff0000",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            color: "white",
                            padding: "12px",
                            marginBottom: "6px"
                        }}>
                        <li key={todo.id}>{todo.text}</li>
                        <div className="buttons" style={{
                            display: "flex",
                            gap: "3px"
                        }}>
                            <button style={{
                                padding: "5px",
                                border: "none",
                                color: "white",
                                backgroundColor: "gray"
                            }} onClick={() => completar(todo.id)} >Completar</button>
                            <button style={{
                                padding: "5px",
                                border: "none",
                                color: "white",
                                backgroundColor: "gray"
                            }} onClick={() => excluir(todo.id)} >Excluir</button>
                        </div>
                    </div>
                ))
                }
            </ul >
        </div >
    )
}