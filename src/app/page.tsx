import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <section className="text-center my-12">
          <h1 className="text-4xl font-bold mb-4">Experience Gasless Transactions with Account Abstraction</h1>
          <p className="text-xl mb-8">
            A revolutionary ERC-4337-based tool. Seamlessly onboard users with a user-friendly interface, simplified gas fees, and enhanced security.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700">Get Started</button>
            <button className="bg-white text-purple-600 py-2 px-6 rounded border border-purple-600 hover:bg-gray-100">Demo</button>
          </div>
        </section>
        
        <section className='my-12'>
          <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 text-2xl font-bold mb-4>Q1 2024</h3>
              <p>Release initial version with core features.</p>
            </div>

          </div>

        </section>
      </main>
      <footer className="bg-gray-900 text-white text-center p-4">
        <div className="mb-2">Contact Us: info@example.com</div>
        <div className="mb-2">Join our community: <a href="https://discord.com" className="hover:text-gray-400">Discord</a></div>
        <div>&copy; 2024 AAStar. All rights reserved.</div>
      </footer>
    </div>
  );
}
