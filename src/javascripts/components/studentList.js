import houseData from '../../data/houseData';
import studentCard from './studentCard';

const mapStudents = (students, houses) => students.map((student) => {
  const house = houses.find((x) => x.id === student.houseId);
  return studentCard.createStudentCard(student, house);
});

const createStudentList = (students) => {
  const houses = houseData.getHouses();

  const domString = `
    <ul class="student-list">
        ${mapStudents(students, houses).join('')}
    </ul>`;

  $('#student-container').html(domString);
};

export default { createStudentList };
