import { Button } from 'react-bootstrap';
import './PrimaryButton.css'

function PrimaryButton(props) {
  return (
    <div>
      <button onClick={props.onClick} className='primary-button' data-testid={props.testid}>{props.buttonContent}</button>
    </div>
  )
}

export default PrimaryButton






