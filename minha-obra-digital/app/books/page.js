"use client";
import { useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([
    { title: "Livro Exemplo", author: "Autor Exemplo" },
    { title: "Obra 2", author: "Autor 2" },
  ]);

  return (
    <div className="p-4">
      <h1>Biblioteca</h1>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
