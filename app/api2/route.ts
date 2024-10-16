import { NextResponse } from 'next/server'
 
export async function GET()  {
    const res = await fetch(`https://api.fastforex.io/crypto/fetch-prices?pairs=BTC/USD,ETH/USD,BNB/USDC,SOL/USD,XRP/USD,ICP/USD&api_key=${process.env.NEXT_PUBLIC_FASTFOREX_API_KEY}`, { next: { revalidate: 1 } });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const ForexDataCrypto = await res.json();
    return NextResponse.json({ ForexDataCrypto })
  }
  