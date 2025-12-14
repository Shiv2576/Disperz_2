"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useTokenBalance,
  useApprove,
  useDeposit,
  useBatchAirdrop,
} from "../contract/function";
import { formatEther } from "viem";

export const Form = () => {
  const [activeTab, setActiveTab] = useState<"deposit" | "airdrop">("deposit");

  // Deposit Tab Hooks
  const { balance, isLoading: balanceLoading } = useTokenBalance();
  const {
    approve,
    isPending: approvePending,
    isSuccess: approveSuccess,
  } = useApprove();
  const {
    amount: depositAmount,
    setAmount: setDepositAmount,
    deposit,
    isPending: depositPending,
    isSuccess: depositSuccess,
  } = useDeposit();

  // Airdrop Tab Hooks
  const {
    batchAirdrop,
    isPending: airdropPending,
    isSuccess: airdropSuccess,
  } = useBatchAirdrop();
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");

  const handleApprove = () => {
    if (depositAmount) approve(depositAmount);
  };

  const handleDeposit = () => {
    if (depositAmount) deposit(depositAmount);
  };

  const handleBatchAirdrop = () => {
    const recipientList = recipients
      .split("\n")
      .filter((r) => r.trim()) as `0x${string}`[];
    const amountList = amounts.split("\n").filter((a) => a.trim());

    if (
      recipientList.length === amountList.length &&
      recipientList.length > 0
    ) {
      batchAirdrop(recipientList, amountList);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div
        className="w-full max-w-md p-10 rounded-lg shadow-lg"
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
      >
        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-black border-opacity-20">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`py-2 px-4 font-semibold transition-colors`}
            style={{
              color: activeTab === "deposit" ? "#000000" : "rgba(0,0,0,0.5)",
              borderBottom:
                activeTab === "deposit"
                  ? "2px solid #000000"
                  : "2px solid transparent",
            }}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("airdrop")}
            className={`py-2 px-4 font-semibold transition-colors`}
            style={{
              color: activeTab === "airdrop" ? "#000000" : "rgba(0,0,0,0.5)",
              borderBottom:
                activeTab === "airdrop"
                  ? "2px solid #000000"
                  : "2px solid transparent",
            }}
          >
            Batch Airdrop
          </button>
        </div>

        {/* Fixed-height container with smooth transitions */}
        <div className="relative" style={{ height: "420px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {activeTab === "deposit" && (
                <DepositTabContent
                  balance={balance}
                  balanceLoading={balanceLoading}
                  depositAmount={depositAmount}
                  setDepositAmount={setDepositAmount}
                  approvePending={approvePending}
                  approveSuccess={approveSuccess}
                  depositPending={depositPending}
                  depositSuccess={depositSuccess}
                  handleApprove={handleApprove}
                  handleDeposit={handleDeposit}
                />
              )}
              {activeTab === "airdrop" && (
                <AirdropTabContent
                  recipients={recipients}
                  setRecipients={setRecipients}
                  amounts={amounts}
                  setAmounts={setAmounts}
                  airdropPending={airdropPending}
                  airdropSuccess={airdropSuccess}
                  handleBatchAirdrop={handleBatchAirdrop}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ── Deposit Tab ───────────────────────────────────────
const DepositTabContent = ({
  balance,
  balanceLoading,
  depositAmount,
  setDepositAmount,
  approvePending,
  approveSuccess,
  depositPending,
  depositSuccess,
  handleApprove,
  handleDeposit,
}: {
  balance: bigint | undefined;
  balanceLoading: boolean;
  depositAmount: string;
  setDepositAmount: (val: string) => void;
  approvePending: boolean;
  approveSuccess: boolean;
  depositPending: boolean;
  depositSuccess: boolean;
  handleApprove: () => void;
  handleDeposit: () => void;
}) => (
  <div className="space-y-4 h-full flex flex-col">
    <div className="p-4 rounded-lg border border-black border-opacity-10">
      <p className="text-sm opacity-70">Your Balance</p>
      <p className="text-2xl font-bold">
        {balanceLoading
          ? "Loading..."
          : balance
            ? parseFloat(formatEther(balance)).toFixed(4)
            : "0.0000"}
      </p>
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Amount</label>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => {
          const value = e.target.value;
          // Allow empty input or valid non-negative numbers (including decimals)
          if (value === "" || (!isNaN(Number(value)) && Number(value) >= 0)) {
            setDepositAmount(value);
          }
        }}
        placeholder="Enter amount"
        min="0"
        step="any"
        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none"
        style={{
          borderColor: "rgba(0,0,0,0.2)",
          backgroundColor: "#FFFFFF",
        }}
        // Hide spinner arrows (works in most modern browsers)
        onWheel={(e) => e.target instanceof HTMLElement && e.target.blur()}
      />
    </div>

    <button
      onClick={handleApprove}
      disabled={approvePending || !depositAmount}
      className="w-full px-4 py-2 font-semibold rounded-lg transition disabled:opacity-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.1)",
        color: "#000000",
      }}
    >
      {approvePending ? "Approving..." : "Approve"}
    </button>
    {approveSuccess && (
      <p className="text-sm font-semibold">✓ Approval successful</p>
    )}

    <button
      onClick={handleDeposit}
      disabled={depositPending || !depositAmount}
      className="w-full px-4 py-2 font-semibold rounded-lg text-white transition disabled:opacity-60"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {depositPending ? "Depositing..." : "Deposit"}
    </button>
    {depositSuccess && (
      <p className="text-sm font-semibold">✓ Deposit successful</p>
    )}
  </div>
);

// ── Airdrop Tab ───────────────────────────────────────
const AirdropTabContent = ({
  recipients,
  setRecipients,
  amounts,
  setAmounts,
  airdropPending,
  airdropSuccess,
  handleBatchAirdrop,
}: {
  recipients: string;
  setRecipients: (val: string) => void;
  amounts: string;
  setAmounts: (val: string) => void;
  airdropPending: boolean;
  airdropSuccess: boolean;
  handleBatchAirdrop: () => void;
}) => {
  const recipientCount = recipients.split("\n").filter((r) => r.trim()).length;
  const amountCount = amounts.split("\n").filter((a) => a.trim()).length;

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div>
        <label className="block text-sm font-medium mb-2">
          Recipients (one per line)
        </label>
        <textarea
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          placeholder="0x...\n0x..."
          className="w-full px-4 py-2 rounded-lg font-mono text-sm border focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none h-24"
          style={{
            borderColor: "rgba(0,0,0,0.2)",
            backgroundColor: "#FFFFFF",
          }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Amounts (one per line)
        </label>
        <textarea
          value={amounts}
          onChange={(e) => setAmounts(e.target.value)}
          placeholder="1.5\n2.0..."
          className="w-full px-4 py-2 rounded-lg font-mono text-sm border focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none h-24"
          style={{
            borderColor: "rgba(0,0,0,0.2)",
            backgroundColor: "#FFFFFF",
          }}
        />
      </div>

      <div className="p-3 rounded-lg text-sm border border-black border-opacity-10">
        Recipients: {recipientCount} | Amounts: {amountCount}
      </div>

      <button
        onClick={handleBatchAirdrop}
        disabled={airdropPending || recipientCount === 0 || amountCount === 0}
        className="w-full px-4 py-2 font-semibold rounded-lg transition disabled:opacity-50"
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          color: "#000000",
        }}
      >
        {airdropPending ? "Processing..." : "Send Airdrop"}
      </button>

      {airdropSuccess && (
        <p className="text-sm font-semibold">✓ Airdrop successful</p>
      )}
    </div>
  );
};
