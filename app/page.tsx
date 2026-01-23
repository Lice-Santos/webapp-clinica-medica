"use client"

import Link from "next/link";

export default function PaginaPrincipal() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-primary-500">Bem-vindo à Clínica!</h1>
      <Link href="/login" className="mt-6 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-hover transition">
        Fazer Login
      </Link>
    </main>
  );


}