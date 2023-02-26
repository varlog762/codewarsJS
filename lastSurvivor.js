function lastSurvivor(letters, coords) {
    let survivor = letters;

     for (let num of coords) {
        survivor = survivor.slice(0 ,num) + survivor.slice(num + 1);
     }

     return survivor;
}

console.log(lastSurvivor("abcdfsefewfwefefwefefwefwfewf", [1, 1, 2, 2, 2, 8]));