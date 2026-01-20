import { Footer } from "@/components/ui/footer";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <main className="max-w-[1200px] mx-auto px-4 py-12">
                {/* Hero Section: Who We Are */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <span className="text-accent-earth font-bold tracking-widest text-xs uppercase">
                            Est. 2008
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
                            Arraigados en el Suelo Paraguayo, <br />
                            Construyendo Tu Futuro
                        </h2>
                        <p className="text-lg text-[#121615]/70 leading-relaxed">
                            Somos un equipo dedicado de profesionales inmobiliarios
                            especializados en el paisaje único de Paraguay. Desde las
                            bulliciosas áreas residenciales de Asunción hasta las fértiles
                            tierras agrícolas del Chaco, cerramos la brecha entre la inversión
                            global y la realidad local.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer">
                                Ver Portafolio{" "}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] relative rounded-2xl shadow-2xl overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7io0Qk8tMd8c6_n-QGD5Ao7EbVcgh4GVbZO8h45-DUOMPbQ-bLPmgc9FF3yyZVswOLQmE8AZY9hhg2J1EzCcZCdh08cB54EHmzwc1Phq94a6xEjv8ADgv-gRIaxxlrZ7J4p2vUvvECceoUxTnwfS3TgfoUMJicy-BJv4I5P7EkN6ua_YxI4V5nLCIUUdWdYlAGkMdYFX04Ekjwlera-GQzIeQRyCsBCmn7CauviMFL_T3TCx1cT5rA1_7bUMehozzYRtwP46VBZ8"
                                alt="Stunning aerial view of lush Paraguayan agricultural landscape with geometric fields"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl shadow-xl border border-[#dde3e1] hidden md:block">
                            <p className="text-primary text-4xl font-black">15+</p>
                            <p className="text-sm font-bold opacity-60">
                                Años de Experiencia Local
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-white p-8 rounded-2xl border border-[#dde3e1] flex flex-col gap-1">
                        <p className="text-sm font-semibold opacity-60">
                            Propiedades Gestionadas
                        </p>
                        <p className="text-3xl font-black">500+</p>
                        <div className="flex items-center gap-1 text-primary text-sm font-bold mt-2">
                            <span className="material-symbols-outlined text-sm">
                                trending_up
                            </span>{" "}
                            +12% Anual
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-[#dde3e1] flex flex-col gap-1">
                        <p className="text-sm font-semibold opacity-60">
                            Satisfacción del Cliente
                        </p>
                        <p className="text-3xl font-black">98%</p>
                        <div className="flex items-center gap-1 text-primary text-sm font-bold mt-2">
                            <span className="material-symbols-outlined text-sm">verified</span>{" "}
                            Reseñas Certificadas
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-[#dde3e1] flex flex-col gap-1">
                        <p className="text-sm font-semibold opacity-60">Activos Agrícolas</p>
                        <p className="text-3xl font-black">45k ha</p>
                        <div className="flex items-center gap-1 text-primary text-sm font-bold mt-2">
                            <span className="material-symbols-outlined text-sm">
                                landslide
                            </span>{" "}
                            Tierras Bajo Gestión
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black mb-4">Conoce a Nuestros Expertos</h2>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg">
                            Nuestro equipo combina estándares internacionales con un profundo
                            conocimiento local para brindarte el mejor asesoramiento.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="group">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200 relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChy_86uFthiz8b4PlGGvLYvs05qdJ7bqPx59pKTDXnrDdw4VlNWFFKyy9lxWPnH6JkrJdG_zNDuoJRk5ptcuyZkmeYSYlHOu6b2ZpAUgTi_x3cyvS_bJGv_UvDHPJiiOEHf2GdBOBeBan_GVnM0zTOdf_RH5Rj9b253Wa7RYE6JVHzyfDpNSxSYHve26WSTa6un9n8tseJS-9ZcwjTRWvg_ey9e803K2QcNViZ71RHqufU571WYn8PxyeB5KKdhacJlxooGCwVM2c"
                                    alt="Carlos Mendez"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="font-black text-xl">Carlos Mendez</h4>
                            <p className="text-primary font-bold text-sm uppercase">
                                Asesor Agrícola Senior
                            </p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="group">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200 relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIf5gKo_mFgdfts7LhF_48RzufoMhwddGjFFjoXbifeAQ7gjBHCsD6NTKE9LSDFNjHIsSdlSjPCtiWqbcR8GMMXtcgTOBi3z0aiSJnbyUPYMdIYHVVAeWt9tP3S3S7IEm7cFRrhDliWV1HXgBBWza9L6VkX9AMIv0WXLOSvjJ7JlNHV3cMgQaF5IhLgrotld2pgM-Ifxv28QNY8-kVRM2_SC6ZFHixIjpjsDIR1v0bcAQCHvk2cXvthOXiar8JgA9lW1b7JZPZBJs"
                                    alt="Sofia Ortiz"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="font-black text-xl">Sofia Ortiz</h4>
                            <p className="text-primary font-bold text-sm uppercase">
                                Líder de Inversiones
                            </p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="group">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200 relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9FjkbEp2XvbKWdPXqD41ZG5jZPhiBuTbBN3Cy856eAvp7MdOiUugjpk2GyEx0AfREHOPjLlH-uoMsCOzq0QSlclkSZQDZ59BNGVK-9htUMb4GWeUjRAmqllKCVNBjuE9g09IYohA_cIu0tTnjigC5iVICekJPQbENRa3y_cCBWZhkdEGSM8dsPoL-S3JFzVVREgSMptQ7AbZtaVyRI8r8MHtxqxXVpvA_dR9JuKzAummgiycynGNWfC6M1TVplkbWAZvcG51kBsM"
                                    alt="Elena Ruiz"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="font-black text-xl">Elena Ruiz</h4>
                            <p className="text-primary font-bold text-sm uppercase">
                                Relaciones con Clientes
                            </p>
                        </div>
                        {/* Team Member 4 */}
                        <div className="group">
                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-200 relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1FGcjKz-_2vi2Py_KQ3l-YC2ULJCnp6OnUxA-G4II0NDXqez8MbL88NqnE2eXdFSbzH7tgtDTlmOZaYergrQ8sgNov5FnYrI3rCLvaZaUqQsRW7UlH07ZPspNdmvJ6iBwwSdfkrM-L1muUcakQ10H0BsCjeNHm9X3c2bmDHL3kxKmYgel0wdMCVo8iOslWHNCptivvvWvV34dGHCieuJanoOVkqVd7fFo6pcKoM40vM1nurJRL4Tn0eNOAJsTq-vC-w1_5H5RHIA"
                                    alt="Marcos Duarte"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="font-black text-xl">Marcos Duarte</h4>
                            <p className="text-primary font-bold text-sm uppercase">
                                Analista de Mercado
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-24 bg-primary/5 rounded-[2rem] p-12 lg:p-20 overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-12 text-center">
                            Lo Que Dicen Nuestros Clientes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
                                <div className="flex text-primary">
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                </div>
                                <p className="italic text-lg">
                                    "La transición para invertir en la agricultura paraguaya fue
                                    fluida gracias al equipo. Su conocimiento local de la región del
                                    Chaco es inigualable."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-gray-300 relative overflow-hidden">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCtB__-ft0sB96jjej34q5dHBwqLVbBRKYiE8Z9_THo1ZlpTmSBumczS2EybiCcd0v-FXwcQBU3Ko2EFP_lfcj3-es6ya-dUvhEh_ClzHzv4CVYz4LASkuCYesVlzZX4dghoDqiER45k4wFrVJEFnSkBkF2Eir2J4aewm_JiI9jhYWuJuOhJsjfGc6JgvdT4w01uB3IWEco78Iyz3kAzwyPxPTI4rfqilMXk4ru0M17yVXA1FRh8-LrK9sO4yWste-EXSFCuALHXU"
                                            alt="Portrait of investor Michael Steiner"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">Michael Steiner</p>
                                        <p className="text-xs opacity-60">Inversor Internacional</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
                                <div className="flex text-primary">
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                    <span className="material-symbols-outlined">star</span>
                                </div>
                                <p className="italic text-lg">
                                    "Encontrar la casa de nuestros sueños en Asunción se sintió
                                    personal. Escucharon cada detalle y encontraron una propiedad
                                    que ni siquiera estaba listada."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-gray-300 relative overflow-hidden">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3vuJpsmEsal5wlibcj0IPN6qHooijRZA6AnrQ_8mhsZOi5iyK-trW_eUA3QDSB47myfOZqfDsXTViEr5XgjzVg-ok2mTLZxC750x6r84XkwfiDC3Q0R-fIQoTdjrbcBj6Erj2LsAogjKw8AH2ZpVjAtfAeMlaDzzmb-lnPLEKtIJcoxeKzQrv6wbPVJ7oqTH4eBx_mwyJH5KWvLf4jJ1l4PHUfSc0H6qydB6qDchJvpdhUMaHci1aBwxBlzJtunw0Q-ATlV6lUKw"
                                            alt="Portrait of home buyer Lucia Benitez"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">Lucia Benitez</p>
                                        <p className="text-xs opacity-60">Cliente Residencial</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24" id="contact">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-black mb-4">Ponte en Contacto</h2>
                            <p className="opacity-70 text-lg">
                                ¿Tienes preguntas sobre propiedad de tierras o proyectos
                                residenciales? Nuestro equipo está listo para asistirte en
                                Español, Inglés o Alemán.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <a
                                className="flex items-center gap-6 p-6 rounded-2xl border border-[#dde3e1] hover:border-primary transition-all group"
                                href="https://wa.me/#"
                            >
                                <div className="size-14 bg-primary text-white flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">
                                        chat_bubble
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase opacity-60">
                                        WhatsApp &amp; Telegram
                                    </p>
                                    <p className="text-xl font-bold">+595 981 123 456</p>
                                </div>
                            </a>
                            <a
                                className="flex items-center gap-6 p-6 rounded-2xl border border-[#dde3e1] hover:border-primary transition-all group"
                                href="mailto:contact@paraguayrealestate.com"
                            >
                                <div className="size-14 bg-accent-earth text-white flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase opacity-60">
                                        Consultas por Email
                                    </p>
                                    <p className="text-xl font-bold">hello@paraguayre.com</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-6 p-6 rounded-2xl border border-[#dde3e1] group">
                                <div className="size-14 bg-[#121615] text-white flex items-center justify-center rounded-xl">
                                    <span className="material-symbols-outlined text-2xl">
                                        location_on
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase opacity-60">
                                        Oficina Central
                                    </p>
                                    <p className="text-xl font-bold">
                                        Av. Aviadores del Chaco 2050,
                                        <br />
                                        Asunción, Paraguay
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-3xl border border-[#dde3e1] shadow-xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-70">Nombre</label>
                                    <input
                                        className="w-full bg-background-light border-transparent rounded-xl focus:border-primary focus:ring-0 px-4 py-3 outline-none"
                                        placeholder="Juan"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-70">Apellido</label>
                                    <input
                                        className="w-full bg-background-light border-transparent rounded-xl focus:border-primary focus:ring-0 px-4 py-3 outline-none"
                                        placeholder="Pérez"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold opacity-70">
                                    Correo Electrónico
                                </label>
                                <input
                                    className="w-full bg-background-light border-transparent rounded-xl focus:border-primary focus:ring-0 px-4 py-3 outline-none"
                                    placeholder="juan@ejemplo.com"
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold opacity-70">
                                    Tipo de Interés
                                </label>
                                <select className="w-full bg-background-light border-transparent rounded-xl focus:border-primary focus:ring-0 px-4 py-3 outline-none">
                                    <option>Tierra Agrícola</option>
                                    <option>Inversión Residencial</option>
                                    <option>Vivienda Personal</option>
                                    <option>Consulta General</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold opacity-70">Mensaje</label>
                                <textarea
                                    className="w-full bg-background-light border-transparent rounded-xl focus:border-primary focus:ring-0 px-4 py-3 outline-none"
                                    placeholder="¿Cómo podemos ayudarte?"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                                type="submit"
                            >
                                Enviar Mensaje Seguro
                            </button>
                        </form>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-12">
                    <div className="rounded-[2rem] overflow-hidden h-[450px] relative border border-[#dde3e1] shadow-2xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoKWyeBsq8u8EBKbiTW4u1vm2f8zhS8bVZImXRtbxUkmTSsgUZ3GcnGuZeXjVlII4Y-KyDsKqtd-CGfWtSsAOVVbPGeg8WnhWq2bD1bECJ0n69jVoa0ruyI4C0e_iObtKTJyYK_PjfVNoV6SLM9QChXp1EIgMxHZf7pIKxnyZLu07HJc5-4BaX7_2RI92fhTlXb0uu7edrD_AJVcVPjfO5jrD_4QkPpzuZrS8tQ-n5ckyMA_7N1ohpuFr7RzcRVXk59U73nEMDO8"
                            alt="Modern topographic map of Asunción, Paraguay showing office location"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
                                <span className="material-symbols-outlined text-primary text-3xl">
                                    location_on
                                </span>
                                <span className="font-bold">Nuestra Oficina en Asunción</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {/* Floating Action Button */}
            <a
                className="fixed bottom-8 right-8 size-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 cursor-pointer"
                href="https://wa.me/#"
            >
                <svg
                    className="size-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>

        </>
    );
}
