import React from "react";

const UseCasesSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center py-12 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Discover the Use Cases</h2>
            <div className="flex flex-warp justify-center space-x-4">
                <div className="max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg m-4">
                    {/* <img src="" alt="" /> */}
                    <h3 className="text-2xl font-bold mb-2">Provable Gaming</h3>
                    <p className="mb-4">Web3 games frequently face centralization challenges... <a href="#" className="text-purple-50">Try the Pilot</a></p>
                </div>
                <div className="max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg m-4">
                    {/* <img src="" alt="" /> */}
                    <h3 className="text-2xl font-bold mb-2">Provable Gaming</h3>
                    <p className="mb-4">Web3 games frequently face centralization challenges... <a href="#" className="text-purple-50">Try the Pilot</a></p>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;