<h2 align="center">
    <a href="https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin">
    🎓 Faculty of Information Technology (DaiNam University)
    </a>
</h2>
<h2 align="center">
    Hệ Thống Phát Hiện Cỏ Dại Tích Hợp Blockchain<br/>
    <small>Smart Weed Detection System with Hyperledger Fabric</small>
</h2>
<div align="center">
    <p align="center">
        <img src="images/aiotlab_logo.png" alt="AIoTLab Logo" width="170"/>
        <img src="images/fitdnu_logo.png" alt="FIT DNU Logo" width="180"/>
        <img src="images/dnu_logo.png" alt="DaiNam University Logo" width="200"/>
    </p>
[![AIoTLab](https://img.shields.io/badge/AIoTLab-green?style=for-the-badge)](https://www.facebook.com/DNUAIoTLab)
[![Faculty of Information Technology](https://img.shields.io/badge/Faculty%20of%20Information%20Technology-blue?style=for-the-badge)](https://dainam.edu.vn/vi/khoa-cong-nghe-thong-tin)
[![DaiNam University](https://img.shields.io/badge/DaiNam%20University-orange?style=for-the-badge)](https://dainam.edu.vn)
 
</div>
---
 
## 📖 1. Giới thiệu
 
Hệ thống **Phát hiện Cỏ Dại tích hợp Blockchain** là giải pháp **AIoT** ứng dụng trong nông nghiệp thông minh, kết hợp thị giác máy tính (AI) với công nghệ sổ cái phân tán (**Hyperledger Fabric**) để tự động phát hiện, ghi nhận và bảo toàn dữ liệu cỏ dại theo thời gian thực.
 
Hệ thống bao gồm 3 module chính hoạt động liên kết:
 
- **Module thị giác máy tính (Python / `run.py`)** – Phân tích khung hình từ camera hoặc video mẫu, đếm số cây cỏ dại hiện tại, tổng tích lũy và độ tin cậy, rồi đẩy dữ liệu về backend qua API.
- **Backend Express (Node.js + TypeScript)** – Tiếp nhận luồng dữ liệu nhận diện, lưu trữ vào MongoDB, đồng bộ song song lên Blockchain Gateway, gửi cảnh báo Telegram khi vượt ngưỡng, và phục vụ giao diện web real-time.
- **Blockchain Layer (Hyperledger Fabric)** – Smart contract `WeedDetectionContract` trên chaincode TypeScript ghi tổng số cỏ dại vào World State (CouchDB) và cho phép truy vết toàn bộ lịch sử giao dịch qua `GetWeedHistory`. Application Gateway kết nối với peer qua gRPC và phơi REST API cho backend.
Các giá trị cốt lõi:
 
- **Minh bạch & chống giả mạo**: Mỗi lần tổng cỏ dại tăng đều được đẩy lên blockchain; hệ thống tự động đối soát MongoDB ↔ World State và cảnh báo khi có sai lệch.
- **Lưu trữ thông minh**: Chỉ ghi MongoDB khi `totalWeeds` tăng so với lần lưu trước — tránh dư thừa dữ liệu.
- **Cảnh báo tức thời**: Ảnh hiện trường + thông tin chi tiết gửi qua bot Telegram với cơ chế cooldown chống spam.
- **Giám sát trực quan**: Giao diện web polling real-time hiển thị camera trực tiếp, biểu đồ Chart.js và bảng lịch sử phát hiện.
## 🖼️ 2. Poster
 
<div align="center">
![Poster hệ thống](./images/poster.jpg)
 
<p>
<a href="./images/poster.pdf">📄 Nhấn vào đây để xem chi tiết Poster (PDF)</a>
</p>
</div>
## 🔧 3. Công nghệ sử dụng
 
<div align="center">
### Nền tảng chính
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express%205-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
 
### Blockchain
[![Hyperledger Fabric](https://img.shields.io/badge/Hyperledger%20Fabric-121D33?style=for-the-badge&logo=hyperledger&logoColor=white)](https://www.hyperledger.org/use/fabric)
[![CouchDB](https://img.shields.io/badge/CouchDB-E42528?style=for-the-badge&logo=apachecouchdb&logoColor=white)](https://couchdb.apache.org/)
 
### Cơ sở dữ liệu & Tích hợp
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![Telegram](https://img.shields.io/badge/Telegram%20Bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://core.telegram.org/bots)
 
### Giao diện
[![Pug](https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=pug&logoColor=white)](https://pugjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
 
### Công cụ
[![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typestrong.org/ts-node/)
[![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
 
</div>
## 🏗️ 4. Kiến trúc & Luồng dữ liệu
 
### Cấu trúc thư mục
 
```
project-root/
│
├── Backend/                        # Node.js + Express backend
│   ├── config/                     # Cấu hình kết nối MongoDB (database.ts)
│   ├── models/                     # Mongoose schema: weed.model.ts
│   ├── validations/                # Kiểm tra & chuẩn hoá dữ liệu đầu vào
│   ├── services/                   # Logic nghiệp vụ chính: weed.service.ts
│   ├── controllers/                # Xử lý request/response: weed.controller.ts
│   ├── routes/                     # Định nghĩa endpoint (home.routes.ts, index.routes.ts)
│   ├── helpers/
│   │   ├── blockchain.helper.ts    # Giao tiếp với Blockchain Gateway
│   │   └── telegram.helper.ts      # Gửi cảnh báo qua bot Telegram
│   ├── views/                      # Template Pug (layouts + pages)
│   ├── public/                     # JS frontend, Chart.js, ảnh cảnh báo
│   ├── index.ts                    # Entry point Express
│   └── script.ts                   # Tiện ích xoá toàn bộ collection weeds
│
└── blockchain-weed/                # Hyperledger Fabric layer
    ├── chaincode/
    │   └── index.ts                # Smart contract WeedDetectionContract
    └── application.gateway/
        └── app.ts                  # REST Gateway kết nối Fabric qua gRPC
```
 
### Luồng dữ liệu tổng quát
 
```
[Camera / Video]
      │
      ▼
[Python run.py]  ──── POST /home/api/weed-detection/stream ────▶  [Express Backend]
                                                                         │
                          ┌──────────────────────────────────────────────┤
                          │                                              │
                          ▼                                              ▼
                     [MongoDB]                             [Blockchain Gateway :8080]
                   (lưu session)                         POST /api/weed-detection
                          │                                              │
                          │                              [Hyperledger Fabric Ledger]
                          │                              RecordWeedDetection(id, data)
                          │                                              │
                          └──────────── Đối soát MongoDB ↔ Chain ───────┘
                                        getSyncStatus()
                                              │
                          ┌───────────────────┘
                          │
                          ▼
                   [Telegram Bot]           [Web UI]
               (cảnh báo khi alert)   (polling real-time)
```
 
**Chi tiết các bước:**
 
1. **Module Python** nhận diện cỏ dại từ camera/video, gửi `currentWeeds`, `totalWeeds`, `confidence` và ảnh base64 tới backend.
2. **Backend** lưu frame mới nhất vào RAM (`frameBuffer`) và cập nhật `metricsHistory` để phục vụ chart.
3. Khi **`totalWeeds` tăng** so với lần ghi trước, backend song song: ghi vào MongoDB (`saveSessionWeedParallel`) và đẩy lên **Blockchain Gateway** (`syncTotalWeedsToBlockchain`).
4. **Smart contract** `RecordWeedDetection` lưu bản ghi vào World State (CouchDB) và trả về `txId`.
5. Backend tự động **đối soát** MongoDB ↔ World State qua `getSyncStatus()`, cảnh báo nếu lệch.
6. Nếu frame có cờ `alertSent`, backend gửi **ảnh + thông tin** qua Telegram (cooldown 20 giây mặc định).
7. **Giao diện web** liên tục polling để cập nhật camera, chỉ số, biểu đồ và bảng lịch sử.
## 🔗 5. Smart Contract — Hyperledger Fabric
 
File: `blockchain-weed/chaincode/index.ts`
 
| Hàm | Loại | Mô tả |
|-----|------|--------|
| `RecordWeedDetection(id, recordJsonString)` | `@Transaction()` | Ghi/cập nhật bản ghi cỏ dại vào World State; trả về `txId` |
| `GetWeedHistory(id)` | `@Transaction(false)` | Lấy toàn bộ lịch sử thay đổi của một key từ Ledger |
 
Chaincode được deploy lên channel `mychannel`, chaincode name `agri` (Org1MSP).
 
## 🌐 6. Blockchain Gateway API
 
File: `blockchain-weed/application.gateway/app.ts` — chạy tại `http://localhost:8080`
 
| Phương thức | Endpoint | Chức năng |
|-------------|----------|-----------|
| `POST` | `/api/weed-detection` | Ghi `totalWeeds` lên World State qua `RecordWeedDetection` |
| `GET` | `/api/weed-history/:id` | Lấy lịch sử giao dịch blockchain theo key |
| `GET` | `/api/weed-total` | Đọc trạng thái hiện tại từ World State để đối soát |
 
## 🌐 7. Backend API
 
File: `Backend/routes/`
 
| Phương thức | Endpoint | Chức năng |
|-------------|----------|-----------|
| `GET` | `/` hoặc `/home` | Trang chủ hệ thống |
| `GET` | `/home/weed-detection` | Lịch sử phát hiện (`?limit=` để lấy JSON biểu đồ) |
| `GET` | `/home/weed-detection/live` | Camera trực tiếp (`?frame=1` lấy JPEG, `?data=json` lấy trạng thái) |
| `POST` | `/home/api/weed-detection/stream` | Nhận dữ liệu nhận diện từ Python |
| `POST` | `/home/api/camera/start` | Khởi động camera (`mode: "demo" \| "realtime"`) |
| `POST` | `/home/api/camera/stop` | Dừng camera |
 
## 🚀 8. Tính năng chính
 
### 📹 Giám sát & Điều khiển Camera
- ▶️ Hai chế độ: **demo** (video mẫu) và **realtime** (camera trực tiếp).
- ⏹️ Dừng tiến trình an toàn — hỗ trợ cả Windows (`taskkill`) và Linux/macOS (`SIGTERM`).
- 🖼️ Phục vụ frame theo cơ chế version — chỉ tải lại khi có frame mới, tiết kiệm băng thông.
### 🌿 Nhận diện & Ghi nhận
- 🔢 Theo dõi `currentWeeds`, `totalWeeds` và `confidence` theo thời gian thực.
- 💾 Lưu MongoDB thông minh: chỉ ghi khi `totalWeeds` tăng, tránh trùng lặp dữ liệu.
- 📜 Lịch sử `metricsHistory` (tối đa 50 bản ghi) lưu trong RAM để vẽ biểu đồ ngay cả khi DB trống.
### 🔗 Blockchain — Bảo toàn dữ liệu
- 🧩 Đồng bộ `totalWeeds` lên **World State** của Hyperledger Fabric mỗi khi có thay đổi.
- ⚖️ Tự động **đối soát** MongoDB ↔ Blockchain — ghi log cảnh báo khi phát hiện lệch.
- 🆔 Lưu lại `txId` từ blockchain để truy vết giao dịch.
- 📜 `GetWeedHistory` cho phép lấy toàn bộ lịch sử thay đổi từ Ledger.
### 🔔 Cảnh báo Telegram
- 📩 Gửi **ảnh chụp hiện trường** kèm thời gian, số lượng, độ tin cậy và nguồn phát hiện.
- 🕒 Cơ chế **cooldown** (mặc định 20 giây) chống gửi spam liên tục.
- 🗄️ Lưu ảnh cảnh báo vào `public/screenshots/`.
### 📊 Giao diện Web
- 📈 Biểu đồ cột + đường (Chart.js) theo dõi `currentWeeds` và `totalWeeds`.
- 🧾 Bảng lịch sử phát hiện gần đây: thời gian, số lượng, độ tin cậy, nguồn.
- ⚡ Cập nhật real-time qua polling frame và JSON.
## ⚙️ 9. Cài đặt & Chạy hệ thống
 
> **Yêu cầu:** Node.js >= 18, MongoDB (cục bộ hoặc Atlas), Hyperledger Fabric test-network (cho blockchain layer). Module nhận diện cần Python + Anaconda (tuỳ chọn).
 
### 9.1 Khởi động Blockchain (Hyperledger Fabric)
 
```bash
# Tại thư mục fabric-samples/test-network
./network.sh up createChannel -c mychannel -s couchdb
 
# Deploy chaincode
./network.sh deployCC -ccn agri -ccp ../blockchain-weed/chaincode/ -ccl typescript
```
 
```bash
# Khởi động Application Gateway
cd blockchain-weed/application.gateway
npm install
npm start
# Gateway chạy tại http://localhost:8080
# Fauxton (CouchDB UI): http://localhost:5984/_utils
```
 
### 9.2 Cài đặt Backend
 
**Bước 1** — Clone & di chuyển vào thư mục:
```bash
git clone <ĐƯỜNG_DẪN_REPO>
cd Backend
```
 
**Bước 2** — Cài dependencies:
```bash
npm install
```
> Script `postinstall` tự động copy Chart.js vào `public/vendor`.
 
**Bước 3** — Tạo file `.env`:
```env
# === Server ===
PORT=3000
CORS_ORIGIN=http://localhost:3000
 
# === MongoDB ===
MONGOOSE_URL=mongodb://localhost:27017/weed_detection
 
# === Blockchain Gateway (đặt "0" hoặc "false" nếu chưa dùng) ===
BLOCKCHAIN_GATEWAY_URL=http://localhost:8080/api/weed-detection
WEED_WORLD_STATE_KEY=weed-total
 
# === Telegram (để trống nếu chưa dùng) ===
TELEGRAM_TOKEN=your_bot_token
CHAT_ID=your_chat_id
ALERT_COOLDOWN=20
 
# === Stream URL cho Python ===
API_STREAM_URL=http://localhost:3000/home/api/weed-detection/stream
```
 
**Bước 4** — Chạy server:
```bash
# Development (tự reload)
npm run dev
 
# Production
npm start
```
 
**Bước 5** — Truy cập: `http://localhost:3000`
 
**Bước 6 (tuỳ chọn)** — Cấu hình Python module:
 
> Trong `services/weed.service.ts`, các biến `visionRoot`, `pythonExe`, `scriptPath` hiện đang đặt cố định theo máy phát triển Windows. Khi deploy lên máy khác, hãy chỉnh lại hoặc chuyển ra biến môi trường.
 
### 9.3 Tiện ích
 
Xoá toàn bộ dữ liệu collection `weeds`:
```bash
npx ts-node script.ts
```
 
## 📊 10. Cấu trúc dữ liệu
 
### MongoDB — Weed Schema
 
```typescript
{
  totalWeeds:   Number,   // Tổng cỏ dại tích lũy trong phiên
  currentWeeds: Number,   // Số cỏ dại trong frame hiện tại
  confidence:   Number,   // Độ tin cậy (0–1)
  detectedAt:   Date,     // Thời điểm phát hiện
  imageUrl:     String,   // Đường dẫn ảnh (tuỳ chọn)
  source:       String,   // Nguồn / farmId / camera ID
  alertSent:    Boolean,  // Đã gửi Telegram chưa
  createdAt:    Date,     // Tự động (timestamps)
  updatedAt:    Date
}
```
 
### Blockchain — World State (CouchDB)
 
```json
{
  "_id": "weed-total",
  "docType": "weed_detection",
  "id": "weed-total",
  "totalWeeds": 16,
  "updatedAt": "2026-06-01T16:13:56.022Z",
  "_version": "CgQ6GuEJ"
}
```
 
## 📞 11. Liên hệ & Hỗ trợ
 
- 📧 Email: [your_email@example.com]
- 🌐 Website: [https://dainam.edu.vn](https://dainam.edu.vn)
- 📘 Facebook AIoTLab: [https://www.facebook.com/DNUAIoTLab](https://www.facebook.com/DNUAIoTLab)
<div align="center">
Made with 💚 by **Nguyễn Thị Linh Chi**  
Giảng viên hướng dẫn: **Trần Đăng Công**  
Khoa Công nghệ Thông tin — Trường Đại học Đại Nam
 
</div>
