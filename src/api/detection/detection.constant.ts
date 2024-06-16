import { SkinConditionDto } from './detection.dto';

export const skinConditions: { [key: number]: SkinConditionDto } = {
  0: {
    commonName: 'Jerawat',
    medicalName: 'Acne',
    assessment:
      'Suatu kondisi kulit yang umum terjadi ketika folikel rambut tersumbat oleh minyak dan sel kulit mati. Jerawat bisa berbentuk komedo, papula, pustula, nodul, atau kista. Rosacea adalah kondisi kronis yang menyebabkan kemerahan pada wajah dan bisa menyebabkan pembuluh darah terlihat, serta terkadang muncul benjolan kecil berisi nanah.\n\nSaran Tindakan: Jaga kebersihan kulit dengan mencuci wajah dua kali sehari dengan sabun pembersih yang ringan, hindari produk yang menyumbat pori-pori, gunakan obat topikal yang mengandung benzoyl peroxide atau salicylic acid, dan konsultasikan dengan dokter kulit jika kondisi memburuk atau tidak membaik dengan perawatan di rumah.',
  },
  1: {
    commonName: 'Eksim',
    medicalName: 'Eczema',
    assessment:
      'Kondisi kulit kronis yang menyebabkan kulit gatal, merah, kering, dan pecah-pecah. Jenis eksim yang umum termasuk dermatitis atopik, yang sering terjadi pada anak-anak tetapi dapat berlanjut hingga dewasa.\n\nSaran Tindakan: Gunakan pelembap secara rutin untuk menjaga kelembapan kulit, hindari pemicu seperti sabun keras atau alergen, gunakan obat topikal yang diresepkan oleh dokter seperti kortikosteroid, dan pertimbangkan terapi cahaya jika direkomendasikan. Konsultasikan dengan dokter kulit untuk manajemen jangka panjang.',
  },
  2: {
    commonName: '',
    medicalName: 'Healthy',
    assessment:
      'Kulit dalam kondisi sehat tanpa tanda-tanda penyakit kulit. Kulit yang sehat biasanya tampak bersih, lembut, dan tidak mengalami iritasi atau infeksi.\n\nSaran Tindakan: Lanjutkan dengan perawatan kulit yang baik seperti menjaga kebersihan, menggunakan pelembap yang sesuai, melindungi kulit dari sinar matahari dengan menggunakan tabir surya, dan mengonsumsi makanan sehat yang kaya akan nutrisi untuk mendukung kesehatan kulit.',
  },
  3: {
    commonName: 'Herpes',
    medicalName: 'Herpes',
    assessment:
      'Infeksi kulit yang disebabkan oleh virus seperti herpes simplex (HSV) atau human papillomavirus (HPV). HSV menyebabkan lepuhan berisi cairan di sekitar mulut atau genital, sementara HPV dapat menyebabkan kutil kelamin.\n\nSaran Tindakan: Hindari kontak seksual selama terjadi wabah untuk mencegah penularan, gunakan obat antivirus seperti asiklovir sesuai petunjuk dokter untuk mengurangi gejala, dan pertimbangkan vaksinasi HPV sebagai langkah pencegahan. Konsultasikan dengan dokter untuk pengelolaan jangka panjang dan pemeriksaan rutin.',
  },
  4: {
    commonName: 'Lupus',
    medicalName: 'Lupus',
    assessment:
      'Penyakit autoimun yang mempengaruhi kulit dan jaringan ikat, termasuk lupus eritematosus sistemik (SLE) dan dermatomiositis. Gejala bisa meliputi ruam wajah berbentuk kupu-kupu, kelelahan, nyeri sendi, dan luka pada kulit.\n\nSaran Tindakan: Gunakan obat yang diresepkan oleh dokter seperti kortikosteroid atau imunosupresan untuk mengontrol gejala. Lindungi kulit dari sinar matahari dengan menggunakan tabir surya dan pakaian pelindung. Lakukan pemeriksaan kesehatan rutin untuk memantau kondisi dan mencegah komplikasi.',
  },
  5: {
    commonName: 'Melanoma',
    medicalName: 'Melanoma, Nevi, and Moles',
    assessment:
      'Pertumbuhan sel kulit yang tidak normal dan bisa bersifat kanker, seperti melanoma. Nevi (tahi lalat) dan moles (bintik) adalah pertumbuhan kulit jinak yang bisa berubah menjadi kanker.\n\nSaran Tindakan: Periksa tanda-tanda perubahan pada tahi lalat atau kulit, seperti perubahan ukuran, bentuk, atau warna. Hindari paparan sinar matahari berlebihan dan gunakan tabir surya dengan SPF tinggi. Segera konsultasikan dengan dokter kulit jika ada perubahan mencurigakan untuk pemeriksaan lebih lanjut dan pengobatan dini.',
  },
  6: {
    commonName: 'Kurap',
    medicalName: 'Tinea Ringworm',
    assessment:
      'Infeksi kulit yang disebabkan oleh jamur seperti tinea (kurap) yang menyebabkan ruam berbentuk cincin, dan candidiasis yang sering terjadi di area lembab seperti lipatan kulit.\n\nSaran Tindakan: Gunakan obat antijamur topikal atau oral sesuai petunjuk dokter untuk mengatasi infeksi. Jaga kebersihan dan kekeringan area yang terinfeksi, dan hindari berbagi barang pribadi seperti handuk atau pakaian. Konsultasikan dengan dokter jika infeksi tidak membaik atau sering kambuh.',
  },
  7: {
    commonName: 'Biduran',
    medicalName: 'Urticaria Hives',
    assessment:
      'Kondisi kulit yang ditandai dengan munculnya bentol-bentol merah yang gatal akibat reaksi alergi atau penyebab lainnya seperti stres atau infeksi. Hives bisa muncul tiba-tiba dan hilang dalam beberapa jam atau hari.\n\nSaran Tindakan: Hindari pemicu yang diketahui seperti makanan tertentu, obat-obatan, atau faktor lingkungan. Gunakan antihistamin untuk mengurangi gatal dan pembengkakan. Konsultasikan dengan dokter jika gejala tidak membaik atau sering kambuh untuk diagnosis dan perawatan yang lebih lanjut.',
  },
  8: {
    commonName: 'Kutil',
    medicalName: 'Warts Molluscum',
    assessment:
      'Infeksi kulit yang disebabkan oleh virus seperti human papillomavirus (HPV) yang menyebabkan kutil, atau molluscum contagiosum yang menyebabkan benjolan kecil berisi cairan.\n\nSaran Tindakan: Hindari menyentuh atau menggaruk area yang terinfeksi untuk mencegah penyebaran. Gunakan obat topikal atau prosedur medis seperti krioterapi untuk pengangkatan. Jaga kebersihan kulit dan hindari kontak dekat dengan orang lain untuk mencegah penularan. Konsultasikan dengan dokter untuk diagnosis dan perawatan yang tepat.',
  },
};
