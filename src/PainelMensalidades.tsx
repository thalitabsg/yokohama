// Componente para painel de mensalidades do aluno
import { useState } from 'react';

interface Mensalidade {
  plano: string;
  vencimento: string;
  status: 'paga' | 'pendente';
}

const mensalidadesExemplo: Mensalidade[] = [
  { plano: 'Mensal', vencimento: '2026-02-10', status: 'paga' },
  { plano: 'Mensal', vencimento: '2026-03-10', status: 'pendente' },
];

export default function PainelMensalidades({ onBack }: { onBack: () => void }) {
  const [mensalidades] = useState<Mensalidade[]>(mensalidadesExemplo);

  return (
    <div className="painel-mensalidades">
      <h3>Mensalidades</h3>
      <table>
        <thead>
          <tr>
            <th>Plano</th>
            <th>Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {mensalidades.map((m, idx) => (
            <tr key={idx}>
              <td>{m.plano}</td>
              <td>{m.vencimento}</td>
              <td style={{ color: m.status === 'paga' ? 'green' : 'red' }}>{m.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onBack}>Voltar</button>
    </div>
  );
}
