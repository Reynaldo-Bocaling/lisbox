import React, { useEffect, useState } from "react";
import TransactionTable from "./components/TransactionTable";
import { TransactionTypes } from "./types";
import { fetchTransactions } from "./api/ApiRequest";
import { formatTransactionTime } from "./utils/Date";
import BigNumber from "bignumber.js";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionTypes[]>([]);
  console.log(transactions);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTransactions();
        const filteredData = data.map((tx) => {
          // amount
          const totalAmountETH = tx.data;
          return {
            transactionHash: tx.transactionHash,
            transactionTime: formatTransactionTime(tx.timeStamp),
            totalAmountETH,
          };
        });
        console.log(filteredData);

        setTransactions(filteredData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  if (!transactions.length) return <center>Loading...</center>;

  return <TransactionTable transactions={transactions} />;
};

export default App;
