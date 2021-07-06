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

  const Th = styled.th`
  text-align: center !important;
`;

  const Td = styled.td`
  text-align: center !important;

  .btn-delete {
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }

  .btn-edit {
    background: var(--backEnd);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`;

  const Table = styled.table`
  border: 1px solid #2a7ae4;
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;

  thead tr th {
    padding: 15px;
    border: 1px solid #2a7ae4;
  }
  thead {
    border-bottom: 1px solid #2a7ae4;
  }
  td,
  th {
    text-align: left;
    padding: 10px;
  }
`;

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

      <Table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrião</th>
            <Th>Editar</Th>
            <Th>Apagar</Th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((category) => (
            <tr>
              <td>{category.titulo}</td>
              <td>{category.descricao}</td>
              <Td>
                <Button className="btn-edit">
                  <MdModeEdit size={25} />
                </Button>
              </Td>
              <Td>
                <Button className="btn-delete">
                  <MdDelete
                    size={25}
                    onClick={() => handleDelete(category.id)}
                  />
                </Button>
              </Td>
              <ToastContainer position="top-right" autoClose={3000} />
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/">
        <Button>
          Ir para home
        </Button>
      </Link>
      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroCategoria;
