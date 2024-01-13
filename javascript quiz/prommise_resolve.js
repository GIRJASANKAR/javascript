// This is a JavaScript Quiz from BFE.dev

Promise.resolve(1)
.then(() => 2)
.then(3)   // - this give me nothing hence previous value is used only
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)

// output-6