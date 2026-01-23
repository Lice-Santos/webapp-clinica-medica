"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


type DadoNecessario = [
  label: string,
  value: string,
  setter: (value: string) => void,
  type: string
];

export default function AgendarConsultaComponent() {
  const [nomePaciente, setNomePaciente] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [valorConsulta, setValorConsulta] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [formaDePagamento, setFormaDePagamento] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [horarioConsulta, setHorarioConsulta] = useState("");
  const [detalhesAdicionais, setDetalhesAdicionais] = useState("");

  const dadosNecessarios: DadoNecessario[] = [
    ["Nome do paciente", nomePaciente, setNomePaciente, "text"],
    ["Data de nascimento", dataNascimento, setDataNascimento, "date"],
    ["CPF", cpf, setCpf, "text"],
    ["Telefone", telefone, setTelefone, "text"],
    ["Email", email, setEmail, "email"],
    ["Logradouro", logradouro, setLogradouro, "text"],
    ["Bairro", bairro, setBairro, "text"],
    ["Cidade", cidade, setCidade, "text"],
    ["Estado", estado, setEstado, "text"],
    ["CEP", cep, setCep, "text"],
    ["Número", numero, setNumero, "text"],
    ["Valor da consulta", valorConsulta, setValorConsulta, "text"],
    ["Especialidade", especialidade, setEspecialidade, "text"],
    ["Forma de pagamento", formaDePagamento, setFormaDePagamento, "text"],
    ["Data da consulta", dataConsulta, setDataConsulta, "date"],
    ["Horário da consulta", horarioConsulta, setHorarioConsulta, "time"],
  ];

const openConfirmacao = () => {
  Swal.fire({
    title: "Deseja apagar os dados inseridos?",
    showDenyButton: true,
    showCancelButton: false,
    denyButtonText: "Continuar editando",
    confirmButtonText: "Apagar",
  }).then((result) => {
    if (result.isConfirmed) {
      setNomePaciente("");
      setDataNascimento("");
      setCpf("");
      setTelefone("");
      setEmail("");
      setLogradouro("");
      setBairro("");
      setCidade("");
      setEstado("");
      setCep("");
      setNumero("");
      setValorConsulta("");
      setEspecialidade("");
      setFormaDePagamento("");
      setDataConsulta("");
      setHorarioConsulta("");
      setDetalhesAdicionais("");
      Swal.fire("Dados apagados!", "", "success");
    } 
  });
};


  return (
    <div>
      <h1 className="text-primary-500 font-bold text-center text-2xl">
        Agendar Consulta
      </h1>

      <form className="grid  grid-cols-1 sm:grid-cols-2  mt-6 gap-4">
        {dadosNecessarios.map(([label, value, setter, type]) => (
          <div key={label}>
            <label className="text-primary-500 mb-1 block">
              {label}
            </label>

            <input
              type={type}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="w-full p-2 text-fonts-primary bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        ))}

        {/* Detalhes adicionais */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 ">
          <label className="text-primary-500 mb-1 block">
            Detalhes adicionais
          </label>

          <textarea
            value={detalhesAdicionais}
            onChange={(e) => setDetalhesAdicionais(e.target.value)}
            className="w-full text-fonts-primary p-2 bg-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

<div className="col-span-4 flex justify-between items-center">
  <button onClick={openConfirmacao} className="w-fit  text-fonts-primary rounded-md  cursor-pointer mr-4">
    Cancelar
  </button>
  <button
    type="submit"
    className="w-fit bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors cursor-pointer"
  >
    Agendar Consulta
  </button>
</div>



      </form>
    </div>
  );
}
