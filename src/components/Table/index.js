timport React from 'react';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
        {categorias.map((categoria) => (
          <th key={`${categoria.titulo}`}>
            {categoria.titulo}
          </th>
          ))}
        </tr>
      </thead>
      
    </table>
  )
}

export default Table;