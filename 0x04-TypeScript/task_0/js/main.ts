// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Faisal",
  lastName: "Elorm",
  age: 22,
  location: "Accra",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Mensah",
  age: 21,
  location: "Kumasi",
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Render a table in Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
