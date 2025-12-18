import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section 
                className="relative bg-cover bg-center text-white text-center py-32 md:py-48 px-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&h=900&fit=crop)',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-serif tracking-wide">
                        Spice & Saffron
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light text-white tracking-wide">
                        Indian & Malaysian Fusion Cuisine
                    </p>
                    <Link 
                        to="/menu" 
                        className="inline-block bg-transparent border-2 border-white text-white px-10 py-3 text-base font-normal hover:bg-white hover:text-[#2c2c2c] transition-all duration-300 tracking-wide no-underline"
                    >
                        View Menu
                    </Link>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white py-16 md:py-20 px-5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl mb-12 font-serif text-[#2c2c2c] tracking-wide">
                        Gallery
                    </h2>
                    <ImageSlider />
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-[#f5f1e8] py-16 md:py-20 px-5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-3xl md:text-4xl mb-12 font-serif text-[#2c2c2c] tracking-wide">
                        About Us
                    </h2>
                    <div className="bg-white shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=500&fit=crop"
                            alt="Restaurant Interior"
                            className="w-full md:w-1/2 h-80 object-cover shadow-md"
                        />
                        <div className="flex-1">
                            <p className="mb-6 leading-relaxed text-[#2c2c2c] text-base md:text-lg">
                                Spice & Saffron brings together the vibrant flavors of India and the aromatic spices of Malaysia. Our chefs blend traditional recipes with modern techniques to create a unique and unforgettable fusion dining experience.
                            </p>
                            <p className="mb-6 leading-relaxed text-[#2c2c2c] text-base md:text-lg">
                                Founded in 2015, we are dedicated to quality and authenticity. Every dish is crafted with care using fresh ingredients and authentic spices imported directly from their regions of origin.
                            </p>
                            <p className="text-sm text-[#666] italic">
                                <strong>Hours:</strong><br />
                                Tue-Sun: 12PM - 10PM | Closed Mondays
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
