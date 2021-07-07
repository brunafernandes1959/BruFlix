import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import config from '../../../config';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const ButtonEdit = styled.button`
    background: var(--backEnd);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;

  `;

  const ButtonDelete = styled.button`
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  `;

  const ulStyle = {
    fontSize: 0,
    listStyleType: 'none',
    padding: 0,
    margin: '0px',
  };

  const liStyle = {
    display: 'inline-block',
    padding: '20px',
    fontSize: '11pt',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://tecflixsite.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  async function handleDelete(id) {
    try {
      await fetch(`${config.URL_APP}/categorias/${id}`, {
        method: 'DELETE',
      });

      const updatedList = categorias.filter((item) => item.id !== id);
      setCategorias(updatedList);

      toast.error('Categoria apagada com sucesso!');
    } catch (error) {
      toast.error(
        'Não foi possivél apagar. Entre em contato com o administrador.',
      );
    }
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>
      <h1>Categorias Cadastradas:</h1>
      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul className={ulStyle}>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`} className={liStyle}>
            {categoria.titulo}
            <ButtonEdit>
              <MdModeEdit size={25} />
            </ButtonEdit>
            <ButtonDelete>
              <MdDelete
                size={25}
                onClick={() => handleDelete(categoria.id)}
              />

            </ButtonDelete>
          </li>
        ))}
      </ul>
      <Link to="/">
        <Button>
          Ir para home
        </Button>
      </Link>
      <br />
      <br />
      <ToastContainer position="top-right" autoClose={3000} />
    </PageDefault>
  );
}

export default CadastroCategoria;
