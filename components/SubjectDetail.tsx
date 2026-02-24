
import React, { useState, useEffect } from 'react';
import { Subject, Flashcard } from '../types';
import FlashcardItem from './FlashcardItem';

interface Props {
  subject: Subject;
  onBack: () => void;
  onUpdateSubject: (subject: Subject) => void;
}

const SubjectDetail: React.FC<Props> = ({ subject, onBack, onUpdateSubject }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCards, setDisplayCards] = useState<Flashcard[]>([]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0);

  // Initialize display cards when subject, shuffle state, or shuffleKey changes
  useEffect(() => {
    let cards = [...subject.cards];
    if (isShuffled) {
      // Fisher-Yates shuffle
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
    setDisplayCards(cards);
    setCurrentIndex(0);
  }, [subject.id, isShuffled, shuffleKey]);

  // Handle updates from subject.cards change (e.g. external edits)
  useEffect(() => {
    if (!isShuffled) {
      setDisplayCards(subject.cards);
    }
  }, [subject.cards, isShuffled]);

  const reshuffle = () => {
    if (!isShuffled) {
      setIsShuffled(true);
    } else {
      setShuffleKey(prev => prev + 1);
    }
  };

  const handleAddCard = () => {
    const newCard: Flashcard = {
      id: Date.now().toString(),
      question: 'New Question',
      answer: 'New Answer'
    };
    const updatedSubject = {
      ...subject,
      cards: [...subject.cards, newCard]
    };
    onUpdateSubject(updatedSubject);
    
    if (isShuffled) {
      setDisplayCards([...displayCards, newCard]);
      setCurrentIndex(displayCards.length);
    } else {
      setCurrentIndex(subject.cards.length);
    }
    
    setEditingCard(newCard);
  };

  const handleSaveCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCard) return;

    const updatedCards = subject.cards.map(c => 
      c.id === editingCard.id ? editingCard : c
    );
    
    setDisplayCards(displayCards.map(c => c.id === editingCard.id ? editingCard : c));
    onUpdateSubject({ ...subject, cards: updatedCards });
    setEditingCard(null);
  };

  const handleDeleteCard = (id: string) => {
    const updatedCards = subject.cards.filter(c => c.id !== id);
    const updatedDisplay = displayCards.filter(c => c.id !== id);
    
    setDisplayCards(updatedDisplay);
    onUpdateSubject({ ...subject, cards: updatedCards });
    setEditingCard(null);
    
    if (currentIndex >= updatedDisplay.length) {
      setCurrentIndex(Math.max(0, updatedDisplay.length - 1));
    }
  };

  const nextCard = () => {
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{subject.icon}</span>
              <h1 className="text-2xl font-bold text-slate-900">{subject.name}</h1>
            </div>
            <p className="text-slate-500 text-sm">{subject.topic}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isEditMode 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-500'
            }`}
          >
            {isEditMode ? 'Finish Editing' : 'Edit Mode'}
          </button>
          
          {isEditMode && (
            <button 
              onClick={handleAddCard}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-all shadow-md"
            >
              Add Card
            </button>
          )}
        </div>
      </div>

      {/* Single Flashcard View */}
      {displayCards.length > 0 ? (
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-lg">
            <FlashcardItem 
              key={displayCards[currentIndex].id} 
              card={displayCards[currentIndex]} 
              isEditMode={isEditMode}
              onEdit={setEditingCard}
              onDelete={handleDeleteCard}
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full max-w-lg px-4">
            <button 
              onClick={prevCard}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border transition-all ${
                currentIndex === 0 
                ? 'border-slate-100 text-slate-200 cursor-not-allowed' 
                : 'border-slate-200 text-slate-600 hover:bg-white hover:shadow-md hover:border-blue-400'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col items-center relative group">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Card</span>
                {isShuffled && (
                  <span className="bg-orange-100 text-orange-600 text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase">Shuffled</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-slate-800">
                  {currentIndex + 1} <span className="text-slate-300 mx-1">/</span> {displayCards.length}
                </span>
                <button 
                  onClick={reshuffle}
                  title="Acak Soal"
                  className="p-1 text-slate-400 hover:text-orange-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 9a9 9 0 0114.98-6.98L20 9M20 15a9 9 0 01-14.98 6.98L4 15" />
                  </svg>
                </button>
              </div>
            </div>

            <button 
              onClick={nextCard}
              disabled={currentIndex === displayCards.length - 1}
              className={`p-3 rounded-full border transition-all ${
                currentIndex === displayCards.length - 1 
                ? 'border-slate-100 text-slate-200 cursor-not-allowed' 
                : 'border-slate-200 text-slate-600 hover:bg-white hover:shadow-md hover:border-blue-400'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-2 flex-wrap justify-center max-w-lg">
            {displayCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                  ? (isShuffled ? 'bg-orange-500 w-6' : 'bg-blue-600 w-6') 
                  : 'bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="py-24 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="mb-4 text-lg">Subject is empty.</p>
          <button 
            onClick={handleAddCard}
            className="px-6 py-2 bg-slate-100 text-slate-600 rounded-full font-bold hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            Create Your First Card
          </button>
        </div>
      )}

      {/* Edit Card Modal */}
      {editingCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">Edit Flashcard</h2>
              <button onClick={() => setEditingCard(null)} className="text-slate-400 hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSaveCard} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Question</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32 text-slate-800"
                  value={editingCard.question}
                  onChange={(e) => setEditingCard({ ...editingCard, question: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Answer</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32 text-slate-800"
                  value={editingCard.answer}
                  onChange={(e) => setEditingCard({ ...editingCard, answer: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-between items-center pt-4">
                <button 
                  type="button" 
                  onClick={() => handleDeleteCard(editingCard.id)}
                  className="text-red-500 hover:text-red-700 font-bold px-4 py-2 transition-colors"
                >
                  Delete Card
                </button>
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setEditingCard(null)}
                    className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 font-semibold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDetail;
