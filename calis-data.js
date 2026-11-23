// Ezber çalışmaları için listeler ve eşleştirme setleri.
// Hepsi anlatımdaki maddelerden (data.js → pts) ve vize provasından (sinav-data.js) aynen alınmıştır.
// ref = anlatımdaki bölüm kimliği.
window.EZBER = {
  // Sırala & kodla: sıra önemli listeler. Aynı "r" değerine sahip maddelerin sırası serbest.
  siralar: [
    { ref: "m4-3", t: "Magmanın katılaşma evreleri", yon: "yüksek sıcaklıktan düşüğe", items: [
      { x: "Ortomagmatik", d: "1000–700 °C · Cr, Ni", r: 1 },
      { x: "Pegmatitik", d: "700–400 °C · iri kristal · NTE, Li, Th, U", r: 2 },
      { x: "Pnömatolitik", d: "700–400 °C · greyzen (Sn, W), skarn", r: 2 },
      { x: "Hidrotermal", d: "400–100 °C · Au, Ag, Cu, Pb, Zn, Sb, Hg", r: 3 }] },
    { ref: "m4-1", t: "Lindgren sıcaklık sınıfları", yon: "sıcaktan soğuğa", items: [
      { x: "Hipotermal", d: "300–500 °C" },
      { x: "Mezotermal", d: "200–300 °C" },
      { x: "Epitermal", d: "50–200 °C" }] },
    { ref: "m3-1", t: "Cevher yatağı incelemesinin 7 adımı", yon: "1'den 7'ye", items: [
      { x: "Saha" }, { x: "Mineraloji-petrografi" }, { x: "Kimya" }, { x: "Jeotermometre" },
      { x: "Sıvı kapanımı" }, { x: "Kararlı izotop" }, { x: "Yaş tayini" }] },
    { ref: "m4-4", t: "Magmanın kendisinden yatak oluşumu", yon: "anlatımdaki sırayla (1–3)", items: [
      { x: "Ayrımlanmamış saçınım", d: "mineraller dağınık → yatak olmaz" },
      { x: "Kesirli kristallenme", d: "ağır kristaller tabana çöker → Cr, Fe, Ti, V, Pt" },
      { x: "Sıvı karışmazlığı", d: "sülfür sıvısı silikattan ayrılır → Cu-Ni" }] },
    { ref: "m4-5", t: "Hidrotermal çözeltilerin 5 kaynağı", yon: "anlatımdaki sırayla (1–5)", items: [
      { x: "Magmatik (jüvenil)", d: ">400 °C · tuzlu (≥%20 NaCl)" },
      { x: "Meteorik", d: "yağmur, nehir, yeraltı suyu · ilk ~1 km" },
      { x: "Deniz suyu", d: "okyanus tabanı kırıkları → black smoker" },
      { x: "Formasyon suyu", d: "fosil su · Na-Cl'ce çok tuzlu · karbonatlı Pb-Zn" },
      { x: "Metamorfik su", d: "sulu → susuz silikat · altınlı kuvars damarları" }] },
    { ref: "m1-3", t: "Rezerv sınıfları", yon: "anlatımdaki sırayla", items: [
      { x: "Kesin (görünür)" }, { x: "Muhtemel" }, { x: "Mümkün" }, { x: "Potansiyel" }, { x: "Jeolojik" }] },
    { ref: "m5-1", t: "Kromit tüketimi", yon: "büyükten küçüğe", items: [
      { x: "Metalurjik", d: "%50" }, { x: "Refrakter", d: "%35" }, { x: "Kimyasal", d: "%15" }] },
    { ref: "m6-2", t: "Komatiitik Ni-Cu cevheri", yon: "tabandan yukarı", items: [
      { x: "Masif" }, { x: "Ağsal" }, { x: "Saçınımlı" }] },
    { ref: "m7-2", t: "Kimberlit fasiyesleri", yon: "yukarıdan aşağı", items: [
      { x: "Krater", d: "yüzey, tüf halkası" },
      { x: "Diatrem", d: "havuç şekilli, dik duvarlı" },
      { x: "Hipabisal", d: "derinde, masif, magmatik doku" }] },
    { ref: "m7-1", t: "Kimberlitte ayrışma zonları", yon: "anlatımdaki sırayla", items: [
      { x: "Sarı zon" }, { x: "Mavi zon" }, { x: "Sert zon" }] },
    { ref: "m7-4", t: "Karmaşık pegmatitin zonları", yon: "kenardan çekirdeğe", items: [
      { x: "Kenar" }, { x: "Çeper" }, { x: "Geçiş" }, { x: "Çekirdek" }] },
    { ref: "m8-3", t: "Skarn oluşum aşamaları", yon: "1'den 3'e", items: [
      { x: "Kontak metamorfizma", d: "kayaç ısınır, kırılganlaşır · cevher yok" },
      { x: "Prograd metasomatizma", d: "granat + piroksen · cevher başlar" },
      { x: "Retrograd (gerileyen)", d: "soğuma, yüzey suyu · Fe-oksit ve sülfürler" }] },
    { ref: "m4-6", t: "Hidrotermal çözeltiden çökelme nedenleri", yon: "anlatımdaki sırayla (1–4)", items: [
      { x: "Sıcaklık düşüşü", d: "en etkili · ~20 °C yeter" },
      { x: "Basınç düşüşü", d: "kaynama" },
      { x: "Yan kayaçla reaksiyon" },
      { x: "Karışma" }] }
  ],

  // Eşleştir: sol ↔ sağ
  esler: [
    { ref: "m1-2", t: "Temel kavramlar", pairs: [
      ["Maden yatağı", "Ekonomik olarak işletilebilen mineral yığışımı"],
      ["Cevherleşme (zuhur)", "Bugünkü koşullarda ekonomik değil"],
      ["Gang minerali", "İşe yaramayan eşlikçi"],
      ["Tüvenan", "Ocaktan çıktığı gibi, hiç işlenmemiş cevher"],
      ["Tenör", "Değerli bileşenin cevherdeki oranı"],
      ["Cut-off grade", "İşletmeye katılan en düşük tenör"]] },
    { ref: "m1-5", t: "Oluşum kavramları", pairs: [
      ["Sinjenetik", "Cevher + yan kayaç aynı anda"],
      ["Epijenetik", "Cevher yan kayaçtan sonra"],
      ["Parajenez", "Birlikte bulunan mineral topluluğu"],
      ["Süksesyon", "Minerallerin oluşum sırası"],
      ["Teleskopaj", "Yüksek ve düşük sıcaklık mineralleri iç içe"],
      ["Metalojenik provens", "Maden bölgesi/kuşağı"]] },
    { ref: "m1-6", t: "Element ve metal grupları", pairs: [
      ["Kıymetli", "Au, Ag, PGE"],
      ["Baz metal", "Cu, Pb, Zn, Sn"],
      ["Radyoaktif", "U, Th, Ra"],
      ["Zararlı (Fe yatağında)", "As ve P"],
      ["Etkisiz", "Gangdaki Si, Ca, K, Na, Al"]] },
    { ref: "m1-7", t: "Yatak şekilleri", pairs: [
      ["Düzensiz", "Kütle, stok, cep, mercek · podiform krom"],
      ["Stratiform", "Tabakaya paralel, sinjenetik · Bushveld"],
      ["Stratabound", "Benzer görünür ama epijenetik"],
      ["Damar", "Yan kayacı keser · her zaman epijenetik"],
      ["Boru/baca", "Derine daralır · kimberlit"]] },
    { ref: "m2-1", t: "Cevher yapıları", pairs: [
      ["Masif", "Tamamı cevher"],
      ["Benekli", "Düzensiz kümeler · Kop kromu"],
      ["Bilezik/halkalı", "Podiform kroma özgü"],
      ["Bantlı", "Dünit içinde ince kromit bantları"],
      ["Oolitik/pizolitik", "Küresel yumrular · sedimanter Fe-Mn, boksit"],
      ["Stockwork", "Kılcal çatlak ağında cevher"]] },
    { ref: "m2-2", t: "Boşluk dolgusu yapıları", pairs: [
      ["Yollu", "Çeperden merkeze bant bant"],
      ["Taraklı", "Karşılıklı büyüyen iri kuvars kristalleri"],
      ["Kolloform", "Çekirdek etrafında halka halka"]] },
    { ref: "m2-3", t: "Dokular ve kurallar", pairs: [
      ["Ornatım", "Oluşum SIRASI"],
      ["Eksolüsyon", "Oluşum SICAKLIĞI"],
      ["Damla/kapanımlı doku", "Eksolüsyonun ilk aşaması"],
      ["Kafes doku", "Eksolüsyonun son aşaması"],
      ["Kesen mineral", "Kesilenden daha genç"]] },
    { ref: "m3-2", t: "Sıvı kapanımı ve izotoplar", pairs: [
      ["Homojenleşme sıcaklığı", "Oluşum sıcaklığı"],
      ["Donma sıcaklığı", "Tuzluluk"],
      ["δ³⁴S ≈ 0", "Magmatik, derin"],
      ["Negatif δ³⁴S (−10…−40)", "Bakteri / sedimanter"],
      ["O + H izotopları", "Suyun kökeni"]] },
    { ref: "m3-3", t: "İzotop standartları ve yaş", pairs: [
      ["O ve H standardı", "SMOW"],
      ["C standardı", "PDB"],
      ["S standardı", "CDT (meteorit troiliti)"],
      ["Kil yaşı", "K/Ar"],
      ["Kapanım sıvısı yaşı", "Rb/Sr"]] },
    { ref: "m4-1", t: "Sınıflamalar", pairs: [
      ["Lilley (1926)", "Kullanım alanına göre"],
      ["Niggli, Lindgren, Schneiderhöhn", "Jenetik"],
      ["Raguin", "Jeolojik"],
      ["Akçay (2009)", "Dersin iskeleti, yan kayaca göre"]] },
    { ref: "m4-4", t: "Sıvı karışmazlığı: elementler hangi faza?", pairs: [
      ["Kalkofil (Cu, Zn, Pb)", "Sülfür fazı"],
      ["Siderofil (Cr, V, Fe, Ti, P)", "Oksit fazı"],
      ["Litofil (Fe, Mg, Ca, Na, K)", "Silikat fazı"]] },
    { ref: "m4-3", t: "Alterasyonlar", pairs: [
      ["Uralitleşme", "Piroksen → amfibol"],
      ["Kaolenleşme", "Feldspat → kaolen"],
      ["Kloritleşme", "Mika → klorit"],
      ["Serpantinleşme", "Olivin → serpantin"],
      ["Fenitleşme", "Na, K, Fe eklenir, Si uzaklaşır"],
      ["Greyzen", "Granit → kuvars + muskovit"]] },
    { ref: "m4-5", t: "Hidrotermal su kaynakları", pairs: [
      ["Magmatik (jüvenil)", ">400 °C, tuzlu (≥%20 NaCl)"],
      ["Meteorik", "Yağmur, nehir, yeraltı suyu · ilk ~1 km"],
      ["Deniz suyu", "Black smoker"],
      ["Formasyon suyu", "Fosil su · karbonatlı Pb-Zn"],
      ["Metamorfik su", "Altınlı kuvars damarları"]] },
    { ref: "m5-1", t: "Krom ölçütleri ve rakamlar", pairs: [
      ["Metalurjik kromit", "Cr/Fe > 2,8"],
      ["Refrakter kromit", "Cr₂O₃ + Al₂O₃ > %57"],
      ["Paslanmaz çelik", "≥ %11 Cr"],
      ["Podiform kromit", "Cr₂O₃ ≈ %55, Cr/Fe 2–3,3"],
      ["Türkiye krom rezervi", "Dünyada 6."]] },
    { ref: "m5-3", t: "Stratiform ↔ podiform krom", pairs: [
      ["Stratiform: ortam", "Kraton (kıta içi)"],
      ["Podiform: ortam", "Ofiyolit, genç orojenik kuşak"],
      ["Stratiform: konum", "Otokton, deformasyon yok"],
      ["Podiform: konum", "Allokton, serpantinleşmiş"],
      ["Stratiform: kullanım", "Fe yüksek → kimyasal"],
      ["Podiform: kullanım", "Cr/Fe yüksek → metalurjik, refrakter"]] },
    { ref: "m6-1", t: "Mineral → element (1)", pairs: [
      ["Kromit", "Cr"],
      ["Pentlandit", "Ni"],
      ["Kalkopirit", "Cu"],
      ["İlmenit", "Ti"],
      ["Kasiterit", "Sn"]] },
    { ref: "m7-3", t: "Mineral → element (2)", pairs: [
      ["Volframit", "W"],
      ["Spodümen, lepidolit", "Li"],
      ["Beril", "Be"],
      ["Piroklor", "Nb"],
      ["Monazit, bastnasit", "NTE"]] },
    { ref: "m6-3", t: "Dünya yatakları", pairs: [
      ["Bushveld (G. Afrika)", "Stratiform krom + PGE · kritik zon"],
      ["Sudbury (Kanada)", "Göktaşı çarpması · en büyük Ni"],
      ["Kambalda (Avustralya)", "Komatiitle ilişkili Ni-Cu"],
      ["Tellnes (Norveç)", "En büyük ilmenit, anortozit içinde"],
      ["Great Dyke (Zimbabve)", "532 km"],
      ["Stillwater (ABD)", "J-M Reef Pt-Pd"]] },
    { ref: "m8-3", t: "Türkiye yatakları", pairs: [
      ["Guleman (Elazığ)", "Podiform krom"],
      ["Celaller (Niğde)", "Greyzen Sn"],
      ["Divriği (Sivas)", "Skarn Fe"],
      ["Uludağ", "Skarn W (şeelit)"],
      ["Azıtepe", "Fe-Ti-V"],
      ["Akdağmadeni, Keban", "Pb-Zn skarn"]] },
    { ref: "m7-1", t: "Rakamlar", pairs: [
      ["Elmas oluşumu", "~60 kbar, 870 °C"],
      ["1 karat", "0,2 g"],
      ["Komatiit", "MgO > %18 · 1400–1600 °C"],
      ["Fe konsantrasyon klarkı", "≈ 5 kat"],
      ["Au konsantrasyon klarkı", "≈ 2500 kat"],
      ["Dünya Ni kaynağı", "%54 laterit"]] },
    { ref: "m8-2", t: "Skarn", pairs: [
      ["Endoskarn", "Magmatik kayaç içinde (küçük)"],
      ["Eksoskarn", "Yan kayaçta (büyük, km'lerce)"],
      ["Kontak metamorfizma", "Cevher yok"],
      ["Prograd metasomatizma", "Granat + piroksen"],
      ["Retrograd", "Fe-oksit ve sülfürler"],
      ["Skarnı olmayan metaller", "Cr, Sb, Hg"]] }
  ]
};
