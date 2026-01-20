import Link from "next/link";

export function Header() {
    return (
        /* Increased Z-Index to 100 to ensure it's always on top */
        <header className="fixed top-0 w-full z-[100] glass-morphism">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-2 bg-primary rounded-lg text-white">
                        <span className="material-symbols-outlined text-2xl">landscape</span>
                    </div>
                    <h1 className="text-xl font-extrabold tracking-tight text-primary">
                        Inmuebles<span className="font-light text-[#6a8176]">Paraguay</span>
                    </h1>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-semibold hover:text-primary transition-colors py-2"
                        href="/listings"
                    >
                        Comprar
                    </Link>
                    <Link
                        className="text-sm font-semibold hover:text-primary transition-colors py-2"
                        href="/listings"
                    >
                        Alquilar
                    </Link>
                    <Link
                        className="text-sm font-semibold hover:text-primary transition-colors py-2"
                        href="/listings"
                    >
                        Campos
                    </Link>
                    <Link
                        className="text-sm font-semibold hover:text-primary transition-colors py-2"
                        href="/contact"
                    >
                        Tasaciones
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    {/* Replaced nested button with direct styling on Link for valid HTML */}
                    <Link
                        href="/publish"
                        className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-primary text-white hover:bg-opacity-90 transition-all cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-lg">
                            add_circle
                        </span>
                        Publicar Propiedad
                    </Link>
                    <button className="p-2 rounded-full hover:bg-primary/10 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
