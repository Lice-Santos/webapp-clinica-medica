import { ordenarConsultas } from "../hooks/ordenarConsultas";
import verificarSeEhHoje from "../hooks/verificarSeEhHoje";
import CardConsulta from "./CardConsulta";


const data = [
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

const consultasOrdenadas = ordenarConsultas(data); 


export default function AgendamentosComponents(){
    return (
        <div>
            <div>

            <h1 className="text-primary-500 font-bold text-center text-2xl">Agendamentos</h1>
            <h2 className="text-fonts-primary font-semibold text-xl">Consultas hoje</h2>

            {consultasOrdenadas.filter((consulta) => verificarSeEhHoje(consulta.data)).map((consulta) => (
                <CardConsulta key={consulta.id} {...consulta} />
            ))}

            </div>
            <div className="mt-6">

            <h2 className="text-fonts-primary font-semibold text-xl">Próximas Consultas</h2>
            {consultasOrdenadas.filter((consulta) => !verificarSeEhHoje(consulta.data)).map((consulta) => (
                <CardConsulta key={consulta.id} {...consulta} />
            ))}
            </div>

        </div>
    )
}