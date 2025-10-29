import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DestinationCard from "./DestinationCard";

const DestinationCarousel = ({ destinations, selectedId, onSelect }) => {
    const scrollRef = useRef(null);
    const selectedDestination = destinations.find((d) => d.id === selectedId);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 250;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    key={selectedDestination?.id}
                    src={selectedDestination?.bgImage}
                    alt="background"
                    className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative h-full flex items-center px-20">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth w-full"
                >
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            isActive={destination.id === selectedId}
                            onClick={() => onSelect(destination.id)}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scroll("left")}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-orange-500 hover:text-white transition-all hover:scale-110"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={28} strokeWidth={2.5} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl hover:bg-orange-500 hover:text-white transition-all hover:scale-110"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={28} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default DestinationCarousel;
