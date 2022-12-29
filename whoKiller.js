function killer(suspectInfo, dead) {
    let count = 0;

    for (let key in suspectInfo) {
        let count = 0;

        for (let val0 of dead) {
            for (let val1 of suspectInfo[key]) {
                if (val0 == val1) {
                    count += 1;
                }
            }
        }

        if (count == dead.length) {
            return key;
        }
    }
}


const people = {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle']
    },
    deadPeople = ['Lucas', 'Bill'];

console.log(killer(people, deadPeople));