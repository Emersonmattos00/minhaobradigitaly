"use client";
import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  if (!session) {
    return <div>Você não está logado. Faça o login para continuar!</div>;
  }
  return (
    <div>
      <h1>Olá, {session.user.email}</h1>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}
