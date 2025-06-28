export default function Concursos() {
  const concursos = [
    {
      id: 1,
      titulo: "Concurso Trimestral - Julho",
      premio: "R$1.000 + Publicação",
    },
    {
      id: 2,
      titulo: "Concurso Trimestral - Outubro",
      premio: "R$1.000 + Publicação",
    },
  ];

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">Concursos Literários</h1>
      <ul className="mt-4 space-y-4">
        {concursos.map((concurso) => (
          <li key={concurso.id} className="bg-white rounded p-4 shadow">
            <h2 className="font-bold">{concurso.titulo}</h2>
            <p>{concurso.premio}</p>
            <button className="mt-2 bg-yellow-600 text-white rounded-full px-4 py-2 hover:shadow-xl">
              Participar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
