Here is a simple console application that simulates async/await behavior using Promises:

```javascript
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation completed");
        }, 2000);
    });
}

simulateAsyncOperation().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
```