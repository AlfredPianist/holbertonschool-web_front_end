function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  const students = [];
  for (let idx = 0; idx < numbersOfStudents; idx++) {
    students.push(studentSeat(idx + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);
