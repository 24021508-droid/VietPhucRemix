/* ===== app.js — Main Application Controller ===== */

let currentMoodboardScene = 'temple';

/* Step Navigation */
function goToStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const ind = document.getElementById('stepIndicator' + i);
    if (!ind) continue;
    ind.classList.remove('active', 'done');
    if (i < stepNum) ind.classList.add('done');
    if (i === stepNum) ind.classList.add('active');
  }

  document.querySelectorAll('.wizard-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + stepNum)?.classList.add('active');

  if (stepNum === 2) filterColorsAndStylesForOutfit();
  if (stepNum === 3) populateAccessories();
  if (stepNum === 4) populateResults();

  document.getElementById('wizardSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* State Handlers */
function selectOutfit(name, id) {
  state.outfit = name;
  state.outfitId = id;

  document.querySelectorAll('.outfit-card').forEach(c => c.classList.remove('selected'));

  const card = document.getElementById('card-' + id);
  if (card) {
    card.classList.add('selected');
    const icon = card.querySelector('.card-select-icon');
    if (icon) icon.textContent = '✓';
  }

  const nextBtn = document.getElementById('nextStep1');
  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  filterColorsAndStylesForOutfit();
  showToast(`Đã chọn: ${name}`);
}

function selectOptionalEvent(eventName, el) {
  state.event = eventName || null;

  document.querySelectorAll('.event-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');

  if (eventName) {
    applyDefaultMoodboardBg();
    showToast(`Bối cảnh sự kiện: ${eventName}`);
  } else {
    showToast('Đã bỏ chọn sự kiện');
  }
}

function selectGender(g) {
  state.gender = g;
  document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('gender-' + g)?.classList.add('active');
  filterColorsAndStylesForOutfit();
  refreshImagePreview();
  showToast(g === 'nu' ? 'Đã chọn: Nữ' : 'Đã chọn: Nam');
}

function selectColor(hex, name, id) {
  state.color = hex;
  state.colorName = name;
  state.colorId = id;

  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  document.getElementById('color-' + id)?.classList.add('selected');

  refreshImagePreview();
  checkStep2();
  showToast(`Màu: ${name}`);
}

function selectStyle(name, id) {
  state.style = name;
  state.styleId = id;

  document.querySelectorAll('.style-card').forEach(s => s.classList.remove('selected'));
  document.getElementById('style-' + id)?.classList.add('selected');

  refreshImagePreview();
  checkStep2();
  showToast(`Phong cách: ${name}`);
}

function checkStep2() {
  if (state.color && state.style) {
    const nextBtn = document.getElementById('nextStep2');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }
}

function refreshImagePreview() {
  if (!state.outfitId || !state.colorId) return;
  const path = getImagePath(state.outfitId, state.gender, state.colorId, state.styleId);
  const previewEl = document.getElementById('step2ImagePreview');
  if (!previewEl) return;

  if (path) {
    previewEl.style.display = 'block';
    const img = previewEl.querySelector('img');
    if (img) {
      img.src = path;
      img.alt = `${state.outfit} – ${state.colorName}`;
      img.onclick = () => openLightbox(path, `${state.outfit} ${state.gender === 'nu' ? 'Nữ' : 'Nam'} – ${state.colorName}`);
    }
    const caption = previewEl.querySelector('.preview-caption');
    if (caption) {
      caption.textContent = `${state.outfit} ${state.gender === 'nu' ? 'Nữ' : 'Nam'} – ${state.colorName}`;
    }
  } else {
    previewEl.style.display = 'none';
  }
}

function toggleAccessory(id, name) {
  const index = state.accessories.indexOf(id);
  const card = document.getElementById('acc-' + id);

  if (index > -1) {
    state.accessories.splice(index, 1);
    card?.classList.remove('selected');
    showToast(`Bỏ chọn: ${name}`);
  } else {
    state.accessories.push(id);
    card?.classList.add('selected');
    showToast(`Đã chọn: ${name}`);
  }
}

/* Dynamic Filtering */
function filterColorsAndStylesForOutfit() {
  if (!state.outfitId) return;
  const images = allRealImages[state.outfitId] || [];

  const colorsForGender = new Set(
    images.filter(img => img.gender === state.gender).map(img => img.colorId)
  );
  const colorsAll = new Set(images.map(img => img.colorId));
  const availableColors = colorsForGender.size > 0 ? colorsForGender : colorsAll;

  const allColorIds = ['do', 'vang', 'lam', 'xanh-la', 'tim', 'trang', 'den', 'hong', 'nau'];
  allColorIds.forEach(colorId => {
    const swatch = document.getElementById('color-' + colorId);
    if (!swatch) return;

    if (availableColors.has(colorId)) {
      swatch.style.display = '';
    } else {
      swatch.style.display = 'none';
      if (state.colorId === colorId) {
        state.color = null;
        state.colorName = null;
        state.colorId = null;
        swatch.classList.remove('selected');
        document.getElementById('nextStep2').style.display = 'none';
      }
    }
  });

  const stylesForGender = new Set(
    images.filter(img => img.gender === state.gender).map(img => img.style)
  );
  const stylesAll = new Set(images.map(img => img.style));
  const availableStyles = stylesForGender.size > 0 ? stylesForGender : stylesAll;

  const allStyleIds = ['classic', 'modern', 'fusion', 'royal'];
  allStyleIds.forEach(styleId => {
    const card = document.getElementById('style-' + styleId);
    if (!card) return;

    if (availableStyles.has(styleId)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
      if (state.styleId === styleId) {
        state.style = null;
        state.styleId = null;
        card.classList.remove('selected');
        document.getElementById('nextStep2').style.display = 'none';
      }
    }
  });
}

/* UI Population */
function populateAccessories() {
  const container = document.getElementById('accessoriesContainer');
  if (!container) return;
  container.innerHTML = '';

  const data = outfitData[state.outfitId];
  if (!data) return;

  state.accessories = [];

  data.accessories.forEach(acc => {
    const card = document.createElement('div');
    card.className = 'acc-card';
    card.id = 'acc-' + acc.id;
    card.onclick = () => toggleAccessory(acc.id, acc.name);
    card.innerHTML = `
      <span class="acc-icon">${acc.icon}</span>
      <h4>${acc.name}</h4>
      <p>${acc.desc}</p>
      <div class="acc-checkmark">✓</div>
    `;
    container.appendChild(card);
  });
}

function populateMoodboardAccessories(data, selAcc) {
  const container = document.getElementById('moodboardAccessories');
  if (!container) return;
  container.innerHTML = '';

  if (!selAcc || selAcc.length === 0) return;

  const positions = [
    { top: '45px', right: '15px', rotate: '7deg' },
    { bottom: '60px', left: '15px', rotate: '-9deg' },
    { top: '150px', left: '12px', rotate: '-5deg' },
    { bottom: '150px', right: '12px', rotate: '11deg' },
    { top: '250px', right: '10px', rotate: '-6deg' },
    { bottom: '230px', left: '10px', rotate: '8deg' },
  ];

  selAcc.forEach((acc, i) => {
    const pos = positions[i % positions.length];
    const badge = document.createElement('div');
    badge.className = 'mb-acc-item';
    if (pos.top) badge.style.top = pos.top;
    if (pos.bottom) badge.style.bottom = pos.bottom;
    if (pos.left) badge.style.left = pos.left;
    if (pos.right) badge.style.right = pos.right;
    badge.style.transform = `rotate(${pos.rotate})`;
    badge.title = `${acc.name}: ${acc.desc}`;
    badge.onclick = () => showToast(`Phụ kiện: ${acc.name} — ${acc.desc}`);
    badge.innerHTML = `
      <span class="mb-acc-icon">${acc.icon}</span>
      <span class="mb-acc-name">${acc.name}</span>
    `;
    container.appendChild(badge);
  });
}

function setMoodboardBg(sceneType) {
  const scene = moodboardScenes[sceneType] || moodboardScenes.temple;
  currentMoodboardScene = sceneType;

  const bgEl = document.getElementById('moodboardBg');
  if (bgEl) bgEl.style.backgroundImage = `url('${scene.url}')`;

  const labelEl = document.getElementById('sceneLabel');
  if (labelEl) labelEl.textContent = scene.label;

  document.querySelectorAll('.scene-preset-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-scene-${sceneType}`)?.classList.add('active');
}

function applyDefaultMoodboardBg() {
  if (state.event === 'Tết Nguyên Đán' || state.event === 'Đi Chùa / Lễ hội') {
    setMoodboardBg('temple');
  } else if (state.event === 'Đám cưới' || state.styleId === 'royal') {
    setMoodboardBg('palace');
  } else if (state.event === 'Chụp ảnh kỷ yếu' || state.event === 'Tốt nghiệp') {
    setMoodboardBg('hoian');
  } else {
    setMoodboardBg('cafe');
  }
}

function populateResults() {
  const data = outfitData[state.outfitId];
  if (!data) return;

  document.getElementById('summaryTitle').textContent = `${data.name} — Bộ Phục Của Bạn`;
  document.getElementById('summaryOutfit').textContent = `${state.outfit || '–'} (${state.gender === 'nu' ? 'Nữ' : 'Nam'})`;
  document.getElementById('summaryColor').innerHTML = state.colorName
    ? `<span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${state.color || '#C0392B'};margin-right:6px;vertical-align:middle;border:1px solid #666"></span>${state.colorName}`
    : '–';
  document.getElementById('summaryStyle').textContent = state.style || '–';

  const selAcc = data.accessories.filter(a => state.accessories.includes(a.id));
  document.getElementById('summaryAcc').textContent = selAcc.length
    ? selAcc.map(a => a.icon + ' ' + a.name).join(', ')
    : 'Chưa chọn';

  renderAccessoryAdvice(data, selAcc);

  document.getElementById('originTitle').textContent = data.origin;
  document.getElementById('originText').textContent = data.description;

  const factsEl = document.getElementById('originFacts');
  if (factsEl) factsEl.innerHTML = data.facts.map(f => `<span class="fact-chip">${f}</span>`).join('');

  applyDefaultMoodboardBg();
  renderMockup(data);
  populateMoodboardAccessories(data, selAcc);
  renderGallery();

  const sugContainer = document.getElementById('suggestionCards');
  if (sugContainer) {
    sugContainer.innerHTML = data.suggestions.map((s, index) => `
      <div class="suggestion-item" onclick="applySuggestion('${state.outfitId}', ${index})" style="cursor:pointer">
        <span class="suggestion-emoji">${s.emoji}</span>
        <div class="suggestion-text">
          <h5>${s.title}</h5>
          <p>${s.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

function renderGallery() {
  const strip = document.getElementById('imageGalleryStrip');
  if (!strip || !state.outfitId) return;

  const images = getGalleryImages(state.outfitId);
  if (!images || images.length === 0) {
    strip.innerHTML = `<p style="color:var(--clr-text-muted);font-size:0.85rem">Đang cập nhật ảnh thực tế cho trang phục này.</p>`;
    return;
  }

  strip.innerHTML = images.map((imgObj) => {
    const isCurrentMatch =
      imgObj.colorId === state.colorId &&
      imgObj.gender === state.gender;

    return `
      <div class="gallery-thumb ${isCurrentMatch ? 'gallery-thumb--active' : ''}"
           onclick="applyGalleryImage('${imgObj.path}', '${imgObj.name}', '${imgObj.colorId}', '${imgObj.style}')"
           title="Bấm để áp dụng / Xem thử: ${imgObj.name}">
        <img src="${imgObj.path}" alt="${imgObj.name}" loading="lazy"/>
        ${isCurrentMatch ? '<span class="gallery-thumb-check">✓</span>' : ''}
      </div>
    `;
  }).join('');
}

function applyGalleryImage(path, colorName, colorId, styleId) {
  state.colorName = colorName;
  state.colorId = colorId;
  if (styleId) state.styleId = styleId;

  const mainImg = document.getElementById('mockupMainImage');
  if (mainImg) {
    mainImg.src = path;
    mainImg.alt = `${state.outfit} – ${colorName}`;
  }

  renderGallery();
  showToast(`Đã chọn ảnh: ${colorName}`);
}

function applySuggestion(outfitId, index) {
  const map = {
    'ao-dai': [
      { color: '#E8A0AE', colorName: 'Hồng Đào', colorId: 'hong', style: 'Hiện Đại Tối Giản', styleId: 'modern', acc: ['guoc-moc', 'vi-cam-tay'] },
      { color: '#1C1C2E', colorName: 'Đen Huyền', colorId: 'den', style: 'Hoàng Gia Lộng Lẫy', styleId: 'royal', acc: ['khuyen-tai', 'vong-tay'] },
      { color: '#F5F0E8', colorName: 'Trắng Ngà', colorId: 'trang', style: 'Fusion Sáng Tạo', styleId: 'fusion', acc: ['vong-tay'] }
    ],
    'ao-tu-than': [
      { color: '#C0392B', colorName: 'Đỏ Son', colorId: 'do', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['khan-mo-qua', 'yem-dao', 'non-quai-thao'] },
      { color: '#1C1C2E', colorName: 'Đen Huyền', colorId: 'den', style: 'Hiện Đại Tối Giản', styleId: 'modern', acc: ['yem-dao', 'guoc-moc'] },
      { color: '#1B5E3B', colorName: 'Xanh Ngọc Bích', colorId: 'xanh-la', style: 'Fusion Sáng Tạo', styleId: 'fusion', acc: [] }
    ],
    'nhat-binh': [
      { color: '#D4AF6E', colorName: 'Vàng Hoàng Kim', colorId: 'vang', style: 'Hoàng Gia Lộng Lẫy', styleId: 'royal', acc: ['phuong-quan', 'vong-kim'] },
      { color: '#2C5F8A', colorName: 'Lam Ngọc', colorId: 'lam', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['khuyen-bich', 'non-vau'] },
      { color: '#C0392B', colorName: 'Đỏ Son', colorId: 'do', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['hong-doc', 'guoc-hoa'] }
    ],
    'ao-giao-linh': [
      { color: '#C0392B', colorName: 'Đỏ Son', colorId: 'do', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['giay-vai', 'dai-lung'] },
      { color: '#D4AF6E', colorName: 'Vàng Hoàng Kim', colorId: 'vang', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['khan-dong', 'boi-viet'] },
      { color: '#1C1C2E', colorName: 'Đen Huyền', colorId: 'den', style: 'Hiện Đại Tối Giản', styleId: 'modern', acc: ['tui-bao'] }
    ],
    'ao-ba-ba': [
      { color: '#2C5F8A', colorName: 'Lam Ngọc', colorId: 'lam', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['khan-ran', 'dep-moc'] },
      { color: '#E8A0AE', colorName: 'Hồng Đào', colorId: 'hong', style: 'Hiện Đại Tối Giản', styleId: 'modern', acc: ['non-le', 'gion-vai'] },
      { color: '#C0392B', colorName: 'Đỏ Son', colorId: 'do', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['quat-mo', 'vong-bac'] }
    ],
    'ao-ngu-than': [
      { color: '#2C5F8A', colorName: 'Lam Ngọc', colorId: 'lam', style: 'Cổ Điển Thuần Túy', styleId: 'classic', acc: ['khan-dong-nam', 'que-bong'] },
      { color: '#5D2D8E', colorName: 'Tím Cổ Điển', colorId: 'tim', style: 'Hoàng Gia Lộng Lẫy', styleId: 'royal', acc: ['dong-ho-co'] },
      { color: '#1C1C2E', colorName: 'Đen Huyền', colorId: 'den', style: 'Fusion Sáng Tạo', styleId: 'fusion', acc: ['giay-tay', 'tui-vai'] }
    ]
  };

  const payload = map[outfitId]?.[index];
  if (!payload) return;

  state.color = payload.color;
  state.colorName = payload.colorName;
  state.colorId = payload.colorId;
  state.style = payload.style;
  state.styleId = payload.styleId;
  state.accessories = payload.acc;

  refreshImagePreview();
  checkStep2();
  populateAccessories();
  populateResults();

  showToast('Đã áp dụng gợi ý phối đồ!');
  document.getElementById('wizardSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Lightbox Modal */
function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!modal || !img) return;
  img.src = src;
  if (cap) cap.textContent = caption || '';
  modal.classList.add('open');
}

function closeLightbox(e) {
  if (!e || e.target.id === 'lightboxModal' || e.target.classList.contains('lightbox-close')) {
    document.getElementById('lightboxModal')?.classList.remove('open');
  }
}

/* Toast & Utility */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function shareOutfit() {
  const data = outfitData[state.outfitId];
  const text = `Tôi vừa phối bộ ${data?.name || 'trang phục'} màu ${state.colorName || ''}, phong cách ${state.style || ''} trên Việt Phục Remix! 🌺`;
  if (navigator.share) {
    navigator.share({ title: 'Việt Phục Remix', text, url: window.location.href });
  } else {
    navigator.clipboard?.writeText(text + '\n' + window.location.href);
    showToast('✓ Đã sao chép vào clipboard!');
  }
}

function restart() {
  Object.assign(state, {
    outfit: null, outfitId: null, event: null,
    color: null, colorName: null, colorId: null,
    style: null, styleId: null,
    gender: 'nu',
    accessories: [],
  });

  document.querySelectorAll('.outfit-card').forEach(c => {
    c.classList.remove('selected');
    const icon = c.querySelector('.card-select-icon');
    if (icon) icon.textContent = '+';
  });
  document.querySelectorAll('.event-chip, .color-swatch, .style-card, .gender-btn').forEach(c => c.classList.remove('active', 'selected'));
  document.getElementById('ev-chip-none')?.classList.add('active');
  document.getElementById('gender-nu')?.classList.add('active');
  const preview = document.getElementById('step2ImagePreview');
  if (preview) preview.style.display = 'none';
  const n1 = document.getElementById('nextStep1');
  if (n1) n1.style.display = 'none';
  const n2 = document.getElementById('nextStep2');
  if (n2) n2.style.display = 'none';

  goToStep(1);
}

/* Page Initialization */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startBtn')?.addEventListener('click', () => {
    document.getElementById('wizardSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  const cards = document.querySelectorAll('.outfit-card');
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.08}s`;
    card.style.animation = 'fadeInUp 0.6s both';
  });
});
