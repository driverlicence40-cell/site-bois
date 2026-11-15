/* ===== TRANSLATIONS — add a language by copying a block and adding a button in the HTML ===== */
const I18N = {
  en: {
    page_title: "Garden State Firewood – Dry Firewood, Delivered",
    page_desc: "Dry firewood delivered to your door. Build your order by the stere.",
    top_call: "Call or text us:", top_yard: "Yard: New Jersey",
    brand_aria: "Home",
    nav_home: "Home", nav_gallery: "Gallery", nav_pricing: "Pricing", nav_order: "Order", nav_contact: "Contact",
    hero_title: "Dry firewood, delivered and stacked at your home.",
    hero_text: "Oak, hornbeam and beech, seasoned for at least two years. You choose the species, the log length and the number of steres, and we deliver on the date we agree on.",
    hero_btn1: "View the gallery", hero_btn2: "Build my order",
    gal_title: "Our Gallery", gal_lead: "See our firewood, our deliveries and our yard in pictures.",
    gal_alt1: "Large pile of firewood", gal_alt2: "Outdoor firewood stack", gal_alt3: "Firewood delivery truck", gal_alt4: "Firewood moisture meter",
    price_title: "Pricing per stere", price_lead: "Estimated prices, delivery not included. Choose the log length that works for you.",
    per_stere: "/ stere", badge: "Most popular",
    len_25: "10 in (25 cm)", len_33: "13 in (33 cm)", len_40: "16 in (40 cm)", len_50: "20 in (50 cm)",
    alt_25: "10 in (25 cm) logs", alt_33: "13 in (33 cm) logs", alt_40: "16 in (40 cm) logs", alt_50: "20 in (50 cm) logs",
    desc_25: "Small size, ideal for small stoves and compact inserts.",
    desc_33: "The most versatile size for most stoves and inserts.",
    desc_40: "Ideal for large fireplaces and wider inserts.",
    desc_50: "For large fireplaces or standard-size hearths.",
    order_title: "Build my order",
    order_lead: "The price updates with every choice. One stere equals 1 m³ (about 35 cubic feet) of stacked logs.",
    legend_species: "Species", legend_length: "Log length", legend_zone: "Delivery zone", legend_qty: "Quantity (3 steres minimum)",
    qty_remove: "Remove one stere", qty_add: "Add one stere",
    recap_title: "Your order",
    r_species: "Species", r_length: "Length", r_qty: "Quantity", r_wood: "Firewood", r_delivery: "Delivery", total: "Total",
    ph_name: "Your name", ph_tel: "Your phone number", ph_addr: "Delivery address",
    btn_whatsapp: "Complete on WhatsApp",
    order_note: "Your order opens in WhatsApp, ready to send with all the details. Payment on delivery.",
    contact_title: "Contact", contact_lead: "Questions about a species, a lead time or a large quantity? Drop us a line.",
    contact_phone: "Phone and WhatsApp:", contact_hours: "Hours: Monday through Saturday, 8 a.m. – 6 p.m.",
    footer_demo: "Demo site",
    lang_other: "Other language", bar_text: "Translate this page into another language:", bar_close: "Close",
    free: "Free", steres: "steres",
    sp_oak: "Oak", sp_oak_info: "Long-lasting, steady coals",
    sp_hornbeam: "Hornbeam", sp_hornbeam_info: "Very hot, lively flame",
    sp_beech: "Beech", sp_beech_info: "Easy to light",
    zone_0: "Under 9 mi (15 km) from the yard", zone_1: "9 to 19 mi (15 to 30 km)", zone_2: "19 to 31 mi (30 to 50 km)", zone_3: "Over 31 mi (50 km)",
    msg_title: "NEW ORDER - Garden State Firewood", msg_customer: "Customer", msg_phone: "Phone", msg_address: "Delivery address",
    msg_details: "Details", msg_species: "Species", msg_length: "Length", msg_qty: "Quantity", msg_zone: "Zone",
    msg_summary: "Summary", msg_wood: "Firewood", msg_delivery: "Delivery", msg_total: "TOTAL"
  },
  fr: {
    page_title: "Garden State Firewood – Bois de chauffage sec livré",
    page_desc: "Bois de chauffage sec livré à domicile. Composez votre commande au stère.",
    top_call: "Appelez ou écrivez-nous :", top_yard: "Dépôt : New Jersey",
    brand_aria: "Accueil",
    nav_home: "Accueil", nav_gallery: "Galerie", nav_pricing: "Tarifs", nav_order: "Commander", nav_contact: "Contact",
    hero_title: "Du bois sec, livré et empilé chez vous.",
    hero_text: "Chêne, charme et hêtre séchés au moins deux ans. Vous choisissez l'essence, la longueur et le nombre de stères, nous livrons à la date convenue.",
    hero_btn1: "Voir la galerie", hero_btn2: "Composer ma commande",
    gal_title: "Notre Galerie", gal_lead: "Découvrez notre bois, nos livraisons et notre dépôt en images.",
    gal_alt1: "Grande pile de bois de chauffage", gal_alt2: "Tas de bois en extérieur", gal_alt3: "Camion de livraison de bois", gal_alt4: "Testeur d'humidité du bois",
    price_title: "Tarifs au stère", price_lead: "Prix indicatifs, livraison non comprise. Choisissez la longueur qui vous convient.",
    per_stere: "/ stère", badge: "Le plus choisi",
    len_25: "25 cm", len_33: "33 cm", len_40: "40 cm", len_50: "50 cm",
    alt_25: "Bûches de 25 cm", alt_33: "Bûches de 33 cm", alt_40: "Bûches de 40 cm", alt_50: "Bûches de 50 cm",
    desc_25: "Petit format, idéal pour les petits poêles et inserts compacts.",
    desc_33: "Le format le plus polyvalent pour la plupart des poêles et inserts.",
    desc_40: "Idéal pour les grands foyers et les inserts plus larges.",
    desc_50: "Pour les grandes cheminées ou les foyers de taille standard.",
    order_title: "Composer ma commande",
    order_lead: "Le prix se met à jour à chaque choix. Un stère correspond à 1 m³ de bûches empilées.",
    legend_species: "Essence", legend_length: "Longueur des bûches", legend_zone: "Zone de livraison", legend_qty: "Quantité (minimum 3 stères)",
    qty_remove: "Retirer un stère", qty_add: "Ajouter un stère",
    recap_title: "Votre commande",
    r_species: "Essence", r_length: "Longueur", r_qty: "Quantité", r_wood: "Bois", r_delivery: "Livraison", total: "Total",
    ph_name: "Votre nom", ph_tel: "Votre téléphone", ph_addr: "Adresse de livraison",
    btn_whatsapp: "Finaliser sur WhatsApp",
    order_note: "La commande s'ouvre dans WhatsApp, prête à envoyer avec toutes les informations. Paiement à la livraison.",
    contact_title: "Contact", contact_lead: "Une question sur une essence, un délai ou une grosse quantité ? Écrivez-nous.",
    contact_phone: "Téléphone et WhatsApp :", contact_hours: "Horaires : du lundi au samedi, 8 h – 18 h",
    footer_demo: "Site de démonstration",
    lang_other: "Autre langue", bar_text: "Traduire cette page dans une autre langue :", bar_close: "Fermer",
    free: "Offerte", steres: "stères",
    sp_oak: "Chêne", sp_oak_info: "Longue durée, braise tenace",
    sp_hornbeam: "Charme", sp_hornbeam_info: "Très chaud, flamme vive",
    sp_beech: "Hêtre", sp_beech_info: "Allumage facile",
    zone_0: "Moins de 15 km du dépôt", zone_1: "15 à 30 km", zone_2: "30 à 50 km", zone_3: "Plus de 50 km",
    msg_title: "NOUVELLE COMMANDE - Garden State Firewood", msg_customer: "Client", msg_phone: "Téléphone", msg_address: "Adresse de livraison",
    msg_details: "Détails", msg_species: "Essence", msg_length: "Longueur", msg_qty: "Quantité", msg_zone: "Zone",
    msg_summary: "Récapitulatif", msg_wood: "Bois", msg_delivery: "Livraison", msg_total: "TOTAL"
  },
  es: {
    page_title: "Garden State Firewood – Leña seca a domicilio",
    page_desc: "Leña seca entregada a domicilio. Arme su pedido por estéreo.",
    top_call: "Llámenos o escríbanos:", top_yard: "Depósito: New Jersey",
    brand_aria: "Inicio",
    nav_home: "Inicio", nav_gallery: "Galería", nav_pricing: "Precios", nav_order: "Pedir", nav_contact: "Contacto",
    hero_title: "Leña seca, entregada y apilada en su casa.",
    hero_text: "Roble, carpe y haya secados al menos dos años. Usted elige la especie, el largo de los leños y la cantidad de estéreos, y nosotros entregamos en la fecha acordada.",
    hero_btn1: "Ver la galería", hero_btn2: "Armar mi pedido",
    gal_title: "Nuestra Galería", gal_lead: "Conozca nuestra leña, nuestras entregas y nuestro depósito en imágenes.",
    gal_alt1: "Gran pila de leña", gal_alt2: "Montón de leña al aire libre", gal_alt3: "Camión de entrega de leña", gal_alt4: "Medidor de humedad de la leña",
    price_title: "Precios por estéreo", price_lead: "Precios orientativos, entrega no incluida. Elija el largo que le convenga.",
    per_stere: "/ estéreo", badge: "El más elegido",
    len_25: "25 cm", len_33: "33 cm", len_40: "40 cm", len_50: "50 cm",
    alt_25: "Leños de 25 cm", alt_33: "Leños de 33 cm", alt_40: "Leños de 40 cm", alt_50: "Leños de 50 cm",
    desc_25: "Tamaño pequeño, ideal para estufas pequeñas e insertos compactos.",
    desc_33: "El tamaño más versátil para la mayoría de las estufas e insertos.",
    desc_40: "Ideal para chimeneas grandes e insertos más anchos.",
    desc_50: "Para chimeneas grandes o hogares de tamaño estándar.",
    order_title: "Armar mi pedido",
    order_lead: "El precio se actualiza con cada elección. Un estéreo equivale a 1 m³ de leños apilados.",
    legend_species: "Especie", legend_length: "Largo de los leños", legend_zone: "Zona de entrega", legend_qty: "Cantidad (mínimo 3 estéreos)",
    qty_remove: "Quitar un estéreo", qty_add: "Agregar un estéreo",
    recap_title: "Su pedido",
    r_species: "Especie", r_length: "Largo", r_qty: "Cantidad", r_wood: "Leña", r_delivery: "Entrega", total: "Total",
    ph_name: "Su nombre", ph_tel: "Su teléfono", ph_addr: "Dirección de entrega",
    btn_whatsapp: "Finalizar por WhatsApp",
    order_note: "El pedido se abre en WhatsApp, listo para enviar con todos los datos. Pago contra entrega.",
    contact_title: "Contacto", contact_lead: "¿Preguntas sobre una especie, un plazo o una cantidad grande? Escríbanos.",
    contact_phone: "Teléfono y WhatsApp:", contact_hours: "Horario: de lunes a sábado, de 8 a 18 h",
    footer_demo: "Sitio de demostración",
    lang_other: "Otro idioma", bar_text: "Traducir esta página a otro idioma:", bar_close: "Cerrar",
    free: "Gratis", steres: "estéreos",
    sp_oak: "Roble", sp_oak_info: "Larga duración, brasas persistentes",
    sp_hornbeam: "Carpe", sp_hornbeam_info: "Muy caliente, llama viva",
    sp_beech: "Haya", sp_beech_info: "Fácil de encender",
    zone_0: "A menos de 15 km del depósito", zone_1: "De 15 a 30 km", zone_2: "De 30 a 50 km", zone_3: "Más de 50 km",
    msg_title: "NUEVO PEDIDO - Garden State Firewood", msg_customer: "Cliente", msg_phone: "Teléfono", msg_address: "Dirección de entrega",
    msg_details: "Detalles", msg_species: "Especie", msg_length: "Largo", msg_qty: "Cantidad", msg_zone: "Zona",
    msg_summary: "Resumen", msg_wood: "Leña", msg_delivery: "Entrega", msg_total: "TOTAL"
  }
};

/* ===== ENGINE ===== */
const DEFAULT_LANG = 'en';   // the site always opens in English unless the visitor chose another language
const browserLang = (navigator.language || DEFAULT_LANG).slice(0,2).toLowerCase();
let LANG = localStorage.getItem('lang') || DEFAULT_LANG;
if (!I18N[LANG]) LANG = DEFAULT_LANG;

const t = key => (I18N[LANG] && I18N[LANG][key]) || I18N[DEFAULT_LANG][key] || key;

function applyLang(lang){
  if (!I18N[lang]) lang = DEFAULT_LANG;
  LANG = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.title = t('page_title');
  const md = document.querySelector('meta[name=description]');
  if (md) md.content = t('page_desc');

  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.querySelectorAll('[data-i18n-alt]').forEach(el => el.alt = t(el.dataset.i18nAlt));
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));

  if (typeof render === 'function') render();   // redraws the order form in the new language
}

document.querySelectorAll('[data-lang]').forEach(b => {
  b.onclick = () => {
    // If Google Translate is active, clear its cookie and reload so the page goes back to our own translations
    if (/translated-(ltr|rtl)/.test(document.documentElement.className)) {
      localStorage.setItem('lang', b.dataset.lang);
      const exp = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; ' + exp;
      document.cookie = 'googtrans=; ' + exp + ' domain=' + location.hostname + ';';
      location.reload();
    } else {
      applyLang(b.dataset.lang);
    }
  };
});

/* ===== "Other language": Google Translate fallback (loaded only when needed) ===== */
const trBar = document.getElementById('translate-bar');
const trBtn = document.getElementById('other-lang');
let gtLoaded = false;

function googleTranslateElementInit(){
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,fr,es,de,pt,it,nl,ar,zh-CN,ru,tr',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
function loadGoogleTranslate(){
  if (gtLoaded) return;
  gtLoaded = true;
  const sc = document.createElement('script');
  sc.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(sc);
}
function toggleTrBar(open){
  trBar.hidden = !open;
  trBtn.setAttribute('aria-expanded', open);
  if (open) loadGoogleTranslate();
}
trBtn.onclick = () => toggleTrBar(trBar.hidden);
document.getElementById('bar-close').onclick = () => toggleTrBar(false);
// Browser language not handled by our dictionaries -> open the translate bar automatically (site stays in English)
if (!I18N[browserLang] && !localStorage.getItem('lang')) toggleTrBar(true);
