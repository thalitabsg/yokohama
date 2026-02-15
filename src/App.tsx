import CadastroAluno from './CadastroAluno';
import LancarFrequencia from './LancarFrequencia';
import PainelMensalidades from './PainelMensalidades';

import './App.css';
import { useState } from 'react';

function App() {
  const [userType, setUserType] = useState<'sensei' | 'aluno' | null>(null);

  if (!userType) {
    return (
      <div className="login-container">
        <h2>Bem-vindo ao sistema Yokohama Karate</h2>
        <p>Selecione seu tipo de acesso:</p>
        <button onClick={() => setUserType('sensei')}>Entrar como Sensei</button>
        <button onClick={() => setUserType('aluno')}>Entrar como Aluno</button>
      </div>
    );
  }

  const [senseiView, setSenseiView] = useState<'painel' | 'cadastro' | 'frequencia'>("painel");

  if (userType === 'sensei') {
    if (senseiView === 'cadastro') {
      return <CadastroAluno onBack={() => setSenseiView('painel')} />;
    }
    if (senseiView === 'frequencia') {
      return <LancarFrequencia onBack={() => setSenseiView('painel')} />;
    }
    return (
      <div className="sensei-panel">
        <h2>Painel do Sensei</h2>
        <ul>
          <li><button onClick={() => setSenseiView('cadastro')}>Cadastrar Aluno</button></li>
          <li><button onClick={() => setSenseiView('frequencia')}>Lançar Frequência</button></li>
        </ul>
        <button onClick={() => setUserType(null)}>Sair</button>
      </div>
    );
  }

  const [alunoView, setAlunoView] = useState<'painel' | 'mensalidades'>('painel');

  if (userType === 'aluno') {
    if (alunoView === 'mensalidades') {
      return <PainelMensalidades onBack={() => setAlunoView('painel')} />;
    }
    return (
      <div className="aluno-panel">
        <h2>Painel do Aluno</h2>
        <ul>
          <li><button onClick={() => setAlunoView('mensalidades')}>Ver Mensalidades</button></li>
        </ul>
        <button onClick={() => setUserType(null)}>Sair</button>
      </div>
    );
  }
}

export default App;
