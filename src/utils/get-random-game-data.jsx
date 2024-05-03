async function getRandomImageURLs(_size, setAppStateLoadingStateInPercent) {
  const size = (_size * _size) / 2;

  if (!navigator.onLine) {
    return JSON.parse(
      localStorage.getItem("memory-offline-data")
    ).slice(0, size)
  } else if (!localStorage.getItem("memory-offline-data")) {
    setTimeout(async () => {
      var data = await ((await fetch("/memory_game/offline-data.json")).json())
      localStorage.setItem("memory-offline-data", JSON.stringify(data))
    }, 8000)
  }

  const fetchPromises = [];

  var imageSize = 100;

  if (size > 100) {
    imageSize = 50;
  } else if (size < 10) {
    imageSize = 400;
  }

  var state = 0;
  var usedImages = {}

  for (let index = 0; index < size; index++) {
    fetchPromises.push(
      (async () => {
        async function get() {
          var res = await fetch(
            `https://picsum.photos/${imageSize}/${imageSize}`
          );

          if (usedImages[res.url]) {
            return await get()
          }

          usedImages[res.url] = true

          return res
        }

        var res = await get()

        setAppStateLoadingStateInPercent(Math.floor((state / size) * 100));

        state++;

        return res;
      })()
    );
  }

  const responses = await Promise.all(fetchPromises);

  const blobPromises = responses.map(async (res) => {
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  });

  return await Promise.all(blobPromises);
}

function generateGrid(size = 10) {
  const data = {};

  var i = 0;
  for (let x = 0; x < size; x++) {
    data[x] = {};

    for (let y = 0; y < size; y++) {
      data[x][y] = {
        src: false,
        uncovered: false,
        coords: { x, y },
      };
      i++;
    }
  }

  return data;
}

function setRandomImageData(oldGridData, image, size) {
  const randomX = Math.floor(Math.random() * size);
  const randomY = Math.floor(Math.random() * size);

  if (!oldGridData[randomX][randomY].src) {
    oldGridData[randomX][randomY].src = image;
    return true;
  }

  return false;
}

function fillGrid(randomImages, oldGridData, size) {
  const image = randomImages?.[0];

  if (!image) {
    return oldGridData;
  }

  while (!setRandomImageData(oldGridData, image, size)) { }
  while (!setRandomImageData(oldGridData, image, size)) { }

  return fillGrid(randomImages.slice(1), oldGridData, size);
}

async function GetRandomGameData(size = 10, setAppStateLoadingStateInPercent) {
  const randomImageUrls = await getRandomImageURLs(
    size,
    setAppStateLoadingStateInPercent
  );

  return fillGrid(randomImageUrls, generateGrid(size), size);
}

export default GetRandomGameData;