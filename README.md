# 📝 Blog API - Node.js Backend System

Simple REST API for managing blog posts with user authentication using JWT.

---

## 🚀 Features

- User registration & login
- JWT-based authentication
- CRUD for blog posts
- Authorization: only the author can edit/delete their posts
- Input validation using Joi
- Dockerized for easy development
- Clean code structure (Controller → Service → Repository)

---

## 📁 Project Structure

```
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── models/
├── middlewares/
├── validators/
├── helpers/
├── config/
├── seeders/
└── utils/
```

---

## 📚 API Documentation

Access the postman documentation: https://documenter.getpostman.com/view/1475503/2sB2cbZduU

---

## ⚙️ Installation

### 1. Clone the project

```bash
git clone https://github.com/msyahruls/nolimit-nodejs-test.git
cd blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
PORT=3000
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_api_dev
JWT_SECRET=supersecretkey123
```

---

## 🐳 Running with Docker

### 1. Build and start containers

```bash
docker-compose up --build
```

### 2. Run migrations & seeders

```bash
docker exec -it blog_api npx sequelize-cli db:migrate
docker exec -it blog_api npx sequelize-cli db:seed:all
```

---

## 🧪 Test User

```
Email: demo@example.com
Password: password123
```
