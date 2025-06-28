export default function FloatingButton({ icon, text, onClick }) {
  return (
    <button
      className="fixed bottom-4 right-4 p-3 rounded-full bg-[#B08B57] text-white shadow-lg hover:translate-y-1 transition"
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text && <span className="ml-2">{text}</span>}
    </button>
  );
}