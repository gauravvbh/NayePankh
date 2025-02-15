"use client";

import { useState, useEffect, use } from "react";

export default function DonatePage({ params }) {
    const { referralCode } = use(params);
    const [amount, setAmount] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState("");
    const [referrer, setReferrer] = useState(null);

    useEffect(() => {
        if (referralCode) {
            setReferrer({ name: "John Doe", referralCode });
        }
    }, [referralCode]);

    const handleDonate = async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        setIsProcessing(true);
        setMessage("");

        try {
            const response = await fetch("/api/donate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount, referralCode }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`🎉 ${data.message}`);
            } else {
                setMessage("❌ Donation failed. Please try again.");
            }
        } catch (error) {
            setMessage("❌ An error occurred. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg text-center max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-blue-600">Donate to NayePankh</h1>

            {referrer ? (
                <p className="mt-2 text-gray-700">
                    You are donating through <strong>{referrer.name}</strong>'s referral code:
                    <span className="text-green-500"> {referralCode}</span>
                </p>
            ) : (
                <p className="text-red-500 mt-2">Invalid referral code.</p>
            )}

            <div className="mt-6">
                <input
                    type="number"
                    placeholder="Enter amount (₹)"
                    className="border p-2 w-full rounded"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button
                    onClick={handleDonate}
                    disabled={isProcessing}
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg w-full"
                >
                    {isProcessing ? "Processing..." : "Donate Now"}
                </button>
                {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
            </div>
        </div>
    );
}
