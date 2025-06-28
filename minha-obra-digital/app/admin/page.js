export default function Admin() {
  const usuarios = [
    {
      id: 1,
      nome: "Emerson José de Mello Mattos",
      email: "emerson@example.com",
    },
    { id: 2, nome: "Maria Souza", email: "maria@example.com" },
  ];
  const obras = [
    { id: 1, titulo: "Letras Vivas", autor: "Emerson José de Mello Mattos" },
    { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis" },
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Administração</h1>
      <div className="bg-white rounded p-4 mt-4">
        <h2 className="font-bold">Usuários</h2>
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>
              {u.nome} ({u.email})
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded p-4 mt-4">
        <h2 className="font-bold">Obras</h2>
        <ul>
          {obras.map((o) => (
            <li key={o.id}>
              {o.titulo} - {o.autor}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
