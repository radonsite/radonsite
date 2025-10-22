import { useNavigate } from 'react-router-dom';

type Props = {
  onPrev?: () => void;
  onNext?: () => void;
};

export default function GlideControls({ onPrev, onNext }: Props) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-40">
      <button
        onClick={() => {
          if (onPrev) return onPrev();
          navigate(-1);
        }}
        className="bg-white/90 text-gray-900 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        aria-label="Previous"
      >
        Prev
      </button>

      <button
        onClick={() => {
          if (onNext) return onNext();
          navigate(1);
        }}
        className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        aria-label="Next"
      >
        Next
      </button>
    </div>
  );
}
