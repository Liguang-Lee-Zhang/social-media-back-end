// seeding data for the user model
const names = [
  'Aaliyah',
  'bella',
  'charlie',
  'daniel',
  'emma',
  'finley',
];


const emails = [
  'aaliyah@email.com',
  'bella@email.com',
  'charlie@email.com',
  'daniel@email.com',
  'emma@email.com',
  'finley@email.com',
]

// Function to generate random assignments that we can add to student object.
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomAssignments };
