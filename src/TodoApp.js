import React from "react"
import "./TodoApp.css"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

class TodoApp extends React.Component{
    constructor(){
        super()
        this.state={
            todos : todosData
        }
        this.updateTodo= this.updateTodo.bind(this)
    }

    updateTodo(val){
        console.log("Onchange called on id :",val);
        
        this.setState( (prevState)=>{
            const updatedArray= prevState.todos.map((todo) =>{
                                                    if(todo.id === val)
                                                    {   
                                                        todo.isCompleted=!todo.isCompleted;
                                                    }
                                                    return todo;
                                                });

                return { todos:updatedArray }  // returning an object
            
        }
        )
    }


    render(){
        const todoList= this.state.todos.map((todo)=>{
            return <TodoItem key={todo.id} changeTodo={this.updateTodo} data={todo} />
        })
        return (<div>
            {todoList}
        </div>)
    }
}

export default TodoApp;