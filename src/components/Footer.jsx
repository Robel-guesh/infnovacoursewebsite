import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12 mb-8">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-4 italic">INFNOVA Academy</h3>
                    <p className="text-gray-400 leading-relaxed italic">
                        Empowering learners worldwide with cutting-edge technology courses. Start your journey to success with expert-led training.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instructors</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-6">Support</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
                <p>© 2026 INFNOVA Technologies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
