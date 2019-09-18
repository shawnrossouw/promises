const app = new Promise((resolve, reject) => {
  let i = Math.floor(Math.random() * 15) + 1;
  const timer = setInterval(() => {
    console.log(i);
    if(i > 10){
      reject();
      clearInterval(timer);
    }else if(i === 10){
      clearInterval(timer);
      resolve();
    }else {
      i++
    }  
  },1000);
}); 

app.then(() => {
  console.log('done');
}).catch(() => {
  console.log('oh shit');
});

//resolve and reject is functions.
