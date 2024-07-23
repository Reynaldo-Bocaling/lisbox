import React from "react";
import { TransactionTypes } from "../types";
import { FaRegCopy } from "react-icons/fa";

type Props = {
  transactions: TransactionTypes[];
};

const TransactionTable: React.FC<Props> = ({ transactions }) => {
  return (
    <section className="relative w-full h-screen flex flex-col xl:flex-row">
      <div className="boxContainer bg-[#0E79FF] w-full px-10 xl:h-screen bg-primarybg flex items-center justify-center">
        <img src="/img/onlyonbase.webp" alt="" />
      </div>
      <div className="w-full flex h-screen flex-col items-center justify-center font-primary ">
        <h1 className="text-6xl text-white text-stroke-sm mb-5">
          Transaction Details
        </h1>
        <div className="max-w-5xl  text-2xl font-[50] flex flex-col gap-y-5 ">
          <ul className="flex flex-col gap-5 w-full">
            {transactions.map((tx, index) => (
              <li
                key={index}
                className="h-14 flex items-center justify-between gap-5 bg-blue-50 px-5 py-10 rounded-lg border-[2px] border-[#0E79FF]"
              >
                <div className="">
                  <h1 className="text-sm font-bold flex items-center gap-2">
                    <FaRegCopy />
                    {tx.transactionHash}
                  </h1>
                  <p className="text-xs font-bold text-[#0E79FF] tracking-wider">
                    Transaction Hash
                  </p>
                </div>
                <div>
                  <h1 className="text-sm">{tx.transactionTime}</h1>
                  <p className="text-xs font-bold text-[#0E79FF] tracking-wider">
                    Date
                  </p>
                </div>
                <div>
                  <h1 className="text-sm">{tx.totalAmountETH}</h1>
                  <p className="text-xs font-bold text-[#0E79FF] tracking-wider">
                    Total Amount
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TransactionTable;
