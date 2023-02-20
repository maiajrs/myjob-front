import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Home () {
  return (
    <main className="flex flex-col items-center mt-16">
      <div className="after">
        <h2 className="font-['Roboto+Mono'] max-w-[400px] text-center font-bold text-4xl text-gray-600">Bem-vindo ao cadastro de clientes da MyJob.</h2>
      </div>
      <span className="self-center text-blue-700 mt-14 mb-14">_______________________</span>
      <div>
        <h3 className="font-['Roboto+Mono'] text-2xl text-gray-600">O que você deseja fazer agora?</h3>
      </div>
      <div className="mt-20 flex gap-9">
        <Link to="/cadastro">
          <Button text="CADASTRAR NOVO CLIENTE" color="#00BF1F" />
        </Link>
        <Link to="/listagem">
          <Button text="CONSULTAR CLIENTES" color="#5266CC" />
        </Link>
      </div>
    </main>
  )
}
