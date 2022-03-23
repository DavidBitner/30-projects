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

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "baconator-bacon-ipsum.p.rapidapi.com",
    "X-RapidAPI-Key": "bb29e62583msh10c5bfe768c328bp121b43jsn96ae4388c74c",
  },
};

fetch("https://baconator-bacon-ipsum.p.rapidapi.com/?type=all-meat", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
  