import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-500">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">Página não encontrada.</p>
      <Link href="/home" className="mt-4 text-white hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
