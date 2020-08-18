import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signin/SignIn';
import ToastContainer from './components/ToastContainer/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
