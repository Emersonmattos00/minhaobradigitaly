"use client";
import { useState } from "react";

export default function ReadPage() {
  const [content, setContent] = useState("Insira seu texto para salvar...");

  const handleSave = async () => {
    alert("Simulação de salvamento! Adicione integração com Firestore aqui.");
  };

  return (
    <div>
      <h1>Leitura e Salvamento</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
      ></textarea>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}
