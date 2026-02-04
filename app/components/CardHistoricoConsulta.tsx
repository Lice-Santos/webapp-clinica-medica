type Consulta = {
    id: number;
    horario: string;
    data: string;
    paciente: string;
    idade: number;
    confirmada: boolean;
    valorConsulta: number;
    detalhesAdicionais?: string | null;
};

type CardHistoricoConsultaProps = {
    consulta: Consulta;
};

export default function CardHistoricoConsulta({ consulta }: CardHistoricoConsultaProps) {
    return (
    <div className="bg-white p-4 rounded-xl shadow grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 mb-4 border border-gray-100">
                <p><strong className="font-bold text-primary-500">Horário:</strong> {consulta.horario}</p>
                <p><strong className="font-bold text-primary-500">Data:</strong> {consulta.data}</p>
                <p><strong className="font-bold text-primary-500">Paciente:</strong> {consulta.paciente} ({consulta.idade} anos)</p>
                <p><strong className="font-bold text-primary-500">Status:</strong> {consulta.confirmada ? 'Confirmada' : 'Cancelada'}</p>
                <p><strong className="font-bold text-primary-500">Valor da Consulta:</strong> R$ {consulta.valorConsulta.toFixed(2)}</p>
                {consulta.detalhesAdicionais && <p><strong className="font-bold text-primary-500">Detalhes:</strong> {consulta.detalhesAdicionais}</p>}
        </div>
    );
}
