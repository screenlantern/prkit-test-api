Promise.resolve(1)
.then((x) => {
 return x = x + 1; 
}).catch((x) => {
  throw new Error();  
}).then((x) => {
    return x = x + 1
}).then((x) => {
    console.log(x)
})