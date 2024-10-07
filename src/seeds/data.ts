const names = [
    'Aaran', 'Aaren', 'Aaron', 'Abaan', 'Smith', 'Jones', 'Coollastname', 'Zen', 'Zhou', 'Zion', 
  ];
  
  const thoughts = [
    'This is a random thought!',
    'I love coding!',
    'MongoDB is awesome!',
    'JavaScript is fun!',
    'Express makes things easy!',
  ];
  
  // Get a random item from an array
  export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];
  
  // Get a random full name
  export const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Get a random thought
  export const getRandomThought = () => getRandomArrItem(thoughts);
  