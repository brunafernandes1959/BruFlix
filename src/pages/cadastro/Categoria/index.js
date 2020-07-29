import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function useFormik() {

}

function CadastroCategoria() {
  const formik = useFormik();

  return (
    <PageDefault>
      <h1>Nova Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <label>
          Descrição:
          <input type="text"
          />
        </label>
        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;