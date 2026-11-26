(()=>{'use strict';const $=id=>document.getElementById(id);
const groups={
Length:{m:1,km:1000,cm:.01,mm:.001,mi:1609.344,yd:.9144,ft:.3048,in:.0254},
Weight:{kg:1,g:.001,mg:.000001,tonne:1000,lb:.45359237,oz:.028349523125},
Area:{'m²':1,'km²':1e6,'cm²':.0001,'ft²':.09290304,'yd²':.83612736,acre:4046.8564224,hectare:10000,cent:40.468564224},
Volume:{L:1,mL:.001,'m³':1000,'cm³':.001,galUS:3.785411784,galUK:4.54609,'ft³':28.316846592},
Speed:{'m/s':1,'km/h':1/3.6,mph:.44704,knot:.514444444},
Time:{second:1,minute:60,hour:3600,day:86400,week:604800},
Temperature:{C:'temp',F:'temp',K:'temp'},
Data:{bit:1,byte:8,KB:8000,MB:8e6,GB:8e9,TB:8e12}
};
const labels={
'm':'Meter (m)','km':'Kilometer (km)','cm':'Centimeter (cm)','mm':'Millimeter (mm)','mi':'Mile (mi)','yd':'Yard (yd)','ft':'Foot (ft)','in':'Inch (in)',
'kg':'Kilogram (kg)','g':'Gram (g)','mg':'Milligram (mg)','tonne':'Metric tonne','lb':'Pound (lb)','oz':'Ounce (oz)',
'm²':'Square meter','km²':'Square kilometer','cm²':'Square centimeter','ft²':'Square foot','yd²':'Square yard','acre':'Acre','hectare':'Hectare','cent':'Cent (1/100 acre)',
'L':'Liter (L)','mL':'Milliliter (mL)','m³':'Cubic meter','cm³':'Cubic centimeter','galUS':'US gallon','galUK':'UK gallon','ft³':'Cubic foot',
'm/s':'Meter/second','km/h':'Kilometer/hour','mph':'Mile/hour','knot':'Knot',
'second':'Second','minute':'Minute','hour':'Hour','day':'Day','week':'Week',
'C':'Celsius (°C)','F':'Fahrenheit (°F)','K':'Kelvin (K)',
'bit':'Bit','byte':'Byte','KB':'Kilobyte (decimal)','MB':'Megabyte (decimal)','GB':'Gigabyte (decimal)','TB':'Terabyte (decimal)'
};
const cats=Object.keys(groups);cats.forEach(c=>$('category').add(new Option(c,c)));
function units(){const u=Object.keys(groups[$('category').value]);['from','to'].forEach(id=>{const sel=$(id),old=sel.value;sel.innerHTML='';u.forEach(x=>sel.add(new Option(labels[x]||x,x)));if(u.includes(old))sel.value=old;});if($('from').value===$('to').value&&u.length>1)$('to').selectedIndex=1;}
function convert(v,a,b,cat){if(cat==='Temperature'){let c=a==='C'?v:a==='F'?(v-32)*5/9:v-273.15;return b==='C'?c:b==='F'?c*9/5+32:c+273.15;}return v*groups[cat][a]/groups[cat][b];}
function fmt(n){if(!Number.isFinite(n))return '—';return new Intl.NumberFormat('en-IN',{maximumSignificantDigits:10}).format(n);}
function calc(){const v=Number($('value').value);if($('value').value.trim()===''||!Number.isFinite(v)){$('result').textContent='—';return;}const r=convert(v,$('from').value,$('to').value,$('category').value);$('result').textContent=fmt(r)+' '+$('to').value;}
$('category').onchange=()=>{units();calc();};$('from').onchange=calc;$('to').onchange=calc;$('value').oninput=calc;
$('swap').onclick=()=>{const a=$('from').value;$('from').value=$('to').value;$('to').value=a;calc();};
$('copy').onclick=async()=>{const t=$('result').textContent;if(t==='—')return;try{await navigator.clipboard.writeText(t);$('status').textContent='Result copied.'}catch{$('status').textContent='Copy unavailable; select the result manually.'}};
$('reset').onclick=()=>{$('value').value='1';$('category').value='Length';units();calc();$('status').textContent='Reset to default.'};
const quick=[['1 kilometer → miles','Length',1,'km','mi'],['1 kg → pounds','Weight',1,'kg','lb'],['1 acre → cents','Area',1,'acre','cent'],['1 liter → milliliters','Volume',1,'L','mL'],['100 km/h → mph','Speed',100,'km/h','mph'],['100°F → °C','Temperature',100,'F','C'],['1 hour → minutes','Time',1,'hour','minute'],['1 GB → MB','Data',1,'GB','MB']];
quick.forEach(([title,cat,v,a,b])=>{const btn=document.createElement('button');btn.innerHTML='<b>'+title+'</b><span>Use this conversion</span>';btn.onclick=()=>{$('category').value=cat;units();$('value').value=v;$('from').value=a;$('to').value=b;calc();window.scrollTo({top:0,behavior:'smooth'});};$('quick').appendChild(btn);});
const refs=[['Length','1 km = 1,000 m'],['Weight','1 kg = 1,000 g'],['Area','1 acre = 100 cents'],['Area','1 hectare = 10,000 m²'],['Volume','1 L = 1,000 mL'],['Speed','1 m/s = 3.6 km/h'],['Time','1 hour = 60 minutes'],['Data','1 byte = 8 bits']];refs.forEach(([h,t])=>{const d=document.createElement('div');d.className='refitem';d.innerHTML='<b>'+h+'</b>'+t;$('reference').appendChild(d);});
$('theme').onclick=()=>{document.body.classList.toggle('light');$('theme').textContent=document.body.classList.contains('light')?'☀ Theme':'☾ Theme'};
$('year').textContent=new Date().getFullYear();$('category').value='Length';units();calc();
})();