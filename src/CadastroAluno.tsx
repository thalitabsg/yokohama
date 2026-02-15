// Este componente será usado para o cadastro de alunos
import { useState } from 'react';

interface Responsavel {
  nome: string;
  email: string;
}

interface Aluno {
  nome: string;
  idade: number;
  faixa: string;
  plano: string;
  vencimento: string;
  responsavel?: Responsavel;
}

export default function CadastroAluno({ onBack }: { onBack: () => void }) {
  const [aluno, setAluno] = useState<Aluno>({
    nome: '',
    idade: 0,
    faixa: '',
    plano: '',
    vencimento: '',
  });
  const [menorIdade, setMenorIdade] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setAluno((prev) => ({ ...prev, [name]: value }));
    if (name === 'idade') setMenorIdade(Number(value) < 18);
  }

  function handleResponsavelChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setAluno((prev) => ({
      ...prev,
      responsavel: {
        ...prev.responsavel,
        [name]: value,
      },
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui seria enviado para backend ou armazenado localmente
    alert('Aluno cadastrado com sucesso!');
    onBack();
  }

  return (
    <div className="cadastro-aluno">
      <h3>Cadastrar Aluno</h3>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={aluno.nome} onChange={handleChange} required />
        <input name="idade" type="number" placeholder="Idade" value={aluno.idade} onChange={handleChange} required />
        <select name="faixa" value={aluno.faixa} onChange={handleChange} required>
          <option value="">Selecione a faixa</option>
          <option value="branca">Branca</option>
          <option value="amarela">Amarela</option>
          <option value="laranja">Laranja</option>
          <option value="verde">Verde</option>
          <option value="azul">Azul</option>
          <option value="roxa">Roxa</option>
          <option value="marrom">Marrom</option>
          <option value="preta">Preta</option>
        </select>
        <input name="plano" placeholder="Plano" value={aluno.plano} onChange={handleChange} required />
        <input name="vencimento" type="date" placeholder="Data de vencimento" value={aluno.vencimento} onChange={handleChange} required />
        {menorIdade && (
          <div>
            <h4>Responsável</h4>
            <input name="nome" placeholder="Nome do responsável" value={aluno.responsavel?.nome || ''} onChange={handleResponsavelChange} required />
            <input name="email" type="email" placeholder="E-mail do responsável" value={aluno.responsavel?.email || ''} onChange={handleResponsavelChange} required />
          </div>
        )}
        <button type="submit">Cadastrar</button>
        <button type="button" onClick={onBack}>Voltar</button>
      </form>
    </div>
  );
}
