import Link from "next/link";

export default function BarraDeNavegacao() {
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

      </nav>
    </aside>
  );
}
