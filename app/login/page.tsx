"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";

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
      router.push("/home");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="email@email.com" />
      <input type="password" name="password" placeholder="******" />
      <button type="submit">Login</button>
    </form>
  );
}
