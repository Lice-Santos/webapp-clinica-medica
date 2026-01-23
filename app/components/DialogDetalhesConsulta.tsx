"use client";

import * as Dialog from "@radix-ui/react-dialog";


export default function DialogDetalhesConsulta({
    open,
    onClose,
    consultas: {horario, data, paciente, idade, confirmada, valorConsulta, detalhesAdicionais}
}: DialogDetalhesConsultaProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        {/* Modal */}
        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2
            bg-white p-4 rounded-lg shadow-lg
            w-full max-w-md
          "
        >
          <Dialog.Title className="text-lg font-semibold mb-2">
            Detalhes da Consulta
          </Dialog.Title>

          <p><strong className="text-primary-500">Horário:</strong> {horario}</p>
          <p><strong className="text-primary-500">Data:</strong> {data}</p>
          <p><strong className="text-primary-500">Paciente:</strong> {paciente}</p>
          <p><strong className="text-primary-500">Idade:</strong> {idade} anos</p>
          <p><strong className="text-primary-500">Confirmada:</strong> {confirmada ? "Sim" : "Não"}</p>
          <p><strong className="text-primary-500">Valor:</strong> R$ {valorConsulta.toFixed(2)}</p>
              <strong className="text-primary-500">Detalhes:</strong>{" "}
          {detalhesAdicionais ? (
            <p>

              {detalhesAdicionais}
            </p>
          ) : (
            <p>Sem detalhes adicionais.</p>
          )}

          <div className="mt-4 flex justify-end">
            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="bg-gray-300 px-3 py-1 rounded-md"
              >
                Fechar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
