import { BotaoNavegacaoHome } from "./BotaoNavegacaoHome";
import CardTopoHome from "./CardTopoHome";

const data1 = {
    tituloCard: "Próxima Consulta",
    dados: [
        { label: "Horário", value: "14:30" },
        { label: "Data", value: "25/06/2024" },
        { label: "Paciente", value: "João Silva" },
        { label: "Idade", value: 30 },
    ],
};

const data2 = {
    tituloCard: "Rendimento Mensal",
    dados: [
        { label: "Total de Consultas", value: 3500 },
        { label: "Pendentes", value: 357.50 },
    ],
};

export default function HomeComponents() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-primary-500 text-2xl pb-4">Bem vindo ao TriAqui</h1>
            <div className="w-full flex gap-2 ">
                <CardTopoHome dados={data1.dados} tituloCard={data1.tituloCard} />
                <CardTopoHome dados={data2.dados} tituloCard={data2.tituloCard} />
            </div>

            {
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <BotaoNavegacaoHome href="agendamentos" textoBotao="Ver agendamentos" />
                    <BotaoNavegacaoHome href="agendar-consulta" textoBotao="Agendar Consultas" />
                    <BotaoNavegacaoHome href="pacientes" textoBotao="Consultar Pacientes" />
                    <BotaoNavegacaoHome href="historico" textoBotao="Ver Histórico" />
                </div>
            }

        </div>)
}