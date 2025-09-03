import { useAuth } from '@/context/AuthProvider';
import { loginUser, LoginApiResponse } from '@/infra/services/authService';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const useLoginModel = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginApiResponse) => {
      console.log('Login realizado com sucesso!', data);

      const user = data.user;
      const token = data.access_token;

      login(user, token);
      navigate({ to: '/' });
    },
    onError: (error) => {
      console.error('Erro no login:', error);
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setErrorMessage(null); // Limpa mensagens de erro anteriores

    mutation.mutate({
      email: data.email as string,
      password: data.password as string
    });
  };

  return {
    errorMessage,
    mutation,
    handleSubmit
  };
};
