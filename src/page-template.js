// creates html for employees like markdown....need a loop for # of employees, so need an array in other index.js
// create manager card
const genMan = function (manager) {
   return `
     <div class="col-6 mt-6">
              <div class="card mx-auto mb-3" style="width: 18rem">
              <div class="card-header">
              <h3>${manager.name}</h3>
              <h4>Manager</h4>
              </div>

              <div class="card-body">
              <p class="id">ID: ${manger.id}</p>
              <p class="email">Email: <a href="email:${manager.email}">${manager.email}</a></p>
              <p class="work">Work Number: ${manager.workNumber}</p>
              </div>

              </div>
              </div>
              `;
}
// create engineer card
const genEng = function (engineer) {
    return `
      <div class="col-6 mt-6">
               <div class="card mx-auto mb-3" style="width: 18rem">
               <div class="card-header">
               <h3>${engineer.name}</h3>
               <h4>Engineer</h4>
               </div>
 
               <div class="card-body">
               <p class="id">ID: ${engineer.id}</p>
               <p class="email">Email: <a href="email:${engineer.email}">${engineer.email}</a></p>
               <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
               </div>
 
               </div>
               </div>
               `;
 }
 // create intern card
const genIn = function (intern) {
    return `
      <div class="col-6 mt-6">
               <div class="card mx-auto mb-3" style="width: 18rem">
               <div class="card-header">
               <h3>${intern.name}</h3>
               <h4>Engineer</h4>
               </div>
 
               <div class="card-body">
               <p class="id">ID: ${intern.id}</p>
               <p class="email">Email: <a href="email:${intern.email}">${intern.email}</a></p>
               <p class="school">School Name: ${intern.school}">${intern.school}</a></p>
               </div>
 
               </div>
               </div>
               `;
 };

 // push array
 genHtml = (data) => {
     employees = [];

     for (let i = 0; i < data.length; i++) {
         const employee = data[i];
         const role = employee.getRole();

         if (role === 'Manager') {
             const managerCard = genMan(employee);
             employees.push(managerCard);
         }

         if (role === 'Engineer') {
            const engineerCard = genEng(employee);
            employees.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = genIn(employee);
            employees.push(internCard);
        }
     }

     // combining strings
     const employeeCards = employees.join('')

     // return html
     const genTeam = genHtml(employeeCards);
     return genTeam;
     
     // generate html
     const genHtml = function (employeeCards) {
         return`
         <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>Team Gen</title>
</head>
<body>
<header>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Gen</span>
    </nav>
    </header>
    <!---Employee Cards Container--->
    <div class="container">
        <div class="row">
        ${data}
</div>
    </div> 
</body>
</html>
`
}}

// export
module.exports = genHtml;