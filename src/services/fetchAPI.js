async function fetchAPI() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR HAS OCCURRED:", error);
  }
}

export default fetchAPI;
