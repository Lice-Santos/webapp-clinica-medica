"use client";

import Link from "next/link";
import { handleSignOut } from "../utils/signOut";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function BarraDeNavegacao() {
  const router = useRouter();

  const abrirModalConfirmacao = () => {
   Swal.fire({
      title: "Deseja sair da aplicação?",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: "Sair",
      confirmButtonText: "Continuar na aplicação",
    }).then((result) => {
      if (result.isDenied) {

        handleSignOut();
        router.push('/')
      } 
      
    });
  };
  
  return (
    <aside className="w-55 min-h-screen bg-primary-500 flex flex-col p-4 gap-6">
      <h2 className="text-white text-xl font-bold">Menu</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/home" className="text-white hover:opacity-80">
          Home
        </Link>
        
        <Link href="/agendamentos" className="text-white hover:opacity-80">
            Agendamentos
        </Link>

        <Link href="/agendar-consulta" className="text-white hover:opacity-80">
          Agendar Consulta
        </Link>

        <Link href="/pacientes" className="text-white hover:opacity-80">
          Ver pacientes
        </Link>

        <Link href="/historico" className="text-white hover:opacity-80">
          Histórico de Consultas
        </Link>

        <button onClick={() => abrirModalConfirmacao()} className="text-white hover:opacity-80 text-left cursor-pointer">
          Sair
        </button>
      </nav>
    </aside>
  );
}
