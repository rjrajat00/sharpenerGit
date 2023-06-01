console.log(`person1: shows tickt`);
console.log(`person2: shows tickt`);

const preMovie = async () => {
  const promiseWifeTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopCorn = new Promise((resolve, reject) => resolve("popcorn"));
  const getbutter = new Promise((resolve, reject) => resolve("butter"));
  const getColdDrink = new Promise((resolve, reject) => resolve("COke"));
  let ticket = await promiseWifeTicks;

  console.log(`wife: i have ${ticket}`);
  console.log(`hub: we should go in`);
  console.log(`wife: I am hungryn`);

  let popcorn = await getPopCorn;

  console.log(`hub: wait! i will get some ${popcorn}`);
  console.log(`hub: lets go in now`);
  console.log(`wife: i need butter on my ${popcorn}`);

  let butter = await getbutter;

  console.log(`hub: wait,  i should get some ${butter}`);
  console.log(`hub: anyything else darling`);

  console.log(`Wife : we are forgetting something`);
  console.log(`hub: what Now! darling`);
  console.log(`wife: Coke`);

  let coke = await getColdDrink;

  console.log(`hub: ok , fast..fast...fasttt....here is your ${coke}`);

  console.log(`wife: thanks for the ${coke}! we are getting late, lets go`);
  console.log(`hub: hhhhuuuuuuuufffffffff finallyyyyyy`);

  return ticket;
};

preMovie().then((m) => console.log(`person 3: shows ${m}`));

console.log(`person4 : shows ticket`);
console.log(`person5 : shows ticket`);
