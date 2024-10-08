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
  
// Function to generate random thoughts that we can add to user object.
export const getRandomThought = (int: number) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        name: getRandomArrItem(thoughts),
      });
    }
    return results;
  };
  