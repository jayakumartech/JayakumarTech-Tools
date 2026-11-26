const tools=[
['JK PDF Studio','ஜெயா PDF ஸ்டுடியோ','Merge, split, compress, rotate and manage PDF files.','PDF இணைத்தல், பிரித்தல், சுருக்குதல் மற்றும் பல.','documents','▤','JayaKumar-PDF-Studio'],
['FormFit India','FormFit India','Prepare passport photos and signatures for online forms.','விண்ணப்பங்களுக்கான புகைப்படம் மற்றும் கையொப்பம் தயார் செய்யுங்கள்.','image','▧','JayaKumar-FormFit-India'],
['ImageKit Pro','ImageKit Pro','Resize, crop and compress images.','படங்களை resize, crop மற்றும் compress செய்யுங்கள்.','image','▧','JayaKumar-ImageKit'],
['Smart QR India','Smart QR India','Create UPI, Wi-Fi, contact and website QR codes.','UPI, Wi-Fi, contact மற்றும் website QR உருவாக்குங்கள்.','business','▦','JayaKumar-Smart-QR'],
['GST Invoice Maker','GST Invoice Maker','Create invoices with Indian GST calculations.','இந்திய GST கணக்கீட்டுடன் invoice உருவாக்குங்கள்.','business','₹','JayaKumar-GST-Invoice'],
['Pocket Finance','Pocket Finance','Track income, expenses, budgets and savings.','வருமானம், செலவுகள், பட்ஜெட் மற்றும் சேமிப்பைக் கண்காணியுங்கள்.','business','◉','JayaKumar-Pocket-Finance'],
['India Tax Calculator','India Tax Calculator','Estimate income tax and compare tax regimes.','வருமான வரியை மதிப்பிட்டு tax regime ஒப்பிடுங்கள்.','business','％','JayaKumar-India-Tax'],
['VideoKit','VideoKit','Browser-based video utilities and basic editing.','Browser-ல் வீடியோ பயன்பாடுகள் மற்றும் editing.','media','▶','JayaKumar-VideoKit'],
['AudioKit','AudioKit','Trim, join and adjust audio files.','Audio கோப்புகளை trim, join செய்யுங்கள்.','media','♫','JayaKumar-AudioKit'],
['TextMaster','TextMaster','Count words, format text and remove duplicates.','சொற்களை எண்ணி text format செய்து duplicates நீக்குங்கள்.','text','T','JayaKumar-TextMaster'],
['Tamil Typing Studio','Tamil Typing Studio','Tamil typing and Unicode text utilities.','தமிழ் தட்டச்சு மற்றும் Unicode கருவிகள்.','text','அ','JayaKumar-Tamil-Typing'],
['JSON Toolkit','JSON Toolkit','Format, validate and minify JSON data.','JSON தரவை format, validate செய்யுங்கள்.','developer','{}','JayaKumar-JSON-Toolkit'],
['WebDev Toolbox','WebDev Toolbox','Color, Base64, URL encoding and developer helpers.','Color, Base64, URL encoding கருவிகள்.','developer','⌘','JayaKumar-WebDev-Toolbox'],
['India Unit Converter','India Unit Converter','Convert land, length, weight and everyday units.','நிலம், நீளம், எடை உள்ளிட்ட அலகுகளை மாற்றுங்கள்.','utilities','⇄','JayaKumar-Unit-Converter'],
['EMI & Loan Calculator','EMI & Loan Calculator','Calculate EMI, interest and repayment schedules.','EMI, வட்டி மற்றும் கடன் கணக்கீடு.','utilities','₹','JayaKumar-EMI-Calculator'],
['Electricity Calculator India','Electricity Calculator India','Estimate appliance usage and electricity costs.','மின்சார பயன்பாடு மற்றும் செலவை மதிப்பிடுங்கள்.','utilities','ϟ','JayaKumar-Electricity-Calculator'],
['Secure Password Toolkit','Secure Password Toolkit','Generate strong passwords and check strength locally.','வலுவான password உருவாக்கி வலிமையைச் சரிபாருங்கள்.','productivity','◇','JayaKumar-Password-Toolkit'],
['File Utility Box','File Utility Box','Inspect files, calculate hashes and compare checksums.','கோப்பு விவரங்கள், hash மற்றும் checksum.','productivity','▣','JayaKumar-File-Utility'],
['Quick Notes & Tasks','Quick Notes & Tasks','Keep simple notes and to-do lists in your browser.','Browser-ல் குறிப்புகள் மற்றும் செய்யவேண்டிய பட்டியல்.','productivity','☷','JayaKumar-Quick-Notes'],
['Barcode & Label Studio','Barcode & Label Studio','Create printable product barcodes and labels.','Product barcode மற்றும் label உருவாக்குங்கள்.','business','▥','JayaKumar-Barcode-Studio']
];
let lang='en',cat='all';const grid=document.querySelector('#grid'),search=document.querySelector('#search');
function render(){let q=search.value.toLowerCase().trim(),items=tools.filter(t=>(cat==='all'||t[4]===cat)&&t.join(' ').toLowerCase().includes(q));grid.innerHTML=items.map(t=>`<article class="card ${['JK PDF Studio','FormFit India','GST Invoice Maker','Pocket Finance','India Tax Calculator','VideoKit','AudioKit','TextMaster', 'Tamil Typing Studio', 'JSON Toolkit', 'WebDev Toolbox', 'India Unit Converter', 'EMI & Loan Calculator', 'Electricity Calculator India', 'Secure Password Toolkit', 'File Utility Box', 'Barcode & Label Studio', 'Quick Notes & Tasks'].includes(t[0])?'available':''}" ${t[0]==='JK PDF Studio'?'onclick="location.href=\'tools/jk-pdf-studio/index.html\'" role="link" tabindex="0"':t[0]==='FormFit India'?'onclick="location.href=\'tools/formfit-india/index.html\'" role="link" tabindex="0"':''}><div class="cardhead"><span class="ico">${t[5]}</span><span class="badge">${['JK PDF Studio','FormFit India','GST Invoice Maker','Pocket Finance','India Tax Calculator','VideoKit','AudioKit','TextMaster', 'JSON Toolkit', 'WebDev Toolbox', 'India Unit Converter', 'EMI & Loan Calculator', 'Electricity Calculator India', 'Secure Password Toolkit', 'File Utility Box', 'Barcode & Label Studio', 'Quick Notes & Tasks'].includes(t[0])?(lang==='ta'?'திறக்கவும்':'Open tool'):(lang==='ta'?'விரைவில்':'Coming soon')}</span></div><h3>${t[lang==='ta'?1:0]}</h3><p>${t[lang==='ta'?3:2]}</p><div class="cardfoot">${t[4]} · ${lang==='ta'?'திட்டமிடப்பட்டது':'In roadmap'}</div></article>`).join('');
grid.querySelectorAll('.card').forEach(card => {
  const displayedTitle = card.querySelector('h3')?.textContent.trim();
  const title = tools.find(t => t[lang === 'ta' ? 1 : 0] === displayedTitle)?.[0] || displayedTitle;
  if (['ImageKit Pro', 'Smart QR India', 'GST Invoice Maker', 'Pocket Finance', 'India Tax Calculator', 'VideoKit', 'AudioKit', 'TextMaster', 'Tamil Typing Studio', 'JSON Toolkit', 'WebDev Toolbox', 'India Unit Converter', 'EMI & Loan Calculator', 'Electricity Calculator India', 'Secure Password Toolkit', 'File Utility Box', 'Barcode & Label Studio', 'Quick Notes & Tasks'].includes(title)) {
    card.classList.add('available');
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.addEventListener('click', () => {
      location.href = ({
          'ImageKit Pro': 'tools/imagekit-pro/index.html',
          'Smart QR India': 'tools/smart-qr-india/index.html',
          'GST Invoice Maker': 'tools/gst-invoice-maker/index.html',
          'Pocket Finance': 'tools/pocket-finance/index.html',
          'India Tax Calculator': 'tools/india-tax-calculator/index.html',
          'VideoKit': 'tools/videokit/index.html',
          'AudioKit': 'tools/audiokit/index.html',
          'TextMaster': 'tools/textmaster/index.html',
          'EMI & Loan Calculator': 'tools/emi-loan-calculator/index.html',
          'Electricity Calculator India': 'tools/electricity-calculator-india/index.html',
          'Secure Password Toolkit': 'tools/secure-password-toolkit/index.html',
          'File Utility Box': 'tools/file-utility-box/index.html',
          'Quick Notes & Tasks': 'tools/quick-notes-tasks/index.html',
          'Barcode & Label Studio': 'tools/barcode-label-studio/index.html',
          'India Unit Converter': 'tools/india-unit-converter/index.html',
          'Tamil Typing Studio': 'tools/tamil-typing-studio/index.html',
          'WebDev Toolbox': 'tools/webdev-toolbox/index.html',
          'JSON Toolkit': 'tools/json-toolkit/index.html'
        })[title];
    });
    const badge = card.querySelector('.badge');
    if (badge) badge.textContent = lang === 'ta' ? 'திறக்கவும்' : 'Open tool';
  }
});

document.querySelector('#count').textContent=items.length;document.querySelector('#empty').hidden=items.length>0}
document.querySelector('#filters').addEventListener('click',e=>{let b=e.target.closest('button[data-cat]');if(!b)return;cat=b.dataset.cat;document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('active',x===b));render()});search.addEventListener('input',render);
document.querySelector('#lang').addEventListener('click',()=>{lang=lang==='en'?'ta':'en';document.querySelector('#lang').textContent=lang==='en'?'தமிழ்':'English';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);search.placeholder=lang==='en'?'Search tools...':'கருவிகளைத் தேடுங்கள்...';document.querySelectorAll('.filters button').forEach(b=>{let map={all:['All','அனைத்தும்'],documents:['Documents','ஆவணங்கள்'],image:['Image','படங்கள்'],business:['Business','வணிகம்'],media:['Media','மீடியா'],text:['Text','உரை'],developer:['Developer','டெவலப்பர்'],utilities:['Utilities','பயன்பாடுகள்'],productivity:['Productivity','உற்பத்தித்திறன்']};b.textContent=map[b.dataset.cat][lang==='en'?0:1]});render()});
document.querySelector('#theme').addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('jt-theme',document.body.classList.contains('light')?'light':'dark')});if(localStorage.getItem('jt-theme')==='light')document.body.classList.add('light');document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==search){e.preventDefault();search.focus()}});document.querySelector('#year').textContent=new Date().getFullYear();render();