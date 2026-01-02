let students = [];
let idCounter = 1;

module.exports = {
    students,
    getNewId: () => idCounter++
};