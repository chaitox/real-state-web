import { Footer } from "@/components/ui/footer";

export default function PublishPage() {
    return (
        <>
            <main className="flex-1 flex justify-center py-12 px-4 md:px-10">
                <div className="w-full max-w-[1000px] flex flex-col gap-8">
                    {/* Page Heading */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest">
                                Nueva Publicación
                            </span>
                            <h1 className="text-4xl font-black tracking-tight leading-none">
                                Publica tu Propiedad
                            </h1>
                            <p className="text-[#6a8176] text-base max-w-md">
                                Publica tierras residenciales, de inversión o agrícolas en las
                                mejores ubicaciones de Paraguay.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 border border-[#dde3e1] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">save</span>{" "}
                                Guardar Borrador
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar Module */}
                    <div className="bg-white p-6 rounded-xl border border-[#dde3e1] shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-primary flex items-center gap-2 uppercase tracking-tight">
                                Paso 1 de 5: Detalles Básicos
                            </span>
                            <span className="text-sm font-bold">20%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#dde3e1] rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: "20%" }}></div>
                        </div>
                    </div>

                    {/* Main Form Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Form Fields */}
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {/* 1. Property Type Selector */}
                            <div className="bg-white p-8 rounded-xl border border-[#dde3e1] shadow-sm">
                                <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-accent"></span>
                                    ¿Qué tipo de propiedad publicas?
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <label className="relative group cursor-pointer">
                                        <input
                                            defaultChecked
                                            className="peer sr-only"
                                            name="property_type"
                                            type="radio"
                                        />
                                        <div className="h-full border-2 border-[#f1f4f2] rounded-xl p-5 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center text-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:text-primary transition-colors">
                                                home_work
                                            </span>
                                            <span className="font-bold text-sm">Residencial</span>
                                            <span className="text-xs text-[#6a8176]">
                                                Casas, Departamentos, Condominios
                                            </span>
                                        </div>
                                    </label>
                                    <label className="relative group cursor-pointer">
                                        <input
                                            className="peer sr-only"
                                            name="property_type"
                                            type="radio"
                                        />
                                        <div className="h-full border-2 border-[#f1f4f2] rounded-xl p-5 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center text-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:text-primary transition-colors">
                                                agriculture
                                            </span>
                                            <span className="font-bold text-sm">Agrícola</span>
                                            <span className="text-xs text-[#6a8176]">
                                                Granjas, Ranchos, Tierras Fértiles
                                            </span>
                                        </div>
                                    </label>
                                    <label className="relative group cursor-pointer">
                                        <input
                                            className="peer sr-only"
                                            name="property_type"
                                            type="radio"
                                        />
                                        <div className="h-full border-2 border-[#f1f4f2] rounded-xl p-5 peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex flex-col items-center text-center gap-3">
                                            <span className="material-symbols-outlined text-4xl text-primary/40 group-hover:text-primary transition-colors">
                                                trending_up
                                            </span>
                                            <span className="font-bold text-sm">Inversión</span>
                                            <span className="text-xs text-[#6a8176]">
                                                Comercial, Desarrollo
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* 2. Location & Details */}
                            <div className="bg-white p-8 rounded-xl border border-[#dde3e1] shadow-sm">
                                <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-accent"></span>
                                    Ubicación &amp; Detalles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#121615]">
                                            Departamento
                                        </label>
                                        <select className="w-full bg-[#f6f8f7] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none">
                                            <option>Asunción</option>
                                            <option>Central</option>
                                            <option>Alto Paraná</option>
                                            <option>Itapúa</option>
                                            <option>Chaco (Boquerón)</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#121615]">
                                            Ciudad / Distrito
                                        </label>
                                        <input
                                            className="w-full bg-[#f6f8f7] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                                            placeholder="ej. San Bernardino"
                                            type="text"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#dde3e1]">
                                            <img
                                                className="w-full h-full object-cover"
                                                alt="Map of Paraguay highlighting the capital Asunción"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn0-fdximysp7RXtL6OrVh4PIl94bY-puWuaIrCSu4xZS5m2uEyYhFtar4JR6SuCfmaM8atUXnAL-7B2kRFnKnzDelyXpXY8CrVrzX9rrCWqn9Pm6hpEruCwbt7uISBqi6VHpPFCVKKS-vexQw_8gzTYTSjUTQdQqFfHOp4s5prsGmdr-MQ6LtY7kPHUY9iwm2jw1WfM8lHpfFAxtMgOgPlgWCkc4Rx6wamkfuM4iMAtca9zilOWRO1FnEydfmVasoNbYuSg9JKrA"
                                            />
                                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                                <div className="bg-white p-3 rounded-full shadow-xl animate-pulse">
                                                    <span className="material-symbols-outlined text-primary text-3xl">
                                                        location_on
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                                Click para fijar ubicación
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Size and Price */}
                            <div className="bg-white p-8 rounded-xl border border-[#dde3e1] shadow-sm">
                                <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-accent"></span>
                                    Tamaño &amp; Valoración
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#121615]">
                                            Tamaño (m² o Hectáreas)
                                        </label>
                                        <div className="flex">
                                            <input
                                                className="flex-1 bg-[#f6f8f7] border-none rounded-l-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                                placeholder="0.00"
                                                type="number"
                                            />
                                            <select className="bg-primary text-white border-none rounded-r-lg px-4 py-3 text-xs font-bold uppercase outline-none">
                                                <option>Hectáreas</option>
                                                <option>m²</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#121615]">
                                            Precio Total
                                        </label>
                                        <div className="flex">
                                            <select className="bg-[#f1f4f2] border-none rounded-l-lg px-4 py-3 text-xs font-bold outline-none">
                                                <option>USD</option>
                                                <option>PYG</option>
                                            </select>
                                            <input
                                                className="flex-1 bg-[#f6f8f7] border-none rounded-r-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                                placeholder="Ingrese monto"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Photo Upload Area */}
                            <div className="bg-white p-8 rounded-xl border-2 border-dashed border-[#dde3e1] text-center hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-5xl text-primary/30 mb-4">
                                    add_a_photo
                                </span>
                                <h3 className="text-lg font-bold mb-1">
                                    Agrega fotos de tu propiedad
                                </h3>
                                <p className="text-sm text-[#6a8176] mb-6">
                                    Las fotos de alta calidad atraen 3x más interés. Arrastra y
                                    suelta o busca archivos.
                                </p>
                                <button className="bg-[#f1f4f2] px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#dde3e1] transition-colors cursor-pointer">
                                    Seleccionar Archivos
                                </button>
                                <div className="mt-8 grid grid-cols-4 gap-4 opacity-30">
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                    <div className="aspect-square bg-gray-100 rounded-lg"></div>
                                </div>
                            </div>

                            {/* Form Navigation Footer */}
                            <div className="flex items-center justify-between pt-6 border-t border-[#dde3e1]">
                                <button className="text-sm font-bold text-[#6a8176] hover:text-[#121615] flex items-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">
                                        arrow_back
                                    </span>{" "}
                                    Atrás
                                </button>
                                <button className="bg-primary text-white px-10 py-4 rounded-lg font-black tracking-tight shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                                    Continuar a Multimedia
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Sidebar / Help */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {/* Tips Card */}
                            <div className="bg-primary text-white p-8 rounded-xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                                <span className="material-symbols-outlined text-3xl mb-4">
                                    lightbulb
                                </span>
                                <h3 className="text-xl font-bold mb-4 tracking-tight">
                                    Consejos para una gran publicación
                                </h3>
                                <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-white text-base">
                                            verified
                                        </span>
                                        <span>
                                            Menciona acceso a agua y calidad del suelo para tierras
                                            agrícolas.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-white text-base">
                                            verified
                                        </span>
                                        <span>
                                            Incluye límites claros en las fotos de tu propiedad.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-white text-base">
                                            verified
                                        </span>
                                        <span>
                                            La transparencia en el precio lleva a cierres más rápidos.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Support Card */}
                            <div className="bg-white p-8 rounded-xl border border-[#dde3e1] shadow-sm">
                                <h3 className="text-lg font-bold mb-2">¿Necesitas ayuda?</h3>
                                <p className="text-sm text-[#6a8176] mb-6 leading-relaxed">
                                    Nuestros especialistas pueden ayudarte a valorar tu tierra y
                                    preparar documentación profesional.
                                </p>
                                <a
                                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
                                    href="#"
                                >
                                    <svg
                                        className="size-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.031 6.172c-2.335 0-4.241 1.906-4.241 4.241 0 2.335 1.906 4.241 4.241 4.241s4.241-1.906 4.241-4.241c0-2.335-1.906-4.241-4.241-4.241zm0 10.482c-3.444 0-6.241-2.797-6.241-6.241s2.797-6.241 6.241-6.241 6.241 2.797 6.241 6.241-2.797 6.241-6.241 6.241zm0-16.654c-5.515 0-10 4.485-10 10 0 1.767.462 3.424 1.267 4.864l-1.267 4.136 4.279-1.238c1.391.734 2.972 1.238 4.721 1.238 5.515 0 10-4.485 10-10s-4.485-10-10-10z"></path>
                                    </svg>
                                    Soporte WhatsApp
                                </a>
                            </div>

                            {/* Preview Mockup */}
                            <div className="bg-[#f1f4f2] p-4 rounded-xl border border-[#dde3e1]">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#6a8176] mb-3 px-1">
                                    Vista Previa en Vivo
                                </p>
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#dde3e1]">
                                    <div className="aspect-video bg-gray-200 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gray-400">
                                            landscape
                                        </span>
                                    </div>
                                    <div className="p-3">
                                        <div className="h-3 w-3/4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
