class shape {
  constructor(name, side, sidelength) {
    this.name = name;
    this.side = side;
    this.sidelength = sidelength;
  }
  calcperimeter() {
    let p = this.side * this.sidelength;
    return p;
  }
}
const squ = new shape("square", 4, 5);
console.log(squ.calcperimeter());
const triangle = new shape("triangle", 3, 3);
console.log(triangle.calcperimeter());

class square extends shape {
  constructor(sidelength) {
    super("square", 4, sidelength);
  }
  calcarea() {
    let area = this.sidelength * this.sidelength;
    return area;
  }
}
const sq = new square(5);
console.log(sq.calcarea());
const s = new shape(5);
console.log(sq.calcperimeter());

class Triple {
  static customName = "tripler";
  static description = "triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description);

console.log(Triple.calculate());

console.log(Triple.calculate(6));

console.log(SquaredTriple.calculate(3));

console.log(SquaredTriple.description);

console.log(SquaredTriple.longDescription);

console.log(SquaredTriple.customName);
