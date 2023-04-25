const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shape');
const path = require('path')

//List of 4 questions - text/textcolor/shape/shapecolor
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter logo text - Max 3 characters:',
        validate: (response) => {
            if (response === "") {
                return "Please enter Text"
            } return true;
        }
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter the color for text:',
        validate: (response) => {
            if (response === "") {
                return "Please enter Color choice"
            } return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick your preferred shape:',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a color for your shape:',
        validate: (response) => {
            if (response === "") {
                return "Please enter a color choice"
            } return true;
        }
    },
]

//Write responses to logo file
// .then(response) => {
//     console.log(response);
//     writeToFile('svglogo.svg', response)
// }
function writeToFile(fileName, response) {
    // fs.writeFileSync(path.join(process.cwd(), fileName), response);   
    fs.writeFile(fileName, response, (err) => {
        if (err) throw err;
    });
}

//Initialize
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Generating Logo');
        let shape;
        switch (response.Shape) {
            case 'Triangle':
                Shape = new Triangle(response.textColor, response.shapeColor, response.text)
                break;
            case 'Square':
                Shape = new Square(response.textColor, response.shapeColor, response.text)
                break;
            case 'Circle':
                Shape = new Circle(response.textColor, response.shapeColor, response.text)
                break;
        }

        writeToFile('./examples/svglogo.svg', response);
    });
}

init();