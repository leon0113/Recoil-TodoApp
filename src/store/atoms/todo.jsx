import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: []
});

export const filterKeyAtom = atom({
    key: "filterKeyAtom",
    default: ""
})



export const filterTodoSelector = selector({
    key: "filterTodoSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const filterKey = get(filterKeyAtom);
        const newTodo = todos.filter((todo) => todo.title.includes(filterKey) || todo.description.includes(filterKey));
        // console.log("new: ", newTodo);

        return [...newTodo];
    }
})