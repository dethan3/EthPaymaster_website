import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-gray-900 text-white text-center">
            <div className="flex flex-col items-center">
                <span>&copy; 2024 by AAStar. All rights reserved.</span>
                <div>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;