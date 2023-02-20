import { Header } from './components/Header';
import { Home } from './components/Home';

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
