export async function fetchImages(amiiboName) {
    const response = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?name=${amiiboName}`
    );
    const data = await response.json();
    return data.amiibo;
}