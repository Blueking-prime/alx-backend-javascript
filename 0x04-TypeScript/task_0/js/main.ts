interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Chibi',
  lastName: 'O-Chi',
  age: 17,
  location: 'front'
};

const student2: Student = {
  firstName: 'Perp',
  lastName: 'Goz',
  age: 24,
  location: 'side'
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const rowHead: HTMLTableRowElement = thead.insertRow(0);

rowHead.insertCell(0).innerHTML = "firstName";
rowHead.insertCell(1).innerHTML = "location";

table.append(thead);


studentsList.forEach((x) => {
    const row: HTMLTableRowElement= tbody.insertRow(0)
    row.insertCell(0).innerHTML = x.firstName;
    row.insertCell(1).innerHTML = x.location
})

table.append(tbody)
body.append(table)
