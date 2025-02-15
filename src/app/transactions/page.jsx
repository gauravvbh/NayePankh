"use client";

import { useState, useEffect } from "react";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions([
            { id: 1, name: "Alice", amount: 100, date: "2024-02-15" },
            { id: 2, name: "Bob", amount: 200, date: "2024-02-14" }
        ]);
    }, []);

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h1 className="text-2xl font-bold">Transactions</h1>
            <ul className="mt-4">
                {transactions.map((tx) => (
                    <li key={tx.id} className="border-b py-2">
                        {tx.name} donated <span className="text-green-500">${tx.amount}</span> on {tx.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}
