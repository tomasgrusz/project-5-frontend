"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { Info } from "~~/components/Info";
import { PurchaseTokens } from "~~/components/PurchaseTokens";
import { AddressInput } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const [lotteryAddress, setLotteryAddress] = useState<`0x${string}`>("0xa349778034ccD56b78092beF44857Be0e0392F9a");
  const header = (
    <div className="flex flex-col px-5 gap-3 w-full max-w-lg">
      <h1 className="text-center">
        <span className="block text-4xl font-bold">🔥 Lottery 🔥</span>
      </h1>
      <AddressInput
        value={lotteryAddress}
        onChange={newVal => setLotteryAddress(newVal as `0x${string}`)}
        placeholder="Lottery Address"
      />
    </div>
  );

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {header}
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 space-y-10">
          {<Info lotteryAddress={lotteryAddress} />}
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <PurchaseTokens lotteryAddress={lotteryAddress} />

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <p>Explore your local transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
