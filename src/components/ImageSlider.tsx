import { useState, useEffect } from 'react';
import { galleryImages } from '../data/menuData';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % galleryImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const changeSlide = (direction: number) => {
        setCurrentSlide(prev => {
            const newSlide = prev + direction;
            if (newSlide >= galleryImages.length) return 0;
            if (newSlide < 0) return galleryImages.length - 1;
            return newSlide;
        });
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative">
            {/* Slides */}
            <div className="relative max-w-full">
                {galleryImages.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-[500px] md:h-[500px] object-cover opacity-85"
                        />
                    </div>
                ))}
            </div>

            {/* Previous/Next Buttons */}
            <button
                onClick={() => changeSlide(-1)}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/50 text-white border border-white/30 px-4 py-3.5 cursor-pointer text-xl hover:bg-black/80"
            >
                ❮
            </button>
            <button
                onClick={() => changeSlide(1)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/50 text-white border border-white/30 px-4 py-3.5 cursor-pointer text-xl hover:bg-black/80"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="text-center mt-4">
                {galleryImages.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`inline-block w-2.5 h-2.5 mx-1.5 cursor-pointer ${index === currentSlide ? 'bg-black/80' : 'bg-black/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
