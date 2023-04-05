import React from "react";
import { AddCategory } from "./AddCategory";
import { RemCategoryPopup } from "./RemCategoryPopup";

export const CategoriesHome = () => {
    const [categories, setCategories] = React.useState([]);
    const [addItemToggle, setAddItemToggle] = React.useState(false);
    const [remItemToggle, setRemItemToggle] = React.useState([false, null]);

    React.useEffect(() => {
        fetch('http://localhost:3001/categories')
          .then(response => response.json())
          .then(data => {
            setCategories(data)});
    }, []);

    return (
        <div className="App">
            <AddCategory show={addItemToggle} onHide={() => setAddItemToggle(false)}/>
            <RemCategoryPopup show={remItemToggle[0]} category={remItemToggle[1]} onHide={() => setRemItemToggle(false)}/>
            {
            categories.map((category) => (
            <div key={category.id}>
                <li>{category.name}</li>
                <button onClick={() => setRemItemToggle([true, category.id])}>Remover</button>
            </div>
            ))
            }
        </div>
    );
}