/* ===== EDIT THESE: prices, delivery fees, WhatsApp number ===== */
const PRIX = {
  oak:      {25:78, 33:75, 40:72, 50:70},
  hornbeam: {25:84, 33:80, 40:77, 50:75},
  beech:    {25:80, 33:76, 40:73, 50:71}
};
const FRAIS = [0, 25, 45, 70];   // delivery fees per zone (zone names are in lang.js)
const WHATSAPP = "15512941211";
const MIN = 3, MAX = 30;
/* ===================================================== */

const $ = id => document.getElementById(id);
const LOCALES = {en:'en-US', fr:'fr-FR', es:'es-ES'};
const usd = n => n.toLocaleString(LOCALES[LANG] || 'en-US', {style:'currency', currency:'USD', maximumFractionDigits:0});
const LONG = [25, 33, 40, 50];
const s = {ess:"oak", lon:33, qte:5, zone:0};

// species / length / zone choices (redrawn on every language change)
function renderChoices(){
  $('essences').innerHTML = Object.keys(PRIX).map((k,i)=>
    `<input type="radio" name="ess" id="e${i}" value="${k}" ${k===s.ess?'checked':''}><label for="e${i}">${t('sp_'+k)}<small>${t('sp_'+k+'_info')}</small></label>`).join('');
  $('longueurs').innerHTML = LONG.map(l=>
    `<input type="radio" name="lon" id="l${l}" value="${l}" ${l===s.lon?'checked':''}><label for="l${l}">${t('len_'+l)}${l==33?`<small>${t('badge')}</small>`:''}</label>`).join('');
  $('zone').innerHTML = FRAIS.map((f,i)=>
    `<option value="${i}" ${i===s.zone?'selected':''}>${t('zone_'+i)} (${f?'+ '+usd(f):t('free')})</option>`).join('');
}

function calc(){
  const pu = PRIX[s.ess][s.lon], frais = FRAIS[s.zone];
  const bois = pu*s.qte, total = bois+frais;
  $('qte').textContent = s.qte;
  $('r-ess').textContent = t('sp_'+s.ess);
  $('r-lon').textContent = t('len_'+s.lon);
  $('r-qte').textContent = `${s.qte} ${t('steres')}`;
  $('r-bois').textContent = `${s.qte} × ${usd(pu)} = ${usd(bois)}`;
  $('r-liv').textContent = frais ? usd(frais) : t('free');
  $('total').textContent = usd(total);
  return {pu, bois, total, frais};
}

function render(){ renderChoices(); calc(); }

$('essences').onchange  = e => { if(e.target.name==='ess'){ s.ess = e.target.value; calc(); } };
$('longueurs').onchange = e => { if(e.target.name==='lon'){ s.lon = +e.target.value; calc(); } };
$('zone').onchange = e => { s.zone = +e.target.value; calc(); };
$('moins').onclick = () => { s.qte = Math.max(MIN, s.qte-1); calc(); };
$('plus').onclick  = () => { s.qte = Math.min(MAX, s.qte+1); calc(); };

// Full WhatsApp order message (written in the language currently selected)
$('form').onsubmit = e => {
  e.preventDefault();
  const c = calc();
  const msg =
    `*${t('msg_title')}*\n\n` +
    `*${t('msg_customer')}:* ${$('nom').value}\n` +
    `*${t('msg_phone')}:* ${$('tel').value}\n` +
    `*${t('msg_address')}:* ${$('adr').value}\n\n` +
    `*${t('msg_details')}:*\n` +
    `- ${t('msg_species')}: ${t('sp_'+s.ess)}\n` +
    `- ${t('msg_length')}: ${t('len_'+s.lon)}\n` +
    `- ${t('msg_qty')}: ${s.qte} ${t('steres')}\n` +
    `- ${t('msg_zone')}: ${t('zone_'+s.zone)}\n\n` +
    `*${t('msg_summary')}:*\n` +
    `${t('msg_wood')}: ${usd(c.bois)}\n` +
    `*${t('msg_total')}: ${usd(c.total)}*`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
};

// mobile menu
const mb = document.querySelector('.menu-btn'), nav = $('menu');
mb.onclick = () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); };
nav.onclick = e => { if(e.target.tagName==='A'){ nav.classList.remove('open'); mb.setAttribute('aria-expanded', false); } };
$('an').textContent = new Date().getFullYear();

applyLang(LANG);   // applies the saved / browser language, then draws the form
