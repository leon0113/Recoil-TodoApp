import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { filterKeyAtom } from "../store/atoms/todo";

function TodoFilter() {
    const [filterWord, setFilterWord] = useState("");
    const setFilterKey = useSetRecoilState(filterKeyAtom);

    const handleSearch = () => {
        setFilterKey(filterWord);
    };

    const handleClearFilter = () => {
        setFilterKey("")
        setFilterWord("");
    }

    return (
        <div>
            <h3>TodoFilter</h3>
            <input type="text" placeholder="filter word" value={filterWord} onChange={e => setFilterWord(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClearFilter}>clear</button>
        </div>
    )
}

export default TodoFilter