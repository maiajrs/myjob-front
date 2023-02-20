import { Home } from './components/Home';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Cadastro } from './components/Cadastro';
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
