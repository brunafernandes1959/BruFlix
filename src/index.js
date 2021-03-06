import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import ListVideos from './pages/ListVideos';
import EditCategory from './pages/EditCategory';
import EditVideo from './pages/EditVideo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/ListVideos" component={ListVideos} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/editar/categoria/:id" component={EditCategory} />
      <Route path="/editar/video/:id" component={EditVideo} />
      <Route component={404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
