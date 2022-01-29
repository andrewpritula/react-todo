import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

function Form({todos, setTodos, status, setStatus}){
    const [inputText, setInputText] = useState('');

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const inputSubmitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, isCompleted: false, id: uuidv4()}]);
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form onSubmit={inputSubmitHandler}>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText}/>
            <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
        </form>
    );
}

export default Form;
