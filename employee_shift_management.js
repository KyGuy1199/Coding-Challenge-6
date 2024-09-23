// Task 1: Create an Employees Array of Employee Objects

let employees = [
    {
        name: 'Chappell Roan',
        shifts: [
            {day: "Monday", hours: 6},
            {day: "Wednesday", hours: 8},
            {day: "Thursday", hours: 4},
            {day: "Friday", hours: 7},
        ]     
    },
    {
        name: 'Doja Cat',
        shifts: [
            {day: "Monday", hours: 9},
            {day: "Tuesday", hours: 3},
            {day: "Thursday", hours: 4},
            {day: "Friday", hours: 8},
        ]
        
    },
    {
        name: 'Britney Spears',
        shifts: [
            {day: "Wednesday", hours: 5},
            {day: "Thursday", hours: 5},
            {day: "Saturday", hours: 9},
            {day: "Sunday", hours: 7},
        ]
        
    },
    {
        name: 'Nicki Minaj',
        shifts: [
            {day: "Tuesday", hours: 6},
            {day: "Friday", hours: 8},
            {day: "Saturday", hours: 2},
            {day: "Sunday", hours: 4},
        ]
    },
// The array of objects making up the employess and their shifts
]    

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log('Shifts for ${employee.name}:') ;

    for (let shift of employee.shifts) {
        console.log('- ${shift.day}: ${shift.hours}') ;
    }
// This function should help to show the employee name along with shift day and hours
 }


 // Task 3: Create a Function to Assign a New Shift

 function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name == employeeName) ; //finding employee by name

    if(!employee) {
        console.log('Error: Employee ${employeeName} not found.') ;
        return; //If employee is not found an error message will display
    }
const existingShift = employee.shifts.find(shift => shift.day == day) ;

    if(existingShift) {
        console.log('Error ${employeeName} is already scheduled to work.') ;
        return;
    }
    employee.shifts.push({day: day, hours: hours}) ;
    console.log('Shift has been assigned to ${employeeName}.') ;
    // If employee is available shift will be assigned
}
 