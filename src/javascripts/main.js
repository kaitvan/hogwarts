import studentData from '../data/studentData';
import studentList from './components/studentList';
import navbar from './components/navbar';
import houseButtonGroup from './components/houseButtonsGroup';

import '../styles/main.scss';

const init = () => {
  navbar.loadNavbar();
  studentList.createStudentList(studentData.getStudents());
  houseButtonGroup.createHouseButtonGroup();
};

init();
