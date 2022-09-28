export const getGifs = async (category) => {
  const apiKey = "hrGBCwlYDdDEpqbiW42uFV7Zm5C4WwGV";
  const limit = 5;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);

  const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  //console.log(gifs);
  return gifs;

}
