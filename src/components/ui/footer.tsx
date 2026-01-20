import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-3xl">landscape</span>
                        <h2 className="text-2xl font-bold">Inmuebles Paraguay</h2>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                        Plataforma líder en comercialización de propiedades premium y
                        tierras productivas en todo el territorio paraguayo. Confianza y
                        profesionalismo en cada paso.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                language
                            </span>
                        </Link>
                        <Link
                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">group</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h6 className="font-bold mb-6 text-lg">Propiedades</h6>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Casas Residenciales
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Terrenos y Loteamientos
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Campos Agrícolas
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Estancias Ganaderas
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Locales Comerciales
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-6 text-lg">Regiones</h6>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Asunción &amp; Gran Asunción
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Chaco Central
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Ciudad del Este
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Encarnación
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-white transition-colors" href="#">
                                Cordillera
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold mb-6 text-lg">Contacto</h6>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-white">
                                pin_drop
                            </span>
                            Avda. Santa Teresa, Asunción, Paraguay
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-white">call</span>
                            +595 981 123 456
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-white">mail</span>
                            contacto@inmueblesparaguay.com.py
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                <p>© 2024 Inmuebles Paraguay. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <Link className="hover:text-white" href="#">
                        Términos y Condiciones
                    </Link>
                    <Link className="hover:text-white" href="#">
                        Política de Privacidad
                    </Link>
                </div>
            </div>
        </footer>
    );
}
