// Parent Class - Shape

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child Class - Shape
//Removed redundant text/text-shapeColor and used super
//xmlns url added to all shapes
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

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" x="100" y="100" fill="${this.shapeColor}" />
        <text x="130" y="155" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `
        <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="50" fill="${this.shapeColor}" />
        <text x="130" y="155" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

const Shapes = {Shape, Triangle, Square, Circle}

module.exports = Shapes;
