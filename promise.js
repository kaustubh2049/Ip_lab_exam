// Create a promise
let myPromise = new Promise((resolve, reject) => {
  let success = false; // change to false to see rejection
  if (success) {
    resolve("Promise is resolved! ✅");
  } else {
    reject("Promise is rejected! ❌");
  }
});

// Using the promise
myPromise
  .then((message) => {
    console.log(message); // runs if resolved
  })
  .catch((error) => {
    console.log(error); // runs if rejected
  });
