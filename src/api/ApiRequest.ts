import axios from "axios";
import { ApiTypes } from "../types";

const API_KEY = "Z66EJ17PEFMCIXXGW45UV1JCAV5KDX1B7Z";
const BASE_URL = "https://api.basescan.org/api";

export const fetchTransactions = async (): Promise<ApiTypes[]> => {
  try {
    const response = await axios.get(
      `${BASE_URL}?module=logs&action=getLogs&address=0x5f45cd59ba7f2f6bcd935663f68ee1debe3b8a10&fromBlock=1844947&toBlock=1845947&page=1&offset=1000&apikey=${API_KEY}`
    );
    return response.data.result;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
