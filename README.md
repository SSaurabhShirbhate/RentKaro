# Everything on Rent - Full Stack Application

## 🚀 Project Overview
**Everything on Rent** is a full-stack web application that allows users to rent various items from sellers, negotiate prices, and make secure payments. The system consists of three roles: **Buyer, Seller, and Admin**. The project follows **Microservices Architecture** and adheres to **SOLID principles** and **design patterns** for maintainability and scalability.

## 📌 Features
✅ User Authentication & Role-based Access (Buyer, Seller, Admin)  
✅ Listing of Rental Items (Cars, Furniture, Gadgets, etc.)  
✅ Price Negotiation between Buyer & Seller (OLX-style chat)  
✅ Booking System for Renting Items  
✅ Secure Payments (UPI, PayPal, Credit/Debit Card)  
✅ Ratings & Reviews for Sellers and Rental Items  
✅ Admin Dashboard for Managing Users and Listings  

## 🛠️ Tech Stack
### **Frontend:**
- React.js / Next.js (Dynamic UI)
- TailwindCSS / Material-UI (UI Components)
- Redux Toolkit (State Management)
- WebSockets (Real-time Negotiation Chat)

### **Backend:**
- Spring Boot (Microservices Architecture)
- Spring Security + JWT (Authentication & Authorization)
- MySQL (Relational Database for structured data)
- MongoDB (For storing real-time chat data)
- RESTful APIs (Communication between services)

### **DevOps & Deployment:**
- Docker (Containerization)
- Kubernetes (Orchestration)
- AWS / Digital Ocean (Cloud Deployment)
- CI/CD (GitHub Actions or Jenkins)

## 📂 Folder Structure
```
📦 everything-on-rent
 ┣ 📂 backend
 ┃ ┣ 📂 user-service
 ┃ ┣ 📂 rental-service
 ┃ ┣ 📂 negotiation-service
 ┃ ┣ 📂 payment-service
 ┃ ┗ 📂 review-service
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 redux
 ┃ ┗ 📂 assets
 ┣ 📜 docker-compose.yml
 ┣ 📜 README.md
 ┣ 📜 .gitignore
 ┗ 📜 package.json
```

## 🔗 Database Schema (MySQL & MongoDB)
### **MySQL Tables:**
- `users (id, name, email, password, role, created_at)`
- `rental_items (id, title, description, owner_id, price_per_hour, price_per_day, is_available, created_at)`
- `negotiations (id, rental_item_id, buyer_id, seller_id, negotiated_price, status, created_at)`
- `bookings (id, rental_item_id, buyer_id, seller_id, start_date, end_date, total_amount, status, created_at)`
- `payments (id, booking_id, transaction_id, amount, status, created_at)`
- `reviews (id, rental_item_id, user_id, rating, comment, created_at)`

### **MongoDB Collection (For Real-time Chat & Negotiations)**
```json
{
  "rental_item_id": 123,
  "buyer_id": 10,
  "seller_id": 20,
  "messages": [
    { "sender_id": 10, "message": "Can you reduce the price?", "timestamp": "2025-01-24T14:30:00Z" },
    { "sender_id": 20, "message": "I can give you a discount for weekly rental.", "timestamp": "2025-01-24T14:31:00Z" }
  ]
}
```

## ⚙️ Installation & Setup
### **1️⃣ Backend Setup**
```bash
# Clone the repository
git clone https://github.com/yourusername/everything-on-rent.git
cd everything-on-rent/backend

# Start MySQL and MongoDB using Docker
docker-compose up -d

# Run Spring Boot services
cd user-service && mvn spring-boot:run
cd rental-service && mvn spring-boot:run
```

### **2️⃣ Frontend Setup**
```bash
cd everything-on-rent/frontend
npm install
npm run dev
```

## 🛠️ API Endpoints (Example)
### **User API**
- `POST /api/users/register` → Register a new user
- `POST /api/users/login` → Login & get JWT token
- `GET /api/users/{id}` → Get user details

### **Rental API**
- `POST /api/rentals` → Add a rental item
- `GET /api/rentals` → Get all rental items

### **Negotiation API**
- `POST /api/negotiations` → Start a price negotiation
- `GET /api/negotiations/{id}` → Fetch negotiation history

## 🚀 Roadmap & Future Enhancements
- Implement AI-based rental price suggestions 📈
- Add social login (Google, Facebook) 🔑
- Improve UI/UX with animations and better filters 🎨
- Mobile App version (React Native or Flutter) 📱

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-newComponent`)
3. Commit your changes
4. Push to your branch and submit a PR

## 🛡️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
### 📞 Contact & Support
For any queries, reach out via:
📧 Email: saurabhshirbhate.96@gmail.com  
🌍 GitHub: [SSaurabhShirbhate](https://github.com/SSaurabhShirbhate)  
💬 Discord: --

---
🚀 **Let's build the best rental marketplace together!** 🔥


---

## Team Members
1. [Saurabh Shirbhate] 
2. [Tejas Koshti]  
3. [Prashant Kumar]   
4. [Prashant Kumar]
5. [Siddhesh Darade] 

---
