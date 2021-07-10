// creates html for employees like markdown....need a loop for # of employees, so need an array in other index.js
// create Html
function genHtml(data) {
    return `
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
`;
}

module.exports = genHtml;