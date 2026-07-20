/* =====================================================
   DATABASE PEMBAGIAN TUGAS GURU
   (TUGAS MENGAJAR + TUGAS TAMBAHAN DIGABUNG)
   ===================================================== */

const pembagianTugas = [

 /* ================= ADIYANTO ================= */
{ username:"199411222024211014", jenis:"mengajar", uraian:"PKWU", kelas:"XII C, D, F, G", jp:8 },
{ username:"199411222024211014", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XII A, B", jp:4 },
{ username:"199411222024211014", jenis:"mengajar", uraian:"Kimia", kelas:"XI A", jp:5 },
{ username:"199411222024211014", jenis:"tambahan", uraian:"Kepala Perpustakaan", kelas:"", jp:12 },
{ username:"199411222024211014", jenis:"tambahan", uraian:"Wali Kelas XII D", kelas:"", jp:2 },
{ username:"199411222024211014", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== AGUSTINUS BHAKTI PARRANGAN ========== */
{ username:"196908272002121004", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XI A, B, C, D, E, F, G, H", jp:24 },
{ username:"196908272002121004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== AL MISBAH HAJIHI ========== */
{ username:"199406062020122026", jenis:"mengajar", uraian:"PKN", kelas:"XI A, B, C, D, E, F, XII E, F, G", jp:18 },
{ username:"199406062020122026", jenis:"mengajar", uraian:"Sejarah", kelas:"X A, B, C", jp:6 },
{ username:"199406062020122026", jenis:"tambahan", uraian:"Koor. Projek Kelas X A", kelas:"", jp:2 },
{ username:"199406062020122026", jenis:"tambahan", uraian:"Koor. Projek Kelas X B", kelas:"", jp:2 },
{ username:"199406062020122026", jenis:"tambahan", uraian:"Koor. Projek Kelas X C", kelas:"", jp:2 },
{ username:"199406062020122026", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== ALBINA PURNAMA SARI ========== */
{ username:"198907282024212026", jenis:"mengajar", uraian:"Matematika", kelas:"XII A, B, C, D", jp:16 },
{ username:"198907282024212026", jenis:"mengajar", uraian:"Matematika", kelas:"XI E, F, G", jp:12 },
{ username:"198907282024212026", jenis:"tambahan", uraian:"Wali Kelas XII A", kelas:"", jp:2 },
{ username:"198907282024212026", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== ANASTASIA RENDO ========== */
{ username:"Anastasia Rendo", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XI E, F, G, H, X A, B, C, D, F, G, H, I, J, K", jp:42 },
{ username:"Anastasia Rendo", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== ELISIUS JUNAIDI ========== */
{ username:"199206142020121010", jenis:"mengajar", uraian:"PJOK", kelas:"XII A, B, C, D", jp:12 },
{ username:"199206142020121010", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XII F, G", jp:4 },
{ username:"199206142020121010", jenis:"tambahan", uraian:"Waka Kesiswaan", kelas:"", jp:12 },
{ username:"199206142020121010", jenis:"tambahan", uraian:"Wali Kelas XII C", kelas:"", jp:2 },
{ username:"199206142020121010", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== EMILIANA ========== */
{ username:"197111212007012015", jenis:"mengajar", uraian:"SBK", kelas:"XI A, B, C, D", jp:8 },
{ username:"197111212007012015", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"X A, B, C, D, E, F, G, H, I, J, K", jp:22 },
{ username:"197111212007012015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== ENITA ========== */
{ username:"198712042024212018", jenis:"mengajar", uraian:"Fisika", kelas:"XII A, B, E", jp:15 },
{ username:"198712042024212018", jenis:"mengajar", uraian:"Fisika", kelas:"X H, I, J, K", jp:12 },
{ username:"198712042024212018", jenis:"tambahan", uraian:"Wali Kelas XII B", kelas:"", jp:2 },
{ username:"198712042024212018", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== EVARITUS ABUR ========== */
{ username:"198710262024211005", jenis:"mengajar", uraian:"PJOK", kelas:"XI G, H, X A, B, C, D, E, F", jp:24 },
{ username:"198710262024211005", jenis:"tambahan", uraian:"Wali Kelas X E", kelas:"", jp:2 },
{ username:"198710262024211005", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== FEBE NOVITA SARI ========== */
{ username:"198911302024212019", jenis:"mengajar", uraian:"SBK", kelas:"XII A, B, C, D", jp:8 },
{ username:"198911302024212019", jenis:"mengajar", uraian:"Agama Kristen", kelas:"X A, B, C, D", jp:12 },
{ username:"198911302024212019", jenis:"tambahan", uraian:"Koor. Projek Kelas XI G", kelas:"", jp:2 },
{ username:"198911302024212019", jenis:"tambahan", uraian:"Koor. Projek Kelas XI H", kelas:"", jp:2 },
{ username:"198911302024212019", jenis:"tambahan", uraian:"Koor. Projek Kelas XII H", kelas:"", jp:2 },
{ username:"198911302024212019", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== FETRUS FREDY ========== */
{ username:"198805252024211015", jenis:"mengajar", uraian:"Fisika", kelas:"XI C, D, E, F", jp:20 },
{ username:"198805252024211015", jenis:"mengajar", uraian:"Informatika", kelas:"X A, B, C, D", jp:8 },
{ username:"198805252024211015", jenis:"tambahan", uraian:"Wali Kelas XI E", kelas:"", jp:2 },
{ username:"198805252024211015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== FIDELIS ANASTASIUS F. ========== */
{ username:"Fidelis Anastasius F.", jenis:"mengajar", uraian:"PJOK", kelas:"XI A, B, C, D, E, F", jp:18 },
{ username:"Fidelis Anastasius F.", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XI A, B, C, D, E, F, G", jp:14 },
{ username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Koor. Projek Kelas X J", kelas:"", jp:2 },
{ username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Koor. Projek Kelas X K", kelas:"", jp:2 },
{ username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Koor. Projek Kelas XII G", kelas:"", jp:2 },
{ username:"Fidelis Anastasius F.", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== FLORENS MARSE TANDI ========== */
{ username:"198004182022212015", jenis:"mengajar", uraian:"Ekonomi", kelas:"XI G, H", jp:10 },
{ username:"198004182022212015", jenis:"mengajar", uraian:"PKWU", kelas:"XI A, B, C, D, E, F, G, H", jp:16 },
{ username:"198004182022212015", jenis:"tambahan", uraian:"Wali Kelas XI G", kelas:"", jp:2 },
{ username:"198004182022212015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== GUNAWAN ========== */
{ username:"199208152025211125", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XI F, G, H", jp:15 },
{ username:"199208152025211125", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"X J, K", jp:6 },
{ username:"199208152025211125", jenis:"tambahan", uraian:"Wali Kelas XI F", kelas:"", jp:2 },
{ username:"199208152025211125", jenis:"tambahan", uraian:"Koor. Projek Kelas X D", kelas:"", jp:2 },
{ username:"199208152025211125", jenis:"tambahan", uraian:"Koor. Projek Kelas X E", kelas:"", jp:2 },
{ username:"199208152025211125", jenis:"tambahan", uraian:"Koor. Projek Kelas X F", kelas:"", jp:2 },
{ username:"199208152025211125", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== HASNI SALONDONG ========== */
{ username:"198912092023212008", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XII A, B, C, D", jp:16 },
{ username:"198912092023212008", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI A, B", jp:8 },
{ username:"198912092023212008", jenis:"tambahan", uraian:"Wali Kelas XI A", kelas:"", jp:2 },
{ username:"198912092023212008", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== IMAS KOMALA ========== */
{ username:"198304112024212012", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XII E, F, G", jp:12 },
{ username:"198304112024212012", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"X A, B, C", jp:12 },
{ username:"198304112024212012", jenis:"tambahan", uraian:"Wali Kelas X B", kelas:"", jp:2 },
{ username:"198304112024212012", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== JASMIR ========== */
{ username:"199712312025211047", jenis:"mengajar", uraian:"Agama Islam", kelas:"XI E, F, G, H", jp:12 },
{ username:"199712312025211047", jenis:"mengajar", uraian:"SBK", kelas:"XI G, H", jp:4 },
{ username:"199712312025211047", jenis:"mengajar", uraian:"Agama Islam", kelas:"X A, B, C, D, F, G, H, I, J, K", jp:30 },
{ username:"199712312025211047", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== JUFRIN ========== */
{ username:"198501252022211016", jenis:"mengajar", uraian:"Sosiologi", kelas:"XII C, D", jp:10 },
{ username:"198501252022211016", jenis:"mengajar", uraian:"Sosiologi", kelas:"X A, B, C, D, E, F", jp:18 },
{ username:"198501252022211016", jenis:"tambahan", uraian:"Wali Kelas X C", kelas:"", jp:2 },
{ username:"198501252022211016", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== KATRINA PAREALLO ========== */
{ username:"199502092025212063", jenis:"mengajar", uraian:"Matematika", kelas:"XI H", jp:4 },
{ username:"199502092025212063", jenis:"mengajar", uraian:"Matematika", kelas:"X J, K", jp:8 },
{ username:"199502092025212063", jenis:"mengajar", uraian:"Koding dan AI", kelas:"X A, B, C, D, E, F", jp:12 },
{ username:"199502092025212063", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== LISTIANA ========== */
{ username:"199207252022212013", jenis:"mengajar", uraian:"Kimia", kelas:"XI B, C, D", jp:15 },
{ username:"199207252022212013", jenis:"mengajar", uraian:"Informatika", kelas:"X E, F, G, H, I, J, K", jp:14 },
{ username:"199207252022212013", jenis:"tambahan", uraian:"Wali Kelas XI D", kelas:"", jp:2 },
{ username:"199207252022212013", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== M. NASIR ========== */
{ username:"198207282025211048", jenis:"mengajar", uraian:"Agama Islam", kelas:"XII A, B, C, D, E, F, G", jp:21 },
{ username:"198207282025211048", jenis:"mengajar", uraian:"Agama Islam", kelas:"XI A, B, C, D", jp:12 },
{ username:"198207282025211048", jenis:"mengajar", uraian:"SBK", kelas:"XI E, F", jp:4 },
{ username:"198207282025211048", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MAHDALENA ========== */
{ username:"199209292023212018", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI C, D, E, F", jp:16 },
{ username:"199209292023212018", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"X D, E, F", jp:12 },
{ username:"199209292023212018", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   
/* ========== MALEAKI KARAENG LOLO ========== */
{ username:"197903192024211002", jenis:"mengajar", uraian:"SBK", kelas:"XII E, F, G", jp:6 },
{ username:"197903192024211002", jenis:"mengajar", uraian:"Agama Kristen", kelas:"X E, F, G, H, I, J", jp:18 },
{ username:"197903192024211002", jenis:"tambahan", uraian:"Koor. Projek Kelas XII A", kelas:"", jp:2 },
{ username:"197903192024211002", jenis:"tambahan", uraian:"Koor. Projek Kelas XII B", kelas:"", jp:2 },
{ username:"197903192024211002", jenis:"tambahan", uraian:"Koor. Projek Kelas XII C", kelas:"", jp:2 },
{ username:"197903192024211002", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MARIA DWI O.L. ========== */
{ username:"199910222025212029", jenis:"mengajar", uraian:"Sejarah", kelas:"XII A, B, C, D, E, F, G", jp:14 },
{ username:"199910222025212029", jenis:"mengajar", uraian:"Sejarah", kelas:"XI A, B, C, D, E, F, G, H", jp:16 },
{ username:"199910222025212029", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MARLIN MARIO EVA SUMUAL ========== */
{ username:"197303142024212003", jenis:"mengajar", uraian:"Agama Kristen", kelas:"XI A, B, C, D, E, F, G, H", jp:24 },
{ username:"197303142024212003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MEYDI SUSANTI ========== */
{ username:"198105202011012007", jenis:"mengajar", uraian:"Ekonomi", kelas:"XII E, F, G", jp:15 },
{ username:"198105202011012007", jenis:"mengajar", uraian:"Ekonomi", kelas:"XI E, F", jp:10 },
{ username:"198105202011012007", jenis:"tambahan", uraian:"Koor PKB/PKG", kelas:"", jp:2 },
{ username:"198105202011012007", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MEYLINDA ========== */
{ username:"199505052024212077", jenis:"mengajar", uraian:"Informatika", kelas:"XII F, G", jp:10 },
{ username:"199505052024212077", jenis:"mengajar", uraian:"Informatika", kelas:"XI H", jp:5 },
{ username:"199505052024212077", jenis:"mengajar", uraian:"Koding dan AI", kelas:"XI G", jp:5 },
{ username:"199505052024212077", jenis:"mengajar", uraian:"Koding dan AI", kelas:"X G, H, I, J, K", jp:10 },
{ username:"199505052024212077", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MIRA HENNY ASMIATI ========== */
{ username:"198606212009022001", jenis:"mengajar", uraian:"Geografi", kelas:"XII A, B", jp:10 },
{ username:"198606212009022001", jenis:"mengajar", uraian:"Geografi", kelas:"XI E, F, H", jp:15 },
{ username:"198606212009022001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MUHAMMAD AFWAN MAULANA ========== */
{ username:"200001242024211004", jenis:"mengajar", uraian:"Geografi", kelas:"XI C, D", jp:10 },
{ username:"200001242024211004", jenis:"mengajar", uraian:"Geografi", kelas:"X G, H, I, J, K", jp:15 },
{ username:"200001242024211004", jenis:"tambahan", uraian:"Wali Kelas X G", kelas:"", jp:2 },
{ username:"200001242024211004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== MUHAMMAD NASIR ========== */
{ username:"198902022024211015", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"XI G, H", jp:8 },
{ username:"198902022024211015", jenis:"mengajar", uraian:"Bahasa Indonesia", kelas:"X G, H, I, J, K", jp:20 },
{ username:"198902022024211015", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   
/* ========== MULYADI ========== */
{ username:"198310102022211022", jenis:"mengajar", uraian:"PKN", kelas:"XII A, B, C, D", jp:8 },
{ username:"198310102022211022", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XII C, D, E", jp:6 },
{ username:"198310102022211022", jenis:"mengajar", uraian:"PKN", kelas:"X A, B, C, D, E", jp:10 },
{ username:"198310102022211022", jenis:"tambahan", uraian:"Wali Kelas XII E", kelas:"", jp:2 },
{ username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII D", kelas:"", jp:2 },
{ username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII E", kelas:"", jp:2 },
{ username:"198310102022211022", jenis:"tambahan", uraian:"Koor. Projek Kelas XII F", kelas:"", jp:2 },
{ username:"198310102022211022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NATALIA TIVO ========== */
{ username:"199512052023212025", jenis:"mengajar", uraian:"Geografi", kelas:"XII F", jp:5 },
{ username:"199512052023212025", jenis:"mengajar", uraian:"Geografi", kelas:"X A, B, C, D, E, F", jp:18 },
{ username:"199512052023212025", jenis:"tambahan", uraian:"Wali Kelas X D", kelas:"", jp:2 },
{ username:"199512052023212025", jenis:"tambahan", uraian:"Koor. Projek Kelas XI D", kelas:"", jp:2 },
{ username:"199512052023212025", jenis:"tambahan", uraian:"Koor. Projek Kelas XI E", kelas:"", jp:2 },
{ username:"199512052023212025", jenis:"tambahan", uraian:"Koor. Projek Kelas XI F", kelas:"", jp:2 },
{ username:"199512052023212025", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NATANIEL DEDI AMBA TODING ========== */
{ username:"199612212023211001", jenis:"mengajar", uraian:"Matematika (Tk. Lanjut)", kelas:"XII A, B, F", jp:15 },
{ username:"199612212023211001", jenis:"mengajar", uraian:"Matematika", kelas:"X A, B, C", jp:12 },
{ username:"199612212023211001", jenis:"tambahan", uraian:"Wali Kelas X A", kelas:"", jp:2 },
{ username:"199612212023211001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NINA ROSIDA ========== */
{ username:"199201052014032003", jenis:"mengajar", uraian:"Matematika", kelas:"XII E, F, G", jp:12 },
{ username:"199201052014032003", jenis:"mengajar", uraian:"Matematika", kelas:"XI A, B, C, D", jp:16 },
{ username:"199201052014032003", jenis:"tambahan", uraian:"Wali Kelas XII F", kelas:"", jp:2 },
{ username:"199201052014032003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NOPITA PUTRI NASARI ========== */
{ username:"199411062025212073", jenis:"mengajar", uraian:"Matematika", kelas:"X D, E, F, G, H, I", jp:24 },
{ username:"199411062025212073", jenis:"tambahan", uraian:"Wali Kelas X H", kelas:"", jp:2 },
{ username:"199411062025212073", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NURINTAN TOGATOROP ========== */
{ username:"198711222025212023", jenis:"mengajar", uraian:"Ekonomi", kelas:"X A, B, C, D, E, F, G, H, I", jp:27 },
{ username:"198711222025212023", jenis:"tambahan", uraian:"Wali Kelas X I", kelas:"", jp:2 },
{ username:"198711222025212023", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== NURMAYA SIHOTANG ========== */
{ username:"199108242025212058", jenis:"mengajar", uraian:"Sejarah", kelas:"X D, E", jp:4 },
{ username:"199108242025212058", jenis:"mengajar", uraian:"Sosiologi", kelas:"X G, H, I, J, K", jp:15 },
{ username:"199108242025212058", jenis:"mengajar", uraian:"Sosiologi", kelas:"XI A, B", jp:10 },
{ username:"199108242025212058", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },
   
/* ========== PERAWATI ========== */
{ username:"198602272025212025", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"X B, C, D, E, F, G, H, I", jp:24 },
{ username:"198602272025212025", jenis:"tambahan", uraian:"Wali Kelas X F", kelas:"", jp:2 },
{ username:"198602272025212025", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== PETRONELA SHERLLY ========== */
{ username:"199405162024212036", jenis:"mengajar", uraian:"PKN", kelas:"XI G, H", jp:4 },
{ username:"199405162024212036", jenis:"mengajar", uraian:"Sejarah", kelas:"X F, G, H, I, J, K", jp:12 },
{ username:"199405162024212036", jenis:"mengajar", uraian:"PKN", kelas:"X F, G, H, I, J, K", jp:12 },
{ username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas X G", kelas:"", jp:2 },
{ username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas X H", kelas:"", jp:2 },
{ username:"199405162024212036", jenis:"tambahan", uraian:"Koor. Projek Kelas X I", kelas:"", jp:2 },
{ username:"199405162024212036", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== R ARIEF SIDIK PRAMONO ========== */
{ username:"196703311991031009", jenis:"mengajar", uraian:"Biologi", kelas:"X A, B, C", jp:9 },
{ username:"196703311991031009", jenis:"mengajar", uraian:"PKWU", kelas:"X J, K", jp:4 },
{ username:"196703311991031009", jenis:"tambahan", uraian:"Kepala Laboratorium", kelas:"", jp:12 },
{ username:"196703311991031009", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== RIFKY IBNU ABDUL AZIZ ========== */
{ username:"Rifky Ibnu Abdul Aziz", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XII F, G", jp:4 },
{ username:"Rifky Ibnu Abdul Aziz", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"X A, B, C, D, E, F, G, H, I, J, K", jp:22 },
{ username:"Rifky Ibnu Abdul Aziz", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== RILATI SRI WAHYUNI ========== */
{ username:"199604272024212035", jenis:"mengajar", uraian:"Kimia", kelas:"XI G, H", jp:10 },
{ username:"199604272024212035", jenis:"mengajar", uraian:"Kimia", kelas:"X A, B, C, D, E, F", jp:18 },
{ username:"199604272024212035", jenis:"mengajar", uraian:"Muatan Lokal", kelas:"XI H", jp:2 },
{ username:"199604272024212035", jenis:"tambahan", uraian:"Wali Kelas XI H", kelas:"", jp:2 },
{ username:"199604272024212035", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== ROMI PUSPITA ========== */
{ username:"198903112025212023", jenis:"mengajar", uraian:"Biologi", kelas:"X D, E, F, G, H, I, J, K", jp:24 },
{ username:"198903112025212023", jenis:"tambahan", uraian:"Pembina UKS", kelas:"", jp:2 },
{ username:"198903112025212023", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SATIA LIRI YANTI ========== */
{ username:"199408092024212035", jenis:"mengajar", uraian:"PJOK", kelas:"XII E, F, G", jp:9 },
{ username:"199408092024212035", jenis:"mengajar", uraian:"PJOK", kelas:"X G, H, I, J, K", jp:15 },
{ username:"199408092024212035", jenis:"tambahan", uraian:"Wali Kelas X J", kelas:"", jp:2 },
{ username:"199408092024212035", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SAUL ========== */
{ username:"197107211995021001", jenis:"mengajar", uraian:"Fisika", kelas:"X A, B, C, D, E, F, G", jp:21 },
{ username:"197107211995021001", jenis:"tambahan", uraian:"Waka Kurikulum", kelas:"", jp:12 },
{ username:"197107211995021001", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SITI AMINAH ========== */
{ username:"198908132025212024", jenis:"mengajar", uraian:"PKWU", kelas:"XII A, B, E", jp:6 },
{ username:"198908132025212024", jenis:"mengajar", uraian:"Ekonomi", kelas:"X J, K", jp:6 },
{ username:"198908132025212024", jenis:"mengajar", uraian:"PKWU", kelas:"X A, B, C, D, E, F, G, H, I", jp:18 },
{ username:"198908132025212024", jenis:"tambahan", uraian:"Wali Kelas X K", kelas:"", jp:2 },
{ username:"198908132025212024", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SOPIANA ========== */
{ username:"197908162024212003", jenis:"mengajar", uraian:"Agama Kristen", kelas:"XII A, B, C, D, E, F, G, K", jp:24 },
{ username:"197908162024212003", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== STIVAN MARGUS PICASOUW ========== */
{ username:"198403052022211022", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"XII A, B, C, D, E, F, G", jp:21 },
{ username:"198403052022211022", jenis:"mengajar", uraian:"Bahasa Inggris", kelas:"X A", jp:3 },
{ username:"198403052022211022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SUMARMI ========== */
{ username:"198110172010012022", jenis:"mengajar", uraian:"Kimia", kelas:"XII A, B, C, D", jp:20 },
{ username:"198110172010012022", jenis:"tambahan", uraian:"Waka Sapras", kelas:"", jp:12 },
{ username:"198110172010012022", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== SUSILAWATI ========== */
{ username:"198006132005022004", jenis:"mengajar", uraian:"Biologi", kelas:"XII C, D", jp:10 },
{ username:"198006132005022004", jenis:"mengajar", uraian:"Biologi", kelas:"XI A, B", jp:10 },
{ username:"198006132005022004", jenis:"tambahan", uraian:"Waka Humas", kelas:"", jp:12 },
{ username:"198006132005022004", jenis:"tambahan", uraian:"Penilai Kinerja Guru (PKG)", kelas:"", jp:2 },
{ username:"198006132005022004", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== VIDRICH DENDI ========== */
{ username:"Vidrich Dendi", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XII A, B, C, D, E", jp:10 },
{ username:"Vidrich Dendi", jenis:"mengajar", uraian:"Bimbingan Konseling", kelas:"XI A, B, C, D, E, F, G, H", jp:16 },
{ username:"Vidrich Dendi", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== YOHANA FRANSISKA SELLA ========== */
{ username:"199210132024212038", jenis:"mengajar", uraian:"Kimia", kelas:"XII F, G", jp:10 },
{ username:"199210132024212038", jenis:"mengajar", uraian:"Kimia", kelas:"X G, H, I, J, K", jp:15 },
{ username:"199210132024212038", jenis:"tambahan", uraian:"Wali Kelas XII G", kelas:"", jp:2 },
{ username:"199210132024212038", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== YOSEP ARAKIAN LEPABATANG ========== */
{ username:"198212282024211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XI B, E", jp:10 },
{ username:"198212282024211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XII E, G", jp:10 },
{ username:"198212282024211011", jenis:"tambahan", uraian:"Wali Kelas XI B", kelas:"", jp:2 },
{ username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI A", kelas:"", jp:2 },
{ username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI B", kelas:"", jp:2 },
{ username:"198212282024211011", jenis:"tambahan", uraian:"Koor. Projek Kelas XI C", kelas:"", jp:2 },
{ username:"198212282024211011", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== YUDHA KALVARI ========== */
{ username:"198912262025211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XII C, D", jp:10 },
{ username:"198912262025211011", jenis:"mengajar", uraian:"Sastra Inggris (Tk. Lanjut)", kelas:"XI A, C, D", jp:15 },
{ username:"198912262025211011", jenis:"tambahan", uraian:"Wali Kelas XI C", kelas:"", jp:2 },
{ username:"198912262025211011", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

/* ========== YUVENALIS RAGA GENING ========== */
{ username:"Yuvenalis Raga Gening", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XI A, B, C, D", jp:12 },
{ username:"Yuvenalis Raga Gening", jenis:"mengajar", uraian:"Agama Katolik", kelas:"XII A, B, C, D, E, F, G", jp:21 },
{ username:"Yuvenalis Raga Gening", jenis:"tambahan", uraian:"Guru Wali", kelas:"", jp:2 },

];

window.pembagianTugas = pembagianTugas;
