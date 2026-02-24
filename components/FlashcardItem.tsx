
import React, { useState, useEffect } from 'react';
import { Flashcard } from '../types';

interface Props {
  card: Flashcard;
  onEdit?: (card: Flashcard) => void;
  onDelete?: (id: string) => void;
  isEditMode?: boolean;
}

const FlashcardItem: React.FC<Props> = ({ card, onEdit, onDelete, isEditMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
  }, [card.id]);

  const handleFlip = () => {
    if (!isEditMode) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="relative w-full h-80 perspective-1000 cursor-pointer group"
      onClick={handleFlip}
    >
      <div 
        className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front - Question */}
        <div className="absolute w-full h-full backface-hidden bg-white border-2 border-slate-100 rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-xl group-hover:border-blue-200 transition-all">
          <span className="absolute top-6 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Question</span>
          
          {isEditMode && (
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete?.(card.id); }}
              className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all z-10"
              title="Hapus Kartu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          )}

          <p className="text-slate-800 text-xl md:text-2xl font-semibold leading-relaxed overflow-y-auto max-h-full py-4">
            {card.question}
          </p>

          {isEditMode && (
            <button 
              onClick={(e) => { e.stopPropagation(); onEdit?.(card); }}
              className="absolute bottom-6 bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              Edit Content
            </button>
          )}
        </div>

        {/* Back - Answer */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-700 border-2 border-blue-400 rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-2xl">
          <span className="absolute top-6 text-xs font-bold text-blue-200 uppercase tracking-[0.2em]">Answer</span>
          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed overflow-y-auto max-h-full py-4">
            {card.answer}
          </p>
          <span className="absolute bottom-6 text-xs text-blue-200/50 italic">Click to see question</span>
        </div>
      </div>
    </div>
  );
};

export default FlashcardItem;
