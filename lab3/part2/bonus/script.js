do {
  shape = prompt(
    "enter the name of the shape (circle(c), triangle(t), square(s), rectangle(r), parallelogram(p), trapezium(tr), ellipse(e))"
  );
  switch (shape) {
    case "c":
      r = Number(prompt("enter radius of the circle"));
      area = r * r * Math.PI;
      alert("area of circle = " + area);
      break;
    case "t":
      b = Number(prompt("enter base of triangle"));
      h = Number(prompt("enter height of triangle"));
      area = 0.5 * b * h;
      alert("area of triangle = " + area);
      break;
    case "s":
      a = Number(prompt("enter length of side of square"));
      area = a * a;
      alert("area of square = " + area);
      break;
    case "r":
      l = Number(prompt("enter length of rectangle"));
      w = Number(prompt("enter width of rectangle"));
      area = l * w;
      alert("area of rectangle = " + area);
      break;
    case "p":
      b = Number(prompt("enter base of parallelogram"));
      h = Number(prompt("enter vertical height of parallelogram"));
      area = b * h;
      alert("area of parallelogram = " + area);
      break;
    case "tr":
      a = Number(prompt("enter length of 1st parallel side of trapezium"));
      b = Number(prompt("enter length of 2st parallel side of trapezium"));
      h = Number(prompt("enter vertical height of trapezium"));
      area = 0.58(a + b) * h;
      alert("area of trapezium = " + area);
      break;
    case "tr":
      a = Number(prompt("enter a of ellipse"));
      b = Number(prompt("enter b of ellipse"));
      area = math.PI * a * b;
      alert("area of ellipse = " + area);
      break;
    default:
      alert("not valid");
  }
  confrm = confirm("calculare the area of another shape?");
} while (confrm);
