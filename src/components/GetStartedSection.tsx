import React from "react";

const GetStartedSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center py-12 bg-white text-gray-900 text-center">
            <h2 className="text-3xl font-bold mb-8">Get Started with SDK</h2>
            <p className="mb-8">Begin your transformative development journey with ETHPaymaster</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">ETHPayMaster</button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Go to Demo 11111</button>
            </div>
        </section>
    );
};

export default GetStartedSection;