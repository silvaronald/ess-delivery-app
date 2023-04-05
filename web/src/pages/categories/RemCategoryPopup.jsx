import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const RemCategoryPopup = (props) => {
    async function RemCategory () {
        await fetch(`http://localhost:3001/categories/${props.category}`, {
            method: "DELETE"
        })
    }

    return (
        <Modal
        show={props.show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton {...props}>
            <Modal.Title id="contained-modal-title-vcenter">
            Remover categoria
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Tem certeza que deseja remover essa categoria? A ação é permanente.
        </Modal.Body>
        <Modal.Footer>
            <Button className='btn-secondary' onClick={props.onHide}>Cancelar</Button>
            <Button className='btn-danger' onClick={() => {
                RemCategory()
                props.onHide()
            }}>Excluir</Button>
        </Modal.Footer>
        </Modal>
    );
}