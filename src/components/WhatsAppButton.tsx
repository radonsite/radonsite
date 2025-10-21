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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-white" aria-hidden>
        <path d="M20.52 3.48A11.72 11.72 0 0012.06.25 11.94 11.94 0 001.97 8.34c-.5 1.66-.45 3.4.13 5.07L.08 23l9.7-2.53c1.57.43 3.22.45 4.8.07a11.93 11.93 0 006.94-20.99zM12.06 21.5c-1.34 0-2.66-.26-3.87-.77l-.28-.13-5.76 1.5 1.5-5.62-.12-.32A9.43 9.43 0 012.94 8.4 9.96 9.96 0 1112.06 21.5z" />
        <path d="M17.6 14.23c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.6-.48l-.51-.01c-.18 0-.47.07-.72.34-.25.28-.98.96-.98 2.33 0 1.37 1.01 2.69 1.15 2.88.14.18 1.98 3.04 4.82 4.26 1.07.46 1.9.73 2.55.93.99.3 1.89.26 2.6.16.79-.11 1.64-.67 1.87-1.32.23-.64.23-1.19.16-1.32-.07-.13-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
}
