async function generateLoremIpsum() {
  const response = await fetch(
    "https://link.com",
    {
      method: "GET",
      headers: {
        "host": "link.com",
        "key": MY_API_KEY,
      },
    }
  );
  const data = await response.json();
  console.log(data);
}
