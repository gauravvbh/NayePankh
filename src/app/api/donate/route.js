export async function POST(req) {
    try {
        const { amount, referralCode } = await req.json();

        if (!amount || isNaN(amount) || amount <= 0) {
            return new Response(JSON.stringify({ message: "Invalid donation amount" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        console.log(`Received donation: ₹${amount} via referral ${referralCode}`);

        return new Response(JSON.stringify({ message: "Donation successful" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
