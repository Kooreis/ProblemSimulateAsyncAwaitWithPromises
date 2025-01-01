function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation completed");
        }, 2000);
    });
}