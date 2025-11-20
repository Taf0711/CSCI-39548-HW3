import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-black/60 text-white text-center py-24 px-5">
                <h1 className="text-5xl text-white mb-5 font-extralight tracking-[4px]">
                    Spice & Saffron
                </h1>
                <p className="text-xl mb-7 font-light text-white/90">
                    Indian & Malaysian Fusion Cuisine
                </p>
                <Link to="/menu" className="btn">
                    View Menu
                </Link>
            </section>

            {/* Gallery */}
            <section className="card-lighter py-16 px-5 text-center max-w-5xl mx-auto">
                <h2 className="text-3xl mb-7 font-light text-[#222] tracking-[2px]">
                    Gallery
                </h2>
                <ImageSlider />
            </section>

            {/* About */}
            <section id="about" className="card-light py-16 px-5">
                <h2 className="text-center text-3xl mb-7 font-light text-[#222] tracking-[2px]">
                    About Us
                </h2>
                <div className="card-light max-w-5xl mx-auto p-7">
                    <img
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=400&fit=crop"
                        alt="Restaurant"
                        className="w-full md:w-72 md:float-left md:mr-7 mb-5 opacity-85"
                    />
                    <div>
                        <p className="mb-4 leading-relaxed text-[#333] font-light">
                            Spice & Saffron brings together the best of Indian and Malaysian
                            cuisine. Founded in 2015, we create unique fusion dishes using
                            authentic spices and fresh ingredients.
                        </p>
                        <p className="mb-4 leading-relaxed text-[#333] font-light">
                            Our chefs blend traditional recipes with modern techniques to
                            deliver an unforgettable dining experience.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
