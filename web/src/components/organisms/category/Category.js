import './Category.css'
import SecondaryButton from '../../atoms/secondary-button/SecondaryButton.js'
function Category (props) {
  return (
  <div className='category-area'>
    <div className='category-header'>
      <p className='category-name'>{props.categoryName}</p>
      <SecondaryButton buttonContent='Adicionar item'></SecondaryButton>
    </div>
    <div className='category-labels'>
      <p className='category-item-name'>Item</p>
      <p className='category-item-description'>Descrição</p>
      <p className='category-item-price'>Valor</p>
    </div>
    <div>
      {/* TO DO: add itens */}
    </div>
  </div>
  )
}

export default Category;