# Disperz

**Gas-optimized batch airdrop tool for Web3 projects**  
Send tokens to unlimited recipients in a single transaction — cutting gas fees by up to 90%, eliminating repetitive workflows, and ensuring secure, auditable distributions.

Built for DAOs, protocols, and communities who value **scale**, **transparency**, and **developer experience**.

---

## ✨ Features

- **One-click batch airdrops** – upload addresses + amounts, execute in one tx  
- **90% lower gas fees** vs. individual transfers  
- **CSV support** – easy import of tiered rewards or contributor lists  
- **On-chain proof** – every distribution is verifiable and immutable  
- **Multi-chain** – works with Ethereum, Base, Arbitrum, Optimism, and more  
- **Dark/light mode** – clean, minimal UI that respects your system theme  

---

## 🚀 Quick Start

1. Clone the repo:
```bash
git clone https://github.com/your-username/disperz.git
cd disperz
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment (optional for frontend-only dev):
```bash
cp .env.example .env.local
# Add your WalletConnect Project ID if using Web3 features
```

4. Run the dev server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + `next-themes`
- **Web3**: Wagmi + RainbowKit
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion

---

## 📁 Project Structure

```
/app
  /components    # UI and Web3 components
  /contract      # Smart contract interaction hooks
  favicon.png    # Browser tab icon
  layout.tsx     # Root layout with theme + Web3 providers
  page.tsx       # Main landing page
/public
  # Static assets (if any)
```

---

## 🔧 Customization

- **Favicon**: Replace `app/icon.png` with your logo (512×512 PNG)
- **Theme**: Adjust colors in `tailwind.config.js`
- **Web3 Config**: Update chain/network in `components/provider.tsx`

---

## 🌐 Live Demo

[disperz](https://disperz.netlify.app/) 

---

> **Utility through simplicity. Power through restraint.**  
> — Disperz

---

MIT License · Built with ❤️ for the Web3 ecosystem
