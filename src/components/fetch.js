async function weatherFetch() {
  const weather = {};
  fetch(
    //API call..
    `${api.base}?query=${location}&num_of_results=5&format=json&key=${api.key}`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      weather = result;
      return weather
    });
}