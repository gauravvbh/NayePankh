import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold text-blue-600">NayePankh Foundation</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link className="text-gray-700 hover:text-blue-500" href="/">Home</Link></li>
                        <li><Link className="text-gray-700 hover:text-blue-500" href="/dashboard">Dashboard</Link></li>
                        <li><Link className="text-gray-700 hover:text-blue-500" href="/transactions">Transactions</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
