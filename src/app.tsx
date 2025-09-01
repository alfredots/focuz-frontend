import { createRouter, RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthProvider'; // <-- Nova importação do AuthProvider

const queryClient = new QueryClient();

import { routeTree } from './routeTree.gen';

// Cria uma nova instância do roteador
const router = createRouter({ routeTree });

// Registra a instância do roteador para segurança de tipo
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

/**
 * @function App
 * @description Componente raiz da aplicação.
 * Configura o QueryClientProvider, AuthProvider e RouterProvider.
 * @returns {JSX.Element} O componente App renderizado.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Envolvemos toda a aplicação com o AuthProvider para que o contexto de autenticação esteja disponível globalmente */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
