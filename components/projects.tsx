import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-32 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Recent Projects
      </h2>
      <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
        I've worked on a variety of projects, from web2 to web3 Dapp. Here are a
        few of my favorites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-4">
            <Image
              src="/projects/trojanbot.png"
              alt="Fork Trojanbot SOL"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Fork Trojanbot SOL</h3>
            <p className="text-gray-300 text-sm mb-6">
              Trojan Bot is a popular trading and sniping bot on the Solana
              blockchain that's designed to help traders execute trades with
              speed and efficiency. If you're developing a wallet tracking
              system like we discussed earlier, understanding how Trojan Bot and
              similar tools operate can help you identify how trades are
              executed on-chain and potentially improve your transaction parsing
              logic.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6.5l5-3v6l5-3" />
                  <path d="M2 13.5V9l5 3v-6l5 3v6.5" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">TS</span>
              </div>
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:bg-white/5 transition"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-4">
            <Image
              src="/projects/discord-bot.png"
              alt="Discord bot tracking wallet & tweet"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">
              Discord bot tracking wallet & tweet
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              A Solana wallet tracking bot for copytrading serves as an
              automated system that monitors specific wallets on the Solana
              blockchain and replicates their trading activities. Here's how it
              works and what it's used for: Wallet monitoring, Tx Detection,
              Trade Analysis, Trade Replication, Notify System
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 17l6-5-6-5" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6.5l5-3v6l5-3" />
                  <path d="M2 13.5V9l5 3v-6l5 3v6.5" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">TS</span>
              </div>
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:bg-white/5 transition"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
          <div className="p-4">
            <Image
              src="/projects/twitter-bot.png"
              alt="Twitter Scan bot"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">Twitter Scan bot</h3>
            <p className="text-gray-300 text-sm mb-6">
              I built a function to query and scrape any potential contract
              addresses from each new tweet from verified accounts. Pipe those
              contract addresses to an enhanced buy function on either
              raydium/pumpfun/uniswap (with adjustable high gas fee's/jito) I
              started with just solana for pumpfun/raydium/meteora
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">N</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6.5l5-3v6l5-3" />
                  <path d="M2 13.5V9l5 3v-6l5 3v6.5" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-sm">TS</span>
              </div>
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 hover:bg-white/5 transition"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
