const readlineSync = require('readline-sync');
function calculateAverageGrade(grades = readlineSync.question('Ваши оценки: ')) {
    if (!grades) {
        return 0;
    }

    const gradesList = grades.split(',');
    let totalGrades = 0;
    let sumGrades = 0;

    for (let i = 0; i < gradesList.length; i++) {
        const grade = parseInt(gradesList[i], 10);

        if (isNaN(grade) || grade < 1 || grade > 10) {
            return 0;
        }

        sumGrades += grade;
        totalGrades++;
    }

    return sumGrades / totalGrades;
}
console.log(calculateAverageGrade());