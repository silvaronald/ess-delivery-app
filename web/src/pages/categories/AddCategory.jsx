import React from "react";
import { isInputNull } from "../../shared/functions/isInputNull";

export function AddCategory() {
    const [showForm, setShowForm] = React.useState(false);
    const [newCategory, setNewCategory] = React.useState("");
    const [warningMessage, setWarningMessage] = React.useState(null);
    const [currentCategories, setCurrentCategories] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/categories")
            .then(response => response.json())
            .then(data => {
                setCurrentCategories(data);
            });
    }, []);

    function handleNewCategoryChange(event) {
        setNewCategory(event.target.value);
    }

    function handleAddCategoryClick() {
        setShowForm(true);
    }

    function handleCancelClick() {
        setShowForm(false);
        setNewCategory("");
        setWarningMessage(null);
    }

    async function handleConfirmClick(event) {
        event.preventDefault();
        
        if (isInputNull(newCategory)) {
            setWarningMessage("All inputs must be filled!");
        } else if (
            currentCategories.filter(
                category => category.name === newCategory
            ).length > 0
        ) {
            setWarningMessage("There is already a category with that name!");
        } else {
            let category = { id: Date.now(), name: newCategory };

            await fetch("http://localhost:3001/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(category)
            });

            setShowForm(false);
            setNewCategory("");
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            <button onClick={handleAddCategoryClick}>Add category</button>
            {showForm && (
                <form onSubmit={handleConfirmClick}>
                    <label>
                        Category name:
                        <input
                            type="text"
                            value={newCategory}
                            onChange={handleNewCategoryChange}
                        />
                    </label>
                    <button type="button" onClick={handleCancelClick}>
                        Cancel
                    </button>
                    <button type="submit">
                        Confirm
                    </button>
                </form>
            )}
            {warningMessage && <p>{warningMessage}</p>}
        </div>
    );
}
