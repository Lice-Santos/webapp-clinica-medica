import { consultaJaFinalizada } from "../hooks/consultaJaFinalizada";
import CardHistoricoConsulta from "./CardHistoricoConsulta";
import CardsTopoHistorico from "./CardsTopoHistorico";

const dataCards: DataCardsHistorico = {
    rendimentoTotal: 15650.82,
    consultasAtendidas: 120,
    consultasCanceladas: 650.82,
    ticketMedio: 130.42,
    taxaCancelamento: 5.2,
    faltas: 12,
}

const data: CardConsultaProps[] = [
    {
        id: 1769200122,
        horario: "10:00",
        data: "2026-07-01",
        paciente: "João Silva",
        idade: 30,
        confirmada: true,
        valorConsulta: 150.0,
        detalhesAdicionais: "Paciente com histórico de alergias.",
    },
        {
        id: 1769200123,
        horario: "14:00",
        data: "2026-07-01",
        paciente: "Josefa Pereira",
        idade: 40,
        confirmada: true,
        valorConsulta: 180.0,
    },
    {
        id: 1769200124,
        horario: "14:00",
        data: "2026-08-01",
        paciente: "Carlos Pereira",
        idade: 40,
        confirmada: true,
        valorConsulta: 180.0,
        detalhesAdicionais: null,
    },
    {
        id: 1769200125,
        horario: "11:30",
        data: "2026-07-01",
        paciente: "Taina Oliveira",
        idade: 25,
        confirmada: false,
        valorConsulta: 200.0,
        detalhesAdicionais: "Primeira consulta, verificar histórico familiar.",
    },
        {
        id: 1769200126,
        horario: "20:30",
        data: "2026-01-23",
        paciente: "Maria Simoes",
        idade: 25,
        confirmada: false,
        valorConsulta: 200.0,
        detalhesAdicionais: "Primeira consulta, verificar histórico familiar.",
    },

];
export default function HistoricoComponents() {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-500 font-bold mb-4">Histórico de Consultas</h1>
            <CardsTopoHistorico 
                rendimentoTotal={dataCards.rendimentoTotal}
                consultasAtendidas={dataCards.consultasAtendidas}
                consultasCanceladas={dataCards.consultasCanceladas}
                ticketMedio={dataCards.ticketMedio}
                taxaCancelamento={dataCards.taxaCancelamento}
                faltas={dataCards.faltas}
            
            />
            <h2 className="text-xl text-fonts-primary font-semibold mt-4">Histórico de Consultas</h2>
            <div>
                {data.filter((consulta) => consultaJaFinalizada(consulta.data)).map((consulta) => (
                    <CardHistoricoConsulta key={consulta.id} consulta={consulta} />
                ))}
            </div>
        </div>
    );
}