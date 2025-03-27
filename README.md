# Everything on Rent - Full Stack Application

## 🚀 Project Overview
**Everything on Rent** is a full-stack web application that allows users to rent various items from sellers, negotiate prices, and make secure payments. The system consists of three roles: **Buyer, Seller, and Admin**. The project follows **Microservices Architecture** and adheres to **SOLID principles** and **design patterns** for maintainability and scalability.

## 📌 Features
✅ User Authentication & Role-based Access (Buyer, Seller, Admin)  
✅ Listing of Rental Items (Cars, Furniture, Gadgets, etc.)  
✅ Booking System for Renting Items  
✅ Secure Payments   
✅ Admin Dashboard for Managing Users and Listings  

## 🛠️ Tech Stack
### **Frontend:**
- React.js 
- TailwindCSS / Material-UI (UI Components)
- Context API (State Management)

### **Backend:**
- Spring Boot
- Spring Security + JWT (Authentication & Authorization)
- MySQL (Relational Database for structured data)
- RESTful APIs (Communication between services)

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

