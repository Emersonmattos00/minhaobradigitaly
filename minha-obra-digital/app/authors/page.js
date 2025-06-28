"use client";
import { useState } from "react";

export default function AuthorPage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleRegister = async () => {
    alert(
      "Simulação de registro de autor! Implemente lógica para salvar no Firestore."
    );
  };

  return (
    <div className="p-4">
      <h1>Cadastrar Autor</h1>
      <input
        placeholder="Nome do autor"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 block mt-2"
      />
      <textarea
        placeholder="Biografia"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="border p-2 block mt-2"
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white p-2 mt-4 rounded"
      >
        Cadastrar
      </button>
    </div>
  );
}
