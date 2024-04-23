import { useRecoilValue } from "recoil";
import { filterTodoSelector } from "../store/atoms/todo";

export default function TodoRenderer() {
    const filteredTodos = useRecoilValue(filterTodoSelector);
    return (<div>
        {
            filteredTodos.map(todo => (
                <div key={Math.random()}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
            ))
        }
    </div>)
}
