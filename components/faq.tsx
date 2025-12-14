import { ShieldCheck, Undo2, Send, Zap } from "lucide-react";

const faq = [
  {
    icon: Send,
    question:
      "Can I send different token amounts to multiple addresses at once?",
    answer:
      "Yes! Disperz lets you upload a list of wallet addresses with custom balances and execute a single, gas-efficient transaction—perfect for tiered rewards, contributor payouts, or community incentives.",
  },
  {
    icon: Zap,
    question: "How does one-click payout work?",
    answer:
      "After uploading your recipient list and confirming details, Disperz batches all transfers into one optimized transaction. With a single click, your airdrop executes on-chain—no manual repetition or scripting required.",
  },
  {
    icon: ShieldCheck,
    question: "Are batch airdrops secure and verifiable?",
    answer:
      "Every Disperz distribution is fully on-chain, with immutable proof of delivery. Recipients, amounts, and transaction hashes are permanently recorded—enabling transparent audits for DAOs, projects, and token teams.",
  },
  {
    icon: Undo2,
    question: "How does Disperz reduce gas fees for airdrops?",
    answer:
      "Disperz uses a gas-optimized batch airdrop contract that sends tokens to unlimited recipients in a single transaction—cutting gas costs by up to 90% compared to individual transfers, while ensuring secure, auditable, and on-chain verifiable distributions.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
