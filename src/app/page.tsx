import { Footer } from "@/components/ui/footer";

import { PropertyCard } from "@/components/ui/property-card";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWkCG3Le9U0lGpATv68UkTVbyYScBh98xlgYLf4j92m2UpI1qCep9obHnnl906T-PzfUOHlziEujwe5ci3BERaDlIc_70ep2-1dcbKb7ijKb49ej8-72-8VxQv7SMd24Q08f6mEAk-mNdfDYld4cmQy9fQwUX5Asd9eUaQn4kdca1lm5MEf6CFFLdAy6H1mZBoOdJzOGWYKNMccQHH0CSNMxhUQD2LXypV996yFmLT0U6m0HEgu9uL8VW4bigb_Yokq_fYCngHBoA")',
              }}
            ></div>
          </div>
          <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/30">
              Oportunidades Únicas en el Corazón de América
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Terrenos, Casas y Campos Productivos
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
              Soluciones integrales para vivienda, inversión y producción agrícola
              en Paraguay.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/listings">
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl cursor-pointer">
                  Ver propiedades
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/40 rounded-xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer">
                  Contactar Asesor
                </button>
              </Link>
            </div>
          </div>
          {/* Floating Search Bar */}
          <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-30 px-6">
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-white/50 p-4 md:p-6 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-[#6a8176] tracking-wider px-1">
                    Tipo de Propiedad
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8176]">
                      home_work
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 bg-white border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                      <option>Terreno / Lote</option>
                      <option>Casa Residencial</option>
                      <option>Campo Agrícola</option>
                      <option>Departamento</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-[#6a8176] tracking-wider px-1">
                    Uso Destinado
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8176]">
                      psychology_alt
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 bg-white border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                      <option>Vivienda</option>
                      <option>Inversión</option>
                      <option>Producción</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-[#6a8176] tracking-wider px-1">
                    Zona / Ciudad
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8176]">
                      location_on
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 bg-white border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                      <option>Asunción &amp; Central</option>
                      <option>Chaco Paraguayo</option>
                      <option>Alto Paraná</option>
                      <option>Itapúa</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-[#6a8176] tracking-wider px-1">
                    Rango de Precio
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8176]">
                      payments
                    </span>
                    <select className="w-full pl-10 pr-4 py-3 bg-white border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                      <option>Cualquier precio</option>
                      <option>Hasta $50,000</option>
                      <option>$50k - $150k</option>
                      <option>Más de $150,000</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="w-full py-3.5 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg cursor-pointer">
                    <span className="material-symbols-outlined">search</span>
                    Buscar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-40 mb-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold mb-4">
                Encuentre su lugar ideal
              </h3>
              <p className="text-[#6a8176] leading-relaxed">
                Explore nuestras categorías especializadas. Desde el desarrollo
                urbano en Asunción hasta la potencia agropecuaria del Chaco.
              </p>
            </div>
            <Link
              className="text-primary font-bold flex items-center gap-1 group"
              href="/listings"
            >
              Ver todos los sectores
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2EhDwjUU3Q7k1r5f8YQ62YHzYZpWTJy-57KJMvsH6lx24xLP7WTzJTF0pSzWPjv1FCVUoDFxNf6v7uZfBsBqr7J7dm8CjF4ZcWUZE4IvY0UFjVChVEvz8Y3ifo6hyVfWI9X9zGnlPOo7A-IuG_3SCsmGwbcnafB8YxWbNbGRglmmnPsBeQIUvkNEDQZA8Xwn4OFxGq7l-hAIUSeXKu0tHAhKESa1xZyR_x8VNTycUWnu56v4BjETjV5xXXpBE56wU6akIPApjcvI")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 block">
                  Residencial
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Viviendas de Ensueño
                </h4>
                <p className="text-white/80 text-sm line-clamp-2 mb-4">
                  Casas y departamentos en las zonas más exclusivas y seguras
                  del país.
                </p>
                <Link href="/listings">
                  <button className="px-4 py-2 bg-white text-primary text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    Explorar
                  </button>
                </Link>
              </div>
            </div>
            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3GgZRiB6c0xgrk3VRFrdda7tlzikmZWzrLArPy8GBO3HqK2Xg1vDORpan9vicxVBCxh0b3ysGZDXIKmLoqc3p665N1n-N-pAEChcGcHAFY4l85lCZF7RLPTVp-EG3lUaKO6IykDgeV5cVukj2z_-3wX4ncG9_QUXlZgwAVhM7pQytZ3LMqUv-tNvbmE3CDV5UeGxx_UPvLQfF8FmlujGAzJd1R9SjLwdxPnQHqHKku0_TkwNLzpuPD12uccWzyVrb6rOlsQYXnTY")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 block">
                  Agro-Negocios
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Campos de Producción
                </h4>
                <p className="text-white/80 text-sm line-clamp-2 mb-4">
                  Tierras fértiles para ganadería y agricultura mecanizada con
                  alto rendimiento.
                </p>
                <Link href="/listings">
                  <button className="px-4 py-2 bg-white text-primary text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    Explorar
                  </button>
                </Link>
              </div>
            </div>
            <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0HWLNXS__QtqD6ox6pglSbiSrhA-iw8520n5pzoiguh-s1bmvWvzdACqcgzTdThypMnwNP21VVTHMC600aAQ9KY_qaQWk_OCNfQI9Przcn9Kzizf1TTEy411e6IqY-yYse96LNnUC9E43J2XyH2XNNYkSRXqSqdAObUWcymECE7GR1Gq0r9BUxBjLozp1eIfVTZ6l5mQQHF-YSopjHkRlpKl5_UMeoiYn-dbFvHlHVLEXVSbUI1DnmGalrjZ4MBbJhCXXI4UvQPQ")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 block">
                  Patrimonio
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Inversiones de Capital
                </h4>
                <p className="text-white/80 text-sm line-clamp-2 mb-4">
                  Oportunidades de preventa y terrenos estratégicos con alta
                  plusvalía.
                </p>
                <Link href="/listings">
                  <button className="px-4 py-2 bg-white text-primary text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    Explorar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="bg-[#f0f3f1] dark:bg-black/20 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4">
                Propiedades Destacadas
              </h2>
              <p className="text-[#6a8176]">
                Selección exclusiva de nuestro portafolio premium.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <PropertyCard
                id="1"
                title="Residencia Los Laureles"
                location="Asunción, Barrio Los Laureles"
                price="USD 245,000"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4yn_ePFRE8RqAhFkPSCNf2GxI-2SCVF0XCTxgZxBVbo5ukmDlyZaVhGaMnaaX2ixRNdILSjRI1nsazBMed2S9McJa80G9cC-scId-6BFG_BhJ-KLhMw8xljnYqOPClDV-3E9c3rinCLPBwqfhRq7syAANg8qI439GxylLScf7LiatBzBKysoXumPRlu5k-bsVRSRuxTauAT0cuTKhQerVwvVsBt5WKDdLOY54hZ6bip91EoC8-OUVttZEbqTgIVTZrEt5_3FXNk"
                tags={[
                  { text: "DESTACADO", colors: "bg-primary text-white" },
                  { text: "VIVIENDA", colors: "bg-accent-earth text-white" },
                ]}
                specs={{ beds: 4, baths: 3, area: "350 m²" }}
              />
              <PropertyCard
                id="2"
                title="Estancia El Dorado"
                location="Chaco, Boquerón"
                price="Consultar Precio"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Hbci2mZHkI1WhEJkcL2K798GR6tVIxmfuGcGaeBPap1LYHKq6L0tDUXgWCFQI_t4OzUHp6VG8ZlnEJ9Di76_EdFY3g85sQhRLmq0dcW0K5zsqDkk0ajxS4hdILIj1gmrsvw-S0D88cp0Xetpxh_2oSNbvTyH-g7tFoh71dkkGzj7FYfijpbx1jCN8Yrw1TVsWImdvmcYnY8kcFH1Hi4lHc6x_OnSMaJD-kuhwzIqF40v_i4JP_yQx1tAoDIQUR2nQ3IQxmk3-u8"
                tags={[
                  { text: "OPORTUNIDAD", colors: "bg-primary text-white" },
                  { text: "PRODUCCIÓN", colors: "bg-green-600 text-white" },
                ]}
                specs={{
                  area: "1,200 Ha",
                  custom: [
                    { icon: "water_drop", label: "Tajamares" },
                    { icon: "foundation", label: "Corral" },
                  ],
                }}
              />
              <PropertyCard
                id="3"
                title="Lotes en Club de Campo"
                location="Altos, Cordillera"
                price="USD 89,000"
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAug0G-v_aycSk5JthddPJ1RDJLHBXSEKBwS7N7NJDPmBzeTBqD_cS4Xk0KbHGI8fglKeyhckIgtIRZd-HSgs4czoOP6SPslY7fyaFukvwdNEmuzTVgmG5wqSG86E6gb-iJbOs7pGxBa18XbRkAu10UtW5esg0XnT6H7mzv9MtAHbFuVE-KkuJJvx3v4CQhSfE8yRYg0MXFLXNPgWQztyd8ExUPcUdq6u7ZQ21413FefWwVpuJzv2pCuY8r9F-kXsg3ddkfqfP3Nfk"
                tags={[
                  { text: "INVERSIÓN", colors: "bg-accent-earth text-white" },
                ]}
                specs={{
                  area: "800 m²",
                  custom: [
                    { icon: "security", label: "Privado" },
                    { icon: "deck", label: "Amenities" },
                  ],
                }}
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#dde3e1] dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold leading-tight">
                Por qué invertir en el mercado inmobiliario Paraguayo
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      trending_up
                    </span>
                  </div>
                  <h6 className="font-bold">Crecimiento Sostenido</h6>
                  <p className="text-sm text-[#6a8176]">
                    Uno de los PIB con mayor crecimiento en la región y
                    estabilidad macroeconómica.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      account_balance
                    </span>
                  </div>
                  <h6 className="font-bold">Baja Carga Impositiva</h6>
                  <p className="text-sm text-[#6a8176]">
                    Sistema tributario competitivo ideal para inversores locales
                    y extranjeros.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      diversity_3
                    </span>
                  </div>
                  <h6 className="font-bold">Seguridad Jurídica</h6>
                  <p className="text-sm text-[#6a8176]">
                    Acompañamiento legal completo en cada etapa de su
                    adquisición de tierras.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <h6 className="font-bold">Tasaciones Reales</h6>
                  <p className="text-sm text-[#6a8176]">
                    Valuaciones precisas basadas en datos actuales del mercado
                    real.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-earth/10 rounded-full blur-2xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-[#dde3e1]">
                <h4 className="text-2xl font-bold mb-6">
                  ¿Busca asesoramiento?
                </h4>
                <form className="space-y-4">
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f6f8f7] border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Nombre completo"
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full px-4 py-3 bg-[#f6f8f7] border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Email de contacto"
                      type="email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full px-4 py-3 bg-[#f6f8f7] border border-[#dde3e1] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Cuéntenos sobre su interés (Vivienda, Campo o Inversión)"
                      rows={3}
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:scale-[1.02] transition-transform cursor-pointer">
                    Solicitar Información
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        href="#"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>
    </>
  );
}
