
import React from 'react';
import { Subject } from '../types';

interface Props {
  subject: Subject;
  onClick: (subject: Subject) => void;
  onEdit: (subject: Subject) => void;
}

const SubjectCard: React.FC<Props> = ({ subject, onClick, onEdit }) => {
  return (
    <div 
      className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[260px]"
      onClick={() => onClick(subject)}
    >
      {/* Top Right Decorative Segment with Actions (Matches the user's screenshot layout) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/80 rounded-bl-[5rem] transition-colors group-hover:bg-blue-100/50 flex items-center justify-end p-4 pr-6 pt-6">
        <div className="flex flex-col gap-3 items-center">
          {/* Edit Button (Top) */}
          <button 
            onClick={(e) => { 
              e.stopPropagation(); 
              onEdit(subject); 
            }}
            className="w-10 h-10 flex items-center justify-center text-blue-500 bg-white rounded-full shadow-sm hover:shadow-md hover:scale-110 active:scale-95 transition-all"
            title="Edit Mapel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Subject Icon Box */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {subject.icon}
        </div>
      </div>
      
      {/* Text Info */}
      <div className="flex-grow">
        <h3 className="text-2xl font-extrabold text-slate-800 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
          {subject.name}
        </h3>
        <p className="text-base text-slate-400 font-medium">
          {subject.topic}
        </p>
      </div>
      
      {/* Footer Info */}
      <div className="mt-8 pt-4 flex items-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
        <span className="flex-shrink-0">{subject.cards.length} Cards</span>
        <div className="ml-4 h-[1.5px] w-full bg-slate-100 rounded-full overflow-hidden">
           <div className={`h-full ${subject.color} opacity-40`} style={{width: '100%'}}></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4 text-slate-300 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default SubjectCard;
