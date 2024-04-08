// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Joel'); // SIMPLE IIFE

