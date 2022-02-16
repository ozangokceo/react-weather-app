export function useRandom() {
  //this is called with clicking on add button
  const weather = [
    { type: 'Sunny', degrees: 28 },
    { type: 'Rainy', degrees: 8 },
    { type: 'Snowy', degrees: -3 },
  ];

  const template = {
    weather: '',
  };

  template.weather = weather[Math.floor(Math.random() * 4)];

  return template;
}
