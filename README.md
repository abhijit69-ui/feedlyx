# 🌐 FeedlyX — Full-Stack Social Feed App

A modern full-stack social media feed application where users can create posts, upload images, like, comment, and receive notifications.

Built with a production-ready stack using Next.js App Router, Prisma, PostgreSQL, and Clerk authentication.

## ✨ Overview

<table width="200px">
  <tr>
    <td width="50%" valign="top">

### ✨ Features

- 📝 Create posts with text & images  
- ❤️ Like and unlike posts  
- 💬 Comment on posts  
- 🔔 Notification system  
- 👤 User profiles  
- 🌙 Dark / Light mode  
- 🔐 Authentication (Clerk)  
- 📱 Fully responsive  

    </td>

    <td width="50%" valign="top">

### 🧱 Tech Stack

- **Frontend:** Next.js, React, TypeScript  
- **Styling:** Tailwind CSS, shadcn/ui  
- **Backend:** Server Actions, Route Handlers  
- **Database:** PostgreSQL  
- **ORM:** Prisma  
- **Auth:** Clerk  
- **Uploads:** Uploadthing  
- **Icons:** Lucide React  

    </td>
  </tr>
</table>

## 🧠 Architecture Highlights

- Server Components for efficient data fetching
- Client Components for interactivity
- Server Actions for mutations (likes, comments, notifications)
- API Route Handlers for client-side fetching (mobile navbar, etc.)
- Prisma for relational data modeling

## 📸 Screenshots 

### 🏠 Home Feed Desktop
<img width="1491" height="927" alt="Home page" src="https://github.com/user-attachments/assets/05dba9b1-6e25-4ba5-a113-eb3890b7fc15" />

## 📱 Mobile View
### 🤓 Profile 💬 Post & Comments 🔔 Notifications 
<img width="2000" height="1391" alt="Untitled design" src="https://github.com/user-attachments/assets/9473ffbb-abc9-40a7-a622-a6ce218dd634" />



## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/abhijit69-ui/feedlyx.git
cd feedlyx
```
### 2. Install dependencies
```bash
npm install
```
### 3. Setup environment variables
```bash
// Create a .env file:
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```
### 4. Setup database
```bash
npx prisma generate
npx prisma migrate dev
```
### 5. Run the app
```bash
npm run dev
```
