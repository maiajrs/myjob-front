import { ErrorCadastro } from '../components/Cadastro';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Digite um e-mail válido'
  }
};

export function validate (value: string, type: string, setError: (error: null | ErrorCadastro) => void) {
  if (value.length < 3) {
    setError({ type, error: 'Preencha no mínimo 3 letras' });
    return false;
  } else if (!types[type as keyof typeof types].regex.test(value)) {
    setError({ type, error: types[type as keyof typeof types].message });
    return false;
  } else {
    setError(null);
    return true;
  }
}
