import { FormEvent, useState } from 'react';
import { api } from '../apiClient.ts';
import { Button } from './Button';
import { Input } from './Input';

import { toast, ToastContainer } from 'react-toastify';

export interface ErrorCadastro {
  type: string
  error: string
  hasError?: false
}

export function Cadastro () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [linkein, setLinkedIn] = useState('');
  const [anotacoes, setAnotacoes] = useState('');
  const [error, setError] = useState<null | ErrorCadastro>(null);

  async function handleSubmit (event: FormEvent): Promise<void> {
    event.preventDefault()

    try {
      const response = await api.post('/clients', {
        name,
        email,
        idade,
        telefone,
        linkein,
        anotacoes
      })

      if (response.status === 201) {
        console.log('caiu no sucesso')
        toast.success('Cliente cadastrado com sucesso!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
      }
    } catch (error) {
      toast.error('Não foi possível salvar o cliente.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    }
  }

  return (
    <section className="flex flex-col items-center mt-10">
      <form onSubmit={handleSubmit} className="max-w-[500px] flex flex-col gap-6 w-full p-8 bg-white rounded shadow">
        <h2 className="self-center font-['Poppins'] text-2xl text-gray-600 font-bold">Cadastrar novo cliente:</h2>
        <div className="relative">
          <Input setValue={setName} setError={setError} value={name} name="name" type="text" placeholder="Seu nome" />
          <span className="absolute w-full text-xs text-red-500 -bottom-4 left-0">{error?.type === 'name' && error?.error}</span>

        </div>
        <Input setValue={setEmail} setError={setError} value={email} name="email" type="text" placeholder="Email" />
        <Input setValue={setTelefone} setError={setError} value={telefone} name="telefone" type="tel" placeholder="Telefone" />
        <Input setValue={setIdade} setError={setError} value={idade} name="idade" type="text" placeholder="Idade" />
        <Input setValue={setLinkedIn} setError={setError} value={linkein} name="likedin" type="text" placeholder="LinkedIn" />
        <textarea onChange={(e) => setAnotacoes(e.target.value)} value={anotacoes} name="anotacoes" placeholder="Anotações" className="py-3 px-4 w-full rounded border-[#5266CC] border outline-none">
        </textarea>
        <Button text="CADASTRAR" type="submit" color="#00BF1F" />
      </form>

    </section>
  )
}
