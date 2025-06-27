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
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see it in action.

You can start editing the page by modifying `app/page.js`. The app supports **live reload**, so changes reflect instantly.

---

## 🌐 Deployment

The easiest way to deploy your Next.js app is through **[Vercel](https://vercel.com/)** — it's made by the same team that built Next.js.

For other options, refer to the official [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Razorpay Docs](https://razorpay.com/docs/)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [bcrypt.js GitHub](https://github.com/kelektiv/node.bcrypt.js/)

---

## 💡 Why Chai?

Chai isn’t just another crowdfunding clone. It’s a platform for creators to **tell their story, express their vibe, and connect with supporters**. Whether it’s a comic series, a YouTube channel, or a music album — Chai helps make the dream fundable 🚀.

---

## 👨‍💻 Author

Made with ❤️ by **Ayush Jadhao**  
📧 [ayushjadhao8804@gmail.com](mailto:ayushjadhao8804@gmail.com)

---
