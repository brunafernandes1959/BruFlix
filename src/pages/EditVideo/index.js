import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import useForm from '../../hooks/useForm';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Container from './styles';
import videosRepository from '../../repositories/videos';

function EditCategory(route) {
  const history = useHistory();
  const { id } = route.match.params;

  const [titulo, setTitulo] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [url, setUrl] = useState('');

  const { clearForm } = useForm();
  const handleClick = () => toast.success('Categoria atualizada com sucesso!');

  useEffect(() => {
    videosRepository.getVideo(id)
      .then((video) => {
        setTitulo(video.titulo);
        setCategoriaId(video.categoriaId);
        setUrl(video.url);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <PageDefault>
      <Container>
        <div>
          <h1>
            Editar Vídeo:
            {' '}
            {titulo}
          </h1>

          <Link to="/ListVideo"><FiXCircle /></Link>
        </div>

        <form onSubmit={function handleSubmit(info) {
          info.preventDefault();
          videosRepository.updateVideo(id, {
            titulo,
            url,
            categoriaId,
          })
            .then(() => {
              history.push('/cadastro/Categoria');
            });

          clearForm();
        }}
        >

          <FormField
            label="Titulo do vídeo "
            type="text"
            name="titulo"
            value={titulo}
            onChange={(info) => setTitulo(info.target.value)}
          />

          <FormField
            label="Url "
            type="text"
            name="url"
            value={url}
            onChange={(info) => setUrl(info.target.value)}
          />

          <ButtonCategory>
            <Button className="btn-salvar" onClick={handleClick} type="submit">Salvar</Button>
            <Button className="btn-limpar" type="button">
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
`;
