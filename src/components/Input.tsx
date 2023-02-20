import { ChangeEvent } from 'react';
import { validate } from '../utils/validate';
import { ErrorCadastro } from './Cadastro';

interface InputProps {
  type: string
  name: string
  placeholder: string
  setValue: (value: string) => void
  value: string
  setError: (error: null | ErrorCadastro) => void
}

export function Input ({ type, placeholder, name, value, setValue, setError }: InputProps) {
  function handleInput (e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    if (!validate(value, name, setError)) { return false }
    if (!validate(value, name, setError)) { return false }
  }
  return (
    <input onChange={handleInput} name={name} className="py-3 px-4 w-full rounded border-[#5266CC] border outline-none" type={type} placeholder={placeholder} />
  )
}
