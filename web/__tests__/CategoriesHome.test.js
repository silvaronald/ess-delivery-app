import React from 'react';
import render from '@testing-library/react';
import { click } from '@testing-library/react';
import CategoriesHome from './../src/pages/categories/CategoriesHome';


describe('CategoriesHome', () => {
  it('deve criar uma nova categoria', () => {
    const { getByTestId } = render(<CategoriesHome />);
    const addCategoryButton = getByTestId('add-category-button');
    click(addCategoryButton);
    expect(getByTestId('category-input')).toBeInTheDocument();
  });
});
