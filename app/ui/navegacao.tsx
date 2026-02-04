"use client";

import Link from "next/link";
import { handleSignOut } from "../utils/signOut";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUsers,
  FiLogOut,

} from "react-icons/fi";
import React from "react";
import { FaClipboardUser } from "react-icons/fa6";
import { BsBandaid } from "react-icons/bs";

export default function BarraDeNavegacao() {
  const router = useRouter();
  const [menuAberto, setMenuAberto] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMenuAberto(false);
      } else {
        setMenuAberto(true);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        router.push("/");
      }
    });
  };

  const itemMenu =
    "flex items-center sm:justify-start gap-3 text-white hover:opacity-80 p-2 rounded";

  return (
<aside
  className={`
    min-h-screen bg-primary-500 flex flex-col gap-6
    static
    transition-all duration-300
    ${menuAberto ? "w-56 p-4" : "min-w-16 p-2 w-16 p-2 items-center"}
    overflow-hidden
  `}
>

      {/* BOTÃO MENU */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-white text-xl font-bold flex items-center justify-center sm:justify-start"
      >
        {menuAberto ? "Menu" : <FiMenu size={24} />}
      </button>

      <nav className="flex flex-col gap-2">
        <Link href="/home" className={itemMenu}>
          <FiHome size={20} />
          {menuAberto && <span>Home</span>}
        </Link>

        <Link href="/agendamentos" className={itemMenu}>
          <FiCalendar size={20} />
          {menuAberto && <span>Agendamentos</span>}
        </Link>

        <Link href="/agendar-consulta" className={itemMenu}>
          <BsBandaid size={20} />
          {menuAberto && <span>Agendar Consulta</span>}
        </Link>

        <Link href="/pacientes" className={itemMenu}>
          <FiUsers size={20} />
          {menuAberto && <span>Ver Pacientes</span>}
        </Link>

        <Link href="/historico" className={itemMenu}>
          <FiCalendar size={20} />
          {menuAberto && <span>Histórico de Consultas</span>}
        </Link>

        <button onClick={abrirModalConfirmacao} className={itemMenu}>
          <FiLogOut size={20} />
          {menuAberto && <span>Sair</span>}
        </button>
      </nav>
    </aside>
  );
}
