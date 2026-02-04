"use client";
import { MdMenu } from "react-icons/md";
import React from "react";

export default function CardPaciente({ paciente }: { paciente: Paciente }) {
    const [mostrarCardCompleto, setMostrarCardCompleto] = React.useState(false);
    return (
        <div onClick={() => setMostrarCardCompleto(mostrarCardCompleto ? false : true)} className="border border-gray-300 flex flex-col cursor-pointer justify-between rounded-lg p-4 m-2 shadow-sm bg-card-background">
            <div className="flex flex-col sm:flex-row justify-between ">

                <p className="text-lg font-semibold">{paciente.nome}</p>
                <p><strong className="text-primary-500">Data de Nascimento:</strong> {paciente.dataNascimento}</p>
                <p><strong className="text-primary-500">CPF:</strong> {paciente.cpf}</p>
                <p><strong className="text-primary-500">Telefone:</strong> {paciente.telefone}</p>

            </div>
            {mostrarCardCompleto && (
                <div className="flex flex-col sm:flex-row justify-between border-t border-gray-200 mt-4 pt-4">
                    <p><strong className="text-primary-500">Gênero:</strong> {paciente.genero}</p>
                    <p><strong className="text-primary-500">Email:</strong> {paciente.email}</p>
                    <p><strong className="text-primary-500">Endereço:</strong> {paciente.endereco}</p>
                    <p><strong className="text-primary-500">Histórico Médico:</strong> {paciente.historicoMedico}</p>
                </div>
            )}

        </div>
    );
}