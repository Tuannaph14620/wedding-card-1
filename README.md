# Wedding Website 2 - Xuân Huy & Cẩm Nhung

Thiệp cưới online hiện đại và sang trọng với đầy đủ tính năng.

## 🎨 Tính năng

### 1. **Hero Section**
- Tên cô dâu chú rể với font chữ cursive đẹp
- Thông tin thời gian và địa điểm
- 3 nút CTA: Đăng ký tham dự, Gửi quà, Bản đồ
- Scroll indicator

### 2. **Thông tin Cô dâu Chú rể**
- Layout 2 cột cho nhà trai và nhà gái
- Ảnh đại diện hình tròn
- Thông tin ông bà 2 bên
- Hover effect đẹp mắt

### 3. **Album Ảnh**
- Gallery grid responsive
- Lightbox xem ảnh phóng to
- Navigation keyboard (←, →, ESC)
- Hover effect

### 4. **Thông tin Sự kiện**
- 2 địa điểm: Nhà gái & Nhà trai
- Hiển thị chi tiết thời gian, địa điểm
- Số điện thoại liên hệ
- Design card đẹp với header màu

### 5. **Save the Date - Countdown**
- Đếm ngược đến ngày cưới
- Hiển thị: Ngày, Giờ, Phút, Giây
- Ảnh couple minh họa
- Update real-time mỗi giây

### 6. **Xác nhận Tham dự**
- Form đăng ký với radio button chọn sự kiện
- Nhập tên khách mời
- Lưu vào localStorage
- Thông báo thành công

### 7. **Gửi Lời chúc**
- Form gửi lời chúc
- Nhập tên và lời nhắn
- Lưu vào localStorage
- Animation success

### 8. **Gửi Quà Mừng cưới**
- Hiển thị QR code
- Thông tin ngân hàng (tên ngân hàng, tên tài khoản, số tài khoản)
- Nút copy số tài khoản
- 2 card cho cô dâu và chú rể

### 9. **Thank you Section**
- Lời cảm ơn
- Social share buttons (Facebook, Twitter, WhatsApp, Copy link)
- Background gradient đẹp

### 10. **Tính năng bổ sung**
- Loading screen với animation
- Music player (play/pause)
- Smooth scroll
- Responsive design (mobile, tablet, desktop)
- Scroll animations
- Local storage để lưu RSVP và wishes

## 📁 Cấu trúc File

```
Wedding Website 2/
├── index.html          # File HTML chính
├── styles.css          # File CSS với design sang trọng
├── script.js           # JavaScript với đầy đủ tính năng
├── README.md           # File hướng dẫn
└── assets/
    ├── images/         # Thư mục chứa ảnh
    │   ├── hero-bg.jpg
    │   ├── groom.jpg
    │   ├── bride.jpg
    │   ├── photo1-6.jpg
    │   ├── countdown-couple.jpg
    │   ├── qr-groom.png
    │   └── qr-bride.png
    └── music/          # Thư mục chứa nhạc
        └── wedding-song.mp3
```

## 🎨 Màu sắc

- Primary: `#f4a460` (Cam nhạt)
- Secondary: `#ffd5b8` (Hồng cam nhạt)
- Accent: `#ff9966` (Cam)
- Text Dark: `#2c3e50`
- Light Background: `#fff8f3`

## 🔧 Cài đặt

### Bước 1: Thêm ảnh
Thêm các file ảnh vào thư mục `assets/images/`:
- `hero-bg.jpg` - Ảnh nền hero section
- `groom.jpg` - Ảnh chú rể
- `bride.jpg` - Ảnh cô dâu
- `photo1.jpg` đến `photo6.jpg` - Album ảnh cưới
- `countdown-couple.jpg` - Ảnh couple cho countdown
- `qr-groom.png` - QR code chú rể
- `qr-bride.png` - QR code cô dâu

### Bước 2: Thêm nhạc nền
Thêm file nhạc `wedding-song.mp3` vào `assets/music/`

### Bước 3: Tùy chỉnh thông tin

#### Thay đổi thông tin cô dâu chú rể trong `index.html`:
- Tên cô dâu chú rể
- Ngày giờ đám cưới
- Địa điểm
- Thông tin ông bà
- Số điện thoại
- Link Google Maps
- Thông tin ngân hàng

#### Thay đổi ngày đếm ngược trong `script.js`:
```javascript
const weddingDate = new Date('2025-11-29T11:15:00').getTime();
```

## 🌐 Deploy

1. **GitHub Pages**: Push code lên GitHub và enable Pages
2. **Netlify**: Drag & drop folder vào Netlify
3. **Vercel**: Connect với GitHub repo
4. **Hosting**: Upload lên shared hosting bất kỳ

## 📱 Responsive

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 769px

## ✨ Tính năng nâng cao (Optional)

### Tích hợp Google Sheets
Để lưu RSVP và lời chúc vào Google Sheets:
1. Tạo Google Apps Script
2. Deploy as web app
3. Thêm URL vào script.js

### Tạo QR Code tự động
Sử dụng API như QRCode.js hoặc dịch vụ online:
- https://api.qrserver.com/v1/create-qr-code/
- https://goqr.me/api/

## 🎁 Credits

- Font: Google Fonts (Great Vibes, Playfair Display, Roboto)
- Icons: Font Awesome 6.4.0
- Inspiration: ROSÉ Wedding

## 📞 Support

Nếu cần hỗ trợ, vui lòng liên hệ hoặc tạo issue.

---

Made with ❤️ for your special day!
