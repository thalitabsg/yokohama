// Componente para lançamento de frequência do aluno
import { useState } from 'react';

interface Frequencia {
  nomeAluno: string;
  data: string;
  presente: boolean;
}

export default function LancarFrequencia({ onBack }: { onBack: () => void }) {
  const [frequencia, setFrequencia] = useState<Frequencia>({
    nomeAluno: '',
    data: '',
    presente: true,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type, checked } = e.target;
    setFrequencia((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui seria enviado para backend ou armazenado localmente
    alert('Frequência lançada com sucesso!');
    onBack();
  }

  return (
    <div className="lancar-frequencia">
      <h3>Lançar Frequência</h3>
      <form onSubmit={handleSubmit}>
        <input name="nomeAluno" placeholder="Nome do aluno" value={frequencia.nomeAluno} onChange={handleChange} required />
        <input name="data" type="date" value={frequencia.data} onChange={handleChange} required />
        <label>
          <input name="presente" type="checkbox" checked={frequencia.presente} onChange={handleChange} />
          Presente
        </label>
        <button type="submit">Lançar</button>
        <button type="button" onClick={onBack}>Voltar</button>
      </form>
    </div>
  );
}
