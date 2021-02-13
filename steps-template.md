# Steps for understanding and using Typescript

<details>
  <summary>Terms and Explanations</summary>
  
  ## Typescript has 12 basic types
  https://www.typescriptlang.org/docs/handbook/basic-types.html
<ol>

1.  **boolean** -> true or false
2.  **number** -> just a number
3.  **string** -> just a string
4.  **array** -> [1, 2, 3]
5.  **object** -> non-primitive types
6.  **undefined** -> unassigned value
7.  **null** -> something doesn't exist
8.  **any** -> dynamic type like (like normal js)
9.  **void** -> a function that doesn't return
10. **never** function that never returns
11. **tuple** -> [string, number, number] (multiple types inside an array)
12. **enum** -> outcome {win, lose, draw} (0, 1, 2)

</ol>

## Typscript compilation

-   Typescript code compiles to => Javascript and is easily read by => the Browser

</details>
<br/>

<details>
  <summary>Set Up</summary>
  
  ## Creating a new React App
1. Create React App with typescript as a template

    *this will make a tsconfig.json file for you*

    ```bash

    npx create-react-app my-app --template typescript

    ```

---

2. We want to add a type to the App (or any other components that render JSX) so that Typescript knows what it is returning (usually a JSX.Element for App)

    ```javascript
    function App():JSX.Element {
        return (
            ...
    ```

---

</details>

<details open>
  <summary>Build Out</summary>
  
  ## Subheading

1. Starting with useState, we want to create the useState hook instance and add the type that it will be

    ```javascript
    // the type below is defined with the string keyword inside the karats
    const [value, setValue] = useState<string>('')

    // the type below is defined as an array of the todo objects
    const [todos, setTodos] = useState<ITodo[]>([])
    ```

    - the type is defined with the string keyword and ITodo interface inside the carats

---

2. We can create types and interfaces above the function component of our .tsx files

    ```typescript
    // this type below is for a form element
    type FormElem = React.FormEvent<HTMLFormElement>

    // this interface below is for a to do list object
    interface ITodo {
        text: string
        complete: boolean
    }
    ```

    - a type references another type (vanilla JS)
    - an interface creates a completely new type
    - you can extend interfaces but not types

---

3. If we wanted to extend an interface we can extend it like a class

    ```javascript
    interface ITodo2 extends ITodo {
        tags: string[]
    }   
    ```

---

4. Now we'll create a simple form with an input that will update our to do list

    ```javascript
    <h1>To Do List</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' value={value} required onChange={e => setValue(e.target.value)}/>
        <button type='submit'>Add To do</button>
    </form>
    ```

---

5. Next we'll add the functions for the new to do's to our list

    ```javascript
    // the input for this function is a string
    // there is no return on this function so we need to add a void to it
    const addTodo = (text:string) :void => {
        // the new to do that is added will be an interface of ITodo object that we already declared
        // we will also need to use the spread operator to add it to the list we have
        const newTodos: ITodo[] = [...todos, {text, complete: false}]
        setTodos(newTodos)
    }
        
    const handleSubmit = (e:FormElem):void => {
        e.preventDefault()
        addTodo(value)
        setValue('')
    }
    ```


---

6. Finally for this to do list we can add a section and map out our to do list

    ```javascript
    <div>
        {todos.map((todo: ITodo, index: number) => {
            return (
                <div key={index}>
                    <p>{todo.text}</p>
                </div>
            )
        })}
    </div>
    ```

---

7. We can then add a button to the list and a function that will change the state of its completion and change the text rendered inside the button

    ```javascript
    const completeTodo = (index: number):void => {
            const newTodos: ITodo[] = [...todos]
            newTodos[index].complete = !newTodos[index].complete
            setTodos(newTodos)
        }
    ...

    <div key={index}>
        <p>{todo.text}</p>
        <button onClick={() => completeTodo(index)}>
            {todo.complete ? 'Incomplete' : 'Complete'}
        </button>
    </div>
    ```

---

8. We'll finish up by adding some styling for the user

    ```javascript
    <span style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
	<p>{todo.text}</p>
    </span>
    ```

---

</details>

<details>
  <summary>Extra Functionality</summary>
  
Coming Soon
  ## Subheading
1. Step one for Bash

    ```bash

    $mkdir project

    ```
    * things to note

---

2. Step two for Javascript

    ```javascript
    const str = 'The quick brown fox jumps over the lazy dog.';
    ```

    - things to note

---

3. Step three for Python

    ```python

    str = 'The quick brown fox jumps over the lazy dog.'

    ```

    - things to note

---

4. Step four for Java

    ```java

    String str = 'The quick brown fox jumps over the lazy dog.';

    ```

    - things to note

---

</details>
<br/>

<details>
  <summary>Extra Section</summary>
  
  ## If Necessary
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>
