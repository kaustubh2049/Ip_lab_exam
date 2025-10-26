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
    console.log("Then: " + message); // runs if resolved
  })
  .catch((error) => {
    console.log("Catch: " + error); // runs if rejected
  });
