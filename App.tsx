
import React, { useState, useEffect } from 'react';
import { Subject } from './types';
import { INITIAL_SUBJECTS } from './constants';
import SubjectCard from './components/SubjectCard';
import SubjectDetail from './components/SubjectDetail';

const COMMON_ICONS = [
  '📝', '🌍', '🎭', '📐', '🧬', '🧪', '⚡', '🏢', '⛪', '🇮🇩', '🎨', '🤸', '💻', 
  '📚', '📖', '🧮', '🔬', '⚖️', '🎼', '⚽', '🌐', '🧠', '🏛️', '🌿', '🌋'
];

const App: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  // Load from local storage or use initial data
  useEffect(() => {
    const saved = localStorage.getItem('flashcard-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSubjects(parsed);
        } else {
          setSubjects(INITIAL_SUBJECTS);
        }
      } catch (e) {
        setSubjects(INITIAL_SUBJECTS);
      }
    } else {
      setSubjects(INITIAL_SUBJECTS);
    }
  }, []);

  // Save to local storage whenever subjects change
  useEffect(() => {
    localStorage.setItem('flashcard-data', JSON.stringify(subjects));
  }, [subjects]);

  const handleUpdateSubject = (updatedSubject: Subject) => {
    const newSubjects = subjects.map(s => 
      s.id === updatedSubject.id ? updatedSubject : s
    );
    setSubjects(newSubjects);
    setSelectedSubject(updatedSubject);
  };

  const handleSaveSubjectMeta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubject) return;

    if (subjects.find(s => s.id === editingSubject.id)) {
      setSubjects(subjects.map(s => s.id === editingSubject.id ? editingSubject : s));
    } else {
      setSubjects([...subjects, editingSubject]);
    }
    setEditingSubject(null);
  };

  const handleDeleteSubject = (id: string) => {
    const subjectToDelete = subjects.find(s => s.id === id);
    if (confirm(`Hapus mata pelajaran "${subjectToDelete?.name}"? Tindakan ini tidak dapat dibatalkan.`)) {
      const filtered = subjects.filter(s => s.id !== id);
      setSubjects(filtered);
      
      // Clear selected state if we were viewing it
      if (selectedSubject?.id === id) {
        setSelectedSubject(null);
      }
      setEditingSubject(null);
    }
  };

  const startNewSubject = () => {
    const newSub: Subject = {
      id: Date.now().toString(),
      name: 'Mata Pelajaran Baru',
      topic: 'Nama Topik',
      icon: '📚',
      color: 'bg-blue-500',
      cards: []
    };
    setEditingSubject(newSub);
  };

  if (selectedSubject) {
    return (
      <SubjectDetail 
        subject={selectedSubject} 
        onBack={() => setSelectedSubject(null)}
        onUpdateSubject={handleUpdateSubject}
      />
    );
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Navbar / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-md bg-white/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              E
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              EduFlash
            </h1>
          </div>
          <div className="hidden md:block text-slate-400 text-sm font-medium">
            Sistem Pembelajaran Mandiri
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Library Topik</h2>
          <p className="text-slate-500 text-lg">Kelola dan pelajari materi sekolah kamu.</p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {subjects.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              subject={subject} 
              onClick={setSelectedSubject}
              onEdit={setEditingSubject}
            />
          ))}
          
          {/* Add Subject Placeholder Card */}
          <button 
            onClick={startNewSubject}
            className="group relative bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-8 hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center justify-center min-h-[260px]"
          >
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-blue-100/50 group-hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-400 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-400 group-hover:text-blue-600 transition-colors">Tambah Mapel Baru</span>
          </button>
        </div>
      </main>

      {/* Edit Subject Modal */}
      {editingSubject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">
                {subjects.find(s => s.id === editingSubject.id) ? 'Edit Mata Pelajaran' : 'Mapel Baru'}
              </h2>
              <button onClick={() => setEditingSubject(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSaveSubjectMeta} className="p-8 space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Ikon</label>
                  <div className="w-24 h-24 bg-slate-50 border-2 border-slate-100 rounded-3xl flex items-center justify-center text-5xl shadow-inner">
                    {editingSubject.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Nama Mata Pelajaran</label>
                  <input 
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg font-medium"
                    value={editingSubject.name}
                    onChange={(e) => setEditingSubject({ ...editingSubject, name: e.target.value })}
                    placeholder="Contoh: Fisika"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Pilih Ikon Baru</label>
                <div className="grid grid-cols-6 gap-3 max-h-48 overflow-y-auto p-3 bg-slate-50 rounded-2xl border-2 border-slate-100 shadow-inner">
                  {COMMON_ICONS.map(icon => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => setEditingSubject({...editingSubject, icon})}
                      className={`text-2xl p-3 rounded-xl transition-all ${editingSubject.icon === icon ? 'bg-white shadow-md ring-2 ring-blue-500 scale-110 z-10' : 'hover:bg-white hover:shadow-sm hover:scale-110'}`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Topik Pembahasan</label>
                <input 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  value={editingSubject.topic}
                  onChange={(e) => setEditingSubject({ ...editingSubject, topic: e.target.value })}
                  placeholder="Contoh: Induksi Elektromagnetik"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Warna Aksen</label>
                <div className="flex gap-4 flex-wrap">
                  {['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-emerald-500', 'bg-orange-500', 'bg-cyan-600'].map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setEditingSubject({...editingSubject, color: c})}
                      className={`w-10 h-10 rounded-full transition-all ${c} ${editingSubject.color === c ? 'ring-4 ring-offset-4 ring-blue-500 scale-110' : 'hover:scale-110'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setEditingSubject(null)}
                  className="px-8 py-3 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="px-10 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all active:scale-95"
                >
                  Simpan Mapel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Add Button */}
      <div className="fixed bottom-10 right-10 z-30">
        <button 
          onClick={startNewSubject}
          className="flex items-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-[2rem] font-bold shadow-2xl shadow-blue-400 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="bg-white/20 p-1 rounded-lg group-hover:rotate-90 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-lg">Tambah Mapel</span>
        </button>
      </div>
    </div>
  );
};

export default App;
