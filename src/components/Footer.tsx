const Footer = () => {
    return (
        <footer className="bg-black/90 text-white/80 py-10 px-5 text-center">
            <div className="footer-content max-w-7xl mx-auto mb-7 flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12">
                <div className="inline-block mx-0 md:mx-12 align-top">
                    <h3 className="text-white mb-2.5 font-light tracking-wide">Hours</h3>
                    <p className="font-light">Tue-Sun: 12PM - 10PM</p>
                    <p className="font-light">Closed Mondays</p>
                </div>

                <div className="inline-block mx-0 md:mx-12 align-top">
                    <h3 className="text-white mb-2.5 font-light tracking-wide">Follow Us</h3>
                    <a href="#" className="text-white/70 no-underline block mt-2 font-light hover:text-white">
                        Facebook
                    </a>
                    <a href="#" className="text-white/70 no-underline block mt-2 font-light hover:text-white">
                        Instagram
                    </a>
                    <a href="#" className="text-white/70 no-underline block mt-2 font-light hover:text-white">
                        Twitter
                    </a>
                </div>
            </div>

            <p className="text-white/60 font-light">&copy; 2025 Spice & Saffron</p>
        </footer>
    );
};

export default Footer;
