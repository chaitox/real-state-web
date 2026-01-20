import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
    id: string;
    title: string;
    location: string;
    price: string;
    imageUrl: string;
    specs: {
        beds?: number;
        baths?: number;
        area: string; // e.g., "350 m²" or "1,200 Ha"
        custom?: { icon: string; label: string }[];
    };
    tags?: {
        text: string;
        colors: string; // Tailwind classes for bg and text
    }[];
}

export function PropertyCard({
    id,
    title,
    location,
    price,
    imageUrl,
    specs,
    tags,
}: PropertyCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-[#dde3e1]">
            <div className="relative h-64 overflow-hidden">
                <Image
                    alt={title}
                    src={imageUrl}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className={`${tag.colors} text-[10px] font-bold px-3 py-1 rounded-full`}
                        >
                            {tag.text}
                        </span>
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-primary font-bold text-lg">{price}</p>
                </div>
            </div>
            <div className="p-6">
                <Link href={`/properties/${id}`}>
                    <h5 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                        {title}
                    </h5>
                </Link>
                <div className="flex items-center gap-1 text-[#6a8176] text-sm mb-4">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {location}
                </div>
                <div className="flex justify-between border-t border-[#dde3e1] pt-4 text-[#6a8176] text-sm">
                    {specs.beds && (
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">bed</span>{" "}
                            {specs.beds} Hab
                        </div>
                    )}
                    {specs.baths && (
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">bathtub</span>{" "}
                            {specs.baths} Baños
                        </div>
                    )}
                    {specs.area && (
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">
                                square_foot
                            </span>{" "}
                            {specs.area}
                        </div>
                    )}
                    {specs.custom?.map((spec, i) => (
                        <div key={i} className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">
                                {spec.icon}
                            </span>{" "}
                            {spec.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
