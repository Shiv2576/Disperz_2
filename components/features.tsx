import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Gas-Optimized Batch Airdrops",
    description:
      "Disperz reduces blockchain transaction costs by up to 90% through a highly efficient batch airdrop contract. Send tokens to unlimited recipients in a single transaction—eliminating redundant calls and wasted gas.",
  },
  {
    icon: Blocks,
    title: "One-Transaction Scalability",
    description:
      "Distribute tokens to thousands of addresses instantly in one on-chain transaction. Built for high-throughput use cases without compromising reliability or composability.",
  },
  {
    icon: Bot,
    title: "Secure & Auditable Distributions",
    description:
      "Every airdrop is recorded immutably on-chain, providing transparent, verifiable proof of distribution. Ideal for DAOs and compliance-conscious projects requiring audit trails.",
  },
  {
    icon: Film,
    title: "Intuitive Distribution Analytics",
    description:
      "Track, verify, and analyze token distributions through a clean, real-time dashboard. Monitor success rates, recipient engagement, and transaction history without leaving the platform.",
  },
  {
    icon: ChartPie,
    title: "Seamless DeFi Integration",
    description:
      "Designed with composability in mind, Disperz integrates natively with leading DeFi protocols and wallet infrastructure—enabling smooth token campaigns across ecosystems.",
  },
  {
    icon: MessageCircle,
    title: "Effortless Community Engagement",
    description:
      "Automate complex reward campaigns, contributor incentives, and community airdrops with minimal setup. Empower teams to focus on strategy—not manual execution.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Seamless Collaboration
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
