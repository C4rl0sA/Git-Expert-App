export const getGifs = async (category) => {
  const limit = 5;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NDLkbKu9ZdIETy7ievDyCFSaqAUhp1zb&q=${category}&limit=${limit}`;
  const response = await fetch(url);
  const { data = [] } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
