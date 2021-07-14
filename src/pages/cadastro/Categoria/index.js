import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import categoryRepository from '../../../repositories/categorias';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import config from '../../../config';
import Button from '../../../components/Button';

function Categoria() {
  const initialValues = {
    titulo: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
  };
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${config.URL_APP}/categorias`).then(async (responseServer) => {
      const response = await responseServer.json();

      setCategories([...response]);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      categoryRepository
        .createCategory({
          titulo: values.titulo,
          cor: values.cor,
          descricao: values.descricao,
        })
        .then(() => {
          setCategories([...categories, values]);
          clearForm();
          toast.success('Categoria cadastrada com sucesso!');
        });
    } catch (error) {
      toast.error('Não foi possível cadastar a categoria.');
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`${config.URL_APP}/categorias/${id}`, {
        method: 'DELETE',
      });

      const updatedList = categories.filter((item) => item.id !== id);
      setCategories(updatedList);

      toast.error('Categoria apagada com sucesso!');
    } catch (error) {
      toast.error(
        'Não foi possivél apagar. Entre em contato com o administrador.',
      );
    }
  }
  function handleClear(event) {
    event.preventDefault();
    clearForm();
  }

  const { titulo, cor } = values;

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Nova Categoria: </h1>
        <FormField
          id="titulo"
          label="Nome da Categoria"
          name="titulo"
          type="text"
          value={titulo}
          onChange={handleChange}
        />

        <FormField
          id="descricao"
          label="Descrição da Categoria"
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          id="cor"
          label="Cor"
          name="cor"
          type="color"
          value={cor}
          onChange={handleChange}
        />
        <ButtonCategory>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar" type="button" onClick={handleClear}>
            Limpar
          </Button>
        </ButtonCategory>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>

      {categories.length === 0 && (
        <Loading>
          <FadeLoader size={25} color="#016ca8" />
        </Loading>
      )}
      <Table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th className="descricao">Descrição</th>
            <Th className="cor">Cor</Th>
            <Th>Editar</Th>
            <Th>Apagar</Th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="descricao">{category.titulo}</td>
              <td className="cor">{category.descricao}</td>
              <Td>
                <div style={{
                  backgroundColor: category.cor, width: 80, height: 54, borderRadius: 10, margin: '5px 15px 20px 0', textAlign: 'center !important', padding: 10,
                }}
                />
              </Td>
              <Td>
                <Button className="btn-edit" as={Link} to={`/editar/categoria/${category.id}`}>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </PageDefault>
  );
}

export default Categoria;

const Loading = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`;

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

const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
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
