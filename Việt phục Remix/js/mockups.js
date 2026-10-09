/* ===== js/mockups.js — Image Helpers & SVG Mockup Engine ===== */

function getImagePath(outfitId, gender, colorId, styleId) {
  const list = allRealImages[outfitId];
  if (!list || list.length === 0) return null;

  let match = list.find(img => img.colorId === colorId && img.gender === gender && img.style === styleId);
  if (match) return match.path;

  match = list.find(img => img.colorId === colorId && img.gender === gender);
  if (match) return match.path;

  match = list.find(img => img.colorId === colorId);
  if (match) return match.path;

  match = list.find(img => img.gender === gender);
  if (match) return match.path;

  return list[0].path;
}

function getGalleryImages(outfitId) {
  return allRealImages[outfitId] || [];
}

function renderMockup(data) {
  const container = document.getElementById('mockupVisual');
  if (!container) return;

  const imgPath = getImagePath(state.outfitId, state.gender, state.colorId, state.styleId);

  if (imgPath) {
    container.innerHTML = `
      <div class="mockup-image-wrapper">
        <img id="mockupMainImage" src="${imgPath}"
             alt="${state.outfit} – ${state.colorName}"
             class="mockup-real-img"
             onerror="this.parentElement.replaceWith(getFallbackSVGEl('${state.outfitId}'))"/>
        <div class="mockup-img-overlay">
          <span class="mockup-img-badge">📸 Ảnh thực tế</span>
        </div>
      </div>`;
    return;
  }

  renderMockupSVG(container, data);
}

function getFallbackSVGEl(outfitId) {
  const div = document.createElement('div');
  renderMockupSVG(div, { name: outfitId });
  return div;
}

function renderMockupSVG(container, data) {
  const color1 = state.color || '#C0392B';
  const color2 = shadeColor(color1, -40);
  const goldColor = '#D4AF6E';

  const svgs = {
    'ao-dai': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
          <filter id="mkGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="32" ry="38" fill="#F4D9C0"/>
        <ellipse cx="140" cy="40" rx="33" ry="24" fill="#1a0800"/>
        <path d="M107 32 Q140 8 173 32 Q168 48 140 54 Q112 48 107 32Z" fill="#1a0800"/>
        <line x1="140" y1="15" x2="140" y2="5" stroke="${goldColor}" stroke-width="2"/>
        <circle cx="140" cy="4" r="4" fill="${goldColor}" filter="url(#mkGlow)"/>
        <circle cx="140" cy="4" r="2" fill="#fff" opacity="0.5"/>
        <rect x="132" y="84" width="16" height="22" rx="5" fill="#F4D9C0"/>
        <path d="M118 102 Q140 92 162 102 L168 120 Q152 113 140 116 Q128 113 112 120Z" fill="${goldColor}" opacity="0.85"/>
        <path d="M88 102 Q116 96 140 96 Q164 96 192 102 L200 220 Q200 260 195 300 L205 460 L172 460 Q166 380 140 305 Q114 380 108 460 L75 460 L85 300 Q80 260 80 220Z" fill="url(#mk1)"/>
        <path d="M88 102 Q65 118 44 142 Q32 158 38 174 Q50 180 62 172 Q76 155 88 146 L88 124Z" fill="url(#mk1)"/>
        <path d="M192 102 Q215 118 236 142 Q248 158 242 174 Q230 180 218 172 Q204 155 192 146 L192 124Z" fill="url(#mk1)"/>
        <circle cx="140" cy="175" r="18" stroke="${goldColor}" stroke-width="1.5" fill="none" opacity="0.5"/>
        <circle cx="140" cy="175" r="10" fill="${goldColor}" opacity="0.2"/>
        <path d="M122 175 L158 175 M140 157 L140 193" stroke="${goldColor}" stroke-width="1" opacity="0.5"/>
        <circle cx="140" cy="175" r="4" fill="${goldColor}" opacity="0.6"/>
        <path d="M80 220 L200 220" stroke="${goldColor}" stroke-width="1.5" opacity="0.4"/>
        <path d="M108 460 L88 460 L92 320 Q108 340 108 460Z" fill="${darkenColor(color1)}" opacity="0.7"/>
        <path d="M172 460 L192 460 L188 320 Q172 340 172 460Z" fill="${darkenColor(color1)}" opacity="0.7"/>
        <line x1="80" y1="458" x2="115" y2="458" stroke="${goldColor}" stroke-width="2" opacity="0.6"/>
        <line x1="165" y1="458" x2="200" y2="458" stroke="${goldColor}" stroke-width="2" opacity="0.6"/>
      </svg>`,

    'ao-tu-than': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="32" ry="38" fill="#F4D9C0"/>
        <ellipse cx="140" cy="40" rx="34" ry="26" fill="#1a0800"/>
        <path d="M106 30 Q140 10 174 30 Q168 50 140 56 Q112 50 106 30Z" fill="#1a0800"/>
        <ellipse cx="140" cy="22" rx="16" ry="12" fill="#1a0800"/>
        <circle cx="140" cy="22" r="5" fill="#D4AF6E"/>
        <rect x="132" y="84" width="16" height="22" rx="5" fill="#F4D9C0"/>
        <path d="M110 106 L140 160 L170 106 Q150 135 140 138 Q130 135 110 106Z" fill="#C0392B"/>
        <path d="M125 118 L140 145 L155 118Z" fill="#F5F0E8"/>
        <path d="M82 108 L110 240 L115 460 L140 460 L135 240 L140 210 L145 240 L165 460 L190 460 L170 240 L198 108Z" fill="url(#mk2)"/>
        <path d="M82 108 Q60 128 38 152 Q26 168 32 184 Q44 190 56 182 Q70 165 82 154 L82 128Z" fill="url(#mk2)"/>
        <path d="M198 108 Q220 128 242 152 Q254 168 248 184 Q236 190 224 182 Q210 165 198 154 L198 128Z" fill="url(#mk2)"/>
        <rect x="110" y="208" width="60" height="14" rx="4" fill="#D4AF6E"/>
        <path d="M140 222 L130 330 L150 330Z" fill="#C0392B"/>
        <path d="M96 230 L80 460 L200 460 L184 230Z" fill="#1C1C2E" opacity="0.9"/>
      </svg>`,

    'nhat-binh': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
          <filter id="mkGlow3"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="30" ry="36" fill="#F4D9C0"/>
        <path d="M100 42 C100 18 180 18 180 42 L180 50 L100 50 Z" fill="#D4AF6E"/>
        <rect x="96" y="44" width="88" height="8" rx="2" fill="#C0392B"/>
        <circle cx="140" cy="30" r="6" fill="#C0392B" filter="url(#mkGlow3)"/>
        <circle cx="116" cy="46" r="3" fill="#D4AF6E"/>
        <circle cx="164" cy="46" r="3" fill="#D4AF6E"/>
        <rect x="132" y="80" width="16" height="22" rx="5" fill="#F4D9C0"/>
        <rect x="110" y="98" width="60" height="24" rx="3" fill="#D4AF6E"/>
        <rect x="114" y="102" width="52" height="16" rx="2" fill="#1C1C2E"/>
        <path d="M114 102 L140 118 L166 102 L166 118 L140 118 Z" fill="#D4AF6E" opacity="0.5"/>
        <path d="M76 102 L106 98 L106 460 L174 460 L174 98 L204 102 L212 460 L68 460Z" fill="url(#mk3)"/>
        <rect x="106" y="122" width="68" height="338" fill="${shadeColor(color1, -20)}"/>
        <rect x="137" y="122" width="6" height="338" fill="#D4AF6E" opacity="0.8"/>
        <path d="M76 102 L30 130 L18 160 L42 170 L80 145 Z" fill="url(#mk3)"/>
        <path d="M204 102 L250 130 L262 160 L238 170 L200 145 Z" fill="url(#mk3)"/>
        <rect x="18" y="145" width="24" height="25" fill="#D4AF6E" opacity="0.8"/>
        <rect x="238" y="145" width="24" height="25" fill="#D4AF6E" opacity="0.8"/>
        <line x1="68" y1="456" x2="212" y2="456" stroke="#D4AF6E" stroke-width="4"/>
      </svg>`,

    'ao-giao-linh': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="30" ry="36" fill="#F4D9C0"/>
        <ellipse cx="140" cy="38" rx="32" ry="22" fill="#1a0800"/>
        <circle cx="140" cy="18" r="8" fill="#1a0800"/>
        <line x1="130" y1="18" x2="150" y2="18" stroke="#D4AF6E" stroke-width="2"/>
        <rect x="132" y="80" width="16" height="22" rx="5" fill="#F4D9C0"/>
        <path d="M80 102 L140 170 L170 102 Q150 135 140 138 Z" fill="${shadeColor(color1, 30)}"/>
        <path d="M170 102 L110 170 L80 102 Z" fill="url(#mk4)"/>
        <path d="M80 102 L140 170 L140 460 L68 460 L74 240Z" fill="url(#mk4)"/>
        <path d="M200 102 L110 170 L140 460 L212 460 L206 240Z" fill="${shadeColor(color1, -15)}"/>
        <rect x="100" y="210" width="80" height="18" rx="3" fill="#D4AF6E"/>
        <path d="M80 102 Q55 125 32 155 Q20 175 30 190 Q44 198 58 188 Q72 168 84 150 L84 125Z" fill="url(#mk4)"/>
        <path d="M200 102 Q225 125 248 155 Q260 175 250 190 Q236 198 222 188 Q208 168 196 150 L196 125Z" fill="${shadeColor(color1, -15)}"/>
        <line x1="68" y1="458" x2="212" y2="458" stroke="#D4AF6E" stroke-width="2" opacity="0.6"/>
      </svg>`,

    'ao-ba-ba': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="30" ry="36" fill="#F4D9C0"/>
        <ellipse cx="140" cy="38" rx="32" ry="22" fill="#1a0800"/>
        <path d="M110 38 Q140 54 170 38 Q165 60 140 64 Q115 60 110 38Z" fill="#1a0800"/>
        <rect x="132" y="80" width="16" height="22" rx="4" fill="#F4D9C0"/>
        <path d="M118 98 A24 24 0 0 0 162 98 L168 106 A30 30 0 0 1 112 106 Z" fill="#F5F0E8"/>
        <path d="M100 100 Q140 104 180 100 L190 280 L90 280Z" fill="url(#mk5)"/>
        <line x1="140" y1="104" x2="140" y2="280" stroke="${shadeColor(color1, -30)}" stroke-width="1.5"/>
        <circle cx="140" cy="130" r="3.5" fill="#F5F0E8"/>
        <circle cx="140" cy="160" r="3.5" fill="#F5F0E8"/>
        <circle cx="140" cy="190" r="3.5" fill="#F5F0E8"/>
        <circle cx="140" cy="220" r="3.5" fill="#F5F0E8"/>
        <circle cx="140" cy="250" r="3.5" fill="#F5F0E8"/>
        <rect x="104" y="220" width="26" height="36" rx="4" fill="${shadeColor(color1, -10)}" opacity="0.6"/>
        <rect x="150" y="220" width="26" height="36" rx="4" fill="${shadeColor(color1, -10)}" opacity="0.6"/>
        <path d="M100 100 Q74 112 60 136 Q52 152 58 166 Q68 174 80 166 Q90 150 98 136 L98 118Z" fill="url(#mk5)"/>
        <path d="M180 100 Q206 112 220 136 Q228 152 222 166 Q212 174 200 166 Q190 150 182 136 L182 118Z" fill="url(#mk5)"/>
        <path d="M94 290 L80 460 L130 460 L140 360 L150 460 L200 460 L186 290Z" fill="${darkenColor(color1)}" opacity="0.8"/>
      </svg>`,

    'ao-ngu-than': `
      <svg viewBox="0 0 280 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mk6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${color1}"/>
            <stop offset="100%" stop-color="${color2}"/>
          </linearGradient>
          <filter id="mkGlow6"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <ellipse cx="140" cy="240" rx="110" ry="220" fill="${color1}" opacity="0.06"/>
        <ellipse cx="140" cy="52" rx="28" ry="34" fill="#F4D9C0"/>
        <ellipse cx="140" cy="40" rx="30" ry="22" fill="#1a0800"/>
        <rect x="112" y="22" width="56" height="22" rx="4" fill="#1a0800"/>
        <rect x="108" y="20" width="64" height="8" rx="2" fill="#2c1200"/>
        <rect x="108" y="27" width="64" height="3" rx="1.5" fill="#D4AF6E" opacity="0.6"/>
        <rect x="133" y="80" width="14" height="22" rx="4" fill="#F4D9C0"/>
        <rect x="124" y="96" width="32" height="14" rx="5" fill="${shadeColor(color1, 20)}"/>
        <rect x="126" y="97" width="28" height="12" rx="4" fill="${shadeColor(color1, 10)}"/>
        <path d="M78 108 Q110 100 140 100 Q170 100 202 108 L208 430 L72 430Z" fill="url(#mk6)"/>
        <path d="M132 100 L132 430 L148 430 L148 100Z" fill="${shadeColor(color1, -15)}" opacity="0.4"/>
        <circle cx="140" cy="124" r="4.5" fill="#D4AF6E" opacity="0.85" filter="url(#mkGlow6)"/>
        <circle cx="140" cy="148" r="4.5" fill="#D4AF6E" opacity="0.85" filter="url(#mkGlow6)"/>
        <circle cx="140" cy="172" r="4.5" fill="#D4AF6E" opacity="0.85" filter="url(#mkGlow6)"/>
        <circle cx="140" cy="196" r="4.5" fill="#D4AF6E" opacity="0.85" filter="url(#mkGlow6)"/>
        <circle cx="140" cy="220" r="4.5" fill="#D4AF6E" opacity="0.85" filter="url(#mkGlow6)"/>
        <circle cx="140" cy="106" r="3" fill="#D4AF6E" opacity="0.9"/>
        <line x1="72" y1="430" x2="208" y2="430" stroke="#D4AF6E" stroke-width="2.5" opacity="0.75"/>
        <path d="M78 108 Q50 128 34 162 Q22 186 32 204 Q48 214 62 202 Q74 182 78 160Z" fill="url(#mk6)"/>
        <path d="M202 108 Q230 128 246 162 Q258 186 248 204 Q232 214 218 202 Q206 182 202 160Z" fill="url(#mk6)"/>
      </svg>`,
  };

  const svgContent = svgs[state.outfitId] || svgs['ao-dai'];
  container.innerHTML = svgContent;
}

/* Color Helpers */
function shadeColor(hex, percent) {
  const num = parseInt((hex || '#C0392B').replace('#',''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + percent));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xFF) + percent));
  const b = Math.min(255, Math.max(0, (num & 0xFF) + percent));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function darkenColor(hex) { return shadeColor(hex, -60); }
