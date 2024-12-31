Here is a TypeScript console application that simulates async/await behavior manually using Promises:

```typescript
function simulateAsyncOperation(data: string, delay: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, delay);
    });
}

function main() {
    console.log('Starting operation...');

    simulateAsyncOperation('Hello, World!', 2000)
        .then(result => {
            console.log(result);
            return simulateAsyncOperation('Another operation', 3000);
        })
        .then(result => {
            console.log(result);
            console.log('All operations completed.');
        })
        .catch(error => {
            console.error(`An error occurred: ${error}`);
        });
}

main();
```

In this application, the `simulateAsyncOperation` function simulates an asynchronous operation by returning a Promise that resolves after a specified delay. The `main` function then uses this function to simulate the behavior of async/await by chaining Promises together with the `then` method.