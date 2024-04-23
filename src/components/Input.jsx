import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todo";


export default function Input() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const setTodo = useSetRecoilState(todoAtom);
    // const todos = useRecoilValue(todoAtom);

    const handleSubmit = () => {
        const newTodo = {
            title,
            description
        }
        setTodo(prevTodo => [newTodo, ...prevTodo]);
        setTitle("");
        setDescription("");
    }
    // console.log(todos);
    return <div>
        <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} /> <br />
        <input type="text" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} /> <br />
        <button onClick={handleSubmit}>Add</button>
    </div>
}