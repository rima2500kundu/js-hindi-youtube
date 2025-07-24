// Immediately Invoked Function Expressions (IIFE) - global scope er pollution mane kno variable ba declaration theke pollution dur korar jonno ata use hoi

(function chai(){
    // named iife
    console.log(`db connected`);
})();

((name) => {
    console.log(`db connected two ${name}`);
})("rima");






