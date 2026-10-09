/* ===== js/advice.js — Expert Accessory Advice & Evaluation Logic ===== */

function getAccessoryComment(accId, outfitId, eventName, styleId) {
  const ev = eventName || '';

  if (accId === 'non-la' || accId === 'non-le' || accId === 'non-la-go') {
    if (ev.includes('kỷ yếu') || ev.includes('Tốt nghiệp')) {
      return {
        tag: 'Cân nhắc',
        type: 'warning',
        comment: 'Nón lá đi với Áo Dài khi đi Chùa hay Du Xuân rất đẹp và duyên dáng. Tuy nhiên khi chụp ảnh Kỷ Yếu / Tốt nghiệp di chuyển nhóm nhiều, nón lá có thể hơi cồng kềnh và dễ che mặt. Bạn có thể dùng làm đạo cụ cầm tay thay vì đội liên tục!'
      };
    }
    if (ev.includes('Tết') || ev.includes('Lễ hội') || (typeof currentMoodboardScene !== 'undefined' && currentMoodboardScene === 'temple')) {
      return {
        tag: 'Rất hợp',
        type: 'success',
        comment: 'Nón lá kết hợp cùng Áo Dài / Áo Bà Ba khi du xuân đi Chùa là lựa chọn hoàn hảo — tôn trọn nét e ấp, dịu dàng chuẩn mực phụ nữ Việt.'
      };
    }
    return {
      tag: 'Điểm nhấn thơ',
      type: 'info',
      comment: 'Phụ kiện nón lá mang đậm vẻ đẹp nét thơ dân dã, rất ăn ảnh khi tạo dáng chụp ảnh góc rộng ngoài trời.'
    };
  }

  if (accId === 'non-quai-thao') {
    if (ev.includes('Lễ hội') || ev.includes('nghệ thuật')) {
      return {
        tag: 'Tuyệt vời',
        type: 'success',
        comment: 'Nón Quai Thao là biểu tượng linh hồn của Áo Tứ Thân. Tán nón rộng thêu hoa văn cực kỳ ấn tượng và chuẩn mực văn hóa Quan Họ Kinh Bắc.'
      };
    }
    return {
      tag: 'Cầu kỳ',
      type: 'warning',
      comment: 'Nón quai thao rất đẹp và nổi bật khi chụp ảnh ngoài trời, nhưng kích thước khá lớn nên phù hợp chụp góc tĩnh hơn là đi dạo phố.'
    };
  }

  if (accId === 'phuong-quan') {
    if (ev.includes('Đám cưới') || styleId === 'royal') {
      return {
        tag: 'Quý phái lộng lẫy',
        type: 'success',
        comment: 'Phụng Quan dát vàng đi cùng Nhật Bình là đỉnh cao lễ phục hoàng gia, mang đến thần thái uy nghi và sang quý nhất cho ngày trọng đại.'
      };
    }
    return {
      tag: 'Hơi trang trọng',
      type: 'warning',
      comment: 'Phụng Quan mang tính triều nghi hoàng gia rất cao. Nếu đi dạo phố hay quán cà phê nhẹ nhàng thì hơi nặng, bạn có thể cân nhắc trâm cài nhẹ nhàng hơn.'
    };
  }

  if (accId === 'khan-mo-qua' || accId === 'yem-dao') {
    return {
      tag: 'Đặc trưng Bắc Bộ',
      type: 'success',
      comment: 'Yếm đào thắm và khăn mỏ quạ vừa khéo léo tôn vinh đường nét duyên dáng, vừa giữ trọn vẻ mộc mạc và nữ tính của phụ nữ Bắc Bộ.'
    };
  }

  if (accId === 'khan-ran' || accId === 'khan-ran-ri') {
    return {
      tag: 'Phóng khoáng Nam Bộ',
      type: 'success',
      comment: 'Khăn rằn / rằn ri vắt nhẹ trên vai cùng Áo Bà Ba tái hiện trọn vẹn nét chân thành, phóng khoáng và mộc mạc của người con sông nước miền Tây.'
    };
  }

  if (accId === 'khan-dong' || accId === 'khan-dong-nam' || accId === 'khan-quang') {
    if (ev.includes('Tốt nghiệp') || ev.includes('Đám cưới') || ev.includes('Tết')) {
      return {
        tag: 'Trang trọng',
        type: 'success',
        comment: 'Khăn Đóng / Mấn giúp định hình phom dáng khuôn mặt, tạo diện mạo nghiêm trang, chỉn chu cho nam giới và quý phái cho nữ giới.'
      };
    }
    return {
      tag: 'Cổ điển',
      type: 'info',
      comment: 'Khăn đóng giữ nét truyền thống chuẩn mực, giúp tổng thể bộ outfit thêm phần chỉn chu và ăn ảnh.'
    };
  }

  if (accId === 'que-bong') {
    if (ev.includes('Tốt nghiệp') || ev.includes('kỷ yếu')) {
      return {
        tag: 'Học giả nho nhã',
        type: 'success',
        comment: 'Gậy trúc đi cùng Áo Ngũ Thân nam tạo hình ảnh thư sinh, trí thức triều Nguyễn rất độc đáo và nổi bật trong bộ ảnh kỷ yếu.'
      };
    }
    return {
      tag: 'Đạo cụ độc đáo',
      type: 'info',
      comment: 'Gậy trúc là đạo cụ tạo dáng mang phong thái thư thái, nho nhã cho nam giới khi mặc Ngũ Thân.'
    };
  }

  if (accId === 'giay-tay' || accId === 'dong-ho-co' || accId === 'tui-vai') {
    return {
      tag: 'Fusion sành điệu',
      type: 'info',
      comment: 'Sự kết hợp giữa phụ kiện vintage / hiện đại và Việt phục giúp tổng thể trông trẻ trung, thời thượng như bước ra từ tạp chí thời trang.'
    };
  }

  if (accId === 'guoc-moc' || accId === 'guoc-hoa' || accId === 'dep-moc') {
    return {
      tag: 'Chuẩn phong vị',
      type: 'success',
      comment: 'Tiếng guốc mộc hay bước đi nhẹ nhàng trên đôi hài thêu hoa hoàn thiện trọn vẹn vẻ đẹp thong dong của người Việt xưa.'
    };
  }

  if (accId === 'vong-tay' || accId === 'khuyen-tai' || accId === 'vong-kim' || accId === 'khuyen-bich') {
    return {
      tag: 'Điểm nhấn tinh tế',
      type: 'success',
      comment: 'Trang sức ánh ngọc / vàng tạo điểm sáng điểm xuyết nhẹ nhàng, làm tăng nét sang quý mà không bị rối mắt.'
    };
  }

  return {
    tag: 'Hài hòa',
    type: 'info',
    comment: 'Phụ kiện bổ trợ tuyệt vời, giúp tôn thêm cá tính và phong cách cá nhân của bạn.'
  };
}

function getDefaultAccessoryAdvice(outfitId, eventName, styleId) {
  if (outfitId === 'ao-dai') {
    return [
      { title: '🪭 Nón Lá', desc: 'Đi du xuân, đi Chùa hay chụp ảnh phong cảnh rất thơ; tuy nhiên nếu chụp kỷ yếu di chuyển nhiều thì nên cầm tay thay vì đội.' },
      { title: '🧣 Khăn Đóng / Mấn', desc: 'Rất hợp cho Lễ Tốt Nghiệp hoặc Đám Cưới, giúp tôn thêm vẻ đài các, trang trọng.' },
      { title: '👜 Túi Cầm Tay Gấm', desc: 'Phụ kiện nhỏ gọn vừa tiện lợi vừa ton-sur-ton với Áo Dài.' }
    ];
  }
  if (outfitId === 'ao-tu-than') {
    return [
      { title: '🌺 Yếm Đào & Khăn Mỏ Quạ', desc: 'Bộ đôi linh hồn giúp thể hiện trọn vẹn nét duyên dáng Quan Họ Kinh Bắc.' },
      { title: '🎩 Nón Quai Thao', desc: 'Đặc biệt ăn ảnh khi chụp hình concept lễ hội ngoài trời.' }
    ];
  }
  if (outfitId === 'nhat-binh') {
    return [
      { title: '👑 Phụng Quan', desc: 'Hoàn hảo cho đám cưới hoặc sự kiện trang trọng, mang lại thần thái hoàng gia lộng lẫy.' },
      { title: '👠 Hài Thêu Hoa', desc: 'Giúp bước đi mềm mại, chuẩn phong thái triều đình.' }
    ];
  }
  if (outfitId === 'ao-ngu-than') {
    return [
      { title: '🎩 Khăn Đóng & Gậy Trúc', desc: 'Tạo phong thái thư sinh, trí thức rất ấn tượng cho bộ ảnh kỷ yếu / tốt nghiệp.' },
      { title: '👞 Giày Da Vintage', desc: 'Điểm chấm phá Fusion hiện đại cho nam giới.' }
    ];
  }
  if (outfitId === 'ao-ba-ba') {
    return [
      { title: '🧣 Khăn Rằn & Nón Lá Miền Tây', desc: 'Lựa chọn số 1 tái hiện nét mộc mạc, phóng khoáng của sông nước Nam Bộ.' },
      { title: '🎵 Giỏ Đan Lá Dừa', desc: 'Đạo cụ tự nhiên cá tính cho góc chụp ngoài trời.' }
    ];
  }
  return [
    { title: '🧢 Khăn Đóng & Đai Lưng Vải', desc: 'Tăng độ chỉn chu và trang nghiêm cho trang phục cổ phong.' },
    { title: '👟 Giày Vải Đen', desc: 'Dễ di chuyển và giữ nét mộc mạc cổ điển.' }
  ];
}

function getOutfitEventReview(outfitId, eventName, styleId) {
  if (!eventName) return null;

  const ev = eventName.toLowerCase();

  // 1. Nhật Bình (Cung đình hoàng gia)
  if (outfitId === 'nhat-binh') {
    if (ev.includes('chùa') || ev.includes('lễ hội')) {
      return {
        tag: 'Không hợp lý',
        type: 'warning',
        title: '🚨 Cảnh báo phù hợp bối cảnh',
        comment: 'Áo Nhật Bình là lễ phục Cung Đình vô cùng lộng lẫy và uy nghi dành cho nghi lễ trọng đại. Mặc Nhật Bình đi Chùa hoặc không gian tâm linh thanh tịnh bị xem là quá phô trương, cầu kỳ và thiếu sự khiêm nhường tĩnh lặng. Bạn nên chuyển sang Áo Dài trầm lắng hoặc Áo Tứ Thân mộc mạc!'
      };
    }
    if (ev.includes('cà phê') || ev.includes('dạo phố')) {
      return {
        tag: 'Quá cầu kỳ',
        type: 'warning',
        title: '⚠️ Cảnh báo bối cảnh casual',
        comment: 'Nhật Bình có hoa văn phượng hoàng và phom dáng lộng lẫy, mặc đi dạo phố hay quán cà phê vỉa hè dễ tạo cảm giác lạc quẻ, nặng nề và khó di chuyển. Bạn hãy cân nhắc đổi sang Áo Dài cách tân nhẹ nhàng!'
      };
    }
    if (ev.includes('cưới')) {
      return {
        tag: 'Tuyệt vời: Đẳng cấp Cung Đình',
        type: 'success',
        title: '👑 Phối đồ xuất sắc cho ngày trọng đại',
        comment: 'Nhật Bình là sự lựa chọn đỉnh cao cho lễ cưới, tôn lên vóc dáng kiêu sa, quý phái chuẩn thần thái Hoàng Hậu / Phi Tần triều Nguyễn.'
      };
    }
  }

  // 2. Áo Bà Ba (Sông nước Nam Bộ)
  if (outfitId === 'ao-ba-ba') {
    if (ev.includes('cưới') || styleId === 'royal') {
      return {
        tag: 'Quá đơn giản',
        type: 'warning',
        title: '🚨 Cảnh báo mức độ trang trọng',
        comment: 'Áo Bà Ba mang nét mộc mạc quê hương Nam Bộ. Mặc Áo Bà Ba tham dự Đám Cưới tại nhà hàng sang trọng có thể quá đơn sơ và thiếu độ trang trọng đối với gia chủ. Bạn nên chọn Áo Dài hoặc Nhật Bình lộng lẫy hơn!'
      };
    }
    if (ev.includes('tốt nghiệp')) {
      return {
        tag: 'Cân nhắc',
        type: 'warning',
        title: '⚠️ Không khí nghi lễ học thuật',
        comment: 'Áo Bà Ba tươi tắn nhưng mang tính casual dân dã, trong khi Lễ Tốt Nghiệp mang tính nghi thức học thuật. Bạn nên chọn Áo Ngũ Thân hoặc Áo Dài để chỉn chu hơn.'
      };
    }
    if (ev.includes('cà phê') || ev.includes('kỷ yếu') || ev.includes('tết')) {
      return {
        tag: 'Tươi tắn mộc mạc',
        type: 'success',
        title: '🌾 Phối đồ mộc mạc chân thật',
        comment: 'Áo Bà Ba đem lại sự thoải mái, gần gũi và tự nhiên khi chụp ảnh kỷ yếu phong cách quê hương hoặc dạo phố miền Tây.'
      };
    }
  }

  // 3. Áo Tứ Thân (Quan họ Kinh Bắc)
  if (outfitId === 'ao-tu-than') {
    if (ev.includes('tốt nghiệp')) {
      return {
        tag: 'Lệch tông',
        type: 'warning',
        title: '⚠️ Cảnh báo bối cảnh học thuật',
        comment: 'Áo Tứ Thân gắn liền với nét đẹp hội hè dân gian Quan Họ Kinh Bắc. Khi mặc dự Lễ Tốt Nghiệp có thể hơi lệch tông với sự nghiêm trang trang trọng. Bạn nên ưu tiên Áo Ngũ Thân hoặc Áo Dài!'
      };
    }
    if (ev.includes('lễ hội') || ev.includes('chùa') || ev.includes('tết')) {
      return {
        tag: 'Hoàn hảo: Chuẩn Kinh Bắc',
        type: 'success',
        title: '🎋 Phối đồ đúng tinh thần di sản',
        comment: 'Áo Tứ Thân kết hợp cùng yếm đào thắm và khăn mỏ quạ là đỉnh cao nhã đặn khi tham gia lễ hội dân gian hay du xuân đầu năm.'
      };
    }
  }

  // 4. Áo Dài (Quốc phục)
  if (outfitId === 'ao-dai') {
    if (ev.includes('tết') || ev.includes('chùa') || ev.includes('kỷ yếu') || ev.includes('tốt nghiệp') || ev.includes('cưới')) {
      return {
        tag: 'Thanh lịch chuẩn mực',
        type: 'success',
        title: '✨ Phối đồ hài hòa & trang nhã',
        comment: 'Áo Dài là quốc phục chuẩn mực cho hầu hết các dịp từ Tết, Lễ chùa đến Kỷ yếu hay Đám cưới. Vừa tôn vinh vóc dáng vừa giữ trọn nét lịch sự.'
      };
    }
  }

  // 5. Áo Ngũ Thân (Trí thức)
  if (outfitId === 'ao-ngu-than') {
    if (ev.includes('tốt nghiệp') || ev.includes('cưới') || ev.includes('tết')) {
      return {
        tag: 'Uy nghi trí thức',
        type: 'success',
        title: '🎓 Phối đồ học giả chỉn chu',
        comment: 'Áo Ngũ Thân tạo phom dáng đứng đắn, thể hiện phong thái quân tử, nho nhã cực kỳ phù hợp cho dịp Tốt nghiệp, Đám cưới hay Tết Nguyên Đán.'
      };
    }
  }

  // 6. Áo Giao Lĩnh (Cổ phong)
  if (outfitId === 'ao-giao-linh') {
    if (ev.includes('nghệ thuật') || ev.includes('lễ hội') || ev.includes('kỷ yếu')) {
      return {
        tag: 'Cổ phong ấn tượng',
        type: 'success',
        title: '🎭 Phối đồ đậm chất lịch sử',
        comment: 'Áo Giao Lĩnh tái hiện không khí triều đại Lý-Trần-Lê cổ kính, giúp bộ ảnh mang phong vị điện ảnh ấn tượng.'
      };
    }
  }

  return {
    tag: 'Hài hòa',
    type: 'info',
    title: '💡 Nhận xét phối đồ',
    comment: `Sự kết hợp giữa ${outfitId} và ${eventName} đem lại nét cá tính ấn tượng.`
  };
}

function renderAccessoryAdvice(data, selAcc) {
  const container = document.getElementById('accReviewList');
  const titleEl = document.getElementById('accReviewTitle');
  if (!container) return;

  const eventName = state.event || '';
  const outfitName = data.name;

  if (titleEl) {
    titleEl.textContent = eventName 
      ? `Đánh giá trang phục & phụ kiện cho ${outfitName} (${eventName})`
      : `Đánh giá phụ kiện cho ${outfitName}`;
  }

  let html = '';

  // 1. Tương thích giữa Trang phục + Sự kiện
  const eventReview = getOutfitEventReview(state.outfitId, state.event, state.styleId);
  if (eventReview) {
    html += `
      <div class="acc-review-item event-review-highlight ${eventReview.type}">
        <div class="acc-review-header-row">
          <span class="acc-review-icon">${eventReview.type === 'warning' ? '🚨' : '✨'}</span>
          <span class="acc-review-name">${eventReview.title}</span>
          <span class="acc-review-tag ${eventReview.type}">${eventReview.tag}</span>
        </div>
        <p class="acc-review-text">${eventReview.comment}</p>
      </div>
    `;
  }

  // 2. Nhận xét từng phụ kiện
  if (selAcc && selAcc.length > 0) {
    html += selAcc.map(acc => {
      const evaluation = getAccessoryComment(acc.id, state.outfitId, state.event, state.styleId);
      return `
        <div class="acc-review-item">
          <div class="acc-review-header-row">
            <span class="acc-review-icon">${acc.icon}</span>
            <span class="acc-review-name">${acc.name}</span>
            <span class="acc-review-tag ${evaluation.type}">${evaluation.tag}</span>
          </div>
          <p class="acc-review-text">${evaluation.comment}</p>
        </div>
      `;
    }).join('');
  } else {
    const defaultAdvice = getDefaultAccessoryAdvice(state.outfitId, state.event, state.styleId);
    html += `
      <div class="acc-review-item">
        <p class="acc-review-text"><em>Gợi ý phụ kiện nên có cho ${outfitName} ${eventName ? 'khi ' + eventName : ''}:</em></p>
        <ul class="acc-advice-bullets">
          ${defaultAdvice.map(adv => `<li><strong>${adv.title}:</strong> ${adv.desc}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  container.innerHTML = html;
}
