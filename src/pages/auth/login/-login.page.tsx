import { useLoginModel } from '@/pages/auth/login/-login.model';
import { LoginView } from '@/pages/auth/login/-login.view';

export const LoginPage = () => {
  const methods = useLoginModel();

  return <LoginView {...methods} />;
};
