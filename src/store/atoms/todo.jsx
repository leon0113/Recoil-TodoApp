import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: []
});

export const filterKeyAtom = atom({
    key: "filterKeyAtom",
    default: ""
})

export const filteredTodoAtom = atom({
    key: "filteredTodoAtom",
    default: []
})

export const filterTodoSelector = selector({
    key: "filterTodoSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const filterKey = get(filterKeyAtom);
        const filteredTodo = get(filteredTodoAtom)
        const newTodo = todos.filter((todo) => todo.title.includes(filterKey) || todo.description.includes(filterKey));
        // console.log("new: ", newTodo);
        return [...filteredTodo, ...newTodo];
    }
})