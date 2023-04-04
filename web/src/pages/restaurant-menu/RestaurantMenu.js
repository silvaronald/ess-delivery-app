import React from 'react';
import PrimaryButton from '../../components/atoms/primary-button/PrimaryButton.js';
import Form from 'react-bootstrap/Form';
import CategoryItem from '../../components/molecules/category-item/CategoryItem.js';
import Category from '../../components/organisms/category/Category.js';
import * as Icon from 'react-bootstrap-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './RestaurantMenu.css'

function RestaurantMenu() {
  const url = window.location.href
  return (
    <div className='restaurant-menu-root'>
      <div className='header'>
        <div className='title-description'>
          <h1>Cardápio</h1>
          <p>Gerencie por essa página todos os itens e categorias cadastrados no seu restaurante.</p>
        </div>
        <CopyToClipboard className='copy-button' text={url}>
          <button><Icon.ShareFill color='red' className='share-link'/></button>
        </CopyToClipboard>
      </div>
      <div className='add-category-area'>
        <Form>
          <Form.Group className="mb-3" controlId="formAddCategory">
            <Form.Control placeholder="Digite categoria a ser adicionada" />
          </Form.Group>
          <PrimaryButton buttonContent="Adicionar categoria" type="submit">
          </PrimaryButton>
        </Form>
      </div>
      <div className='categories-group'>
        {/* TO DO: add more categories */}
        <Category categoryName='Salgado'>
          <CategoryItem 
            img='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
            description='Comida gostosa'
            price='10'
          ></CategoryItem>
        </Category>
      </div>
    </div>
  );
}

export default RestaurantMenu;