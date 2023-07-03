async function FetchAPI() {
  const res = await fetch(`/api`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.ForexData;
}

export default FetchAPI;
