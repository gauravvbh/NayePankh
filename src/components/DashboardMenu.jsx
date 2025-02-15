import Link from "next/link";

const DashboardMenu = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
            </ul>
        </nav>
    );
};

export default DashboardMenu;
