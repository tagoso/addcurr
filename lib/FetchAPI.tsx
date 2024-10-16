async function FetchAPI() {
  // 両方のAPIからデータを並行して取得
  const [res1, res2] = await Promise.all([fetch(`/api`), fetch(`/api2`)]);

  // エラーチェック
  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch data");
  }

  // JSONデータを取得
  const data1 = await res1.json();
  const data2 = await res2.json();

  // /apiのresultsオブジェクトを保持
  const forexResults = data1.ForexData.results;

  // /api2のpricesオブジェクトからキーを変換し、値を逆数にする
  const cryptoPrices =
    data2 && data2.ForexDataCrypto && data2.ForexDataCrypto.prices
      ? Object.fromEntries(
          Object.entries(data2.ForexDataCrypto.prices).map(([key, value]) => [
            key.split("/")[0], // スラッシュ/以降を削除し、最初の部分だけを使用
            1 / (value as number), // 値を逆数に変換
          ])
        )
      : {}; // 存在しない場合には空オブジェクト

  // forexResultsとcryptoPricesを統合
  const mergedResults = {
    ...forexResults,
    ...cryptoPrices,
  };

  // 統合されたデータを含む新しいForexDataオブジェクトを作成
  return {
    ...data1.ForexData,
    results: mergedResults,
  };
}

export default FetchAPI;
