import React, { useState, useEffect } from 'react';
import { FiDelete, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import videosRepository from '../../repositories/videos';
import {
  ButtonDelete, Table, Image, Title, Header,
} from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function ListVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videosRepository
      .getAll()
      .then((videosFromServer) => {
        setVideos(videosFromServer);
      });
  }, []);

  function clearVideo(id) {
    videosRepository.deleteVideo(id);

    setVideos(videos.filter((video) => video.id !== id));
  }

  return (
    <PageDefault>

      <Header>
        <h1>Todos os Vídeos</h1>

        <Link to="/cadastro/video">
          {' '}
          <FiArrowLeft />
          {' '}
          Voltar
          {' '}
        </Link>
      </Header>
      <Table>
        <tbody>
          {videos.map((video) => (
            <tr>
              <Image><img src={`https://img.youtube.com/vi/${getYouTubeId(video.url)}/hqdefault.jpg`} alt="Imagem do vídeo" /></Image>
              <Title>{video.titulo}</Title>
              <td>
                <ButtonDelete onClick={() => clearVideo(video.id)}>
                  <FiDelete />
                </ButtonDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageDefault>
  );
}

export default ListVideos;