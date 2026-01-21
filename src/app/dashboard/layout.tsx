import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white shadow-md">
                <div className="p-6">
                    <h1 className="text-2xl font-bold tracking-tight">Inmobilia Admin</h1>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/dashboard"
                        className="block px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                        Resumen
                    </Link>
                    <Link
                        href="/dashboard/propiedades"
                        className="block px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                        Propiedades
                    </Link>
                    <Link
                        href="/dashboard/agentes"
                        className="block px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                        Agentes
                    </Link>
                    <Link
                        href="/dashboard/clientes"
                        className="block px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
                    >
                        Clientes
                    </Link>
                    <div className="absolute bottom-0 w-64 p-6">
                        <Link
                            href="/"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            &larr; Volver al sitio web
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-8">
                {children}
            </main>
        </div>
    );
}
