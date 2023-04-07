import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CategoriesHome from '../src/pages/categories/CategoriesHome.jsx';
import fetch from 'jest-fetch-mock';


describe("CategoriesHome", () => {
  
  afterEach(() => {
    fetch.resetMocks();
    cleanup();
  });



  it("Create category successfully", async () => { 
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const addButton = getByTestId("add-category-button");
      fireEvent.click(addButton);
      const input = getByTestId("add-category-input");
      fireEvent.change(input, { target: { value: "Test" } });
      const confirmButton = getByTestId("create-category-button");
      fireEvent.click(confirmButton);
      //procura na lista o elemento com o texto "Test"
      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");
  });

  it("Create category with empty name", async () => {
    const { getByTestId, findByText } = render(<CategoriesHome />);
    const addButton = getByTestId("add-category-button");
    fireEvent.click(addButton);
    const input = getByTestId("add-category-input");
    fireEvent.change(input, { target: { value: "" } });
    const confirmButton = getByTestId("create-category-button");
    fireEvent.click(confirmButton);
    //procura na tela o elemento com o texto "Nome da categoria não pode ser vazio"
    const element = await findByText("Please enter a category name!");
    expect(element.textContent).toBe("Please enter a category name!");
  });

  it("Cancel create category", async () => {
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const addButton = getByTestId("add-category-button");
      fireEvent.click(addButton);
      const input = getByTestId("add-category-input");
      fireEvent.change(input, { target: { value: "Test" } });
      const cancelButton = getByTestId("cancel-button");
      fireEvent.click(cancelButton);
      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");
  });

  it("Cancel delete category", async () => {
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");
      const deleteButton = getByTestId('remove-category-button');
      fireEvent.click(deleteButton);
      const cancelButton = getByTestId("cancel-delete-button");
      fireEvent.click(cancelButton);
      const element2 = await findByText("Test");
      expect(element2.textContent).toBe("Test");
  });

  it("Delete category successfully", async () => {
      const { getByTestId, findByText } = render(<CategoriesHome />);
      const element = await findByText("Test");
      expect(element.textContent).toBe("Test");
      const deleteButton = getByTestId('remove-category-button');
      fireEvent.click(deleteButton);
      const confirmButton = getByTestId("confirm-delete-button");
      fireEvent.click(confirmButton);
      const deletedElement = await findByText("Test");
      expect(deletedElement.textContent).not.toBe("Test");

      console.log(deletedElement);
      
  });
});