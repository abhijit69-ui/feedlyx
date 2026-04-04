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
<img width="245" height="495" alt="postncomment" src="https://github.com/user-attachments/assets/7c1fc071-c5e0-46f5-901f-b6f0a0705ebd" />
<img width="245" height="495" alt="profile" src="https://github.com/user-attachments/assets/03e6564c-71d2-4418-92c9-61ba5327acc5" />
<img width="245" height="495" alt="notification" src="https://github.com/user-attachments/assets/01b52337-14cb-439d-88b3-125d8352218e" />
<img width="245" height="495" alt="mobilehome" src="https://github.com/user-attachments/assets/77ad7a38-8fa4-4411-aa4e-8c308020727f" />


## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/abhijit69-ui/feedlyx.git
cd feedlyx
npm install

DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

npx prisma generate
npx prisma migrate dev
npm run dev
```
