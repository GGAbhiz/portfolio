import React from 'react';
import { Mail, MessageCircle, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-black text-white px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-400">Ready to Scale?</h2>
                <p className="text-xl text-gray-400 mb-12">
                    I'm currently available for freelance projects and consulting. Let's discuss your growth targets.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a href="mailto:contact@example.com" className="group flex flex-col items-center bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500 transition-all w-full md:w-1/3">
                        <Mail className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">Email</span>
                    </a>
                    <a href="https://wa.me/123" className="group flex flex-col items-center bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#25D366] transition-all w-full md:w-1/3">
                        <MessageCircle className="w-8 h-8 text-[#25D366] mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">WhatsApp</span>
                    </a>
                    <a href="#" className="group flex flex-col items-center bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#0077b5] transition-all w-full md:w-1/3">
                        <Linkedin className="w-8 h-8 text-[#0077b5] mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">LinkedIn</span>
                    </a>
                </div>

                <form className="mt-16 text-left bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
