import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetailPage() {
    return (
        <>
            <main className="max-w-[1280px] mx-auto px-6 lg:px-20 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-[#6a8176]">
                    <Link href="/" className="hover:text-primary">
                        Inicio
                    </Link>
                    <span className="material-symbols-outlined !text-sm">
                        chevron_right
                    </span>
                    <Link href="/listings" className="hover:text-primary">
                        Campos Agrícolas
                    </Link>
                    <span className="material-symbols-outlined !text-sm">
                        chevron_right
                    </span>
                    <span className="text-[#121615]">Alto Paraná</span>
                </nav>

                {/* Gallery Grid */}
                <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-10 overflow-hidden rounded-xl">
                    <div className="col-span-2 row-span-2 relative group cursor-pointer">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMkuD92XxdciZuBlhn6hdQgLjXCPb1QTcwCbCLMq0tYXQX8CVhNba6I8iEp00-Q77syt-us8aI7LxK9awXptui-1B4tjQqLjlMb5v8zIu7i8BV4NY9d8vr3vPTTTmuc6OHlxLVDs5AmXahQSk35saX7mGsaLASFBMvNscZQGM8KXydYpWYEE64W1aY-kaW8r-X6ke3Lkf8VrMrJOi2yGoC7JK5VfkvpUQd-V3hq1bnEnkqW4V1Ezg62u3ihkneqU0MZiWGeSadQM"
                            alt="Vast green agricultural landscape with crops at sunset"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    <div className="col-span-1 row-span-1 relative">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdvksdH1ob4xMLeMf2XXeu_hsQdMOnxa1IyfDejM_p4R_KHhEx0X7PFT4P0cSkguuwZ7kpMjJBXD1E5EuyGU9oHNLUebYRj4fb7oWlZXwDOSxNKqpc1xLUbbmklTg2RWDvkjqskwd7FiHiLFGC-5Ue1maMYQzA5TgoPXD7hJBb5S-Bkw2ex4VYkHs6w9yL5wvkuentdYNGPxDc8pJTkqZzoCAjMaJDCXdBB2M-IeGo8_1KPVxU0HP54Ty2Mun_7GsI8Q2LzvatEUo"
                            alt="Close up of rich red soil texture"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-1 row-span-1 relative">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNx0WRMelKRO59tPeR3h8Y1nReoloOGQ5R9zkRtBFfj8-08b5J3smY9g8ygrqLQx9WXme2ctlC03bJm8F411KxNAbww_1naIaMJ_eBLoqNTfOi4nkKn8I-903MOpmdwdby6vs_24j7U3L-W00i8PcA-sz7JJcoc5L3SjHPzJaKTIT--ESmoj0IZu6q6GS_QsOrcpOFNGaSibS9nONAfVY2oMTYWgvdGGGXPqGzDjEgsj6t8z_XtEwGsPwCWxVRHcolgaCxi9lcmkM"
                            alt="Modern tractor working in a field"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-1 row-span-1 relative">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4podGjvHhyJ2RW4-iiE4BEqlWl_L74SlBtXA_KV8lW3HdcuSNq0GMjetITzpP9zzkaCFCk-M6B6YTOo9N33Wb1DCW9A-QT8tm4ZZ6j4HIevvlXPyTCjIqYzNT4OgTnxfSk3hgAME9uBOoi4vsTcypM0JCRMPgD3hX6vQIgKdxhxgdAdWhNCKvdeCq7zx3JDgoMb_rJubF4-RzGH2pfWKpg9a8NYxmYSh-7gHpXt5Yd14NNWmgRG5_c2dxruLO4INfyuU1onS2ZdE"
                            alt="Aerial view of a water reservoir on a farm"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-1 row-span-1 border border-gray-200 bg-gray-200 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Kh5a73nMyqZopd3ztm_Bxo5s_1Lm2RyeBtApRxD-qYfR-wRRmXFUqIivBSOAmGLLiJrjj0Bjgd9vPoZ_mpzWkybGufhqsb8w811rEpRNdt1qdx2I-Ow3koQgssUIBNp20WyJ1XIhwOvqlCtInfJufTZOqgAYVuTbft5til-LeW3iVNmLeEVQWuoq-bQrlzz2a2KD8K0g_i-y4i6dshHKPWK8WzV08spqCF7ZfxdX9m3mZyIOi-Fzcoaw1cJNTDwXN1YrGoZ0RRk"
                            alt="Grain silos and agricultural infrastructure"
                            fill
                            className="object-cover blur-[2px] opacity-60"
                        />
                        <span className="relative z-10 font-bold text-lg text-white">
                            +12 Fotos
                        </span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Left */}
                    <div className="flex-1">
                        {/* Heading */}
                        <div className="mb-8">
                            <div className="flex items-start justify-between mb-2">
                                <h1 className="text-4xl font-black tracking-tight text-[#121615] leading-tight">
                                    Hacienda San Pedro
                                </h1>
                                <div className="bg-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
                                    En Venta
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-lg text-[#6a8176]">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-xl">
                                        location_on
                                    </span>
                                    <span>Santa Rita, Alto Paraná</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-xl">
                                        straighten
                                    </span>
                                    <span>500 Hectáreas</span>
                                </div>
                            </div>
                            <div className="mt-6 flex items-baseline gap-4">
                                <span className="text-4xl font-black text-primary">
                                    USD 3.500.000
                                </span>
                                <span className="text-base font-medium text-[#6a8176]">
                                    USD 7.000 / Ha
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary"></span> Infraestructura
                                &amp; Suelo
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-6 rounded-xl border border-[#dde3e1] bg-white">
                                    <span className="material-symbols-outlined text-primary mb-3">
                                        landslide
                                    </span>
                                    <p className="text-xs font-bold text-[#6a8176] uppercase tracking-wider mb-1">
                                        Tipo de Suelo
                                    </p>
                                    <p className="text-lg font-bold">Tierra Roja</p>
                                    <p className="text-xs text-[#6a8176] mt-1">
                                        Clase 1 - Profundo
                                    </p>
                                </div>
                                <div className="p-6 rounded-xl border border-[#dde3e1] bg-white">
                                    <span className="material-symbols-outlined text-primary mb-3">
                                        water_drop
                                    </span>
                                    <p className="text-xs font-bold text-[#6a8176] uppercase tracking-wider mb-1">
                                        Agua
                                    </p>
                                    <p className="text-lg font-bold">Pozo Artesiano</p>
                                    <p className="text-xs text-[#6a8176] mt-1">Tanque 50.000L</p>
                                </div>
                                <div className="p-6 rounded-xl border border-[#dde3e1] bg-white">
                                    <span className="material-symbols-outlined text-primary mb-3">
                                        road
                                    </span>
                                    <p className="text-xs font-bold text-[#6a8176] uppercase tracking-wider mb-1">
                                        Acceso
                                    </p>
                                    <p className="text-lg font-bold">Asfalto 5km</p>
                                    <p className="text-xs text-[#6a8176] mt-1">Todo tiempo</p>
                                </div>
                                <div className="p-6 rounded-xl border border-[#dde3e1] bg-white">
                                    <span className="material-symbols-outlined text-primary mb-3">
                                        bolt
                                    </span>
                                    <p className="text-xs font-bold text-[#6a8176] uppercase tracking-wider mb-1">
                                        Energía
                                    </p>
                                    <p className="text-lg font-bold">Trifásica</p>
                                    <p className="text-xs text-[#6a8176] mt-1">
                                        Transformador 65kVA
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Agricultural Yield Section */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary"></span> Datos
                                Productivos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                                        <div>
                                            <p className="text-sm font-bold text-primary">
                                                Crops Principales
                                            </p>
                                            <p className="text-lg font-bold">Soja &amp; Maíz (Zafriña)</p>
                                        </div>
                                        <span className="material-symbols-outlined text-primary">
                                            potted_plant
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-sm font-semibold uppercase tracking-widest text-[#6a8176]">
                                            Rendimiento Estimado
                                        </p>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-sm font-bold mb-1">
                                                    <span>Soja</span>
                                                    <span>3.800 kg/ha</span>
                                                </div>
                                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-primary h-full w-[85%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm font-bold mb-1">
                                                    <span>Maíz</span>
                                                    <span>6.200 kg/ha</span>
                                                </div>
                                                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                                    <div className="bg-accent h-full w-[70%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#dde3e1]">
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#6a8176] mb-4">
                                        Logística &amp; Cercanía
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center justify-between">
                                            <span className="text-sm flex items-center gap-2">
                                                <span className="material-symbols-outlined !text-lg text-primary">
                                                    factory
                                                </span>
                                                Silo Cooperativa Colonias Unidas
                                            </span>
                                            <span className="font-bold">12 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-sm flex items-center gap-2">
                                                <span className="material-symbols-outlined !text-lg text-primary">
                                                    directions_boat
                                                </span>
                                                Puerto Villeta (Exportación)
                                            </span>
                                            <span className="font-bold">285 km</span>
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span className="text-sm flex items-center gap-2">
                                                <span className="material-symbols-outlined !text-lg text-primary">
                                                    precision_manufacturing
                                                </span>
                                                Taller Maquinarias (John Deere)
                                            </span>
                                            <span className="font-bold">8 km</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Map Integration */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-primary"></span> Ubicación
                                Geográfica
                            </h3>
                            <div className="rounded-xl overflow-hidden border border-[#dde3e1] h-[400px] relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADrmdCCraoOUPfsk0wCbE3Yhm9Ls9JTYXpgphEk6hCoDhY74nnovrgKB7TRh39awh4IgyLlzVLOZQYm8M77T5yWL9WX4Cfd376xrElbO0K7k0mguQz4FLyAetCHaSB5uKDiMzPBaWQ6NHj8pXC8YK25Cu--oZ__zjKW6MSaSE42ttp79A5jyGGDOcAYQ9WO46HT0S7haQumH0zj2DUEpDxb0EMBdQ5vjuslsZVGnzE8ti7y9ZpinTsnpZC8LwpZtaBrz-SMjVbIiQ"
                                    alt="Satellite map view of rural farm plots"
                                    fill
                                    className="object-cover grayscale opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="bg-primary text-white p-3 rounded-full shadow-2xl animate-bounce">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-4 text-xs text-[#6a8176] font-medium">
                                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                                    -25.7794, -54.9189
                                </span>
                                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                                    Altitud: 280m
                                </span>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[380px]">
                        <div className="sticky top-28 bg-white p-8 rounded-2xl border border-[#dde3e1] shadow-xl shadow-primary/5">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="size-14 rounded-full overflow-hidden border-2 border-primary/20 relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx6krnP-wHjsYdn29hC9N4F0zbU9CRND1qGcdl86mKUmnmF7sHuWWHMcvE6fMZEEVSEq17M8XXU9_QgOS8rAUnwTdr8GiNPOPyoiDtzUAs5UgahZ1wknQpaEind3tAOeibMVtrS2ATzOyq6u_5edOZ7Otjp-8BU_onDGDG1RkNSzmsIn29_rpZIhlM-mTI8DDNCCT7oPtPod9zT6DpclHKpYZ5fuDuWzdPSbeKwzkX-JkV0jtpCH_a2NXWOt9KMMdh0fcFz87dnCM"
                                        alt="Portrait of real estate agent"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-bold">Carlos Benitez</p>
                                    <p className="text-sm text-[#6a8176]">Especialista en Agro</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined">mail</span>
                                    Quiero más info
                                </button>
                                <button className="w-full bg-background-light text-[#121615] font-bold py-4 rounded-xl border border-[#dde3e1] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined">
                                        calendar_today
                                    </span>
                                    Agendar visita
                                </button>
                                <div className="pt-4 border-t border-gray-100">
                                    <a
                                        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                                        href="#"
                                    >
                                        <svg
                                            className="size-6 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                            />
                                        </svg>
                                        WhatsApp Directo
                                    </a>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-background-light rounded-lg">
                                <p className="text-xs text-[#6a8176] text-center leading-relaxed">
                                    Al contactar, aceptas nuestros términos de servicio y política
                                    de privacidad para inversionistas.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Bottom Section: Usage History */}
                <section className="mt-16 border-t border-[#dde3e1] pt-12">
                    <h3 className="text-2xl font-black mb-8">Historial de Uso &amp; Notas</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="prose">
                            <h4 className="text-lg font-bold mb-3">Técnica de Siembra</h4>
                            <p className="text-[#6a8176] text-sm leading-relaxed">
                                Este campo ha sido manejado bajo sistema de{" "}
                                <strong>siembra directa</strong> por los últimos 12 años,
                                manteniendo una excelente cobertura de rastrojo y salud biológica
                                del suelo. Rotación constante Soja/Maíz/Trigo.
                            </p>
                        </div>
                        <div className="prose">
                            <h4 className="text-lg font-bold mb-3">Topografía</h4>
                            <p className="text-[#6a8176] text-sm leading-relaxed">
                                Pendiente suave (0.5% - 2%), ideal para mecanización extensiva
                                sin riesgos de erosión hídrica severa. Curvas de nivel ya
                                implementadas en el 100% del área mecanizable.
                            </p>
                        </div>
                        <div className="prose">
                            <h4 className="text-lg font-bold mb-3">Legalidad</h4>
                            <p className="text-[#6a8176] text-sm leading-relaxed">
                                Títulos de propiedad al día, georreferenciados y con Licencia
                                Ambiental vigente para la explotación agrícola actual. Sin
                                gravámenes ni ocupaciones.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
