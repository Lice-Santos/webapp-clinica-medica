interface CardConsultaProps {
    id: number;
  horario: string;
  data: string;
  paciente: string;
  idade: number;
  confirmada: boolean;
  valorConsulta: number;
  detalhesAdicionais?: string | null;
}

interface ConsultasProps {
  consultas: CardConsultaProps[];
}

interface Paciente {
    id: number;
    nome: string;
    dataNascimento: string;
    cpf: string;
    genero: string;
    telefone: string;
    email: string;
    endereco: string;
    historicoMedico: string;
}
interface DataCardsHistorico {
    rendimentoTotal: number;
    consultasAtendidas: number;
    consultasCanceladas: number;
    ticketMedio: number;
    taxaCancelamento: number;
    faltas: number;
}

interface DialogDetalhesConsultaProps {
  open: boolean;
  onClose: () => void;
  consultas: CardConsultaProps;
}

    type DadoNecessario = [label: string, value: string, setter: React.Dispatch<React.SetStateAction<string>>, type: string];