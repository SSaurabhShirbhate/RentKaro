# Everything on Rent - Full Stack Application

## 🚀 Project Overview
**Everything on Rent** is a full-stack web application that allows users to rent various items from sellers, negotiate prices, and make secure payments. The system consists of three roles: **Buyer, Seller, and Admin**. The project follows **Microservices Architecture** and adheres to **SOLID principles** and **design patterns** for maintainability and scalability.

## 📌 Features
✅ User Authentication & Role-based Access (Buyer, Seller, Admin)  
✅ Listing of Rental Items (Cars, Furniture, Gadgets, etc.)  
✅ Price Negotiation between Buyer & Seller (OLX-style chat)  
✅ Booking System for Renting Items  
✅ Secure Payments   
✅ Admin Dashboard for Managing Users and Listings  

## 🛠️ Tech Stack
### **Frontend:**
- React.js / Next.js (Dynamic UI)
- TailwindCSS / Material-UI (UI Components)
- Context API (State Management)
- WebSockets (Real-time Negotiation Chat)

### **Backend:**
- Spring Boot (Microservices Architecture)
- Spring Security + JWT (Authentication & Authorization)
- MySQL (Relational Database for structured data)
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
 ┃ ┗ 📂 assets
 ┣ 📜 docker-compose.yml
 ┣ 📜 README.md
 ┣ 📜 .gitignore
 ┗ 📜 package.json
```

# Everything on Rent - Database Schema

## 1. Users Table (For Buyers)
Stores details of users who are **buyers**.
```sql
id (Primary Key)
name
email (Unique)
password
created_at
```

## 2. Sellers Table
Stores details of **sellers** separately.
```sql
id (Primary Key)
name
email (Unique)
password
created_at
```

## 3. Admins Table
Stores details of **admins** separately.
```sql
id (Primary Key)
name
email (Unique)
password
created_at
```

## 4. Rental Items Table
Stores all items available for rent.
```sql
id (Primary Key)
title
description
seller_id (Foreign Key → Sellers.id)
price_per_hour
price_per_day
is_available (Boolean)
created_at
```

## 5. Bookings Table
Stores details of bookings.
```sql
id (Primary Key)
rental_item_id (Foreign Key → Rental_Items.id)
buyer_id (Foreign Key → Users.id)
seller_id (Foreign Key → Sellers.id)
start_date
end_date
total_amount
status (Enum: Pending, Confirmed, Cancelled, Completed)
created_at
```

## 6. Payments Table
Stores payment details.
```sql
id (Primary Key)
booking_id (Foreign Key → Bookings.id)
transaction_id (Unique)
amount
status (Enum: Success, Failed, Pending)
created_at
```

## 🔹 Relationships
1. **Users → Bookings** → A buyer can make multiple bookings.
2. **Sellers → Rental Items** → A seller can list multiple rental items.
3. **Bookings → Payments** → Each booking has one payment.

## 🔹 ER Diagram Representation
```
+----------------+       +-----------------+       +-----------------+
|    Users      |       |  Rental Items   |       |  Sellers        |
+----------------+       +-----------------+       +-----------------+
| id (PK)       |<------| seller_id (FK)  |<------| id (PK)         |
| name          |       | id (PK)         |       | name            |
| email         |       | title           |       | email           |
| password      |       | description     |       | password        |
| created_at    |       | price_per_hour  |       | created_at      |
+----------------+       | price_per_day   |       +-----------------+
                         | is_available    |
                         | created_at      |
                         +-----------------+
                                |
                                v
                         +-----------------+       +-----------------+
                         |    Bookings     |       |    Payments     |
                         +-----------------+       +-----------------+
                         | id (PK)         |<------| booking_id (FK) |
                         | rental_item_id  |       | id (PK)         |
                         | buyer_id (FK)   |       | transaction_id  |
                         | seller_id (FK)  |       | amount          |
                         | start_date      |       | status          |
                         | end_date        |       | created_at      |
                         | total_amount    |       +-----------------+
                         | status          |
                         | created_at      |
                         +-----------------+

                         +-----------------+
                         |    Admins       |
                         +-----------------+
                         | id (PK)         |
                         | name            |
                         | email           |
                         | password        |
                         | created_at      |
                         +-----------------+


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

