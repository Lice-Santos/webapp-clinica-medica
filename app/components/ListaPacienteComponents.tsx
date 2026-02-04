import CardPaciente from "./CardPaciente";

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

const data: Paciente[] = [
    {
        id: 1,
        nome: "Ana Souza",
        dataNascimento: "1988-05-12",
        cpf: "123.456.789-00",
        genero: "F",
        telefone: "11 91234-5678",
        email: "ana.souza@email.com",
        endereco: "Rua das Flores, 123, São Paulo, SP",
        historicoMedico: "Nenhum",
    },
    {
        id: 2,
        nome: "Bruno Lima",
        dataNascimento: "1985-08-20",
        cpf: "987.654.321-00",
        genero: "M",
        telefone: "21 99876-5432",
        email: "bruno.lima@email.com",
        endereco: "Avenida Paulista, 456, São Paulo, SP",
        historicoMedico: "Hipertensão",
    },
];

export default function ListaPacienteComponents(){
return (
    <div>
        <h1 className="text-primary-500 font-bold text-center text-2xl">Pacientes</h1>
        {data.map((paciente) => (
            <CardPaciente key={paciente.id} paciente={paciente} />
        ))}
    </div>
)
}