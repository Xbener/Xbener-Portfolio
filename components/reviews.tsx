import Image from "next/image";

export default function Reviews() {
  return (
    <section id="reviews" className="w-full mt-32">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Trusted by World&apos;s coolest web3 teams
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +10 Years Experience
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +30 Web2 Projects
        </div>
        <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-800">
          +25 Web3 Projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {/* BNRY CEO Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <div>
              <div className="font-bold">BNRY CEO Official X</div>
              <div className="text-gray-400 text-sm">@Binarybit_pro</div>
            </div>
          </div>
          <p>Thank you for the great work @0xmooncity @binance</p>
        </div>

        {/* LoxrBtc Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
              L
            </div>
            <div>
              <div className="font-bold">LoxrBtc</div>
              <div className="text-gray-400 text-sm">LoxrBtc</div>
            </div>
          </div>
          <p>
            If you have a project and need a developer, highly recommending
            Moon.
          </p>
        </div>

        {/* Bitmap CM Founder Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <div>
              <div className="font-bold">Bitmap CM Founder</div>
              <div className="text-gray-400 text-sm">@eth_wizz</div>
            </div>
          </div>
          <p>
            Legend has it @0xMooncity does not sleep, just codes. Apex predator
            of web3 devs.
          </p>
        </div>

        {/* Unknown Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <div className="font-bold">Underdz</div>
              <div className="text-gray-400 text-sm">@underdz</div>
            </div>
          </div>
          <p>
            Our web3/solana dev @0xmooncity absolutely killed it on a solana
            tool project and delivered in the deadline I set.
          </p>
        </div>

        {/* Wifo Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
              W
            </div>
            <div>
              <div className="font-bold">Wifo</div>
              <div className="text-gray-400 text-sm">@tswifo</div>
            </div>
          </div>
          <p>
            An extremely aesthetic and smooth solana dapp development. Excellent
            job in terms of quality and price. Fast, reliable and trouble-free
            delivery. A great experience open to instant changes
          </p>
        </div>

        {/* Vad Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              V
            </div>
            <div>
              <div className="font-bold">Vad</div>
              <div className="text-gray-400 text-sm">@not00nice</div>
            </div>
          </div>
          <p>Can confirm that @0xmooncity is a great dev in solana!!!</p>
        </div>

        {/* PYNO Review */}
        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <div className="font-bold">PYNO</div>
              <div className="text-gray-400 text-sm">@kuberaBtc</div>
            </div>
          </div>
          <p>
            Mooncity audited our smart contract and submitted to Blowfish wallet
            team. Thanks again Mooncity
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          My Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/tech/agent.png" alt="Agent" width={40} height={40} />
          <Image
            src="/tech/typescript.png"
            alt="TypeScript"
            width={40}
            height={40}
          />
          <Image src="/tech/nextjs.png" alt="Next.js" width={40} height={40} />
          <Image src="/tech/solana.png" alt="Solana" width={40} height={40} />
          <Image src="/tech/node.png" alt="Node.js" width={40} height={40} />
          <Image src="/tech/mongo.png" alt="MongoDB" width={40} height={40} />
          <Image
            src="/tech/ethereum.png"
            alt="Ethereum"
            width={40}
            height={40}
          />
          <Image src="/tech/bitcoin.png" alt="Bitcoin" width={40} height={40} />
          <Image src="/tech/vercel.png" alt="Vercel" width={40} height={40} />
          <Image src="/tech/graphql.png" alt="GraphQL" width={40} height={40} />
          <Image src="/tech/rust.png" alt="Rust" width={40} height={40} />
        </div>
      </div>
    </section>
  );
}
