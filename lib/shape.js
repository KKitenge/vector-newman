// Parent Class - Shape

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child Class of Shape

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="100" y="100" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<rect width="60" height="60" x="100" y="100" fill="${this.shapeColor}" />
        <text x="100" y="100" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<circle cx="150" cy="150" r="50" fill="${this.shapeColor}" />
        <text x="100" y="100" fill="${this.textColor}">${this.text}</text>`;
    }
}

module.exports = Shape;
