"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ReferralSection = ({ referralCode }) => {
    const donationLink = `http://localhost:3000/donate/${referralCode}`;
    const router = useRouter();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(donationLink);
        alert("Donation link copied!");
    };

    const shareOnWhatsApp = () => {
        const message = `Hi, I am raising funds for NayePankh Foundation. Support me by donating through this link: ${donationLink}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
    };

    return (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 text-center">
            <p className="text-gray-700 mb-2">Your Referral Code: <strong>{referralCode}</strong></p>

            <button onClick={copyToClipboard} className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                Copy Donation Link
            </button>

            <button onClick={shareOnWhatsApp} className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Share on WhatsApp
            </button>

            <button onClick={() => router.push(`/donate/${referralCode}`)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-2 w-full">
                Go to Donation Page
            </button>
        </div>
    );
};

export default ReferralSection;
