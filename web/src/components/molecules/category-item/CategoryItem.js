import DeleteButton from '../../atoms/delete-button/DeleteButton';
import './CategoryItem.css'

function CategoryItem (props) {
  return (
  <div className='category-item-area'>
    <img src={props.img} alt=''/>
    <p className='description'>{props.description}</p>
    <div className='price'>
        <p><span>R$</span>{props.price}</p>
    </div>
    <DeleteButton></DeleteButton>
  </div>
  )
}

export default CategoryItem;