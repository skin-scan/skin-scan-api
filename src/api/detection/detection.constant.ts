import { SkinConditionDto } from './detection.dto';

export const skinConditions: { [key: number]: SkinConditionDto } = {
  0: {
    name: 'Acne and Rosacea',
    assessment:
      'Suatu kondisi kulit yang umum terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati. Jerawat bisa berbentuk komedo, papula, pustula, nodul, atau kista. Rosacea adalah kondisi kronis yang menyebabkan kemerahan pada wajah dan bisa menyebabkan pembuluh darah terlihat, serta terkadang muncul benjolan kecil berisi nanah.\n\nSaran Tindakan: Jaga kebersihan kulit dengan mencuci wajah dua kali sehari dengan sabun pembersih yang ringan, hindari produk yang menyumbat pori-pori, gunakan obat topikal yang mengandung benzoyl peroxide atau salicylic acid, dan konsultasikan dengan dokter kulit jika kondisi memburuk atau tidak membaik dengan perawatan di rumah.',
  },
  1: {
    name: 'Bullous Disease',
    assessment:
      'Penyakit kulit yang ditandai dengan munculnya lepuhan besar (bulla) pada kulit dan selaput lendir. Penyakit ini bisa disebabkan oleh berbagai kondisi, termasuk pemfigoid bulosa dan epidermolisis bulosa, yang seringkali merupakan penyakit autoimun.\n\nSaran Tindakan: Hindari trauma fisik pada kulit, gunakan obat-obatan seperti kortikosteroid atau imunosupresan sesuai petunjuk dokter, dan jaga kebersihan lepuhan untuk mencegah infeksi. Konsultasikan dengan dokter untuk diagnosis dan perawatan yang tepat.',
  },
  2: {
    name: 'Eczema',
    assessment:
      'Kondisi kulit kronis yang menyebabkan kulit gatal, merah, kering, dan pecah-pecah. Jenis eksim yang umum termasuk dermatitis atopik, yang sering terjadi pada anak-anak tetapi dapat berlanjut hingga dewasa.\n\nSaran Tindakan: Gunakan pelembap secara rutin untuk menjaga kelembapan kulit, hindari pemicu seperti sabun keras atau alergen, gunakan obat topikal yang diresepkan oleh dokter seperti kortikosteroid, dan pertimbangkan terapi cahaya jika direkomendasikan. Konsultasikan dengan dokter kulit untuk manajemen jangka panjang.',
  },
  3: {
    name: 'Exanthems and Drug Eruptions',
    assessment:
      'Ruam kulit yang umum terjadi akibat infeksi virus atau reaksi obat. Exanthema sering terlihat pada penyakit anak-anak seperti campak atau rubella, sementara erupsi obat bisa muncul sebagai reaksi alergi terhadap obat tertentu.\n\nSaran Tindakan: Hentikan penggunaan obat yang dicurigai sebagai penyebab dan konsultasikan dengan dokter untuk penggantian obat. Gunakan antihistamin untuk mengurangi gatal dan inflamasi. Penting untuk mendapatkan diagnosis yang tepat dari dokter untuk memastikan perawatan yang sesuai.',
  },
  4: {
    name: 'Healthy',
    assessment:
      'Kulit dalam kondisi sehat tanpa tanda-tanda penyakit kulit. Kulit yang sehat biasanya tampak bersih, lembut, dan tidak mengalami iritasi atau infeksi.\n\nSaran Tindakan: Lanjutkan dengan perawatan kulit yang baik seperti menjaga kebersihan, menggunakan pelembap yang sesuai, melindungi kulit dari sinar matahari dengan menggunakan tabir surya, dan mengonsumsi makanan sehat yang kaya akan nutrisi untuk mendukung kesehatan kulit.',
  },
  5: {
    name: 'Herpes HPV and other STDs',
    assessment:
      'Infeksi kulit yang disebabkan oleh virus seperti herpes simplex (HSV) atau human papillomavirus (HPV). HSV menyebabkan lepuhan berisi cairan di sekitar mulut atau genital, sementara HPV dapat menyebabkan kutil kelamin.\n\nSaran Tindakan: Hindari kontak seksual selama terjadi wabah untuk mencegah penularan, gunakan obat antivirus seperti asiklovir sesuai petunjuk dokter untuk mengurangi gejala, dan pertimbangkan vaksinasi HPV sebagai langkah pencegahan. Konsultasikan dengan dokter untuk pengelolaan jangka panjang dan pemeriksaan rutin.',
  },
  6: {
    name: 'Lupus and other Connective Tissue Diseases',
    assessment:
      'Penyakit autoimun yang mempengaruhi kulit dan jaringan ikat, termasuk lupus eritematosus sistemik (SLE) dan dermatomiositis. Gejala bisa meliputi ruam wajah berbentuk kupu-kupu, kelelahan, nyeri sendi, dan luka pada kulit.\n\nSaran Tindakan: Gunakan obat yang diresepkan oleh dokter seperti kortikosteroid atau imunosupresan untuk mengontrol gejala. Lindungi kulit dari sinar matahari dengan menggunakan tabir surya dan pakaian pelindung. Lakukan pemeriksaan kesehatan rutin untuk memantau kondisi dan mencegah komplikasi.',
  },
  7: {
    name: 'Melanoma Skin Cancer Nevi and Moles',
    assessment:
      'Pertumbuhan sel kulit yang tidak normal dan bisa bersifat kanker, seperti melanoma. Nevi (tahi lalat) dan moles (bintik) adalah pertumbuhan kulit jinak yang bisa berubah menjadi kanker.\n\nSaran Tindakan: Periksa tanda-tanda perubahan pada tahi lalat atau kulit, seperti perubahan ukuran, bentuk, atau warna. Hindari paparan sinar matahari berlebihan dan gunakan tabir surya dengan SPF tinggi. Segera konsultasikan dengan dokter kulit jika ada perubahan mencurigakan untuk pemeriksaan lebih lanjut dan pengobatan dini.',
  },
  8: {
    name: 'Nail Fungus and other Nail Disease',
    assessment:
      'Infeksi jamur pada kuku yang menyebabkan kuku berubah warna, menebal, dan rapuh. Kondisi lain termasuk psoriasis kuku dan paronikia (infeksi pada lipatan kuku).\n\nSaran Tindakan: Jaga kebersihan kuku dan hindari kelembapan berlebih pada kaki dan tangan. Gunakan obat antijamur topikal atau oral sesuai petunjuk dokter. Konsultasikan dengan dokter kulit atau dokter spesialis kuku untuk diagnosis dan perawatan yang tepat.',
  },
  9: {
    name: 'Scabies Lyme Disease and other Infestations and Bites',
    assessment:
      'Kondisi kulit yang disebabkan oleh infestasi parasit seperti tungau scabies atau gigitan serangga seperti kutu. Scabies menyebabkan gatal hebat dan ruam berbintik-bintik kecil, sementara Lyme disease disebabkan oleh gigitan kutu yang terinfeksi Borrelia burgdorferi.\n\nSaran Tindakan: Gunakan obat antiparasit sesuai petunjuk dokter untuk mengobati scabies, dan cuci semua pakaian dan linen dengan air panas. Untuk Lyme disease, konsultasikan dengan dokter untuk diagnosis dan pengobatan antibiotik. Hindari kontak dekat dengan orang yang terinfestasi dan gunakan penolak serangga di daerah yang berisiko tinggi.',
  },
  10: {
    name: 'Seborrheic Keratoses and other Benign Tumors',
    assessment:
      'Pertumbuhan kulit non-kanker yang biasanya muncul sebagai bercak coklat atau hitam dengan permukaan yang kasar dan tampak seperti tertempel. Kondisi ini umumnya tidak menimbulkan rasa sakit atau masalah kesehatan serius.\n\nSaran Tindakan: Biasanya tidak memerlukan perawatan kecuali mengganggu atau menyebabkan ketidaknyamanan. Dapat diangkat dengan prosedur medis seperti krioterapi atau kauterisasi jika diinginkan. Periksakan ke dokter kulit untuk memastikan diagnosis dan membedakan dari pertumbuhan kulit lainnya yang mungkin bersifat ganas.',
  },
  11: {
    name: 'Tinea Ringworm Candidiasis and other Fungal Infections',
    assessment:
      'Infeksi kulit yang disebabkan oleh jamur seperti tinea (kurap) yang menyebabkan ruam berbentuk cincin, dan candidiasis yang sering terjadi di area lembab seperti lipatan kulit.\n\nSaran Tindakan: Gunakan obat antijamur topikal atau oral sesuai petunjuk dokter untuk mengatasi infeksi. Jaga kebersihan dan kekeringan area yang terinfeksi, dan hindari berbagi barang pribadi seperti handuk atau pakaian. Konsultasikan dengan dokter jika infeksi tidak membaik atau sering kambuh.',
  },
  12: {
    name: 'Urticaria Hives',
    assessment:
      'Kondisi kulit yang ditandai dengan munculnya bentol-bentol merah yang gatal akibat reaksi alergi atau penyebab lainnya seperti stres atau infeksi. Hives bisa muncul tiba-tiba dan hilang dalam beberapa jam atau hari.\n\nSaran Tindakan: Hindari pemicu yang diketahui seperti makanan tertentu, obat-obatan, atau faktor lingkungan. Gunakan antihistamin untuk mengurangi gatal dan pembengkakan. Konsultasikan dengan dokter jika gejala tidak membaik atau sering kambuh untuk diagnosis dan perawatan yang lebih lanjut.',
  },
  13: {
    name: 'Vascular Tumors',
    assessment:
      'Pertumbuhan abnormal pada pembuluh darah yang bisa bersifat jinak seperti hemangioma, atau ganas seperti angiosarcoma. Vascular tumors sering terlihat sebagai bintik merah atau ungu pada kulit.\n\nSaran Tindakan: Pemeriksaan rutin untuk memantau perkembangan tumor, dan mungkin memerlukan prosedur medis untuk pengangkatan atau pengobatan jika tumor menyebabkan masalah. Konsultasikan dengan dokter spesialis untuk penanganan lebih lanjut dan perawatan yang sesuai.',
  },
  14: {
    name: 'Vasculitis Photos',
    assessment:
      'Peradangan pada pembuluh darah yang bisa mempengaruhi kulit dan organ lainnya. Vasculitis dapat menyebabkan ruam, luka, dan nyeri pada kulit, serta gejala sistemik seperti demam dan kelelahan.\n\nSaran Tindakan: Gunakan obat anti-inflamasi atau imunosupresan sesuai resep dokter untuk mengurangi peradangan. Jaga kesehatan umum dengan diet seimbang dan olahraga yang baik. Pantau kondisi secara rutin dengan dokter untuk mencegah komplikasi dan menyesuaikan perawatan jika diperlukan.',
  },
  15: {
    name: 'Warts Molluscum and other Viral Infections',
    assessment:
      'Infeksi kulit yang disebabkan oleh virus seperti human papillomavirus (HPV) yang menyebabkan kutil, atau molluscum contagiosum yang menyebabkan benjolan kecil berisi cairan.\n\nSaran Tindakan: Hindari menyentuh atau menggaruk area yang terinfeksi untuk mencegah penyebaran. Gunakan obat topikal atau prosedur medis seperti krioterapi untuk pengangkatan. Jaga kebersihan kulit dan hindari kontak dekat dengan orang lain untuk mencegah penularan. Konsultasikan dengan dokter untuk diagnosis dan perawatan yang tepat.',
  },
};
