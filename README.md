# 🫖 Chai – Workfunding for Creators

**Chai** is a unique **workfunding platform** that empowers creators to showcase their creative work and get funded for it. Think of it as a mini-portfolio meets crowdfunding. Artists, writers, devs — anyone can build a personal creative page and share it with the world 🌍. Supporters can view the page and fund the work directly 💸.

---

## 🚀 Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/) (API Routes for backend logic)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: JWT + OAuth (Google, GitHub)
- **Password Hashing**: `bcrypt.js`
- **Payments**: Dummy cash transactions using [Razorpay](https://razorpay.com/) inbuilt checkout UI

---

## ✨ Key Features

- 📝 **Signup & Login**
  - Traditional login via email/password (securely hashed using bcrypt)
  - Social logins using GitHub and Google

- 🛠️ **Dashboard**
  - After login, users are redirected to their dashboard to manage personal details

- 🎨 **Create Work Pages**
  - Add images, text, links to other projects — make your portfolio page your vibe

- 💰 **Receive Funding**
  - Share your creative page link and receive funding using Razorpay's secure payment flow

- 📣 **Share Anywhere**
  - Your creative page can be shared on socials, chats, websites, anywhere

---

## 🧑‍💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
