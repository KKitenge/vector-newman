const shape = require('./lib/shape.js')

describe('shape', () => {
    describe('render', () => {
        it('should return the chosen shape', () => {
            const shape = new Shape();
            const result = "";
            expect(shape.render()).toEqual(result);
        })
    })
})

describe('Triangle', () => {
    describe('render', () => {
        it('should return a triangle svg with color and text', () => {
            const Triangle = new Triangle('green');
            const result = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
            expect(triangle.render()).toEqual(result);
        })
    })
})


describe('Square', () => {
    describe('render', () => {
        it('should return a square svg with color and text', () => {
            const Square = new Square('blue');
            const result = `<rect width="60" height="60" x="100" y="100" fill="blue" />`;
            expect(square.render()).toEqual(result);
        })
    })
})


describe('Circle', () => {
    describe('render', () => {
        it('should return a circle svg with color and text', () => {
            const Circle = new Circle('yellow');
            const result = `<circle cx="150" cy="150" r="50" fill="yellow" />`;
            expect(circle.render()).toEqual(result);
        })
    })
})