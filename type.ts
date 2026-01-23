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


interface DialogDetalhesConsultaProps {
  open: boolean;
  onClose: () => void;
  consultas: CardConsultaProps;
}

    type DadoNecessario = [label: string, value: string, setter: React.Dispatch<React.SetStateAction<string>>, type: string];