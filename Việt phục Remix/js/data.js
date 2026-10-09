/* ===== js/data.js — Data Store for Việt Phục Remix ===== */

const state = {
  outfit: null,
  outfitId: null,
  event: null,
  color: null,
  colorName: null,
  colorId: null,
  style: null,
  styleId: null,
  gender: 'nu',       // 'nam' | 'nu'
  accessories: [],
};

/* Real Image Catalog */
const allRealImages = {
  'ao-dai': [
    { path: 'assets/images/ao_dai_truyen_thong/nu/red.jpg', name: 'Đỏ Son', colorId: 'do', gender: 'nu', style: 'classic', tag: 'Truyền Thống' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/pink.jpg', name: 'Hồng Đào', colorId: 'hong', gender: 'nu', style: 'classic', tag: 'Duyên Dáng' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/blue.jpg', name: 'Lam Ngọc', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Thanh Lịch' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/green.jpg', name: 'Xanh Ngọc Bích', colorId: 'xanh-la', gender: 'nu', style: 'classic', tag: 'Tươi Tắn' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/purple.jpg', name: 'Tím Huế', colorId: 'tim', gender: 'nu', style: 'classic', tag: 'Cố Đô' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/white_1.jpg', name: 'Trắng Tinh Khôi', colorId: 'trang', gender: 'nu', style: 'classic', tag: 'Nữ Sinh' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/white_3.jpg', name: 'Trắng Lụa Ngà', colorId: 'trang', gender: 'nu', style: 'classic', tag: 'Quý Phái' },
    { path: 'assets/images/ao_dai_truyen_thong/nu/pink_blue.jpg', name: 'Hồng Phối Lam', colorId: 'hong', gender: 'nu', style: 'fusion', tag: 'Phối Màu' },
    { path: 'assets/images/ao_dai_cach_tan/nu/yellow.jpg', name: 'Vàng Hoàng Yến', colorId: 'vang', gender: 'nu', style: 'fusion', tag: 'Cách Tân' },
    { path: 'assets/images/ao_dai_cach_tan/nu/red.jpg', name: 'Đỏ Cách Tân', colorId: 'do', gender: 'nu', style: 'fusion', tag: 'Cách Tân' },
    { path: 'assets/images/ao_dai_cach_tan/nu/purple.jpg', name: 'Tím Cách Tân', colorId: 'tim', gender: 'nu', style: 'fusion', tag: 'Cách Tân' },
    { path: 'assets/images/ao_dai_truyen_thong/nam/white.jpg', name: 'Trắng Nam', colorId: 'trang', gender: 'nam', style: 'classic', tag: 'Áo Dài Nam' },
  ],
  'ao-tu-than': [
    { path: 'assets/images/ao_tu_than/nu/blue.jpg', name: 'Lam Ngọc Bắc Bộ', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Kinh Bắc' },
    { path: 'assets/images/ao_tu_than/nu/yellow.jpg', name: 'Vàng Mỡ Gà', colorId: 'vang', gender: 'nu', style: 'classic', tag: 'Dân Gian' },
    { path: 'assets/images/ao_tu_than/nu/white.jpg', name: 'Trắng Thanh Khiết', colorId: 'trang', gender: 'nu', style: 'classic', tag: 'Thanh Thoát' },
    { path: 'assets/images/ao_tu_than/nu/white+ red.jpg', name: 'Yếm Đỏ Vạt Trắng', colorId: 'do', gender: 'nu', style: 'classic', tag: 'Yếm Thắm' },
    { path: 'assets/images/ao_tu_than/nu/blue+white.jpg', name: 'Lam Phối Trắng', colorId: 'lam', gender: 'nu', style: 'fusion', tag: 'Phối Màu' },
    { path: 'assets/images/ao_tu_than/nu/pink+green.jpg', name: 'Yếm Đào Váy Xanh', colorId: 'hong', gender: 'nu', style: 'classic', tag: 'Quan Họ' },
    { path: 'assets/images/ao_tu_than/nam/black.jpg', name: 'Áo Then Đen Nam', colorId: 'den', gender: 'nam', style: 'classic', tag: 'Nam Giới' },
  ],
  'nhat-binh': [
    { path: 'assets/images/ao_nhat_binh/nu/red.jpg', name: 'Đỏ Son Nhất Giai', colorId: 'do', gender: 'nu', style: 'royal', tag: 'Hoàng Cung' },
    { path: 'assets/images/ao_nhat_binh/nu/blue.jpg', name: 'Lam Ngọc Quý Phái', colorId: 'lam', gender: 'nu', style: 'royal', tag: 'Cung Đình' },
    { path: 'assets/images/ao_nhat_binh/nu/light_blue.jpg', name: 'Xanh Thanh Thiên', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Trang Nhã' },
    { path: 'assets/images/ao_nhat_binh/nu/pink.jpg', name: 'Hồng Phấn Cung Phi', colorId: 'hong', gender: 'nu', style: 'classic', tag: 'Đài Các' },
    { path: 'assets/images/ao_nhat_binh/nu/white.jpg', name: 'Bạch Ngọc Vương Phi', colorId: 'trang', gender: 'nu', style: 'royal', tag: 'Thuần Khiết' },
  ],
  'ao-giao-linh': [
    { path: 'assets/images/ao_giao_linh/nu/blue.jpg', name: 'Lam Ngọc Cổ Điển', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Cổ Phong' },
    { path: 'assets/images/ao_giao_linh/nu/green.jpg', name: 'Xanh Lục Dân Gian', colorId: 'xanh-la', gender: 'nu', style: 'classic', tag: 'Dân Gian' },
    { path: 'assets/images/ao_giao_linh/nu/yellow.jpg', name: 'Vàng Hoàng Kim', colorId: 'vang', gender: 'nu', style: 'royal', tag: 'Hoàng Tộc' },
    { path: 'assets/images/ao_giao_linh/nu/pink.jpg', name: 'Hồng Đào Dịu Dàng', colorId: 'hong', gender: 'nu', style: 'classic', tag: 'Nữ Tính' },
    { path: 'assets/images/ao_giao_linh/nu/white.jpg', name: 'Trắng Ngà Tinh Khôi', colorId: 'trang', gender: 'nu', style: 'modern', tag: 'Trang Nhã' },
    { path: 'assets/images/ao_giao_linh/nam/red.jpg', name: 'Đỏ Trầm Nam Tính', colorId: 'do', gender: 'nam', style: 'classic', tag: 'Nam Giao Lĩnh' },
  ],
  'ao-ba-ba': [
    { path: 'assets/images/ao_ba_ba/nu/blue.jpg', name: 'Xanh Lam Sông Nước', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Miền Tây' },
    { path: 'assets/images/ao_ba_ba/nu/brown.jpg', name: 'Nâu Truyền Thống', colorId: 'nau', gender: 'nu', style: 'classic', tag: 'Mộc Mạc' },
    { path: 'assets/images/ao_ba_ba/nu/green.jpg', name: 'Xanh Lá Nam Bộ', colorId: 'xanh-la', gender: 'nu', style: 'classic', tag: 'Ruộng Đồng' },
    { path: 'assets/images/ao_ba_ba/nu/light_green.jpg', name: 'Xanh Cốm Trẻ Trung', colorId: 'xanh-la', gender: 'nu', style: 'modern', tag: 'Hiện Đại' },
    { path: 'assets/images/ao_ba_ba/nu/pink.jpg', name: 'Hồng Hoa Mười Giờ', colorId: 'hong', gender: 'nu', style: 'classic', tag: 'Duyên Quê' },
    { path: 'assets/images/ao_ba_ba/nu/sakura.jpg', name: 'Hồng Phấn Nhẹ Nhàng', colorId: 'hong', gender: 'nu', style: 'modern', tag: 'Ngọt Ngào' },
    { path: 'assets/images/ao_ba_ba/nu/white.jpg', name: 'Trắng Tinh Khôi', colorId: 'trang', gender: 'nu', style: 'classic', tag: 'Thanh Lịch' },
  ],
  'ao-ngu-than': [
    { path: 'assets/images/ao_ngu_than/nu/blue.jpg', name: 'Lam Ngọc Đài Các', colorId: 'lam', gender: 'nu', style: 'classic', tag: 'Quý Cô' },
    { path: 'assets/images/ao_ngu_than/nu/light_blue.jpg', name: 'Xanh Thanh Nhã', colorId: 'lam', gender: 'nu', style: 'modern', tag: 'Dịu Dàng' },
    { path: 'assets/images/ao_ngu_than/nu/pink.jpg', name: 'Hồng Phấn Thời Thượng', colorId: 'hong', gender: 'nu', style: 'modern', tag: 'Trẻ Trung' },
    { path: 'assets/images/ao_ngu_than/nu/purple.jpg', name: 'Tím Hoàng Triều', colorId: 'tim', gender: 'nu', style: 'royal', tag: 'Huế Cổ' },
    { path: 'assets/images/ao_ngu_than/nam/light_yellow.jpg', name: 'Vàng Nhạt Nho Nhã', colorId: 'vang', gender: 'nam', style: 'classic', tag: 'Thư Sinh' },
    { path: 'assets/images/ao_ngu_than/nam/white.jpg', name: 'Bạch Hào Trí Thức', colorId: 'trang', gender: 'nam', style: 'classic', tag: 'Bạch Y' },
    { path: 'assets/images/ao_ngu_than/couple.jpg', name: 'Song Hỷ Nam Nữ', colorId: 'do', gender: 'nu', style: 'royal', tag: 'Đôi Lứa' },
  ],
};

/* Moodboard Scenes */
const moodboardScenes = {
  temple: {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    label: '🏯 Bối cảnh: Chùa Cổ & Lễ Hội',
  },
  cafe: {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    label: '☕ Bối cảnh: Quán Cà Phê Dạo Phố',
  },
  hoian: {
    url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    label: '🏮 Bối cảnh: Phố Cổ Hoài Niệm',
  },
  palace: {
    url: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    label: '🏛️ Bối cảnh: Cung Đình Hoàng Gia',
  },
};

/* Outfit Data */
const outfitData = {
  'ao-dai': {
    name: 'Áo Dài',
    origin: 'Áo Dài — Quốc Phục Việt Nam',
    description:
      'Áo Dài là biểu tượng văn hóa và thẩm mỹ của người Việt, có nguồn gốc từ chiếc áo ngũ thân thời Nguyễn (thế kỷ 18). Trải qua nhiều cải tiến, áo dài hiện đại được nhà thiết kế Cát Tường (Le Mur) định hình vào thập niên 1930 với đường cắt ôm sát, tôn dáng. Chiếc áo gắn với hình ảnh người phụ nữ Việt Nam — duyên dáng, nhẹ nhàng mà không kém phần hiện đại.',
    facts: ['Thế kỷ 18', 'Nhà Nguyễn', 'UNESCO xem xét', 'Quốc phục', 'Cải tiến 1930s'],
    accessories: [
      { id: 'non-la', icon: '🪭', name: 'Nón Lá', desc: 'Mũ truyền thống Việt Nam' },
      { id: 'guoc-moc', icon: '👡', name: 'Guốc Mộc', desc: 'Giày gỗ truyền thống' },
      { id: 'vong-tay', icon: '📿', name: 'Vòng Ngọc', desc: 'Trang sức ngọc quý' },
      { id: 'khuyen-tai', icon: '💎', name: 'Hoa Tai Vàng', desc: 'Hoa tai truyền thống' },
      { id: 'khan-quang', icon: '🧣', name: 'Khăn Đống', desc: 'Khăn đội đầu cung đình' },
      { id: 'vi-cam-tay', icon: '👜', name: 'Túi Cầm Tay', desc: 'Clutch gấm thêu hoa' },
    ],
    suggestions: [
      { emoji: '🌺', title: 'Áo Dài Hoa Nhí', desc: 'Họa tiết hoa nhỏ, phong cách nhẹ nhàng nữ tính' },
      { emoji: '🌙', title: 'Áo Dài Gấm Tối', desc: 'Gấm đen thêu vàng, sang trọng và bí ẩn' },
      { emoji: '🌸', title: 'Áo Dài Pastel', desc: 'Tông màu nhạt hiện đại, tươi trẻ' },
    ],
  },
  'ao-tu-than': {
    name: 'Áo Tứ Thân',
    origin: 'Áo Tứ Thân — Linh Hồn Kinh Bắc',
    description:
      'Áo Tứ Thân là trang phục truyền thống của phụ nữ vùng Bắc Bộ, đặc biệt gắn với văn hóa quan họ Kinh Bắc. Tên gọi xuất phát từ cấu trúc bốn vạt áo — hai vạt trước để vắt chéo hoặc buộc thắt lưng, hai vạt sau may liền. Thường mặc cùng yếm đào, váy đen và khăn mỏ quạ, tạo nên bộ trang phục dân gian tinh tế và duyên dáng.',
    facts: ['Bắc Bộ', 'Quan Họ Kinh Bắc', 'Yếm Đào', 'Di sản phi vật thể', 'Thế kỷ 17-19'],
    accessories: [
      { id: 'khan-mo-qua', icon: '🧤', name: 'Khăn Mỏ Quạ', desc: 'Khăn truyền thống Bắc Bộ' },
      { id: 'yem-dao', icon: '🌺', name: 'Yếm Đào', desc: 'Yếm đỏ đặc trưng phụ nữ Bắc Bộ' },
      { id: 'vay-den', icon: '👗', name: 'Váy Đen', desc: 'Váy lĩnh đen truyền thống' },
      { id: 'thet-lung', icon: '🎀', name: 'Thắt Lưng Bao', desc: 'Thắt lưng lụa nhiều màu' },
      { id: 'guoc-moc', icon: '👡', name: 'Guốc Mộc', desc: 'Guốc gỗ duyên dáng' },
      { id: 'non-quai-thao', icon: '🎩', name: 'Nón Quai Thao', desc: 'Nón đặc trưng quan họ' },
    ],
    suggestions: [
      { emoji: '🎋', title: 'Bộ Quan Họ Đầy Đủ', desc: 'Áo tứ thân + yếm đào + nón quai thao' },
      { emoji: '💫', title: 'Tứ Thân Cách Tân', desc: 'Cải tiến hiện đại, giữ hoa văn dân gian' },
      { emoji: '🌿', title: 'Tứ Thân Xanh Lá', desc: 'Tông xanh lá mát mẻ, phong cách mới' },
    ],
  },
  'nhat-binh': {
    name: 'Nhật Bình',
    origin: 'Nhật Bình — Lễ Phục Hoàng Gia',
    description:
      'Nhật Bình là lễ phục của hoàng hậu, phi tần trong hoàng cung triều Nguyễn (1802–1945). Đặc trưng bởi cổ áo vuông (phương lĩnh), thân áo thêu họa tiết phượng hoàng, mây ngũ sắc và các biểu tượng cát tường. Màu sắc và họa tiết phân biệt tước vị — vàng kim cho hoàng hậu, đỏ cho nhất giai, xanh và các màu khác cho các tầng bậc thấp hơn.',
    facts: ['Triều Nguyễn 1802-1945', 'Lễ phục hoàng cung', 'Cung đình Huế', 'Phượng hoàng thêu', 'Phục dựng hiện đại'],
    accessories: [
      { id: 'phuong-quan', icon: '👑', name: 'Phụng Quan', desc: 'Mũ quan hoàng gia dát vàng' },
      { id: 'vong-kim', icon: '📿', name: 'Vòng Vàng Kim', desc: 'Trang sức vàng cung đình' },
      { id: 'khuyen-bich', icon: '💚', name: 'Hoa Tai Ngọc Bích', desc: 'Ngọc xanh hoàng gia' },
      { id: 'non-vau', icon: '🌂', name: 'Lọng Che', desc: 'Lọng nghi lễ truyền thống' },
      { id: 'guoc-hoa', icon: '👠', name: 'Hài Thêu Hoa', desc: 'Hài gấm thêu họa tiết' },
      { id: 'hong-doc', icon: '🔴', name: 'Đai Ngọc Đỏ', desc: 'Thắt lưng ngọc đỏ hoàng gia' },
    ],
    suggestions: [
      { emoji: '👑', title: 'Nhật Bình Hoàng Hậu', desc: 'Vàng kim + phượng hoàng + vương miện đầy đủ' },
      { emoji: '🟢', title: 'Nhật Bình Lục Phẩm', desc: 'Xanh ngọc bích uy nghi, thêu tinh xảo' },
      { emoji: '🔴', title: 'Nhật Bình Đệ Nhất Giai', desc: 'Đỏ son quyền quý, phượng thêu vàng' },
    ],
  },
  'ao-giao-linh': {
    name: 'Áo Giao Lĩnh',
    origin: 'Áo Giao Lĩnh — Di Sản Ngàn Năm',
    description:
      'Áo Giao Lĩnh (hay áo chéo vạt) là loại áo có hai vạt chéo nhau ở phần cổ, tạo thành hình chữ "y". Đây là mẫu áo phổ biến từ thời Lý, Trần, Lê đến đầu Nguyễn, được mặc bởi cả nam lẫn nữ trong nhiều tầng lớp xã hội.',
    facts: ['Thời Lý-Trần-Lê', 'Unisex', 'Phong trào Việt Phục', 'Di sản ngàn năm', 'Phổ thông mọi tầng lớp'],
    accessories: [
      { id: 'khan-dong', icon: '🧢', name: 'Khăn Đóng', desc: 'Khăn đội đầu truyền thống nam' },
      { id: 'dai-lung', icon: '🎀', name: 'Đai Lưng Vải', desc: 'Thắt lưng vải rộng bản' },
      { id: 'non-la-go', icon: '🪭', name: 'Nón Lá', desc: 'Nón lá tre đan truyền thống' },
      { id: 'giay-vai', icon: '👟', name: 'Giày Vải', desc: 'Hài vải đen truyền thống' },
      { id: 'boi-viet', icon: '⚔️', name: 'Bội Kiếm', desc: 'Phụ kiện kiếm nghi lễ' },
      { id: 'tui-bao', icon: '👜', name: 'Túi Bao', desc: 'Túi vải thêu truyền thống' },
    ],
    suggestions: [
      { emoji: '🌿', title: 'Giao Lĩnh Nâu Mộc', desc: 'Màu nâu đất mộc mạc, đậm chất dân gian' },
      { emoji: '🎭', title: 'Giao Lĩnh Lễ Hội', desc: 'Thêu họa tiết, phối cùng khăn đóng' },
      { emoji: '✨', title: 'Giao Lĩnh Cách Tân', desc: 'Phom dáng cải tiến, chất liệu linen hiện đại' },
    ],
  },
  'ao-ba-ba': {
    name: 'Áo Bà Ba',
    origin: 'Áo Bà Ba — Hồn Quê Nam Bộ',
    description:
      'Áo Bà Ba là trang phục đặc trưng của người Nam Bộ, gắn liền với hình ảnh sông nước, ruộng đồng miền Tây. Thiết kế cổ tròn, xẻ giữa, có hai túi nhỏ là biểu tượng của sự giản dị và thân thiện.',
    facts: ['Thế kỷ 19', 'Nam Bộ Việt Nam', 'Ảnh hưởng Mã Lai', 'Sông nước miền Tây', 'Casual & thực dụng'],
    accessories: [
      { id: 'non-le', icon: '👒', name: 'Nón Lá Miền Tây', desc: 'Nón lá đặc trưng Nam Bộ' },
      { id: 'khan-ran', icon: '🧣', name: 'Khăn Rằn Ca-rô', desc: 'Khăn ca-rô truyền thống Nam Bộ' },
      { id: 'khan-ran-ri', icon: '🎗️', name: 'Khăn Rằn Ri', desc: 'Khăn rằn ri họa tiết đặc trưng Nam Bộ' },
      { id: 'dep-moc', icon: '🩴', name: 'Dép Mộc', desc: 'Dép kẹp mộc mạc' },
      { id: 'gion-vai', icon: '🎵', name: 'Giỏ Đan', desc: 'Giỏ lá dừa đan truyền thống' },
      { id: 'vong-bac', icon: '⭕', name: 'Vòng Bạc', desc: 'Vòng tay bạc đơn giản' },
      { id: 'quat-mo', icon: '🪭', name: 'Quạt Mo Cau', desc: 'Quạt mo cau truyền thống' },
    ],
    suggestions: [
      { emoji: '💙', title: 'Bà Ba Xanh Lam', desc: 'Xanh nước biển, khăn rằn đen trắng' },
      { emoji: '🌺', title: 'Bà Ba Hoa Nhí', desc: 'Họa tiết hoa nhỏ dịu dàng, duyên dáng' },
      { emoji: '🟤', title: 'Bà Ba Nâu Đất', desc: 'Đậm chất quê hương, mộc mạc chân thật' },
    ],
  },
  'ao-ngu-than': {
    name: 'Áo Ngũ Thân',
    origin: 'Áo Ngũ Thân — Vẻ Đẹp Nam Tính Việt',
    description:
      'Áo Ngũ Thân là trang phục nam truyền thống thời nhà Nguyễn với năm vạt áo tượng trưng ngũ hành và năm đức tính người quân tử. Cổ áo đứng và hàng cúc đối xứng tạo nên vẻ trang nghiêm, nho nhã.',
    facts: ['Nhà Nguyễn thế kỷ 19', 'Nam giới', 'Ngũ hành tượng trưng', 'Phong trào phục hưng 2010s', 'Giới trẻ ưa chuộng'],
    accessories: [
      { id: 'khan-dong-nam', icon: '🎩', name: 'Khăn Đóng', desc: 'Mũ truyền thống nam Việt Nam' },
      { id: 'giay-tay', icon: '👞', name: 'Giày Tây Cách Tân', desc: 'Giày da phong cách fusion' },
      { id: 'dong-ho-co', icon: '⌚', name: 'Đồng Hồ Cổ', desc: 'Đồng hồ dây da vintage' },
      { id: 'bong-tay', icon: '🔗', name: 'Vòng Tay Nam', desc: 'Vòng gỗ trầm hương' },
      { id: 'que-bong', icon: '🪄', name: 'Gậy Trúc', desc: 'Phụ kiện học giả truyền thống' },
      { id: 'tui-vai', icon: '💼', name: 'Túi Da Vintage', desc: 'Túi da nâu phong cách cổ điển' },
    ],
    suggestions: [
      { emoji: '🎓', title: 'Ngũ Thân Học Giả', desc: 'Xanh tím + khăn đóng + gậy trúc' },
      { emoji: '💜', title: 'Ngũ Thân Tím Hoàng Gia', desc: 'Tím cổ điển uy nghiêm thanh lịch' },
      { emoji: '🖤', title: 'Ngũ Thân Đen Hiện Đại', desc: 'Đen huyền fusion phong cách đường phố' },
    ],
  },
};

/* Event Mapping */
const eventOutfitMap = {
  'Tết Nguyên Đán':       { outfit: 'Áo Dài', id: 'ao-dai', reason: 'Tết truyền thống — Áo Dài đỏ may mắn là lựa chọn hoàn hảo' },
  'Đám cưới':             { outfit: 'Nhật Bình', id: 'nhat-binh', reason: 'Lễ trọng đại — Nhật Bình lộng lẫy và đẳng cấp nhất' },
  'Lễ hội dân gian':      { outfit: 'Áo Tứ Thân', id: 'ao-tu-than', reason: 'Lễ hội dân gian — Áo Tứ Thân gắn liền với hội hè truyền thống' },
  'Tốt nghiệp':           { outfit: 'Áo Ngũ Thân', id: 'ao-ngu-than', reason: 'Tốt nghiệp — Áo Ngũ Thân biểu trưng trí thức Việt Nam' },
  'Chụp ảnh kỷ yếu':      { outfit: 'Áo Dài', id: 'ao-dai', reason: 'Kỷ yếu — Áo Dài thanh lịch, tôn dáng trước ống kính' },
  'Biểu diễn nghệ thuật':  { outfit: 'Áo Giao Lĩnh', id: 'ao-giao-linh', reason: 'Sân khấu — Áo Giao Lĩnh cổ điển mang không khí lịch sử' },
};
