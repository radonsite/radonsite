export default function WhatsAppButton() {
  const phone = '+919701834593';
  const url = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed right-6 bottom-6 z-50 bg-gradient-to-br from-green-500 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" aria-hidden>
  <path fill="#25D366" d="M12 2C6.48 2 2 6.48 2 12c0 2.1.65 4.04 1.77 5.68L2 22l4.41-1.15C7.96 21.35 9.92 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  <path fill="#ffffff" d="M17.472 14.382c-.272-.136-1.655-.806-1.926-.898-.271-.092-.469-.139-.65.159-.182.298-.703.87-.861 1.05-.159.18-.318.202-.59.066-.273-.136-1.15-.422-2.22-1.475-.781-.696-1.279-1.57-1.438-1.846-.159-.275-.017-.426.122-.56.125-.118.287-.303.431-.463.146-.16.185-.28.294-.462.11-.18.055-.355-.02-.49-.074-.136-.668-1.523-.915-2.087-.24-.555-.48-.48-.65-.49l-.555-.01c-.183 0-.475.073-.724.332-.25.26-.955.956-.955 2.33 0 1.374.98 2.688 1.12 2.885.14.198 1.765 3.033 4.795 4.27 1.06.457 1.9.727 2.556.94.99.3 1.893.263 2.59.155.789-.12 1.646-.672 1.873-1.327.225-.654.225-1.216.16-1.336-.066-.12-.247-.192-.52-.33z" />
      </svg>
    </a>
  );
}
