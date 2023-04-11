export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=lyROLj9SLwyqAAyARUduubyrpokX8ki1&q=${category}&limit=${5}`;
    const res = await fetch(url);

    const {data} = await res.json();
    // console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs
}