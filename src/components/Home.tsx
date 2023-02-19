import { Button } from "./Button";

export function Home () {
  return (
    <main className="flex flex-col items-center">
      <div className="after">
        <h2 className="font-['Roboto+Mono'] font-bold text-4xl text-gray-600">Bem-vindo ao cadastro de clientes da myjob.</h2>
      </div>
      <span className="self-center text-blue-700 mt-14 mb-14">_______________________</span>
      <div>
        <h3 className="font-['Roboto+Mono'] text-2xl text-gray-600">O que você deseja fazer agora?</h3>
      </div>
      <div className="mt-20 flex gap-9">
        <Button text="CADASTRAR NOVO CLIENTE" color="#00BF1F" />
        <Button text="CONSULTAR CLIENTES" color="#5266CC" />
      </div>
    </main>
  )
}