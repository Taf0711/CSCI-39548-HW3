import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowMessage(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    };

    return (
        <div className="bg-white min-h-screen">
            <section className="py-16 px-5 max-w-7xl mx-auto">
                <h1 className="text-center text-4xl md:text-5xl mb-12 font-serif text-[#2c2c2c] tracking-wide">
                    Contact Us
                </h1>

                <div className="mb-12 flex flex-col md:flex-row gap-8">
                    {/* Contact Form */}
                    <div className="bg-[#f5f1e8] p-8 flex-1 shadow-md">
                        <h2 className="text-2xl md:text-3xl text-[#2c2c2c] mb-6 font-serif tracking-wide">
                            Send a Message
                        </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-3 mb-4 border border-gray-300 text-sm bg-white focus:border-[#b8956a] outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-3 mb-4 border border-gray-300 text-sm bg-white focus:border-[#b8956a] outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-3 mb-4 border border-gray-300 text-sm bg-white focus:border-[#b8956a] outline-none resize-none"
                        />
                        <button 
                            type="submit" 
                            className="bg-[#a0442c] text-white px-8 py-3 text-sm font-normal hover:bg-[#8a3a24] transition-colors w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>

                    {showMessage && (
                        <div className="bg-green-100 border border-green-400 p-4 text-green-800 mt-4 rounded">
                            Thank you! We'll get back to you soon.
                        </div>
                    )}
                </div>

                {/* Contact Info */}
                <div className="bg-[#f5f1e8] p-8 flex-1 shadow-md">
                    <h2 className="text-2xl md:text-3xl text-[#2c2c2c] mb-6 font-serif tracking-wide">
                        Visit Us
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-[#2c2c2c] mb-1">Address</h3>
                            <p className="text-[#666]">
                                456 Culinary Blvd<br />
                                New York, NY 10022
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#2c2c2c] mb-1">Phone</h3>
                            <p className="text-[#666]">(212) 555-7890</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#2c2c2c] mb-1">Email</h3>
                            <p className="text-[#666]">info@spiceandsaffron.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#2c2c2c] mb-1">Hours</h3>
                            <p className="text-[#666]">
                                Tue-Sun: 12PM - 10PM<br />
                                <span className="text-sm italic">Closed Mondays</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="mt-12 shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.178275435968!2d-73.96809668459359!3d40.76243547932718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebe8836889%3A0xa007c44e7c4b6e12!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1633024900000!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    className="md:h-[500px]"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Restaurant Location"
                />
            </div>
        </section>
        </div>
    );
};

export default Contact;
