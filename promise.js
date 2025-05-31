let promise = new Promise((resolve, reject) => {
    console.log('Iam a  promise');
    resolve(200)
});

promise.then((value) => {
    console.log('resolve', value);
}).catch((err) => {
    console.log(err);
})


//===============PROMISE METHODS===============//
// Promise.resolve
function resolve() {
    Promise.resolve('This is resolve')
    .then(value => console.log(value))
}
resolve()


// Promise.reject
function reject() {
    Promise.reject('This is reject')
    .catch(reason => console.log(reason))
}
reject()


// Promise.all
function all() {
    Promise.all([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ]).then(values => console.log(values))
}
all()


// Promise.allSettled
function allSettled() {
    Promise.allSettled([
        Promise.resolve('resolved'),
        Promise.reject('rejected'),
        Promise.resolve('another resolve')
    ]).then(result => console.log(result))
}
allSettled()


// Promise.race
function race() {
    Promise.race([
        new Promise(resolve => setTimeout(() => resolve('fast promise'), 1000)),
        new Promise(resolve => setTimeout(() => resolve('slow promise'), 3000))
    ]).then(value => console.log(value))
}
race()
9

// Promise.any
function any() {
    Promise.any([
        Promise.reject('error 1'),
        Promise.reject('error 2'),
        Promise.resolve('first success')
    ]).then(value => console.log(value))
}
any()


// Promise.finally
function finallyy(){
    Promise.reject('an error occurred')
        .catch(err => console.log(err))
        .finally(() => console.log('cleanup executed'))
}
finallyy()