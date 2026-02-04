import CardSecundarioHistorico from "./CardSecundarioHistorico";
import CardTopoHistorico from "./CardTopoHistorico";

export default function CardsTopoHistorico(valores : DataCardsHistorico) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CardTopoHistorico title="Rendimento Total" value={`R$ ${valores.rendimentoTotal.toFixed(2)}`} highlight={true} />
                <CardTopoHistorico title="Consultas atendidas" value={valores.consultasAtendidas.toString()} highlight={false} />
                <CardTopoHistorico title="Consultas canceladas" value={`- R$ ${valores.consultasCanceladas.toFixed(2)}`} highlight={true} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <CardSecundarioHistorico title="Ticket Médio" value={`R$ ${valores.ticketMedio.toFixed(2)}`} />
                <CardSecundarioHistorico title="Taxa de Cancelamento" value={`${valores.taxaCancelamento.toFixed(2)}%`} />
                <CardSecundarioHistorico title="Faltas" value={valores.faltas.toString()} />
            </div>
        </div>
    );
}