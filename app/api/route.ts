import { NextResponse } from 'next/server'
 
export async function GET()  {
    const res = await fetch(`https://api.fastforex.io/fetch-all?api_key=${process.env.NEXT_PUBLIC_FASTFOREX_API_KEY}`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const ForexData = await res.json();
    return NextResponse.json({ ForexData })
  }
  

