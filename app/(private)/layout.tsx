import BarraDeNavegacao from "../ui/navegacao";
import Cabecalho from "../ui/cabecalho";
import Rodape from "../ui/rodape";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<div className="flex min-h-screen">

      {/* Sidebar */}
      <BarraDeNavegacao />

      {/* Coluna principal */}
      <div className="flex flex-1 flex-col">
        <Cabecalho />

        <main className="flex-1 p-6 bg-zinc-50">
          {children}
        </main>

        <Rodape />
      </div>

    </div>
  );
}
