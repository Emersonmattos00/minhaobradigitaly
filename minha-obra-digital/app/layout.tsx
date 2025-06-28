// app/layout.tsx
import "../globals.css";

export const metadata = {
  title: "Minha Obra Digital",
  description: "Leitura e destaque de livros digitais",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#faf8f3] relative font-serif">
        {/* Marca d'água de fundo */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/imagens/pergaminho.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
            zIndex: -1,
          }}
        />
        {children}
      </body>
    </html>
  );
}
