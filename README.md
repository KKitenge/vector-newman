# Vector Newman (SVG Generator)

## Description
Application to helps users to easily and quickl create SVG files for personal or professional use.

## Table of Contents
* [Technology Used](#technology-used)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [License](#License)

## Technology Used
* [Git](https://git-scm.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/en)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Jest](https://jestjs.io/)

## Usage
In the terminal or console, run *node index.js* and answer a set of questions within a prompt. 
* Three letters
* Color choice for the letters
* Choose a shape
* Color choice for the shape

The answers are logged and an SVG file is generated. [Video link](https://app.screencast.com/vgfRX2eh814GT)

![triangle](/dist/mon.png)  ![square](/dist/wed.png)  ![circle](/dist/sat.png)

## Learning Points
Initially going into this, I felt this would mirrior the README generator and there were some common areas such as prompt and writing to and generating another file, however this was a step above what was asked previously and that made it at times harder. Trying to figure out why something didn't render or what was causing an issue with data. Also having to remember that there would be a parent class and the child classes would inherit those properties. It's a lot to take in and organize so that you get the expected outcome or an outcome period.

```
// Parent Class - Shape
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child Class - Shape
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="125" y="125" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
```

## License
[MIT](https://opensource.org/license/mit/) License


## Me Info
K. Kitenge
* [Github](https://github.com/KKitenge)  
***


*Victor Newman* ![Victor Newman](/dist/VNewman.png) 