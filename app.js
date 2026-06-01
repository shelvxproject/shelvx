/* ─── Data ─────────────────────────────────────────────────────────────── */
function randomSalesArray() {
  const today = new Date(), sales = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    sales[d.toISOString().slice(0, 10)] = Math.floor(Math.random() * 8);
  }
  return sales;
}
function mkItem(id, name, emoji, stock, expiry, salesWeek, salesMonth, nutriScore, price) {
  return { id, name, emoji, stock, expiry, sales: randomSalesArray(), salesWeek, salesMonth, nutriScore, price: price || (Math.round((Math.random()*8+0.5)*20)/20).toFixed(2) };
}

window.supermarkets = [
  {
    id: 'market1', name: 'FreshMart', emoji: '🛒', color: '#7c3aed',
    address: '12 Rue de Rivoli, Paris', lat: 48.857, lng: 2.352,
    aisles: [
      { id:'a1', name:'Main Food', shelves:[
        { id:'a1-s1', name:'Cereals', items:[ mkItem('a1-s1-i1','Crunchy Cereal','🥣',5,'2025-06-30',21,78,'C','3.49'), mkItem('a1-s1-i2','Oatmeal','🌾',2,'2025-06-15',8,33,'A','2.19') ]},
        { id:'a1-s2', name:'Chocolates', items:[ mkItem('a1-s2-i1','Milk Chocolate','🍫',3,'2025-07-01',14,60,'D','1.79'), mkItem('a1-s2-i2','Dark Chocolate','🍫',1,'2025-06-12',5,24,'C','2.09') ]},
        { id:'a1-s3', name:'Milk', items:[ mkItem('a1-s3-i1','Whole Milk','🥛',8,'2025-06-05',20,66,'B','1.29'), mkItem('a1-s3-i2','Skimmed Milk','🥛',4,'2025-06-13',7,31,'A','1.19') ]},
        { id:'a1-s4', name:'Biscuits', items:[ mkItem('a1-s4-i1','Choco Biscuits','🍪',2,'2025-06-13',9,40,'D','1.59') ]},
        { id:'a1-s5', name:'Empty Shelf', items:[] }
      ]},
      { id:'a2', name:'Snacks & Drinks', shelves:[
        { id:'a2-s1', name:'Juices', items:[ mkItem('a2-s1-i1','Orange Juice','🧃',6,'2025-06-09',15,50,'B','2.49'), mkItem('a2-s1-i2','Apple Juice','🧃',3,'2025-06-14',8,27,'B','2.29') ]},
        { id:'a2-s2', name:'Pretzels', items:[ mkItem('a2-s2-i1','Mini Pretzels','🥨',4,'2025-06-20',12,39,'D','1.39') ]},
        { id:'a2-s3', name:'Candies', items:[ mkItem('a2-s3-i1','Strawberry Candy','🍬',2,'2025-06-03',6,21,'E','0.99'), mkItem('a2-s3-i2','Mint Candy','🍬',5,'2025-06-18',10,34,'E','0.89') ]},
        { id:'a2-s4', name:'Cookies', items:[ mkItem('a2-s4-i1','Sugar Cookies','🍪',7,'2025-07-01',18,60,'D','1.99') ]}
      ]},
      { id:'a3', name:'Fresh Fruits', shelves:[
        { id:'a3-s1', name:'Apples', items:[ mkItem('a3-s1-i1','Red Apple','🍎',10,'2025-06-10',20,70,'A','0.89') ]},
        { id:'a3-s2', name:'Bananas', items:[ mkItem('a3-s2-i1','Banana Bunch','🍌',7,'2025-06-07',17,60,'A','1.29') ]},
        { id:'a3-s3', name:'Oranges', items:[ mkItem('a3-s3-i1','Sweet Orange','🍊',8,'2025-06-15',19,61,'A','1.49') ]},
        { id:'a3-s4', name:'Empty Shelf', items:[] }
      ]},
      { id:'a4', name:'Frozen Foods', shelves:[
        { id:'a4-s1', name:'Ice Cream', items:[ mkItem('a4-s1-i1','Vanilla Ice Cream','🍨',5,'2025-07-07',12,46,'E','3.99'), mkItem('a4-s1-i2','Choco Ice Cream','🍦',2,'2025-07-04',8,29,'E','3.79') ]},
        { id:'a4-s2', name:'Frozen Pizza', items:[ mkItem('a4-s2-i1','Pepperoni Pizza','🍕',4,'2025-07-14',13,45,'D','4.49') ]},
        { id:'a4-s3', name:'Vegetables', items:[ mkItem('a4-s3-i1','Frozen Peas','🫛',6,'2025-08-10',15,51,'A','1.89') ]},
        { id:'a4-s4', name:'Empty Shelf', items:[] }
      ]}
    ]
  },
  {
    id: 'market2', name: 'QuickShop', emoji: '🏪', color: '#d97706',
    address: '45 Ave Montaigne, Paris', lat: 48.865, lng: 2.305,
    aisles: [
      { id:'b1', name:'Bakery', shelves:[
        { id:'b1-s1', name:'Bread', items:[ mkItem('b1-s1-i1','Whole Grain Bread','🍞',6,'2025-06-08',25,90,'B','2.79'), mkItem('b1-s1-i2','White Bread','🍞',4,'2025-06-06',18,70,'C','1.99') ]},
        { id:'b1-s2', name:'Pastries', items:[ mkItem('b1-s2-i1','Croissant','🥐',8,'2025-06-04',30,110,'D','1.29'), mkItem('b1-s2-i2','Muffin','🧁',3,'2025-06-07',12,45,'D','1.49') ]},
        { id:'b1-s3', name:'Empty Shelf', items:[] }
      ]},
      { id:'b2', name:'Dairy & Eggs', shelves:[
        { id:'b2-s1', name:'Cheese', items:[ mkItem('b2-s1-i1','Cheddar','🧀',5,'2025-06-20',11,42,'C','3.29'), mkItem('b2-s1-i2','Mozzarella','🧀',3,'2025-06-18',9,35,'B','2.99') ]},
        { id:'b2-s2', name:'Yogurt', items:[ mkItem('b2-s2-i1','Greek Yogurt','🥛',7,'2025-06-10',22,80,'A','1.89') ]},
        { id:'b2-s3', name:'Eggs', items:[ mkItem('b2-s3-i1','Free Range Eggs','🥚',10,'2025-06-25',28,100,'A','3.49') ]},
        { id:'b2-s4', name:'Butter', items:[ mkItem('b2-s4-i1','Salted Butter','🧈',4,'2025-07-01',8,30,'D','2.19') ]}
      ]},
      { id:'b3', name:'Meat & Fish', shelves:[
        { id:'b3-s1', name:'Chicken', items:[ mkItem('b3-s1-i1','Chicken Breast','🍗',6,'2025-06-05',18,65,'B','5.99') ]},
        { id:'b3-s2', name:'Beef', items:[ mkItem('b3-s2-i1','Ground Beef','🥩',4,'2025-06-04',12,44,'C','7.49') ]},
        { id:'b3-s3', name:'Fish', items:[ mkItem('b3-s3-i1','Salmon Fillet','🐟',3,'2025-06-06',10,38,'A','8.99') ]},
        { id:'b3-s4', name:'Empty Shelf', items:[] }
      ]},
      { id:'b4', name:'Beverages', shelves:[
        { id:'b4-s1', name:'Water', items:[ mkItem('b4-s1-i1','Sparkling Water','💧',12,'2026-01-01',35,130,'A','0.89') ]},
        { id:'b4-s2', name:'Sodas', items:[ mkItem('b4-s2-i1','Cola','🥤',8,'2026-03-01',22,88,'E','1.39'), mkItem('b4-s2-i2','Lemonade','🥤',6,'2026-02-01',15,60,'D','1.29') ]},
        { id:'b4-s3', name:'Coffee', items:[ mkItem('b4-s3-i1','Espresso Pods','☕',5,'2026-06-01',10,40,'B','6.99') ]},
        { id:'b4-s4', name:'Empty Shelf', items:[] }
      ]}
    ]
  },
  {
    id: 'market3', name: 'GreenLeaf', emoji: '🌿', color: '#059669',
    address: '7 Blvd Saint-Germain, Paris', lat: 48.851, lng: 2.337,
    aisles: [
      { id:'c1', name:'Organic Produce', shelves:[
        { id:'c1-s1', name:'Leafy Greens', items:[ mkItem('c1-s1-i1','Baby Spinach','🥬',8,'2025-06-03',30,100,'A','2.99'), mkItem('c1-s1-i2','Arugula','🥗',5,'2025-06-02',18,65,'A','3.29') ]},
        { id:'c1-s2', name:'Root Vegs', items:[ mkItem('c1-s2-i1','Organic Carrots','🥕',12,'2025-06-10',25,90,'A','1.79'), mkItem('c1-s2-i2','Sweet Potato','🍠',7,'2025-06-14',14,50,'A','2.49') ]},
        { id:'c1-s3', name:'Herbs', items:[ mkItem('c1-s3-i1','Fresh Basil','🌿',6,'2025-06-05',20,75,'A','1.49') ]},
        { id:'c1-s4', name:'Empty Shelf', items:[] }
      ]},
      { id:'c2', name:'Health Foods', shelves:[
        { id:'c2-s1', name:'Superfoods', items:[ mkItem('c2-s1-i1','Chia Seeds','🌱',5,'2026-01-01',12,45,'A','4.99'), mkItem('c2-s1-i2','Quinoa','🌾',4,'2026-03-01',8,30,'A','3.79') ]},
        { id:'c2-s2', name:'Nuts', items:[ mkItem('c2-s2-i1','Almonds','🥜',8,'2026-02-01',22,80,'B','5.49'), mkItem('c2-s2-i2','Walnuts','🥜',6,'2026-01-15',15,55,'B','4.99') ]},
        { id:'c2-s3', name:'Granola', items:[ mkItem('c2-s3-i1','Organic Granola','🥣',4,'2025-09-01',18,66,'B','5.29') ]},
        { id:'c2-s4', name:'Empty Shelf', items:[] }
      ]},
      { id:'c3', name:'Plant-Based', shelves:[
        { id:'c3-s1', name:'Tofu', items:[ mkItem('c3-s1-i1','Firm Tofu','🍱',6,'2025-06-12',14,50,'B','2.89') ]},
        { id:'c3-s2', name:'Alt Milk', items:[ mkItem('c3-s2-i1','Oat Milk','🥛',9,'2025-08-01',25,90,'A','2.49'), mkItem('c3-s2-i2','Almond Milk','🥛',7,'2025-08-15',20,72,'A','2.79') ]},
        { id:'c3-s3', name:'Empty Shelf', items:[] }
      ]},
      { id:'c4', name:'Natural Drinks', shelves:[
        { id:'c4-s1', name:'Kombucha', items:[ mkItem('c4-s1-i1','GT Kombucha','🍶',5,'2025-07-01',12,44,'A','3.99') ]},
        { id:'c4-s2', name:'Herbal Tea', items:[ mkItem('c4-s2-i1','Chamomile Tea','🍵',10,'2026-06-01',18,66,'A','2.49'), mkItem('c4-s2-i2','Green Tea','🍵',8,'2026-06-01',22,80,'A','2.29') ]},
        { id:'c4-s3', name:'Cold Press', items:[ mkItem('c4-s3-i1','Green Cold Press','🥒',4,'2025-06-04',10,36,'A','4.49') ]},
        { id:'c4-s4', name:'Empty Shelf', items:[] }
      ]}
    ]
  }
];
window.shopData = null;

/* ─── State ─────────────────────────────────────────────────────────────── */
let currentUser = null, currentScreen = 'login';
let selectedAisleId = null, selectedShelfId = null;
let selectedDay = null, selectedMarketId = null;

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const $all = s => document.querySelectorAll(s);
const clearApp = () => { $('#app').innerHTML = ''; };
function daysUntil(d) { return Math.ceil((new Date(d) - new Date()) / 86400000); }
function getTodayStr() { return new Date().toISOString().slice(0, 10); }
function getCurrentMarket() { return window.supermarkets.find(m => m.id === selectedMarketId); }
function backToMenu() {
  if (!currentUser) return renderLogin();
  currentUser.role === 'client' ? renderClientMenu() : renderCommercialMenu();
}

function showModal(html) {
  const r = $('#modal-root'); r.innerHTML = html; r.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const r = $('#modal-root'); r.classList.remove('active');
  setTimeout(() => { r.innerHTML = ''; }, 240);
  document.body.style.overflow = '';
}
function showToast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2000);
}

const NUTRI_SCORES = ['A','B','C','D','E'];
function nutriBadge(score, size='sm') {
  if (!score) return '';
  return `<span class="nutri-badge nutri-${score.toLowerCase()} nutri-${size}">${score}</span>`;
}
function nutriSelectOptions(sel) {
  return NUTRI_SCORES.map(s => `<option value="${s}" ${sel===s?'selected':''}>${s}</option>`).join('');
}
function nutriLabel(score) {
  const labels = {A:'Excellent',B:'Good',C:'Average',D:'Poor',E:'Bad'};
  return `<span style="font-size:.85em;color:#6b7280;">${labels[score]||''}</span>`;
}

/* ─── Map SVG ─────────────────────────────────────────────────────────────── */
function renderMapSVG(activeId) {
  const stores = [
    { id:'market1', x:200, y:90,  color:'#7c3aed', emoji:'🛒', name:'FreshMart' },
    { id:'market2', x:90,  y:60,  color:'#d97706', emoji:'🏪', name:'QuickShop' },
    { id:'market3', x:150, y:145, color:'#059669', emoji:'🌿', name:'GreenLeaf' },
  ];
  const pins = stores.map(s => {
    const isActive = s.id === activeId;
    return `
      <g class="map-pin ${isActive?'active':''}" onclick="selectSupermarket('${s.id}')" style="cursor:pointer">
        <circle class="pin-ring" cx="${s.x}" cy="${s.y}" r="${isActive?22:16}" fill="${s.color}22" stroke="${s.color}" stroke-width="2" opacity="${isActive?1:0.4}"/>
        <circle class="pin-dot" cx="${s.x}" cy="${s.y}" r="${isActive?13:10}" fill="${isActive?s.color:s.color+'99'}"/>
        <text x="${s.x}" y="${s.y+4.5}" text-anchor="middle" font-size="${isActive?'11':'9'}" fill="white" font-weight="700" font-family="Sora,sans-serif">${s.emoji}</text>
        <text x="${s.x}" y="${s.y+(isActive?32:24)}" text-anchor="middle" font-size="${isActive?'9.5':'8'}" fill="${s.color}" font-weight="700" font-family="Sora,sans-serif">${s.name}</text>
      </g>`;
  }).join('');

  return `<svg class="map-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Map background -->
    <rect width="300" height="200" fill="#e8f4f8" rx="14"/>
    <!-- Streets -->
    <line x1="0" y1="100" x2="300" y2="100" stroke="#c8d8e4" stroke-width="10"/>
    <line x1="150" y1="0" x2="150" y2="200" stroke="#c8d8e4" stroke-width="8"/>
    <line x1="0" y1="50" x2="300" y2="150" stroke="#d4e8ee" stroke-width="6"/>
    <line x1="0" y1="150" x2="300" y2="60" stroke="#d4e8ee" stroke-width="5"/>
    <!-- Street labels -->
    <text x="155" y="97" font-size="7" fill="#94a3b8" font-family="sans-serif">Rue de Rivoli</text>
    <text x="153" y="125" font-size="7" fill="#94a3b8" font-family="sans-serif" transform="rotate(90,153,125)">Blvd St-G</text>
    <!-- Park -->
    <rect x="10" y="110" width="60" height="50" rx="8" fill="#d1fae5" opacity="0.6"/>
    <text x="40" y="140" text-anchor="middle" font-size="8" fill="#059669" font-family="sans-serif">🌳 Parc</text>
    <!-- Buildings -->
    <rect x="220" y="110" width="50" height="35" rx="4" fill="#dbeafe" opacity="0.5"/>
    <rect x="230" y="40" width="40" height="30" rx="4" fill="#fef9c3" opacity="0.5"/>
    ${pins}
    <!-- Distance legend -->
    <text x="8" y="195" font-size="7.5" fill="#94a3b8" font-family="sans-serif">Tap a pin to select a store</text>
  </svg>`;
}

/* ─── Login ─────────────────────────────────────────────────────────────── */
function renderLogin() {
  closeAI();
  hideAIButton();
  currentScreen = 'login'; selectedMarketId = null; currentUser = null; clearApp();
  const storeCards = window.supermarkets.map(m => `
    <div class="store-card ${selectedMarketId===m.id?'active':''}" id="sc-${m.id}" onclick="selectSupermarketCard('${m.id}')">
      <span class="store-emoji">${m.emoji}</span>
      <span class="store-name">${m.name}</span>
      <span class="store-dist">${m.address.split(',')[0]}</span>
    </div>`).join('');

  $('#app').innerHTML = `
    <div class="app-title">Shelvx</div>
    <div class="slogan">Smart Inventory, Smarter Shopping</div>
    <div class="map-container" id="map-container">${renderMapSVG(null)}</div>
    <div class="store-cards">${storeCards}</div>
    <div id="login-form-area" style="padding-bottom:20px;"></div>
  `;
}

function selectSupermarketCard(id) {
  selectedMarketId = id;
  $('#map-container').innerHTML = renderMapSVG(id);
  $all('.store-card').forEach(c => c.classList.remove('active'));
  $(`#sc-${id}`) && $(`#sc-${id}`).classList.add('active');
  const m = getCurrentMarket();
  $('#login-form-area').innerHTML = `
    <div style="margin:14px 14px 0; padding:14px 16px; border-radius:14px; background:${m.color}15; border:1.5px solid ${m.color}44; display:flex; align-items:center; justify-content:space-between;">
      <span style="font-weight:700; color:${m.color};">${m.emoji} ${m.name}</span>
      <span style="font-size:.8rem; color:#6b7280;">${m.address}</span>
    </div>
    <div class="login-form">
      <div class="input-group"><label>Username</label><input type="text" id="username" maxlength="22" autocomplete="username" placeholder="Your name"/></div>
      <div class="input-group"><label>Email</label><input type="email" id="email" maxlength="40" autocomplete="email" placeholder="you@example.com" required/></div>
      <button id="client-login-btn" class="btn btn-primary" onclick="loginUser('client')" style="width:100%;justify-content:center;">🛍️ Customer Login</button>
      <button id="commercial-login-btn" class="btn btn-secondary" onclick="loginUser('commercial')" style="width:100%;justify-content:center;">🏷️ Staff Login</button>
    </div>`;
  const clientBtn = document.getElementById('client-login-btn');
  const commercialBtn = document.getElementById('commercial-login-btn');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  function updateLoginBtns() {
    const hasUsername = usernameInput && usernameInput.value.trim().length>0;
    const validEmail = emailInput && /\S+@\S+\.\S+/.test(emailInput.value);
    const enabled = hasUsername && validEmail;
    [clientBtn, commercialBtn].forEach(btn => {
      if (!btn) return;
      btn.disabled = !enabled;
      btn.style.opacity = btn.disabled ? '0.6' : '1';
      btn.style.pointerEvents = btn.disabled ? 'none' : 'auto';
    });
  }
  if (usernameInput) usernameInput.addEventListener('input', updateLoginBtns);
  if (emailInput) emailInput.addEventListener('input', updateLoginBtns);
  updateLoginBtns();
}

function selectSupermarket(id) { selectSupermarketCard(id); }

function loginUser(role) {
  const username = $('#username') && $('#username').value.trim();
  const email    = $('#email') && $('#email').value.trim();
  if (!username) { showToast('Please enter a username'); return; }
  if (!email) { showToast("L'accès nécessite une adresse e-mail"); return; }
  window.shopData = getCurrentMarket();
  currentUser = { username, email, role };
  selectedAisleId = null; selectedShelfId = null;
  role === 'client' ? renderClientMenu() : renderCommercialMenu();
}

function renderClientMenu() {
  currentScreen = 'clientMenu';
  const m = getCurrentMarket(); clearApp();
  $('#app').innerHTML = `
    <div class="app-title">Shelvx</div>
    <div style="margin:0 14px 16px; padding:10px 14px; border-radius:12px; background:${m.color}15; border:1.5px solid ${m.color}44;">
      <div style="font-weight:700; color:${m.color};">${m.emoji} ${m.name}</div>
      <div style="font-size:.82rem; color:#6b7280; margin-top:2px;">${m.address}</div>
    </div>
    <div class="slogan" style="padding-top:0;">Welcome, <b>${currentUser.username}</b> 👋</div>
    <div class="menu">
      <button class="btn btn-primary" onclick="renderShopPlan('client')">📋 Store Map</button>
      <button class="btn btn-primary" onclick="renderClientSearch()">🔍 Find a Product</button>
      <button class="btn btn-primary" onclick="openAI()">✦ AI Recommendations</button>
      <button class="btn btn-secondary" onclick="renderLogin()">🚪 Logout</button>
    </div>`;
  showAIButton();
}

function renderCommercialMenu() {
  closeAI();
  currentScreen = 'commercialMenu';
  const m = getCurrentMarket(); clearApp();
  $('#app').innerHTML = `
    <div class="app-title">Shelvx</div>
    <div style="margin:0 14px 16px; padding:10px 14px; border-radius:12px; background:${m.color}15; border:1.5px solid ${m.color}44;">
      <div style="font-weight:700; color:${m.color};">${m.emoji} ${m.name}</div>
      <div style="font-size:.82rem; color:#6b7280; margin-top:2px;">${m.address}</div>
    </div>
    <div class="slogan" style="padding-top:0;">Hi <b>${currentUser.username}</b> <span class="role-badge">Staff</span></div>
    <div class="menu">
      <button class="btn btn-primary" onclick="renderShopPlan('commercial')">📋 Store Map</button>
      <button class="btn btn-primary" onclick="openAddItemModal()">➕ Scan / Add Item</button>
      <button class="btn btn-primary" onclick="renderSalesOverview()">📊 Sales Overview</button>
      <button class="btn btn-primary" onclick="renderAlerts()">🔔 Alerts & Advice</button>
      <button class="btn btn-primary" onclick="renderExportReport()">📤 Export Report</button>
      <button class="btn btn-secondary" onclick="renderLogin()">🚪 Logout</button>
    </div>`;
  hideAIButton();
}

function showAIButton() {
  let btn = document.getElementById('ai-float-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'ai-float-btn';
    btn.className = 'ai-chat-btn';
    btn.innerHTML = '✦';
    btn.title = 'AI Recommendations';
    btn.onclick = openAI;
    document.querySelector('.phone').appendChild(btn);
  }
  btn.style.display = 'flex';
}
function hideAIButton() {
  const btn = document.getElementById('ai-float-btn');
  if (btn) btn.style.display = 'none';
  closeAI();
}

function buildShopPlanHTML(role, highlightDay) {
  let html = '';
  shopData.aisles.forEach((aisle, ai) => {
    const isSel = selectedAisleId === aisle.id;
    html += `<div class="aisle-label" style="${isSel?'color:var(--purple);text-decoration:underline wavy var(--purple);':''}" >
      Aisle ${ai+1} – ${aisle.name}
      ${role==='commercial' ? `<button class="btn btn-secondary btn-xs" onclick="event.stopPropagation();openAddShelfModal('${aisle.id}')">+ Shelf</button>` : ''}
    </div>
    <div class="shop-plan" id="aisle-${aisle.id}" style="border:${isSel?'2px solid var(--purple)':'none'};border-radius:16px;padding:${isSel?'8px':'0'};">`;
    if (aisle.shelves.length===0) { html += `<div style="color:#9ca3af;font-size:.9em;padding:6px;">No shelves yet.</div>`; }
    aisle.shelves.forEach(shelf => {
      const item = shelf.items[0];
      const emoji = item ? (item.emoji||'📦') : '📦';
      const name  = item ? item.name : 'Empty';
      let cls = 'shelf';
      if (selectedShelfId===shelf.id) cls += ' selected';
      if (role==='commercial' && item) {
        if (item.stock < 4) cls += ' low-stock';
        if (highlightDay && item.sales?.[highlightDay] !== undefined) {
          const s = item.sales[highlightDay];
          cls += s<2?' sales-low':s<5?' sales-medium':' sales-high';
        }
      }
      html += `<div class="${cls}" id="shelf-${shelf.id}" onclick="selectShelf('${aisle.id}','${shelf.id}','${role}','${highlightDay||''}')">
        <span class="emoji">${emoji}</span>
        <span class="item-name">${name}</span>
        <span class="stock">${item?'x'+item.stock:''}</span>
        ${item?.nutriScore ? `<span class="nutri-xs nutri-${item.nutriScore.toLowerCase()}">${item.nutriScore}</span>` : ''}
      </div>`;
    });
    html += '</div>';
  });
  return html;
}

function renderShopPlan(role='client', highlightDay=null) {
  closeAI();
  currentScreen = role==='commercial' ? 'shopPlanCommercial' : 'shopPlanClient';
  clearApp();
  let html = `<div class="section-title">Store Map</div>
    <div class="back-bar"><button class="btn btn-secondary btn-sm" onclick="backToMenu()">← Back</button></div>`;
  html += buildShopPlanHTML(role, highlightDay);
  if (role==='commercial' && highlightDay) {
    html += `<div class="legend" style="margin:14px 0 20px;">
      <span class="low"></span>Low <span class="medium"></span>Medium <span class="high"></span>High
    </div>`;
  }
  html += '<div style="height:20px;"></div>';
  $('#app').innerHTML = html;
  if (role==='client') showAIButton(); else hideAIButton();
}

function selectShelf(aisleId, shelfId, role, highlightDay) {
  selectedAisleId = aisleId; selectedShelfId = shelfId;
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const shelf = aisle.shelves.find(s=>s.id===shelfId);
  role==='commercial'
    ? renderShelfDetailsCommercial(shelf, aisle, highlightDay)
    : renderShelfDetailsClient(shelf, aisle);
}

function openAddShelfModal(aisleId) {
  showModal(`<div class="modal">
    <button class="close-btn" onclick="closeModal()">✕</button>
    <h2>Add Shelf</h2>
    <div class="add-item-form" id="addShelfForm">
      <div class="input-group"><label>Shelf Name</label><input type="text" id="shelfName" required maxlength="22" placeholder="e.g. Organic Section"></div>
      <button class="btn btn-primary" onclick="submitAddShelf('${aisleId}')">Add Shelf</button>
    </div></div>`);
}
function submitAddShelf(aisleId) {
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const name = $('#shelfName').value.trim();
  if (!name) return;
  aisle.shelves.push({ id:`shelf-${aisleId}-${Date.now()}`, name, items:[] });
  closeModal(); showToast('Shelf added!'); renderShopPlan(currentUser.role);
}

function renderShelfDetailsClient(shelf, aisle) {
  closeAI();
  clearApp();
  const itemsHTML = shelf.items.length===0
    ? `<div class="row" style="color:#9ca3af;">No items on this shelf.</div>`
    : shelf.items.map(item => `
      <div class="item-detail-card">
        <div class="item-detail-header">
          <span class="emoji">${item.emoji||'📦'}</span>
          <div class="item-title">
            <span class="item-name-big">${item.name}</span>
            <span class="item-price-tag">€${item.price}</span>
          </div>
          ${nutriBadge(item.nutriScore,'md')}
        </div>
        <div class="row">📦 Stock: ${item.stock} units</div>
        <div class="row">📅 Expires: ${item.expiry}</div>
        ${item.nutriScore ? `<div class="row" style="display:flex;align-items:center;gap:8px;">Nutri-Score: ${nutriBadge(item.nutriScore,'lg')} ${nutriLabel(item.nutriScore)}</div>` : ''}
      </div>`).join('');
  $('#app').innerHTML = `
    <div class="section-title">${aisle.name}</div>
    <div class="back-bar"><button class="btn btn-secondary btn-sm" onclick="renderShopPlan('client')">← Back</button></div>
    <div class="details-panel">
      <h2>${shelf.name}</h2>${itemsHTML}
    </div><div style="height:80px;"></div>`;
  showAIButton();
}

function renderShelfDetailsCommercial(shelf, aisle, highlightDay) {
  closeAI();
  clearApp();
  const itemsHTML = shelf.items.length===0
    ? `<div class="row" style="color:#9ca3af;">No items on this shelf.</div>`
    : shelf.items.map((item,i) => `
      <div class="item-detail-card">
        <div class="item-detail-header">
          <span class="emoji">${item.emoji||'📦'}</span>
          <div class="item-title">
            <span class="item-name-big">${item.name}</span>
            <span class="item-price-tag">€${item.price}</span>
          </div>
          ${nutriBadge(item.nutriScore,'md')}
        </div>
        <div class="row">📦 Stock: ${item.stock} units</div>
        <div class="row">📅 Expires: ${item.expiry}</div>
        <div class="row">📈 Sales – Week: ${item.salesWeek||0} | Month: ${item.salesMonth||0}</div>
        ${item.nutriScore ? `<div class="row" style="display:flex;align-items:center;gap:8px;">Nutri-Score: ${nutriBadge(item.nutriScore,'lg')} ${nutriLabel(item.nutriScore)}</div>` : ''}
        <div class="item-actions">
          <button class="btn btn-secondary btn-sm" onclick="openEditItemModal('${aisle.id}','${shelf.id}',${i})">✏️ Edit</button>
          <button class="btn btn-sm" style="background:#fef2f2;color:#ef4444;border:1px solid #fca5a5;" onclick="confirmDeleteItem('${aisle.id}','${shelf.id}',${i})">🗑 Delete</button>
        </div>
      </div>`).join('');
  $('#app').innerHTML = `
    <div class="section-title">${aisle.name}</div>
    <div class="back-bar" style="gap:8px;">
      <button class="btn btn-secondary btn-sm" onclick="renderShopPlan('commercial','${highlightDay||''}')">← Back</button>
      <button class="btn btn-primary btn-sm" onclick="openAddItemModal('${aisle.id}','${shelf.id}')">➕ Add Item</button>
    </div>
    <div class="details-panel"><h2>${shelf.name}</h2>${itemsHTML}</div>
    <div style="height:20px;"></div>`;
}

function openAddItemModal(defAisle=null, defShelf=null) {
  const aislesOpts = shopData.aisles.map(a => `<option value="${a.id}" ${a.id===defAisle?'selected':''}>${a.name}</option>`).join('');
  const firstAisle = shopData.aisles.find(a=>a.id===defAisle) || shopData.aisles[0];
  const shelvesOpts = firstAisle?.shelves.map(s => `<option value="${s.id}" ${s.id===defShelf?'selected':''}>${s.name}</option>`).join('')||'';
  showModal(`<div class="modal">
    <button class="close-btn" onclick="closeModal()">✕</button>
    <h2>Add Product</h2>
    <div class="add-item-form">
      <div class="input-group"><label>Name</label><input type="text" id="itemName" required maxlength="20" placeholder="e.g. Organic Honey"></div>
      <div class="input-group"><label>Emoji</label><input type="text" id="itemEmoji" maxlength="2" placeholder="🍯"></div>
      <div class="input-group"><label>Price (€)</label><div class="price-row"><input type="number" id="itemPrice" min="0.01" step="0.01" placeholder="2.99"><span>€</span></div></div>
      <div class="input-group"><label>Aisle</label><select id="itemAisle" required onchange="window.updateShelfSelect()">${aislesOpts}</select></div>
      <div class="input-group"><label>Shelf</label><select id="itemShelf" required>${shelvesOpts}</select></div>
      <div class="input-group"><label>Stock</label><input type="number" id="itemStock" required min="0" max="999"></div>
      <div class="input-group"><label>Expiry Date</label><input type="date" id="itemExpiry" required></div>
      <div class="input-group"><label>Nutri-Score</label><select id="itemNutri">${nutriSelectOptions('C')}</select></div>
      <button class="btn btn-primary" onclick="submitAddItem()">Add Product</button>
    </div></div>`);
  window.updateShelfSelect = function() {
    const aisle = shopData.aisles.find(a=>a.id===$('#itemAisle').value);
    $('#itemShelf').innerHTML = aisle?.shelves.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')||'';
  };
  window.updateShelfSelect();
}
function submitAddItem() {
  const aisleId = $('#itemAisle').value, shelfId = $('#itemShelf').value;
  const name = $('#itemName').value.trim(), emoji = $('#itemEmoji').value.trim()||'📦';
  const stock = +$('#itemStock').value, expiry = $('#itemExpiry').value;
  const nutriScore = $('#itemNutri').value;
  const price = parseFloat($('#itemPrice').value||'1.99').toFixed(2);
  if (!name||!expiry||!shelfId) return;
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const shelf = aisle.shelves.find(s=>s.id===shelfId);
  shelf.items.push({ id:`item-${Date.now()}`, name, emoji, stock, expiry, nutriScore, price, sales:{}, salesWeek:0, salesMonth:0 });
  closeModal(); showToast('Product added!');
  renderShelfDetailsCommercial(shelf, aisle);
}

function openEditItemModal(aisleId, shelfId, idx) {
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const shelf = aisle.shelves.find(s=>s.id===shelfId);
  const item  = shelf.items[idx];
  showModal(`<div class="modal">
    <button class="close-btn" onclick="closeModal()">✕</button>
    <h2>Edit Product</h2>
    <div class="add-item-form">
      <div class="input-group"><label>Name</label><input type="text" id="editName" value="${item.name}" required maxlength="20"></div>
      <div class="input-group"><label>Emoji</label><input type="text" id="editEmoji" value="${item.emoji||'📦'}" maxlength="2"></div>
      <div class="input-group"><label>Price (€)</label><div class="price-row"><input type="number" id="editPrice" value="${item.price||'1.99'}" min="0.01" step="0.01"><span>€</span></div></div>
      <div class="input-group"><label>Stock</label><input type="number" id="editStock" value="${item.stock}" required min="0" max="999"></div>
      <div class="input-group"><label>Expiry Date</label><input type="date" id="editExpiry" value="${item.expiry}" required></div>
      <div class="input-group"><label>Nutri-Score</label><select id="editNutri">${nutriSelectOptions(item.nutriScore||'C')}</select></div>
      <button class="btn btn-primary" onclick="submitEditItem('${aisleId}','${shelfId}',${idx})">Save Changes</button>
    </div></div>`);
}
function submitEditItem(aisleId, shelfId, idx) {
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const shelf = aisle.shelves.find(s=>s.id===shelfId);
  const item  = shelf.items[idx];
  item.name  = $('#editName').value.trim();
  item.emoji = $('#editEmoji').value.trim()||'📦';
  item.price = parseFloat($('#editPrice').value||'1.99').toFixed(2);
  item.stock = +$('#editStock').value;
  item.expiry= $('#editExpiry').value;
  item.nutriScore=$('#editNutri').value;
  closeModal(); showToast('Product updated!');
  renderShelfDetailsCommercial(shelf, aisle);
}

function confirmDeleteItem(aisleId, shelfId, idx) {
  showModal(`<div class="modal">
    <button class="close-btn" onclick="closeModal()">✕</button>
    <h2>Delete Product?</h2>
    <p style="color:#6b7280;margin-bottom:18px;">This action cannot be undone.</p>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1;">Cancel</button>
      <button class="btn btn-primary" style="flex:1;background:linear-gradient(135deg,#ef4444,#dc2626);" onclick="deleteItem('${aisleId}','${shelfId}',${idx})">Delete</button>
    </div></div>`);
}
function deleteItem(aisleId, shelfId, idx) {
  const aisle = shopData.aisles.find(a=>a.id===aisleId);
  const shelf = aisle.shelves.find(s=>s.id===shelfId);
  shelf.items.splice(idx,1);
  closeModal(); showToast('Product deleted!');
  renderShelfDetailsCommercial(shelf, aisle);
}

function renderClientSearch() {
  closeAI();
  clearApp();
  const allItems = [];
  shopData.aisles.forEach(aisle => aisle.shelves.forEach(shelf => shelf.items.forEach(item =>
    allItems.push({...item, aisleName:aisle.name, shelfName:shelf.name, aisleId:aisle.id, shelfId:shelf.id}))));

  const itemsHTML = allItems.map(item => `
    <li onclick="showClientItemLocation('${item.shelfId}')">
      <span class="emoji">${item.emoji||'📦'}</span>
      <span class="item-list-name">${item.name}</span>
      ${nutriBadge(item.nutriScore,'sm')}
      <span class="item-list-price">€${item.price}</span>
      <span class="item-list-loc">${item.aisleName}</span>
    </li>`).join('');

  $('#app').innerHTML = `
    <div class="section-title">Find a Product</div>
    <div class="back-bar"><button class="btn btn-secondary btn-sm" onclick="renderClientMenu()">← Back</button></div>
    <div class="search-bar-wrap"><input type="text" id="searchBar" placeholder="Search products…"></div>
    <ul class="item-list" id="searchList">${itemsHTML}</ul>
    <div style="height:80px;"></div>`;
  $('#searchBar').oninput = function() {
    const v = this.value.trim().toLowerCase();
    $all('#searchList li').forEach(li => li.style.display = li.textContent.toLowerCase().includes(v)?'':'none');
  };
  showAIButton();
}

function showClientItemLocation(shelfId) {
  selectedShelfId = shelfId; renderShopPlan('client');
  setTimeout(() => {
    const el = document.getElementById('shelf-'+shelfId);
    if (el) { el.classList.add('selected'); el.scrollIntoView({behavior:'smooth',block:'center'}); }
  }, 120);
}

function renderSalesOverview() {
  currentScreen = 'salesOverview';
  const day = selectedDay||getTodayStr();
  let html = `<div class="section-title">Sales Overview</div>
    <div class="back-bar"><button class="btn btn-secondary btn-sm" onclick="renderCommercialMenu()">← Back</button></div>
    <div class="sales-calendar"><label style="font-size:.88rem;color:#6b7280;font-weight:600;">Date:</label><input type="date" id="salesDay" value="${day}"></div>
    <div class="legend"><span class="low"></span>Low <span class="medium"></span>Medium <span class="high"></span>High</div>`;
  html += buildShopPlanHTML('commercial', day);
  html += '<div style="height:20px;"></div>';
  $('#app').innerHTML = html;
  $('#salesDay').onchange = function() { selectedDay=this.value; renderSalesOverview(); };
  hideAIButton();
}

function renderAlerts() {
  clearApp();
  const alerts = [];
  shopData.aisles.forEach(aisle => aisle.shelves.forEach(shelf => shelf.items.forEach(item => {
    if (item.stock<3) alerts.push({type:'stock',msg:`Low stock: <b>${item.emoji||'📦'} ${item.name}</b> (${aisle.name}, ${shelf.name}) — only ${item.stock} left`});
    if (daysUntil(item.expiry)<7) alerts.push({type:'expiry',msg:`Expiring soon: <b>${item.emoji||'📦'} ${item.name}</b> on <b>${item.expiry}</b>`});
    if (item.nutriScore==='E') alerts.push({type:'nutri',msg:`Nutri-Score E: <b>${item.emoji||'📦'} ${item.name}</b> — consider a healthier alternative`});
  })));
  const html = alerts.length===0
    ? `<li class="alert-ok">✅ All good — stock levels and expiry dates are on track.</li>`
    : alerts.map(a=>`<li class="alert-${a.type}">${a.msg}</li>`).join('');
  $('#app').innerHTML = `
    <div class="section-title">Alerts & Advice</div>
    <div class="back-bar"><button class="btn btn-secondary btn-sm" onclick="renderCommercialMenu()">← Back</button></div>
    <ul class="alert-list">${html}</ul>
    <div style="height:20px;"></div>`;
  hideAIButton();
}

function renderExportReport() {
  closeAI();
  let total=0, lowStock=0, nearExpiry=0, topItems=[];
  shopData.aisles.forEach(aisle => aisle.shelves.forEach(shelf => shelf.items.forEach(item => {
    total++; if (item.stock<3) lowStock++; if (daysUntil(item.expiry)<7) nearExpiry++;
    if (topItems.length<3) topItems.push(item);
  })));
  const reportHtml = `<div style="font-family:DM Sans, sans-serif;padding:6px 0;">
    <h2 style="color:#7c3aed;margin-bottom:6px;">Weekly Report</h2>
    <div style="margin-bottom:10px;color:#6b7280;font-size:.9rem;">Summary for ${shopData.name}</div>
    <div class="report-stat"><span>Unique Products</span><span class="report-val">${total}</span></div>
    <div class="report-stat"><span>Low Stock Items</span><span class="report-val" style="color:#ef4444;">${lowStock}</span></div>
    <div class="report-stat"><span>Expiring Soon</span><span class="report-val" style="color:#f59e0b;">${nearExpiry}</span></div>
    <div style="margin-top:12px;font-weight:700;font-size:.95rem;margin-bottom:8px;">Top Items This Week</div>
    ${topItems.map(i=>`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #f3f4f6;">
      <span style="font-size:1.2rem;">${i.emoji||'📦'}</span>
      <span style="flex:1;font-size:.95rem;">${i.name}</span>
      <span style="font-weight:700;color:#7c3aed;">€${i.price}</span>
      ${nutriBadge(i.nutriScore,'sm')}
    </div>`).join('')}
  </div>`;
  window.lastReportHTML = reportHtml;
  window.lastReportTitle = `Weekly Report - ${shopData.name}`;

  showModal(`<div class="modal">
    <button class="close-btn" onclick="closeModal()">✕</button>
    <h2>Weekly Report</h2>
    <div style="margin-top:8px;margin-bottom:6px;color:#6b7280;font-size:.88rem;">Summary for ${shopData.name}</div>
    <div style="max-height:60vh;overflow:auto;padding-right:6px;">${reportHtml}</div>
    <div style="display:flex;gap:8px;margin-top:14px;">
      <button class="btn btn-primary" onclick="exportReportPDF_lib()" style="flex:1;justify-content:center;">⬇️ Download PDF</button>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex:1;justify-content:center;">Close</button>
    </div>
  </div>`);
}

function exportReportPDF() {
  const title = window.lastReportTitle || 'Report';
  const content = window.lastReportHTML || '<div>No report available</div>';
  const win = window.open('about:blank', '_blank');
  if (!win) { showToast('Popup blocked — allow popups to export PDF'); return; }
  const doc = `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
    <style>body{font-family:DM Sans, sans-serif;padding:18px;color:#111} h2{color:#7c3aed} .report-stat{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f3f4f6} .report-val{font-weight:700}</style>
    </head><body><h2>${title}</h2>${content}</body></html>`;
  win.document.open(); win.document.write(doc); win.document.close();
  setTimeout(()=>{ win.focus(); win.print(); setTimeout(()=>win.close(),1000); },250);
}

function exportReportPDF_lib() {
  if (typeof html2pdf === 'undefined') {
    showToast('Library html2pdf not loaded');
    return;
  }
  const content = window.lastReportHTML || '<div>No report available</div>';
  const wrapper = document.createElement('div');
  wrapper.style.padding = '14px';
  wrapper.style.maxWidth = '800px';
  wrapper.innerHTML = `<div><h2 style="color:#7c3aed;margin-bottom:6px;">${window.lastReportTitle||'Report'}</h2>${content}</div>`;
  document.body.appendChild(wrapper);
  const opt = {
    margin: 0.6,
    filename: (window.lastReportTitle || 'report').replace(/[^a-z0-9\-_. ]/gi,'') + '.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(wrapper).save().then(() => {
    document.body.removeChild(wrapper);
    closeModal();
  }).catch(err => {
    document.body.removeChild(wrapper);
    showToast('PDF export failed');
  });
}

let aiOpen = false;
let aiHistory = [];

function openAI() {
  const panel = $('#ai-panel'), overlay = $('#ai-overlay');
  if (!aiOpen) {
    panel.classList.add('open');
    overlay.classList.add('open');
    aiOpen = true;
    if (aiHistory.length===0) {
      addAIMessage('bot', `Hi ${currentUser?.username||'there'}! 👋 I'm your Shelvx AI assistant. I can help you find the best products at **${shopData?.name||'this store'}**. What are you looking for today?`);
    }
  }
}
function closeAI() {
  $('#ai-panel').classList.remove('open');
  $('#ai-overlay').classList.remove('open');
  aiOpen = false;
}

function addAIMessage(role, text) {
  aiHistory.push({role, text});
  renderAIMessages();
}

function renderAIMessages() {
  const container = $('#ai-messages');
  if (!container) return;
  container.innerHTML = aiHistory.map(m => `
    <div class="ai-msg ${m.role}">${m.text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}</div>`).join('');
  container.scrollTop = container.scrollHeight;
}

function sendChip(text) { sendAIWithText(text); }
function sendAI() {
  const input = $('#ai-input');
  if (!input?.value.trim()) return;
  sendAIWithText(input.value.trim());
  input.value = '';
}

async function sendAIWithText(userText) {
  addAIMessage('user', userText);
  const chips = $('#ai-chips');
  if (chips) chips.style.display = 'none';
  const typingId = 'typing-' + Date.now();
  const container = $('#ai-messages');
  if (container) {
    const t = document.createElement('div');
    t.className = 'ai-msg typing'; t.id = typingId;
    t.textContent = 'Thinking…';
    container.appendChild(t); container.scrollTop = container.scrollHeight;
  }

  setTimeout(() => {
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.remove();
    addAIMessage('bot', generateLocalAIResponse(userText));
  }, 450);
}

function generateLocalAIResponse(userText) {
  if (!shopData) {
    return 'Veuillez sélectionner un magasin et vous connecter pour utiliser l\'assistant IA.';
  }

  const query = userText.toLowerCase();
  const allItems = [];
  shopData.aisles.forEach(aisle => aisle.shelves.forEach(shelf => shelf.items.forEach(item => {
    allItems.push({
      ...item,
      aisle: aisle.name,
      shelf: shelf.name,
      price: parseFloat(item.price || 0)
    });
  })));

  const healthy = allItems.filter(i => ['A', 'B'].includes(i.nutriScore)).sort((a, b) => a.price - b.price).slice(0, 3);
  const cheap = allItems.slice().sort((a, b) => a.price - b.price).slice(0, 3);
  const breakfast = allItems.filter(i => /cereal|milk|bread|orange|juice|croissant|muffin|oat|granola|yogurt|café|coffee/i.test(i.name)).slice(0, 3);
  const matches = allItems.filter(i => query.split(/\s+/).some(w => i.name.toLowerCase().includes(w) || i.aisle.toLowerCase().includes(w) || i.nutriScore.toLowerCase() === w));

  if (/healthy|sant[ée]|diet|équilibr|equilibr|bon pour la sant|healthy/i.test(userText)) {
    if (healthy.length) {
      return `Je recommande ${healthy.map(i => `${i.name} (€${i.price.toFixed(2)}, Nutri-${i.nutriScore})`).join(', ')} pour un choix sain.`;
    }
    return 'Je n\'ai pas trouvé de produit Nutri A/B pour le moment, mais je peux vous proposer d\'autres options.';
  }

  if (/budget|pas cher|bon prix|économ|econom|cheap/i.test(userText)) {
    if (cheap.length) {
      return `Pour un bon rapport qualité/prix, considérez ${cheap.map(i => `${i.name} (€${i.price.toFixed(2)})`).join(', ')}.`;
    }
    return 'Je cherche des options économiques dans le magasin...';
  }

  if (/breakfast|petit d[eé]jeuner|matin|c[ée]r[eé]al|croissant|muffin|cafe|coffee|th[eé]/i.test(userText)) {
    if (breakfast.length) {
      return `Pour le petit-déjeuner, je recommande ${breakfast.map(i => `${i.name} (${i.emoji||''}, €${i.price.toFixed(2)})`).join(', ')}.`;
    }
    return 'Je n\'ai pas trouvé d\'option évidente pour le petit-déjeuner dans l\'inventaire actuelle.';
  }

  if (matches.length) {
    return `Voici ce que j\'ai trouvé : ${matches.slice(0, 4).map(i => `${i.name} (€${i.price.toFixed(2)}, Nutri-${i.nutriScore})`).join(', ')}.`;
  }

  if (healthy.length) {
    return `Voici quelques bonnes options disponibles : ${healthy.map(i => `${i.name} (€${i.price.toFixed(2)}, Nutri-${i.nutriScore}, stock ${i.stock})`).join(', ')}.`;
  }

  if (allItems.length) {
    return `Je peux vous proposer ${allItems[0].name} (€${allItems[0].price.toFixed(2)}, Nutri-${allItems[0].nutriScore}) parmi les produits disponibles.`;
  }

  return 'Je suis désolé, je ne trouve pas d\'articles pour votre demande. Essayez une autre question.';
}

Object.assign(window, {
  renderLogin, selectSupermarket, selectSupermarketCard,
  selectShelf, renderShopPlan,
  renderClientMenu, renderCommercialMenu,
  renderClientSearch, showClientItemLocation,
  openAddItemModal, openEditItemModal, confirmDeleteItem, deleteItem,
  submitAddItem, submitEditItem, submitAddShelf,
  openAddShelfModal, renderSalesOverview, renderAlerts, renderExportReport,
  openAI, closeAI, sendAI, sendChip, backToMenu, closeModal, loginUser
});

window.onload = renderLogin;
