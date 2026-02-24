
import { Subject } from './types';

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: '1',
    name: 'Bahasa Indonesia',
    topic: 'Artikel Ilmiah',
    icon: '📝',
    color: 'bg-blue-500',
    cards: [
      { id: '1-1', question: 'Apa itu artikel ilmiah?', answer: 'Karya tulis yang menyajikan hasil penelitian atau pemikiran yang bersifat objektif dan sistematis.' },
      { id: '1-2', question: 'Sebutkan salah satu ciri artikel ilmiah!', answer: 'Menggunakan bahasa formal dan data yang valid.' },
      { id: '1-3', question: 'Apa fungsi abstrak dalam artikel ilmiah?', answer: 'Memberikan gambaran singkat mengenai isi keseluruhan artikel.' },
      { id: '1-4', question: 'Apa itu tinjauan pustaka?', answer: 'Bagian yang berisi teori atau penelitian terdahulu yang relevan dengan topik.' },
      { id: '1-5', question: 'Sebutkan struktur umum artikel ilmiah!', answer: 'Judul, Abstrak, Pendahuluan, Metode, Hasil, Diskusi, Kesimpulan.' }
    ]
  },
  {
    id: '2',
    name: 'Bahasa Inggris',
    topic: 'Report Text',
    icon: '🌍',
    color: 'bg-indigo-500',
    cards: [
      { id: '2-1', question: 'What is the purpose of Report Text?', answer: 'To describe things in general, such as natural phenomena or social groups.' },
      { id: '2-2', question: 'What is the generic structure of Report Text?', answer: 'General Classification and Description.' },
      { id: '2-3', question: 'What tense is commonly used in Report Text?', answer: 'Present Tense.' },
      { id: '2-4', question: 'Difference between Report and Descriptive text?', answer: 'Report describes things in general; Descriptive describes a specific thing.' },
      { id: '2-5', question: 'Give an example of a Report Text title!', answer: '"The Life of Whales" or "How Clouds are Formed".' }
    ]
  },
  {
    id: '3',
    name: 'Bahasa Sunda',
    topic: 'Babasan',
    icon: '🎭',
    color: 'bg-emerald-500',
    cards: [
      { id: '3-1', question: 'Naon hartina "Amis Budi"?', answer: 'Somaé, hadé budi parangi.' },
      { id: '3-2', question: 'Naon hartina "Gedé Hulu"?', answer: 'Sombong atawa adigung.' },
      { id: '3-3', question: 'Hartina "Hampang Birit" nyaéta...', answer: 'Babari dititah, rajin.' },
      { id: '3-4', question: 'Sebutkeun babasan pikeun jalma nu bodo pisan!', answer: 'Belegug matak deudeuh.' },
      { id: '3-5', question: 'Naon hartina "Miceun Beungeut"?', answer: 'Era atawa embung panggih.' }
    ]
  },
  {
    id: '4',
    name: 'Matematika',
    topic: 'Bangun Ruang',
    icon: '📐',
    color: 'bg-red-500',
    cards: [
      { id: '4-1', question: 'Rumus volume kubus?', answer: 'Sisi x Sisi x Sisi (s³).' },
      { id: '4-2', question: 'Berapa jumlah rusuk pada balok?', answer: '12 rusuk.' },
      { id: '4-3', question: 'Rumus volume tabung?', answer: 'π x r² x t.' },
      { id: '4-4', question: 'Berapa titik sudut pada limas segiempat?', answer: '5 titik sudut.' },
      { id: '4-5', question: 'Apa itu diagonal ruang?', answer: 'Garis yang menghubungkan dua titik sudut yang berhadapan dalam bangun ruang.' }
    ]
  },
  {
    id: '5',
    name: 'Biologi',
    topic: 'Kunci Determinasi & Klasifikasi',
    icon: '🧬',
    color: 'bg-green-600',
    cards: [
      { id: '5-1', question: 'Apa itu kunci determinasi?', answer: 'Petunjuk bertahap untuk mengidentifikasi organisme berdasarkan ciri-cirinya.' },
      { id: '5-2', question: 'Sebutkan tingkatan takson dari yang tertinggi!', answer: 'Kingdom, Filum/Divisi, Kelas, Ordo, Famili, Genus, Spesies.' },
      { id: '5-3', question: 'Apa itu kunci dikotom?', answer: 'Kunci determinasi yang terdiri atas dua keterangan yang berlawanan.' },
      { id: '5-4', question: 'Siapa bapak taksonomi dunia?', answer: 'Carolus Linnaeus.' },
      { id: '5-5', question: 'Apa perbedaan Vertebrata dan Invertebrata?', answer: 'Vertebrata memiliki tulang belakang, Invertebrata tidak.' }
    ]
  },
  {
    id: '6',
    name: 'Kimia',
    topic: 'Asam, Basa & Indikator Alami',
    icon: '🧪',
    color: 'bg-pink-500',
    cards: [
      { id: '6-1', question: 'Berapa rentang pH untuk larutan asam?', answer: 'pH kurang dari 7.' },
      { id: '6-2', question: 'Sebutkan contoh indikator alami asam basa!', answer: 'Kunyit, kembang sepatu, kol ungu.' },
      { id: '6-3', question: 'Apa warna kunyit dalam suasana basa?', answer: 'Merah kecokelatan.' },
      { id: '6-4', question: 'Sifat khas larutan basa?', answer: 'Pahit, licin di kulit (kaustik), membirukan lakmus merah.' },
      { id: '6-5', question: 'Apa reaksi antara asam dan basa disebut?', answer: 'Reaksi Netralisasi.' }
    ]
  },
  {
    id: '7',
    name: 'Fisika',
    topic: 'Induksi Elektromagnetik',
    icon: '⚡',
    color: 'bg-yellow-500',
    cards: [
      { id: '7-1', question: 'Siapa penemu induksi elektromagnetik?', answer: 'Michael Faraday.' },
      { id: '7-2', question: 'Apa itu GGL Induksi?', answer: 'Gaya Gerak Listrik yang timbul akibat perubahan fluks magnetik.' },
      { id: '7-3', question: 'Sebutkan alat yang menggunakan prinsip induksi!', answer: 'Generator, Dinamo, Transformator.' },
      { id: '7-4', question: 'Apa bunyi Hukum Lenz?', answer: 'Arus induksi selalu menghasilkan medan magnet yang menentang penyebabnya.' },
      { id: '7-5', question: 'Apa fungsi transformator step-up?', answer: 'Meningkatkan tegangan listrik AC.' }
    ]
  },
  {
    id: '8',
    name: 'IPS',
    topic: 'Pembangunan Indonesia',
    icon: '🏢',
    color: 'bg-orange-500',
    cards: [
      { id: '8-1', question: 'Apa fokus pembangunan pada masa Orde Lama?', answer: 'Pembangunan mental dan karakter bangsa serta kedaulatan politik.' },
      { id: '8-2', question: 'Apa nama program pembangunan jangka panjang Orde Baru?', answer: 'Pelita (Pembangunan Lima Tahun).' },
      { id: '8-3', question: 'Apa fokus utama pembangunan di masa Reformasi?', answer: 'Demokratisasi, desentralisasi (otonomi daerah), dan infrastruktur.' },
      { id: '8-4', question: 'Apa itu MP3EI?', answer: 'Masterplan Percepatan dan Perluasan Pembangunan Ekonomi Indonesia.' },
      { id: '8-5', question: 'Apa tujuan utama pembangunan nasional?', answer: 'Meningkatkan kesejahteraan rakyat secara adil dan merata.' }
    ]
  },
  {
    id: '9',
    name: 'Agama',
    topic: 'Sikap Gereja & Orang Samaria',
    icon: '⛪',
    color: 'bg-purple-500',
    cards: [
      { id: '9-1', question: 'Apa pesan utama perumpamaan Orang Samaria yang murah hati?', answer: 'Kasih tidak memandang perbedaan suku, agama, atau status sosial.' },
      { id: '9-2', question: 'Bagaimana sikap Yesus terhadap perbedaan?', answer: 'Yesus merangkul semua orang, termasuk mereka yang dianggap rendah oleh masyarakat.' },
      { id: '9-3', question: 'Siapa sesama manusia menurut ajaran Kristen?', answer: 'Setiap orang yang membutuhkan pertolongan tanpa syarat.' },
      { id: '9-4', question: 'Apa inti dari Hukum Kasih?', answer: 'Kasihilah Tuhan Allahmu dan kasihilah sesamamu manusia seperti dirimu sendiri.' },
      { id: '9-5', question: 'Mengapa kisah Orang Samaria mengejutkan orang Yahudi?', answer: 'Karena biasanya orang Yahudi dan Samaria bermusuhan, tapi di sini Samaria yang jadi pahlawan.' }
    ]
  },
  {
    id: '10',
    name: 'PPKN',
    topic: 'Kearifan Lokal',
    icon: '🇮🇩',
    color: 'bg-cyan-600',
    cards: [
      { id: '10-1', question: 'Apa pengertian kearifan lokal?', answer: 'Pandangan hidup dan pengetahuan masyarakat lokal dalam mengelola lingkungan.' },
      { id: '10-2', question: 'Sebutkan contoh kearifan lokal di Indonesia!', answer: 'Subak di Bali, Nyepi, Gotong Royong, Sasi di Maluku.' },
      { id: '10-3', question: 'Apa fungsi kearifan lokal dalam pelestarian alam?', answer: 'Memberikan aturan adat untuk menjaga keseimbangan ekosistem.' },
      { id: '10-4', question: 'Mengapa kearifan lokal penting di era globalisasi?', answer: 'Sebagai identitas bangsa dan filter terhadap budaya asing yang tidak sesuai.' },
      { id: '10-5', question: 'Apa hubungan kearifan lokal dengan Pancasila?', answer: 'Kearifan lokal mencerminkan nilai luhur bangsa yang menjadi akar Pancasila.' }
    ]
  },
  {
    id: '11',
    name: 'Seni Budaya',
    topic: 'Tangga Nada Mol & #',
    icon: '🎨',
    color: 'bg-rose-500',
    cards: [
      { id: '11-1', question: 'Apa fungsi tanda kres (#)?', answer: 'Menaikkan nada setengah laras.' },
      { id: '11-2', question: 'Apa fungsi tanda mol (b)?', answer: 'Menurunkan nada setengah laras.' },
      { id: '11-3', question: 'Urutan tangga nada 1 kres adalah...', answer: 'G - A - B - C - D - E - Fis - G.' },
      { id: '11-4', question: 'Urutan tangga nada 1 mol adalah...', answer: 'F - G - A - Bes - C - D - E - F.' },
      { id: '11-5', question: 'Apa itu tanda pugar?', answer: 'Tanda untuk mengembalikan nada ke nada asal (normal).' }
    ]
  },
  {
    id: '12',
    name: 'PJOK',
    topic: 'Senam Lantai',
    icon: '🤸',
    color: 'bg-stone-600',
    cards: [
      { id: '12-1', question: 'Apa itu Roll Depan?', answer: 'Gerakan menggulingkan badan ke depan mulai dari tengkuk, punggung, pinggang, dan panggul.' },
      { id: '12-2', question: 'Apa kunci keseimbangan saat melakukan Handstand?', answer: 'Kekuatan otot lengan, perut, dan fokus pandangan.' },
      { id: '12-3', question: 'Apa sebutan lain untuk meroda?', answer: 'Cartwheel.' },
      { id: '12-4', question: 'Sebutkan alat bantu dalam senam lantai!', answer: 'Matras.' },
      { id: '12-5', question: 'Apa manfaat senam lantai?', answer: 'Meningkatkan kelenturan, kekuatan otot, dan koordinasi tubuh.' }
    ]
  },
  {
    id: '13',
    name: 'TIK',
    topic: 'Bahasa Prompt',
    icon: '💻',
    color: 'bg-slate-700',
    cards: [
      { id: '13-1', question: 'Apa itu prompt engineering?', answer: 'Seni dan teknik menyusun instruksi teks agar AI memberikan hasil yang optimal.' },
      { id: '13-2', question: 'Sebutkan elemen prompt yang baik!', answer: 'Konteks, Instruksi, Input Data, dan Format Output.' },
      { id: '13-3', question: 'Apa itu "Few-shot prompting"?', answer: 'Memberikan beberapa contoh pola jawaban kepada AI sebelum meminta jawaban akhir.' },
      { id: '13-4', question: 'Apa kegunaan sistem instruksi (System Prompt)?', answer: 'Menentukan persona atau aturan dasar perilaku AI selama percakapan.' },
      { id: '13-5', question: 'Apa itu "Chain-of-thought prompting"?', answer: 'Meminta AI untuk menjelaskan langkah-langkah penalarannya sebelum memberikan jawaban.' }
    ]
  }
];
