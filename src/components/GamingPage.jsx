import React from "react";
import RainGrid from "./RainGrid";

const GamingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 to-blue-800 shadow-lg">
        <div className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold neon-text tracking-wider">
            Cyber Rain
          </h1>
          <nav className="space-x-6">
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition transform hover:scale-110"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition transform hover:scale-110"
            >
              Play
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition transform hover:scale-110"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition transform hover:scale-110"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow container mx-auto px-6 py-12 space-y-12">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col space-y-6 w-full lg:w-1/3">
            {/* Bonus Items */}
            <div className="glass-card p-6 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">
                Bonus Items
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  🌟 <span className="font-bold">Star Drop:</span> Temporarily
                  slows down the rain.
                </li>
                <li>
                  ⚡ <span className="font-bold">Lightning Boost:</span> Double
                  your score for 10 seconds.
                </li>
                <li>
                  🛡️ <span className="font-bold">Shield:</span> Protect yourself
                  from one collision.
                </li>
              </ul>
            </div>

            {/* Mini Leaderboard */}
            <div className="glass-card p-6 rounded-xl shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">
                Leaderboard
              </h2>
              <ul className="space-y-2">
                {["Player1", "Player2", "Player3", "Player4", "Player5"].map(
                  (player, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
                    >
                      <span className="text-white">{player}</span>
                      <span className="text-blue-400 font-bold">
                        {1000 - index * 100} Points
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* RainGrid Section */}
          <div className="bg-gradient-to-b from-blue-900 to-gray-900 p-6 rounded-xl shadow-2xl w-full lg:w-2/3 relative">
            <RainGrid rows={20} cols={15} />
            {/* Dynamic Score and Level Indicators */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
              Level: 1
            </div>
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
              Score: 0
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-xl font-bold shadow-lg hover:scale-110 transition">
            Start Playing Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-r from-gray-800 to-gray-900 mt-auto">
        <p className="text-sm">
          © 2024 Cyber Rain | All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GamingPage;
