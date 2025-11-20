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
        <section className="py-16 px-5 max-w-7xl mx-auto">
            <h1 className="text-center text-4xl mb-10 font-light text-[#222] tracking-[3px]">
                Contact Us
            </h1>

            <div className="mb-10 flex flex-col md:flex-row gap-6">
                {/* Contact Form */}
                <div className="card-light p-7 flex-1">
                    <h2 className="text-2xl text-black mb-5 font-light tracking-[2px]">
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
                            className="w-full p-2.5 mb-4 border border-black/20 font-light text-sm bg-white/80 focus:border-black/50 outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-2.5 mb-4 border border-black/20 font-light text-sm bg-white/80 focus:border-black/50 outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full p-2.5 mb-4 border border-black/20 font-light text-sm bg-white/80 focus:border-black/50 outline-none"
                        />
                        <button type="submit" className="btn">
                            Send
                        </button>
                    </form>

                    {showMessage && (
                        <div className="bg-black/10 border border-black/30 p-4 text-black mt-4">
                            Thank you, {formData.name}! We'll get back to you soon.
                        </div>
                    )}
                </div>

                {/* Contact Info */}
                <div className="card-light p-7 flex-1">
                    <h2 className="text-2xl text-black mb-5 font-light tracking-[2px]">
                        Visit Us
                    </h2>
                    <p className="mb-4 leading-relaxed text-[#333] font-light">
                        <strong>Address:</strong><br />
                        456 Culinary Blvd<br />
                        New York, NY 10022
                    </p>
                    <p className="mb-4 leading-relaxed text-[#333] font-light">
                        <strong>Phone:</strong> (212) 555-7890
                    </p>
                    <p className="mb-4 leading-relaxed text-[#333] font-light">
                        <strong>Email:</strong> info@spiceandsaffron.com
                    </p>
                    <p className="mb-4 leading-relaxed text-[#333] font-light">
                        <strong>Hours:</strong><br />
                        Tue-Sun: 12PM - 10PM<br />
                        Closed Mondays
                    </p>
                </div>
            </div>

            {/* Map */}
            <div className="mt-10 opacity-90">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.178275435968!2d-73.96809668459359!3d40.76243547932718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebe8836889%3A0xa007c44e7c4b6e12!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1633024900000!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Restaurant Location"
                />
            </div>
        </section>
    );
};

export default Contact;
