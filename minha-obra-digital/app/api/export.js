import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";

export async function GET(request) {
  const doc = new jsPDF();
  doc.text("Exemplo de Exportação para PDF - Minha Obra Digital", 10, 10);
  const pdf = doc.output("arraybuffer");
  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=livro.pdf",
    },
  });
}
