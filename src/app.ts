class Department {
//   private name: string;
  private employees: string[] = [] // modifier makes the property to be accessed within the class only 

  constructor(public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department:", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee('John')
accounting.addEmployee('Doe')

// accounting.employees[2] = 'Mary'

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();
