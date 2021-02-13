import React, { useState } from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo {
    text: string;
    complete: boolean;
}


function App():JSX.Element {
    const [value, setValue] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([])
    
    const addTodo = (text:string): void => {
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }
    
    const handleSubmit = (e:FormElem): void => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

    const completeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeTodo = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
    <div className="App">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} required onChange={e => setValue(e.target.value)}/>
            <button type='submit'>Add To do</button>
        </form>
        <div>
            {todos.map((todo: ITodo, index: number) => {
                return (
                    <div key={index}>
                        <p>{todo.text}</p>
                        <button onClick={() => completeTodo(index)}>
                            {todo.complete ? 'Incomplete' : 'Complete'}
                        </button>
                        <button onClick={() => removeTodo(index)}>&times;</button>
                    </div>
                )
            })}
        </div>
    </div>
    );
}

export default App;
