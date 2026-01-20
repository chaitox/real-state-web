import { Footer } from "@/components/ui/footer";
import { PropertyCard } from "@/components/ui/property-card";
import Link from "next/link";

export default function ListingsPage() {
    return (
        <>
            <main className="max-w-[1440px] mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-6">
                    <Link href="/" className="text-gray-500 text-sm hover:text-primary">
                        Inicio
                    </Link>
                    <span className="material-symbols-outlined text-gray-300 text-sm">
                        chevron_right
                    </span>
                    <span className="text-gray-900 dark:text-white text-sm font-bold">
                        Listado de Propiedades
                    </span>
                </div>

                {/* Page Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
                            Propiedades en Paraguay
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Encuentre las mejores oportunidades en tierras agrícolas, ganaderas
                            y residenciales.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer">
                            <span className="material-symbols-outlined text-sm">sort</span>
                            Ordenar: Más recientes
                        </button>
                        <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-primary cursor-pointer">
                                <span className="material-symbols-outlined">grid_view</span>
                            </button>
                            <button className="px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                <span className="material-symbols-outlined">view_list</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 sticky top-28">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold">Filtros</h2>
                                <button className="text-xs font-bold text-primary underline cursor-pointer">
                                    Limpiar todo
                                </button>
                            </div>
                            <div className="space-y-6">
                                {/* Property Type */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">
                                            house
                                        </span>
                                        Tipo de Propiedad
                                    </label>
                                    <select className="w-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none px-3 py-2">
                                        <option>Todos</option>
                                        <option>Campo</option>
                                        <option>Quinta</option>
                                        <option>Residencia</option>
                                        <option>Lote</option>
                                    </select>
                                </div>
                                {/* Use */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">
                                            nature
                                        </span>
                                        Uso Recomendado
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                defaultChecked
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">Agrícola</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">Ganadero</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                type="checkbox"
                                            />
                                            <span className="text-sm">Residencial</span>
                                        </label>
                                    </div>
                                </div>
                                {/* Price Range */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">
                                            payments
                                        </span>
                                        Rango de Precio (USD)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            className="w-1/2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg text-sm p-2 outline-none"
                                            placeholder="Min"
                                            type="text"
                                        />
                                        <input
                                            className="w-1/2 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg text-sm p-2 outline-none"
                                            placeholder="Max"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {/* Size */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">
                                            square_foot
                                        </span>
                                        Tamaño (ha/m²)
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="py-2 text-xs font-bold border border-primary bg-primary/10 rounded-lg cursor-pointer">
                                            Hectáreas
                                        </button>
                                        <button className="py-2 text-xs font-bold border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">
                                            Metros²
                                        </button>
                                    </div>
                                </div>
                                {/* Zone */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">
                                            location_on
                                        </span>
                                        Zona / Departamento
                                    </label>
                                    <select className="w-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg text-sm outline-none px-3 py-2">
                                        <option>Todas las zonas</option>
                                        <option>Central</option>
                                        <option>Chaco</option>
                                        <option>Alto Paraná</option>
                                        <option>Itapúa</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full mt-8 bg-primary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all cursor-pointer">
                                Aplicar Filtros
                            </button>
                        </div>
                    </aside>

                    {/* Property Grid */}
                    <div className="flex-1">
                        {/* Active Chips */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <button className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer">
                                Agrícola{" "}
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                            <button className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer">
                                Mín. 50 ha{" "}
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                            <button className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer">
                                Alto Paraná{" "}
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                            <PropertyCard
                                id="4"
                                title="Campo agrícola 120 ha - Ideal para soja"
                                location="Santa Rita, Alto Paraná"
                                price="USD 850.000"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBPYFYaRlXFBHy5o93JRWE9w7f4fr1_96vnWYg2e8Wl8vSvbAHLeAc-w-QuDlpVtrW8dd2bDoeogrSpFtBmP2EImGwKkJ11Wvn65tEVGANUGPUzD8NXzOCAHOhS-6SbbvCLZjVpApvJ8HlMIQPxqs4xPTdqyqM1v5n6YNVvRWg4f_trRrgVhHi-CB5P_OrmEVkQCv9rokfYTl50oTxvM3v8NN3CrnBsDlCp8pKU5n1tBsBNW7AA5eD0a5xfK-24EnqkAOi45C8iw1A"
                                tags={[
                                    { text: "OPORTUNIDAD", colors: "bg-white/90 text-primary" },
                                    { text: "SUELO TIPO 1", colors: "bg-primary/90 text-white" },
                                ]}
                                specs={{
                                    area: "120 ha",
                                    custom: [
                                        { icon: "trending_up", label: "Uso: Agrícola" },
                                        { icon: "straighten", label: "1.200.000 m²" },
                                    ],
                                }}
                            />
                            <PropertyCard
                                id="5"
                                title="Estancia Ganadera Chaco - 500 ha"
                                location="Filadelfia, Boquerón"
                                price="USD 1.250.000"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDgY-3YpfILK99LMMOH8J4eJRNACK0MdQKBd2sr-R0ADZRTFddttTYrbb6gr_20s52-5gs6mb-eI7uaVW1Uuv-egT-pSeeo4uFAVZcpvAH__Klkxl5-FC3iL7zQgA4KTUwIVhY3ZLgRjgoEDPUUxnPi1210LuhAESy_svD9PLJ8mk5xp2CRfBj9TYcvlIrXVDClPovsAUJJKP0XRf5FTHEDeSZ_lsYx98zypXqjHYErDa178K7OGJiiPWbiaNuOvYlfFRdF8beSq30"
                                tags={[
                                    { text: "INVERSIÓN", colors: "bg-white/90 text-primary" },
                                ]}
                                specs={{
                                    area: "500 ha",
                                    custom: [
                                        { icon: "grass", label: "Ganadero" },
                                        { icon: "water_drop", label: "Tajamares" },
                                    ],
                                }}
                            />
                            <PropertyCard
                                id="6"
                                title="Quinta Vacacional San Bernardino"
                                location="San Bernardino, Cordillera"
                                price="USD 215.000"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAz42BuPjcs1KP3OsFqjSt0h5x0wANvaxqKA7XgMa1h58WCdoH5rfUaIrxqwVDAjt7TMexJQlRxEeWg2l2BkZ1BJ4CxVeZgS1bK_l6rFxfbqqElf4DcZSxZYi8m_rH7p0IESpZ8dSwuO_7JR2aPV_Jk9LFKtlKU1l7Qf94RX6KxPOiOCfUXetuWAOMsVJK5Xgqe9bf8r3KzzwJXAyAjDZf2nihj2JjdWM_eBb9z3LIm82Z0yg-wWou7Zggl6C3ua_ZkITwZilduaYg"
                                tags={[{ text: "NUEVO", colors: "bg-white/90 text-primary" }]}
                                specs={{
                                    area: "2500 m²",
                                    custom: [
                                        { icon: "home", label: "Residencial" },
                                        { icon: "pool", label: "Piscina" },
                                    ],
                                }}
                            />
                            <PropertyCard
                                id="7"
                                title="Fracción Industrial Villeta"
                                location="Villeta, Central"
                                price="USD 450.000"
                                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDo2IdEI5BrTu4b5WCLQiOuLtOhHnKoAJ2BLDVz6lFPHCRlEMeNVhAsY8B7gBUgydYsd3ThnFBVovbnyHhxBX0-KwQFeprfAPUsdJXgI1fYYbXvJhP811jt3kipTVje6M8ib3Nw4d-xZghxvNtKT0yaPXWF6uXsSeIi0fdu5RXSOxKDbVV-qq2T4nvsSHAVz4t8PZ-R3UT0ciT31gfNgZR6_EHKyWMF1LDZCDwYOxtxY-TXS5xEKWz5Rdd43Wy2Z3tgVLwoNyj9U78"
                                tags={[
                                    { text: "LOTEAMIENTO", colors: "bg-white/90 text-primary" },
                                ]}
                                specs={{
                                    area: "5000 m²",
                                    custom: [
                                        { icon: "factory", label: "Industrial" },
                                        { icon: "forklift", label: "Logístico" },
                                    ],
                                }}
                            />
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-3 mt-12">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold cursor-pointer">
                                1
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                                2
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                                3
                            </button>
                            <span className="text-gray-400">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                                8
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {/* Floating WhatsApp Action */}
            <a
                className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group z-50 cursor-pointer"
                href="#"
            >
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">
                    Hablar con un asesor
                </span>
                <svg
                    className="size-6 fill-current"
                    viewBox="0 0 24 24"
                >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.548 0 10.061-4.512 10.063-10.061.002-2.69-1.046-5.219-2.951-7.127-1.904-1.907-4.432-2.957-7.123-2.957-5.549 0-10.061 4.512-10.063 10.061-.001 2.032.547 3.589 1.534 5.248l-1.121 4.09 4.242-1.112z"></path>
                </svg>
            </a>
        </>
    );
}
