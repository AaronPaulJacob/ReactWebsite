import React from "react"
import "./TodoItem.css"

class TodoItem extends React.Component{
    render(){
        // console.log(this.props)
        return ( 
          <div>
            <input 
               type="checkbox" 
               checked={this.props.data.isCompleted}
               onChange={()=>{ this.props.changeTodo(this.props.data.id)}} />
            <p>{this.props.data.data}</p>
            <hr />
        </div>)
    }
}
export default TodoItem;