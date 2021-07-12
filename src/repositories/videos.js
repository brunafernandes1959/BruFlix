import config from '../config';

const URL_VIDEOS = `${config.URL_APP}/videos`;

function create(objetoDovideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDovideo),
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();
      return response;
    }

    throw new Error('Não foi possível cadastrar os dados');
  });
}
function deleteVideo(id) {
  return fetch(`${URL_VIDEOS}/${id}`, {
    method: 'DELETE',

  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível deletar a categoria  :(');
    });
}

function getAll() {
  return fetch(`${URL_VIDEOS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}
export default {
  create,
  deleteVideo,
  getAll,
};
