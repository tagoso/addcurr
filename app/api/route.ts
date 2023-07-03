import { NextResponse } from 'next/server'
 
export async function GET()  {
    const res = await fetch(`https://api.fastforex.io/fetch-multi?from=USD&to=USD,EUR,CNY,JPY,GBP,AUD,INR,BRL,ZAR,CHF,SEK,CAD,RUB,MXN,TRY,SAR,MYR,NZD,THB,PHP,NGN&api_key=${process.env.NEXT_PUBLIC_FASTFOREX_API_KEY}`, { next: { revalidate: 10 } });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const ForexData = await res.json();
    return NextResponse.json({ ForexData })
  }
  

