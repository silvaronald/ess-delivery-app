import React from 'react';

function CategoriaItens() {
  const [showForm, setShowForm] = React.useState(false);
  const [novaCategoria, setNovaCategoria] = React.useState('');
  const [categorias, setCategorias] = React.useState([]);

  function handleNovaCategoriaChange(event) {
    setNovaCategoria(event.target.value);
  }

  function handleAdicionarCategoriaClick() {
    setShowForm(true);
  }

  function handleCancelarClick() {
    setShowForm(false);
    setNovaCategoria('');
  }

  function handleConfirmarClick() {
    const novaCategoriaObj = { nome: novaCategoria };
    setCategorias([...categorias, novaCategoriaObj]);
    setShowForm(false);
    setNovaCategoria('');
  }

  function handleRemoverCategoriaClick(index) {
    const novasCategorias = [...categorias];
    novasCategorias.splice(index, 1);
    setCategorias(novasCategorias);
  }

  return (
    <div>
      <h1>Categorias de Itens</h1>
      <button onClick={handleAdicionarCategoriaClick}>Adicionar categoria</button>
      {showForm && (
        <form>
          <label>
            Nome da categoria:
            <input type="text" value={novaCategoria} onChange={handleNovaCategoriaChange} />
          </label>
          <button type="button" onClick={handleCancelarClick}>Cancelar</button>
          <button type="button" onClick={handleConfirmarClick}>Confirmar</button>
        </form>
      )}
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
            <button onClick={() => handleRemoverCategoriaClick(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaItens;
