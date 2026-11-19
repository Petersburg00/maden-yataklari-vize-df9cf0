// Animasyonlu şemalar. Sahnede slides: ["fig:ad"] ile çağrılır.
// Her öğe (data-s="k") sahnenin k'inci maddesi (pts) ekrana geldiğinde belirir.
(function(){
const C = { mag:"#c0392b", peg:"#d35400", pno:"#8e44ad", hid:"#2471a3", ok:"#1e8449", gr:"#5d6d7e", au:"#b7950b" };
const s = (k, html, cls) => '<div class="fx' + (cls ? " " + cls : "") + '" data-s="' + k + '">' + html + "</div>";
const card = (k, h, b, col) => s(k, '<div class="fcard" style="border-color:' + col + '"><div class="fh" style="background:' + col + '">' + h + '</div><div class="fb">' + b + "</div></div>");
const head = t => '<div class="ftitle">' + t + "</div>";

window.FIGS = {
  // vize haritası
  harita: head("Vize haritası · 23 Kasım") +
    '<div class="fgrid g3">' +
    card(0, "1 · Temel kavramlar", "Tenör, rezerv, cevher/gang<br>Sinjenetik – epijenetik<br>Yatak şekilleri", C.gr) +
    card(1, "2 · Yapı & doku", "Masif, bantlı, stockwork…<br>Ornatım · Eksolüsyon", C.gr) +
    card(2, "3 · İnceleme yöntemleri", "Sıvı kapanım · İzotop · Yaş", C.gr) +
    card(3, "4 · Sınıflama & ergiyikler", "Magma evreleri<br>5 hidrotermal su", C.hid) +
    card(4, "5 · Krom · Ni-Cu · PGE · Fe-Ti-V", "Stratiform ↔ podiform<br>Komatiit, Sudbury", C.mag) +
    card(5, "6 · Kimberlit · karbonatit · pegmatit", "Elmas · NTE · Li-Be", C.peg) +
    card(6, "7 · Greyzen & skarn", "Sn-W · kontak metasomatizma", C.pno) +
    "</div>",

  // konsantrasyon klarkı
  klark: head("Konsantrasyon klarkı (zenginleşme katsayısı)") +
    s(0, '<div class="formula"><span>K</span> = <div class="frac"><b>Minimum işletme tenörü</b><i>Yerkabuğu ortalaması (klark)</i></div></div>') +
    '<div class="fgrid g2">' +
    card(1, "Demir (Fe)", "klark %5 → işletme %25<br><span class=\"big\">≈ 5 kat</span>", C.gr) +
    card(2, "Altın (Au)", "klark çok düşük → <br><span class=\"big\">≈ 2500 kat</span>", C.au) +
    "</div>" + s(3, '<div class="fnote">Klark ne kadar küçükse o kadar çok zenginleşme gerekir.</div>'),

  // sinjenetik / epijenetik
  jenez: head("Cevher ile yan kaya ne zaman oluştu?") +
    '<div class="fgrid g2">' +
    card(0, "SİNJENETİK = eş oluşumlu", "Cevher ve yan kayaç <b>aynı zamanda</b><br>ör. tabakalı (stratiform) yataklar<br>Yaşı = yan kayacın yaşı", C.ok) +
    card(1, "EPİJENETİK = ard oluşumlu", "Cevher yan kayaçtan <b>sonra</b> gelir<br>ör. damarlar, stratabound<br>Yan kayaçtan daha genç", C.mag) +
    "</div>" +
    '<div class="fgrid g3">' +
    card(2, "Parajenez", "Birlikte bulunan mineral topluluğu", C.hid) +
    card(3, "Süksesyon", "Minerallerin oluşum SIRASI", C.hid) +
    card(4, "Teleskopaj", "Yüksek ve düşük T mineralleri iç içe → sıra çıkarılamaz", C.hid) +
    "</div>",

  // morfoloji
  sekil: head("Yatakların dış şekli (morfoloji)") +
    '<div class="fgrid g3">' +
    card(0, "1 · Düzensiz", "Kütle · stok · cep · mercek<br>ör. podiform krom", C.gr) +
    card(1, "2 · Levha", "<b>Stratiform</b>: sinjenetik, km'lerce düzenli<br><b>Stratabound</b>: tabakaya bağlı ama epijenetik<br><b>Damar</b>: yan kayacı keser, hep epijenetik", C.hid) +
    card(4, "3 · Boru / baca", "Derine doğru daralır<br>ör. <b>kimberlit bacası</b> (elmas)", C.peg) +
    "</div>" + s(3, '<div class="fnote">Damar zenginleşmesi: şişme zonu · kırık kesişmesi · litolojiye bağlı</div>'),

  // yapı vs doku
  yapidoku: head("Yapı ↔ Doku") +
    '<div class="fgrid g2">' +
    card(0, "YAPI (structure)", "Gözle, <b>sahada</b>, makroskobik<br>masif · benekli · bilezik · bantlı · oolitik · stockwork · breşik", C.hid) +
    card(1, "DOKU (texture)", "<b>Mikroskopta</b>, laboratuvarda<br>ornatım · eksolüsyon · boşluk dolgusu · deformasyon", C.mag) +
    "</div>",

  // dokular
  doku: head("İki kritik doku") +
    '<div class="fgrid g2">' +
    card(0, "ORNATIM (replasman)", "Çözelti eski minerali kemirip yerine yenisini koyar<br>→ <b>oluşum SIRASINI</b> gösterir", C.hid) +
    card(1, "EKSOLÜSYON (kusma)", "Soğuyunca katı çözelti ikiye ayrılır<br>→ <b>oluşum SICAKLIĞINI</b> gösterir<br>pirotin içinde pentlandit · sfalerit içinde kalkopirit", C.mag) +
    "</div>" + s(2, '<div class="fnote">Damla (ilk aşama) → kafes (son aşama) · Deformasyon: ikizlenme, kink bantları, kopma</div>'),

  // inceleme yöntemleri
  yontem: head("Maden yatağı nasıl incelenir? (7 adım)") +
    '<div class="fgrid g4">' +
    card(0, "1 Saha", "Geometri, yan kayaç ilişkisi<br>Ölçek 1/500–1/2000", C.gr) +
    card(0, "2 Mineraloji", "Parlak kesit, üstten ışık<br><b>Kesen mineral daha genç</b>", C.gr) +
    card(0, "3 Kimya", "Tenör, yararlı/zararlı element", C.gr) +
    card(0, "4 Jeotermometre", "Oluşum sıcaklığı<br>sfalerit rengi, eksolüsyon", C.gr) +
    card(1, "5 Sıvı kapanımı", "<b>Homojenleşme → sıcaklık</b><br><b>Donma → tuzluluk</b>", C.mag) +
    card(1, "6 Kararlı izotop", "H, C, O, S → <b>köken</b><br>δ³⁴S ≈ 0 → magmatik", C.hid) +
    card(1, "7 Yaş tayini", "K/Ar (kil), Rb/Sr, U-Th/Pb", C.pno) +
    "</div>",

  // sınıflama
  sinif: head("Dersin iskeleti: Akçay (2009) sınıflaması") +
    s(0, '<div class="tree"><b>I · MAĞMATİK</b> → A) Bazik-ultrabazik (Cr, Ni-Cu, PGE, Fe-Ti-V) · B) Kimberlit · C) Karbonatit · D) Asidik: pegmatit, greyzen</div>') +
    s(1, '<div class="tree"><b>II · MAĞMATİK-HİDROTERMAL</b> → porfiri Cu-Mo-Au · <b>skarn</b></div>') +
    s(2, '<div class="tree dim"><b>III · HİDROTERMAL</b> → VMS, damarlar (hipo/mezo/epitermal)</div>') +
    s(3, '<div class="tree dim"><b>IV–VI</b> · Sedimanter Pb-Zn · Sedimanter Fe-Mn · Yüzeysel ayrışma (laterit, plaser)</div>') +
    s(4, '<div class="fnote">Vize: I ve II’nin skarn kısmı. Porfiri ve VMS vizeden sonra.</div>'),

  // magma bileşimi
  magma: head("Magmanın bileşimi") +
    '<div class="fgrid g2">' +
    card(0, "Zor uçucu · %90", "Kayaç yapıcı mineraller<br>silikat %90 · sülfür %5-7 · oksit %3-5", C.mag) +
    card(1, "Kolay uçucu · %10", "H₂O, CO₂, HCl, HF, H₂S, SO₂, HBO₃<br>basınç kalkınca aniden gaz olur", C.hid) +
    "</div>" + s(2, '<div class="fnote">Kristaller ayrıldıkça kalan magma uçucularca zenginleşir → iç basınç artar → yan kayaç kırılır</div>'),

  // katılaşma evreleri
  evre: head("Magmanın katılaşma evreleri") +
    '<div class="ladder">' +
    s(0, '<div class="rung" style="--c:' + C.mag + '"><span class="t">1000–700 °C</span><b>1 · Ortomagmatik</b><i>Asıl kütle katılaşır · Cr, Ni, PGE, Fe-Ti</i></div>') +
    s(1, '<div class="rung" style="--c:' + C.peg + '"><span class="t">700–400 °C</span><b>2 · Pegmatitik</b><i>Uçucu ↑ viskozite ↓ → iri kristal · Li, Be, NTE, U, Th</i></div>') +
    s(2, '<div class="rung" style="--c:' + C.pno + '"><span class="t">700–400 °C</span><b>3 · Pnömatolitik</b><i>Gaz basıncı çok yüksek · greyzen (Sn, W) · skarn</i></div>') +
    s(3, '<div class="rung" style="--c:' + C.hid + '"><span class="t">400–100 °C</span><b>4 · Hidrotermal</b><i>Sıcak su · Au, Ag, Cu, Pb, Zn, Sb, Hg</i></div>') +
    "</div>" + s(4, '<div class="fnote">2, 3 ve 4 = post-magmatik evreler</div>'),

  // ortomagmatik mekanizmalar
  orto: head("Magma kendisi nasıl yatak yapar?") +
    '<div class="fgrid g3">' +
    card(0, "1 · Ayrımlanmamış saçınım", "Mineraller dağınık kalır<br><b>yatak OLMAZ</b>", C.gr) +
    card(1, "2 · Kesirli kristallenme", "Ağır kristal tabana çöker<br>(gravite, akıntı, filtreleme)<br>→ <b>Cr, Fe, Ti, V, Pt</b>", C.mag) +
    card(2, "3 · Sıvı karışmazlığı", "Sülfür sıvısı silikattan ayrılır<br>(yağ-su gibi)<br>→ <b>Cu-Ni sülfit</b>", C.hid) +
    "</div>",

  faz: head("Sıvı karışmazlığında elementler nereye gider?") +
    '<div class="fgrid g3">' +
    card(0, "Kalkofil → SÜLFÜR", "Cu · Zn · Pb", C.au) +
    card(1, "Siderofil → OKSİT", "Cr · V · Fe · Ti · P", C.mag) +
    card(2, "Litofil → SİLİKAT", "Fe · Mg · Ca · Na · K", C.hid) +
    "</div>",

  // hidrotermal sular
  cozelti: head("Hidrotermal çözeltinin 5 kaynağı") +
    '<div class="fgrid g5">' +
    card(0, "1 Magmatik", "Jüvenil su<br>>400 °C (500-700)<br>tuzlu ≥%20 NaCl", C.mag) +
    card(1, "2 Meteorik", "Yağmur, nehir, yeraltı suyu<br>ilk ~1 km", C.hid) +
    card(2, "3 Deniz suyu", "Okyanus tabanı kırıkları<br>black smoker, VMS", C.hid) +
    card(3, "4 Formasyon", "Fosil su, Na-Cl'ce çok tuzlu<br>karbonatlı Pb-Zn", C.peg) +
    card(4, "5 Metamorfik", "Sulu → susuz silikat<br>H₂O, CO₂, CH₄<br>altınlı kuvars", C.pno) +
    "</div>",

  tasin: head("Metal nasıl taşınır, nasıl çöker?") +
    '<div class="fgrid g2">' +
    card(0, "TAŞINMA", "Uçucu · serbest iyon · <b>kompleks iyon</b> (en önemli: <b>klor</b> ve <b>sülfür</b> kompleksleri) · kolloid", C.hid) +
    card(1, "ÇÖKELME", "1 Sıcaklık düşer (~20 °C yeter!)<br>2 Basınç düşer → <b>kaynama</b> (kola şişesi)<br>3 Yan kayaçla reaksiyon<br>4 Başka suyla karışma", C.mag) +
    "</div>" + s(2, '<div class="formula small">PbCl₂ + H₂S → <b>PbS</b>↓ + 2HCl</div>'),

  // krom
  krom: head("Krom yatakları: iki tip") +
    '<table class="ftab"><tr><th></th><th>STRATİFORM (Bushveld)</th><th>PODİFORM (Alpin)</th></tr>' +
    '<tr class="fx" data-s="0"><td>Ortam</td><td>Kraton, kıta içi rift</td><td>Ofiyolit, genç orojenik kuşak</td></tr>' +
    '<tr class="fx" data-s="1"><td>Şekil</td><td>Düzgün, km\'lerce tabaka</td><td>Mercek, kafa, cep · nodüler</td></tr>' +
    '<tr class="fx" data-s="2"><td>Yan kayaç</td><td>Gabroik</td><td>Peridotitik (harzburjit, dünit)</td></tr>' +
    '<tr class="fx" data-s="3"><td>Büyüklük</td><td>Çok büyük, homojen</td><td>Küçük, değişken</td></tr>' +
    '<tr class="fx" data-s="4"><td>Kimya</td><td>Fe yüksek → <b>kimyasal</b></td><td>Cr/Fe yüksek → <b>metalurjik, refrakter</b></td></tr>' +
    '<tr class="fx" data-s="5"><td>Konum</td><td>Otokton, az deforme</td><td>Allokton, serpantinleşmiş</td></tr></table>',

  nicu: head("Komatiitik Ni-Cu yatağı: alttan üste") +
    '<div class="stack">' +
    s(2, '<div class="lay" style="background:#e9d8a6">Saçınımlı cevher (zayıf)</div>') +
    s(1, '<div class="lay" style="background:#ca9b52">Ağsal (net-textured) cevher</div>') +
    s(0, '<div class="lay" style="background:#7b4f2c;color:#fff">MASİF sülfür · tabanda, termal erozyon kanalında</div>') +
    "</div>" + s(3, '<div class="fnote">Pentlandit = Ni · Kalkopirit = Cu · Pirotin = Fe sülfür · Ni &gt; Cu</div>'),

  kimb: head("Kimberlit bacası") +
    '<div class="fgrid g3">' +
    card(0, "Krater fasiyesi", "Yüzey, tüf halkası<br>piroklastik + epiklastik", C.au) +
    card(1, "Diatrem fasiyesi", "Havuç şekilli boru, 80-85° duvar<br>parçalı doku, ksenolit", C.peg) +
    card(2, "Hipabisal fasiyes", "Derinde, masif<br>magmatik doku", C.mag) +
    "</div>" + s(3, '<div class="fnote">Ayrışma: sarı zon (üst) → mavi zon → sert zon (alt)</div>'),

  peg: head("Pegmatit: basit mi karmaşık mı?") +
    '<div class="fgrid g2">' +
    card(0, "BASİT", "Zonlanma yok, homojen<br>→ sadece <b>feldspat ve mika</b>", C.gr) +
    card(1, "KARMAŞIK (kompleks)", "Kenardan merkeze <b>zonlu</b><br>→ Li, Be, Cs, Nb, Ta, Sn, NTE<br>spodümen, lepidolit, beril", C.peg) +
    "</div>" + s(2, '<div class="fnote">Zonlar: kenar → çeper → geçiş → çekirdek (kuvars)</div>'),

  greyzen: head("Greyzen = altere olmuş granit") +
    s(0, '<div class="formula">Granit + F, B, Cl\'li sıcak akışkan → <b>kuvars + muskovit</b> (+ topaz, turmalin, florit)</div>') +
    '<div class="fgrid g2">' +
    card(1, "Nerede?", "Granitin <b>üst dokanağı</b><br>ileri farklılaşmış, peralüminyum, F'ce zengin (çoğu S-tipi)", C.pno) +
    card(2, "Ne verir?", "<b>Kasiterit SnO₂</b> · <b>Volframit (Fe,Mn)WO₄</b> · molibdenit<br>Türkiye: Celaller (Niğde), Madenbelenitepe (Bursa)", C.au) +
    "</div>",

  skarn: head("Skarn: granit + kireçtaşı buluşması") +
    '<div class="fgrid g3">' +
    card(0, "1 · Kontak metamorfizma", "Isınma, mermer/hornfels<br>Kayaç kırılganlaşır<br><b>cevher YOK</b>", C.gr) +
    card(1, "2 · Prograd metasomatizma", "Sıcak çözelti girer → granat + piroksen<br><b>Metasomatik skarn</b>: cevher başlar<br>Reaksiyon skarnı: cevher yok", C.mag) +
    card(2, "3 · Retrograd (gerileyen)", "Soğuma, yüzey suyu girer<br>sulu silikatlar<br><b>oksit + sülfür cevheri</b>", C.hid) +
    "</div>" + s(3, '<div class="fnote">Endoskarn = granit içinde · Eksoskarn = yan kayaçta (daha büyük) · Cr, Sb, Hg skarnı yok</div>')
};
})();
