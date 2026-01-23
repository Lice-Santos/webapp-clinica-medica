"use client";

import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import DialogDetalhesConsulta from "./DialogDetalhesConsulta";
import verificarSeEhHoje from "../hooks/verificarSeEhHoje";



const actions = [
  "Cancelar Consulta",
  "Ver Detalhes",
  "Concluir Consulta",
];

export default function CardConsulta({
  id,
  horario,
  data,
  paciente,
  idade,
  confirmada,
  valorConsulta,
  detalhesAdicionais,
}: CardConsultaProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative bg-card-background p-4 rounded-lg shadow-md flex flex-1            flex-col mt-4 mb-4">
        <div className="mt-2 flex justify-around gap-1">
          <div className="relative grid grid-rows-2 items-center">

            {verificarSeEhHoje(data) && (
              <span className="absolute grid-cols-2 bg-primary-500 text-white text-sm px-2 py-1 rounded-full">
                Hoje
              </span>
            )

            }
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-primary-500">Horário</span>
            <p className="text-fonts-primary">{horario}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-primary-500">Data</span>
            <p className="text-fonts-primary">{data}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-primary-500">Paciente</span>
            <p className="text-fonts-primary">{paciente}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-primary-500">Confirmado</span>
            <p className="text-fonts-primary">{confirmada ? "Sim" : "Não"}</p>
          </div>

          <div className="flex flex-col justify-between">
            <span className="text-primary-500">Valor</span>
            <p className="text-fonts-primary">
              R$ {valorConsulta.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-around gap-2">
          {actions.map((action, index) => (
            <button key={index} className="bg-gray-300 text-fonts-primary rounded-md px-3 py-1 cursor-pointer hover:bg-gray-200" onClick={() => {
              if (action === "Ver Detalhes") {
                setOpen(true);
              }
            }}>
              {action}
            </button>
          ))}
          <button className="text-primary-500">
            <FaEdit />
          </button>
        </div>
      </div>

      <DialogDetalhesConsulta
        open={open}
        onClose={() => setOpen(false)}
        consultas={{ id, horario, data, paciente, idade, confirmada, valorConsulta, detalhesAdicionais }}
      />
    </>
  );
}
