"use client";

import { useState, useEffect } from "react";
import ReferralSection from "@/components/ReferralSection";

export default function Dashboard() {
    const [user, setUser] = useState({ name: "John Doe", referralCode: "ABC123" });
    const [goalAchieved, setGoalAchieved] = useState(0);

    useEffect(() => {
        setGoalAchieved(500); // Example amount
    }, []);

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
            <h2 className="text-lg text-gray-700 mt-2">Goal Achieved: <span className="text-green-500">${goalAchieved}</span></h2>
            <ReferralSection referralCode={user.referralCode} />
        </div>
    );
}
