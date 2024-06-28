import React from "react";

const MainSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to ETHPayMaster</h1>
            <p className="mb-8">Sponsor Every X!</p>
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">Get Started</button>
                <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">Demo</button>
            </div>
        </section>
    );
};

export default MainSection;