import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';
import useForm from '../../hooks/useForm';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button'
import Container from './styles';
import { ToastContainer, toast } from 'react-toastify'
import categoriesRepository from '../../repositories/categorias';

function EditCategory(route) {
  const history = useHistory();
  const { id } = route.match.params;

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cor, setCor] = useState('');

  const { clearForm } = useForm();
  const handleClick = () => toast.success('Categoria atualizada com sucesso!')

  useEffect(() => {
    categoriesRepository.getCategory(id)
      .then((categoria) => {
        setTitulo(categoria.titulo);
        setDescricao(categoria.descricao);
        setCor(categoria.cor);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <PageDefault>
      <Container>
        <div>
          <h1>
            Editar Categoria:
            {' '}
            {titulo}
          </h1>

          <Link to="/cadastro/categoria"><FiXCircle /></Link>
        </div>

        <form onSubmit={function handleSubmit(info) {
          info.preventDefault();

          categoriesRepository.updateCategory(id, {
            titulo,
            cor,
            descricao,
          })
            .then(() => {
              history.push('/cadastro/Categoria');
            });

          clearForm();
        }}
        >

          <FormField
            label="Nome da Categoria: "
            type="text"
            name="titulo"
            value={titulo}
            onChange={(info) => setTitulo(info.target.value)}
          />

          <FormField
            as="textarea"
            label="Descrição: "
            type="textarea"
            name="descricao"
            value={descricao}
            onChange={(info) => setDescricao(info.target.value)}
          />

          <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={cor}
            onChange={(info) => setCor(info.target.value)}
          />
          <ButtonCategory>
          <Button className="btn-salvar" onClick={handleClick} type="submit">Salvar</Button>
          <Button className="btn-limpar" type="button" >
            Limpar
          </Button>
        </ButtonCategory>
        <ToastContainer position="top-right" autoClose={3000} />

        </form>
      </Container>
    </PageDefault>

  );
}

export default EditCategory;


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
`