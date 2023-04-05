import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//categories of items

let categories = []

export default function Categorias() {
    const [popupAdicionar, setPopupAdicionar] = useState(false);
    const [categoriesCopia, setCategoriesCopia] = useState([]);

    useEffect (() => {
        if (categories.length > 0) {
            setCategoriesCopia([...categories])
        }
        else {
            setCategoriesCopia([])
        }
    })
    return (
        <div className="App">
            <button onClick={() => setPopupAdicionar(true)}>
                Adicionar
            </button>
            <PopupAdicionarCategoria show={popupAdicionar} onHide={() => setPopupAdicionar(false)}/>
            
            {categoriesCopia.map((categoria) => (
                <div id={categoria.nomeCategoria} key={categoria.nomeCategoria}>
                    <li>{categoria.nomeCategoria}</li>
                    <button onClick={() => removerCategoria(categoria.nomeCategoria)}>Remover</button>
                </div>
            ))}
        </div>
    );
}

function adicionarCategoria(categoria) {
    categories.push(categoria)
}

function removerCategoria(categoria) {
    categories = categories.filter(e => e.nomeCategoria !== categoria);
}

function PopupAdicionarCategoria (props) {
    const [nome, setNome] = useState("");
    
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Adicionar categoria
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => adicionarCategoria({nomeCategoria: nome})}>Adicionar</Button>
            <Button onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
        </Modal>
    );
}