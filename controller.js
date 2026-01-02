const data = require("../data/studentData");

/* CREATE STUDENT */
exports.createStudent = (req, res) => {
    const { name, age, course } = req.body;

    const student = {
        id: data.getNewId(),
        name,
        age,
        course
    };

    data.students.push(student);
    res.status(201).json(student);
};

/* READ ALL STUDENTS */
exports.getAllStudents = (req, res) => {
    res.json(data.students);
};

/* READ SINGLE STUDENT */
exports.getStudentById = (req, res) => {
    const student = data.students.find(s => s.id == req.params.id);
    student
        ? res.json(student)
        : res.status(404).json({ message: "Student not found" });
};

/* UPDATE STUDENT (name, age, course) */
exports.updateStudent = (req, res) => {
    const student = data.students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name ?? student.name;
    student.age = req.body.age ?? student.age;
    student.course = req.body.course ?? student.course;

    res.json(student);
};

/* DELETE STUDENT */
exports.deleteStudent = (req, res) => {
    const index = data.students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    data.students.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
};