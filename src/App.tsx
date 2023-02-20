import { Route, Routes } from 'react-router-dom';
import { Cadastro } from './components/Cadastro';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Listagem } from './components/Listagem';

function App () {
  return <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="listagem" element={<Listagem />} />
      </Route>
    </Routes>
  </>;
}

export default App;
