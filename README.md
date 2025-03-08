## **RideMetro**

## 👥 Team Members

| **Name**          | **Roll Number** | **Email**               | **Role**       |
| ----------------- | --------------- | ----------------------- | -------------- |
| Md Ismail Hossain | 20220104073     | exh.alif.47@gmail.com   | Lead, Frontend |
| Munem Al Shafat   | 20220104072     | shafat1660@gmail.com    | Backend        |
| Noman Bin Safar   | 20220104059     | nomanbinsafar@gmail.com | Backend        |
| Mohammad Sahil    | 20220104076     | sahilbruh007@gmail.com  | Frontend       |

## 🚀 Objective

**RideMetro** is a comprehensive web platform designed to streamline and enhance the experience of using the Dhaka Metro system. The platform provides tools for purchasing tickets, accessing timetables, resolving lost and found cases, and offering detailed guidance for metro riders. This user-friendly website aims to make metro travel more accessible, efficient, and informative.

## 🎯 Target Audience

**RideMetro** is designed for:

- Daily metro commuters
- Tourists visiting Dhaka

The platform is for mass people.

## 📚 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Laravel
- **Database**: MySQL
- **Authentication**: JWT
- **Maps Integration**: Google Maps API
- **Hosting**: Vercel (for front-end)
- **Version Control**: GitHub

## API Endpoints

| **Method** | **Endpoint**               | **Description**                    |
| ---------- | -------------------------- | ---------------------------------- |
| `POST`     | `/api/auth/register`       | Register a new user                |
| `POST`     | `/api/auth/login`          | User login                         |
| `POST`     | `/api/auth/logout`         | User logout                        |
| `GET`      | `/api/v1/auth/profile`     | Fetch user profile.                |
| `GET`      | `/api/tickets/price`       | Get ticket price between locations |
| `POST`     | `/api/tickets/purchase`    | Purchase a ticket                  |
| `POST`     | `/api/lostfound/report`    | Report a lost item                 |
| `GET`      | `/api/lostfound/items`     | Retrieve lost items list           |
| `POST`     | `/api/complaints`          | Submit a complaint                 |
| `GET`      | `/api/admin/users`         | Fetch all users (admin only)       |
| `PUT`      | `/api/admin/ticket-prices` | Update ticket prices               |
| `DELETE`   | `/api/v1/admin/users/:id`  | Remove a user account.             |

## 🌟 Project Milestones

### **Milestone 1: Project Setup**

- Design the front-end layout for landing pages in Figma / Canva.
- Implement basic frontend components and structure in React.
- Set up the backend environment with a basic structure.

---

### **Milestone 2: Core Features**

- Implement user authentication (registration & login).
- Develop CRUD operations buying tickets.
- Implement ticket pricing and purchase functionality.
- Create a lost and found module.
- Set up basic structure for admin panel.

---

### **Milestone 3: Finalization and Deployment**

- Deploy the web application to a hosting platform.
- Conduct testing for performance, scalability, and security.

## 💻 UI / UX Demo

Check out the live demonstration here: [Project Demo Link](https://www.figma.com/design/Ibnmy4wEDEjStA5Z8QSuQK/RideMetro?node-id=0-1&p=f&t=wdibMmxQ6cmhf7Fk-0)

### Setup Instruction:

     Follow the steps below to set up the project on your local system:

     1.	Prerequisites
               Before proceeding, ensure you have the following installed:
               -	PHP (>=8.0)
               -	Composer (PHP Dependency Manager)
               -	Laravel (Latest version)
               -	MySQL (or any preferred database)
               -	Node.js & npm (for frontend dependencies)
               -	Git (optional, but recommended)

     2.	Clone the Repository
               git clone https://github.com/DortCeL/RideMetro.git
               cd RideMetro

     3.	Install Backend dependencies

               cd backend
               composer install

               Copy the .env.example file and rename it to .env

               Open the .env file and update the following:
                    APP_NAME= Laravel
                    APP_ENV=local
                    APP_KEY=
                    APP_DEBUG=true
                    APP_URL=http://localhost
                    DB_CONNECTION=mysql
                    DB_HOST=127.0.0.1
                    DB_PORT=8000
                    DB_DATABASE=ridemetro
                    DB_USERNAME=root
                    DB_PASSWORD=

     4.	Run Backend

               php artisan serve

     5.	Install Frontend Dependencies

               cd frontend
               npm install

     6.   Run Frontend
               npm run dev
