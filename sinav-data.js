(function(){
// Vize provası soruları (sinav.html ve calis.html kullanır)
const A = [
  ["m1-6", "Bir Pb-Zn yatağında zenginleşen Cu, Au, Ag gibi elementler hangi gruba girer?", ["Yararlı (tali) elementler", "Zararlı elementler", "Yararı ve zararı olmayan elementler", "Gang elementleri"], "Ana elementlerin yanında işletmeye katkı sağlayan tali elementler yararlıdır."],
  ["m1-5", "Belirli tip cevherleşmelerin çok sayıda örneğinin bir arada görüldüğü bölgeye ne denir?", ["Metalojenik provens (maden kuşağı)", "Parajenez", "Teleskopaj", "Kraton"], "Örnek: Doğu Pontidler VMS kuşağı."],
  ["m3-2", "Bir mineralin oluşum sıcaklığını en doğrudan veren ölçüm hangisidir?", ["Sıvı kapanımında homojenleşme sıcaklığı", "Sıvı kapanımında donma sıcaklığı", "K/Ar yaşı", "δ³⁴S değeri"], "Homojenleşme → sıcaklık; donma → tuzluluk."],
  ["m4-4", "Kısmen kristalleşmiş magmadaki sıvının kristaller arasından sıkılıp yan kayaca itilmesiyle oluşan yataklara ne denir?", ["Magmatik enjeksiyon yatakları", "Skarn yatakları", "Greyzen yatakları", "Plaser yataklar"], "Filtreleme (filtreden geçirme) → magmatik enjeksiyon."],
  ["m4-6", "Hidrotermal çözeltilerde metal taşınmasında en önemli kompleksleri hangileri oluşturur?", ["Klor ve indirgenmiş kükürt", "Oksijen ve azot", "Karbon ve hidrojen", "Flor ve bor"], "Klor kompleksleri (ZnCl₂, CuCl) ve sülfür kompleksleri (Au(HS)₂⁻)."],
  ["m6-1", "Dünya nikel kaynaklarının en büyük kısmı hangi yatak tipindedir?", ["Lateritik yataklar (%54)", "Magmatik sülfür yatakları", "Deniz tabanı nodülleri", "Maden atıkları"], "Laterit %54, magmatik sülfür %35."],
  ["m7-2", "Kimberlit bacasında yüzeyden derine doğru fasiyeslerin sırası hangisidir?", ["Krater → diatrem → hipabisal", "Hipabisal → krater → diatrem", "Diatrem → krater → hipabisal", "Krater → hipabisal → diatrem"], "Krater yüzeyde, diatrem havuç şekilli boru, hipabisal en derinde."],
  ["m7-3", "Karbonatitlerin çevresindeki yan kayaca Na, K, Fe eklenip Si uzaklaşmasıyla gelişen alterasyon hangisidir?", ["Fenitleşme", "Greyzenleşme", "Serpantinleşme", "Kaolenleşme"], "Fenitleşme (fenitizasyon) = alkali metasomatizma."],
  ["m8-2", "Skarnla ilgili hangisi YANLIŞTIR?", ["Skarn, kalsitçe zengin mermerle aynı şeydir", "Granat ve/veya piroksence zengindir", "Kaba tanelidir", "Kireçtaşı reaktif olduğu için en uygun yan kayaçtır"], "Skarn ≠ mermer ≠ hornfels."],
  ["m5-1", "Metalurjik amaçlı kromit için en kritik kimyasal ölçüt hangisidir?", ["Cr/Fe > 2,8", "Cr₂O₃ + Al₂O₃ > %57", "SiO₂ < %8", "Fe < %10"], "Cr₂O₃+Al₂O₃ > %57 ve Fe < %10 refrakter ölçütleridir."]
];
// B: [ref, ifade, doğru mu, açıklama]
const B = [
  ["m1-5", "Sinjenetik yataklar, içinde bulundukları yan kayaçtan daha gençtir.", false, "Sinjenetik = yan kayaçla aynı yaşta. Daha genç olan epijenetiktir."],
  ["m1-3", "Cut-off (işletilebilecek en düşük) tenör, minimum işletme tenöründen düşük olabilir.", true, "Zengin kısımla birlikte işletildiği için daha düşük olabilir."],
  ["m1-2", "Bir yatakta gang olan bir mineral, başka bir yatakta cevher minerali olabilir.", true, "Ör. barit, florit."],
  ["m2-1", "Yapı mikroskopta, doku ise sahada tanımlanır.", false, "Tersi: yapı makroskobik (saha), doku mikroskobik."],
  ["m2-3", "Eksolüsyonun ilk aşaması kafes dokudur.", false, "İlk aşama damla/kapanımlı doku, son aşama kafes doku."],
  ["m3-3", "Belirgin negatif δ³⁴S değerleri bakteriyel aktivite ve sedimanter oluşumu düşündürür.", true, "δ³⁴S ≈ 0 ise magmatik kaynak."],
  ["m4-3", "Pegmatitik ve pnömatolitik evreler yaklaşık 700–400 °C arasında gelişir.", true, "Ortomagmatik 1000–700, hidrotermal 400–100 °C."],
  ["m5-3", "Podiform krom yatakları otoktondur ve deformasyon izi göstermez.", false, "Podiformlar allokton ve deformedir; otokton olan stratiform tiptir."],
  ["m6-1", "Ni-Cu sülfit yataklarında genellikle Cu içeriği Ni'den fazladır.", false, "Ni > Cu; asıl hedef nikeldir."],
  ["m7-4", "Basit pegmatitler Li, Be, Ta gibi nadir metaller için işletilir.", false, "Basit pegmatit → feldspat ve mika; nadir metaller karmaşık (zonlu) pegmatitten."]
];
// C: eşleştirme setleri
const C = [
  { t: "Terimi tanımıyla eşleştir", ref: "m1-5", pairs: [
    ["Parajenez", "Bir yatakta birlikte bulunan mineral topluluğu"],
    ["Süksesyon", "Minerallerin oluşum sırası"],
    ["Tüvenan", "Ocaktan çıktığı gibi, işlenmemiş cevher"],
    ["Ornatım", "Oluşum sırasını gösteren replasman dokusu"],
    ["Stockwork", "Cevherin kılcal çatlak ağında zenginleştiği yapı"]] },
  { t: "Yatağı tipiyle eşleştir", ref: "m8-3", pairs: [
    ["Bushveld (G. Afrika)", "Stratiform krom ve PGE"],
    ["Guleman (Elazığ)", "Podiform (ofiyolitik) krom"],
    ["Sudbury (Kanada)", "Göktaşı çarpmasıyla ilişkili Ni-Cu"],
    ["Celaller (Niğde)", "Greyzen tipi kalay"],
    ["Divriği (Sivas)", "Skarn tipi demir"]] }
];
// D: klasik, her madde eşit puan (toplam 5)
const D = [
  ["m1-2", "Maden yatağı, cevherleşme, cevher minerali, gang minerali ve tenör kavramlarını tanımlayınız.", [
    "Maden yatağı: ekonomik olarak işletilebilen (kâr ettiren) mineral yığışımı",
    "Cevherleşme (zuhur, belirti): günün koşullarında ekonomik olarak işletilemeyen yığışım",
    "Cevher minerali: ekonomik olarak kazanılması hedeflenen mineral (galen, kalkopirit…)",
    "Gang minerali: cevher dışındaki, genelde ekonomik olmayan mineral (kuvars, kalsit…)",
    "Tenör: işletilecek bileşenin cevher kütlesindeki oranı (%, ppm, ppb)"]],
  ["m4-3", "Magmanın katılaşma evrelerini sıcaklık aralıkları ve her evrede oluşan tipik yataklarla birlikte yazınız.", [
    "Ortomagmatik 1000–700 °C: ana kristalizasyon, segregasyonla Cr, Ni (PGE, Fe-Ti)",
    "Pegmatitik 700–400 °C: uçucu ↑ viskozite ↓, iri kristal; Li, Be, NTE, U, Th",
    "Pnömatolitik 700–400 °C: gaz basıncı yüksek, Cl-F'li eriyik; greyzen (Sn, W), kontakta skarn",
    "Hidrotermal 400–100 °C: sıcak su; Au, Ag, Cu, Pb, Zn, Sb, Hg",
    "Ortomagmatikten sonrakiler post-magmatiktir; alterasyon örneği (uralit, kaolen, klorit, serpantin)"]],
  ["m5-3", "Stratiform (Bushveld tipi) ve podiform (Alpin tipi) krom yataklarını karşılaştırınız.", [
    "Ortam: stratiform → kraton (kıta içi) · podiform → ofiyolit, genç orojenik kuşak",
    "Şekil: düzgün, km'lerce tabaka · mercek/kafa/cep, nodüler (bilezik) yapı",
    "Yan kayaç: gabroik · peridotitik (harzburjit, dünit zarı)",
    "Büyüklük ve konum: çok büyük, homojen, otokton · küçük, değişken, allokton, serpantinleşmiş",
    "Kimya/kullanım: Fe yüksek → kimyasal · Cr/Fe yüksek → metalurjik ve refrakter"]],
  ["m4-5", "Hidrotermal çözeltilerin suyu hangi kaynaklardan gelebilir? Kısaca açıklayınız.", [
    "Magmatik (jüvenil): magmadan ayrılan su, >400 °C, tuzlu",
    "Meteorik: yağmur/nehir/yeraltı suyu derine süzülüp ısınır",
    "Deniz suyu: okyanus tabanı kırıklarından sızar (black smoker)",
    "Formasyon suyu: tortulda hapsolmuş fosil su, Na-Cl'ce çok tuzlu, karbonatlı Pb-Zn",
    "Metamorfik su: sulu → susuz silikat dönüşümü; H₂O, CO₂, CH₄; altınlı kuvars damarları"]],
  ["m4-4", "Sıvı karışmazlığı nedir? Elementler hangi fazlarda toplanır? Örnek veriniz.", [
    "Magma kristalleşirken sülfürlü, oksitli ve silikatlı bileşenler ayrı sıvı fazlar oluşturur (yağ-su gibi)",
    "Kalkofil elementler (Cu, Zn, Pb) → sülfür fazı",
    "Siderofil elementler (Cr, V, Fe, Ti, P) → oksit fazı",
    "Litofil elementler (Fe, Mg, Ca, Na, K) → silikat fazı",
    "Örnek: Cu-Ni sülfit yatakları (pentlandit = Ni, kalkopirit = Cu, pirotin)"]],
  ["m8-3", "Skarn nedir? Oluşum aşamalarını yazınız; endoskarn ve eksoskarnı tanımlayınız.", [
    "Tanım: karbonatlı kayacın (kireçtaşı, dolomit) kontak metasomatizmasıyla oluşan, granat + piroksence zengin kaba taneli kalk-silikat kayaç",
    "1. aşama: kontak metamorfizma; kayaç kırılganlaşır, cevher oluşmaz",
    "2. aşama: prograd metasomatizma; granat-piroksen, metasomatik skarn cevheri başlatır (reaksiyon skarnı cevhersiz)",
    "3. aşama: retrograd (gerileyen) alterasyon; sulu silikatlar, Fe-oksit ve sülfürler",
    "Endoskarn: magmatik kayaç içinde · Eksoskarn: yan kayaçta, daha geniş"]]
];
window.SINAV = { A, B, C, D };
})();
