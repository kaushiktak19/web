// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I m inside promise');
//     }, 5000);

//     // -> explicit resolve reject
//      resolve(19);
//     // reject(new Error('error hai !!'))
// });

// myPromise.then((value) => {console.log(value)});

// myPromise.catch((error) => {console.log(error)});

// myPromise.then((value) => {console.log(value)},(error) => {console.log(error )});


// #MULTIPLE PROMISES CHAINING
let p1 = new Promise(function(resolve, reject){
    setTimeout(() =>{
        console.log('set-timeout1 started');
    },2000);
    resolve(true);
})

let output = p1.then(() => {
    let p2 = new Promise(function(resolve,reject) {
        setTimeout(() =>{
            console.log('set-timeout2 started');
        },4000);
        resolve("p2 resolved");
    })

    let output2 = p2.then(() => {
        let p3 = new Promise(function(resolve,reject) {
            setTimeout(() =>{
                console.log('set-timeout3 started');
            },6000);
            resolve("p3 resolved");
        })
        return p3;
    })
    
    output2.then((value) => console.log(value));

    return p2;
})

output.then((value) => console.log(value));









