"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";
import Swal from "sweetalert2";

export default function Login() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get("email")?.toString();
        const password = data.get("password")?.toString();

        if (!email || !password) return;

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (!error) {
            Swal.fire({
                icon: "success",
                title: "Login realizado com sucesso!",  
            });
            router.push("/home");
        } else {
            Swal.fire({
                icon: "error",
                title: "Erro ao fazer login",
                text: "Credenciais inválidas. Por favor, tente novamente.",
            });
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-sm flex-col gap-4 rounded-2xl bg-orange-200 p-6 shadow-md"
            >
                <h1 className="text-center text-3xl font-bold text-primary-500">
                    Login
                </h1>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Email</span>
                    <input name="email" type="email" placeholder="email@email.com" className="rounded-md border px-3 py-2  focus:outline-none 
          focus:ring-2 focus:ring-primary-500" required
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Senha</span>
                    <input type="password" name="password" placeholder="******" className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500" required/>
                </label>

                <button
                    type="submit"
                    className="mt-2 rounded-md bg-primary-500 py-2 cursor-pointer hover:bg-primary-hover font-semibold text-white transition hover:bg-primary-600"
                >
                    Login
                </button>
            </form>
        </main>
    );

}
