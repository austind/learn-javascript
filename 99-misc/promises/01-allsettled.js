
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Promise 1 resolved'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 890, 'Promise 2 rejected'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1200, 'Promise 3 resolved'));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log(`Fulfilled: ${result.value}`);
      } else {
        console.log(`Rejected: ${result.reason}`)
      }
    })
  });