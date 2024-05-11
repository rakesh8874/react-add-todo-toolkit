import { useSelector, useDispatch } from "react-redux";
import {removeTodo} from '../store/todoSlice'

export default function Todos(){
    const todos = useSelector((state)=state.todos)
    const dispatch = useDispatch()

    return(
        <>
        <div>
            Todos
        </div>
        {
            todos.map((todo)=>{
                <div key={todo.id}>
                    <div>{todo.text}</div>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>Remove</button>
                </div>
            })
        }
        </>
    )

}
