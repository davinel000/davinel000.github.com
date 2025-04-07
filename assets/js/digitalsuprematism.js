let shapes = [];   // Аналог ArrayList<Shape> shapes
let shapes2 = [];  // Аналог ArrayList<Shape> shapes2
let boxes = [];    // Аналог ArrayList<Shape> boxes

// Вместо PVector mouse, secondary
let mouseVec;
let secondary;

function setup() {
  // WEBGL — чтобы использовать 3D (box, rotateX, rotateY и т.д.)
  createCanvas(800, 600, WEBGL);
  // Если хотите обрабатывать правый клик — отключим контекстное меню
  document.oncontextmenu = () => false;

  // Инициализируем векторы
  mouseVec = createVector(mouseX, mouseY, 0);
  secondary = createVector(100, 100, 0);

  // Первичная генерация фигур, аналогично Processing
  noiseGrid(1, shapes, mouseVec);
  noiseGridDetailed(2, 300, boxes, secondary);
  noiseGridColor(3, shapes2, secondary);

  // Меняем secondary, как в коде
  secondary.set(-500, -500, 0);
}

function draw() {
  background(244, 238, 207);

  // Поскольку в WEBGL (0,0) — центр холста, а в Processing (0,0) был верхний левый угол,
  // сделаем «сдвиг» системы координат, чтобы (0,0) соответствовал левому верхнему углу:
  push();
  //translate(-width/2, -height/2);

  // Обновим mouseVec исходя из реального положения курсора
  mouseVec.set(mouseX - width/2, mouseY - height/2, 0);

  noCursor();
  noStroke();

  // Круг для secondary
  fill(40, 10, 0);
  ellipse(secondary.x, secondary.y, 200, 200, 60);

  // Круг для mouse
  fill(255, 0, 0);
  ellipse(mouseVec.x, mouseVec.y, 300, 300, 60);

  // Рисуем большой «арочный» эллипс
  let widthArc = 2500;
  let heightArc = 2000;
  let strokeArc = 30;
  noFill();
  stroke(0);
  strokeWeight(strokeArc);

  // В Processing код был ellipse(mouseX-widthArc/2, heightArc/2-mouseY, ...)
  // У нас mouseX, mouseY смещены, поэтому аккуратно адаптируем:
  ellipse(
    (mouseVec.x) - widthArc/2,
    (heightArc/2) - (mouseVec.y),
    widthArc,
    heightArc, 50
  );

  // Вызываем наши функции прорисовки
  build3DLines(shapes);
  build3DLines(shapes2);
  build3DBoxes(boxes);

  pop();
}

// Аналог mouseClicked в Processing.
// По умолчанию p5.js различает LEFT, RIGHT, CENTER
function mouseClicked() {
  if (mouseButton === LEFT) {
    // При левом клике secondary перемещаем в точку клика
    // c random Z
    let clicked = createVector(mouseX - width/2, mouseY - height/2);
    secondary.set(clicked.x, clicked.y, random(-500, 500));
  } else if (mouseButton === RIGHT) {
    // Правый клик — очищаем массивы и генерируем заново
    shapes = [];
    shapes2 = [];
    boxes = [];

    noiseGrid(random(0, 500), shapes, mouseVec);
    noiseGridDetailed(random(0, 500), 200, boxes, secondary);
    noiseGridColor(random(0, 500), shapes2, secondary);
  }
}

// ---------------------------------------------------------
// Аналог ваших функций buildShapes, build3DLines, build3DBoxes
// ---------------------------------------------------------

function build3DLines(arr) {
  for (let s of arr) {
    s.build3Dline();
  }
}

function build3DBoxes(arr) {
  for (let s of arr) {
    noStroke();
    // fill с альфа-каналом (четвёртый параметр) работает так же
    fill(180, 150, 80, 120);
    s.build3DBox();
  }
}

// ---------------------------------------------------------
// Аналог ваших noiseGrid-функций
// ---------------------------------------------------------

function noiseGrid(seed, body, target) {
  let squareSize = 50;
  let t = 0.01;
  let t1 = 0.0001 * seed;
  for (let h = 0; h <= width; h += squareSize) {
    for (let v = 0; v <= height; v += squareSize) {
      let n = noise(
        map(h + t1, 0, width, 0, 5),
        map(v, 0, height, 0, 5),
        t * seed
      );
      if (n > 0.6) {
        // В Processing вы делали fill(255,50) + square(h,v,...)
        // В p5.js можно, но если рисовать сами квадраты как фон не нужно,
        // можно их пропустить
        let p = createVector(h, v, random(-500, 500));
        body.push(new Shape(p, target, random(2, 70), random(50, 250)));
        break;
      } else {
        // Можно, например, нарисовать "фон" квадрата
        // fill(0); noStroke(); rect(h, v, squareSize, squareSize);
      }
    }
  }
}

function noiseGridDetailed(seed, density, body, target) {
  let squareSize = density;
  let t = 0.01;
  let t1 = 0.0001 * seed;
  for (let h = 0; h <= width; h += squareSize) {
    for (let v = 0; v <= height; v += squareSize) {
      let n = noise(
        map(h + t1, 0, width, 0, 5),
        map(v, 0, height, 0, 5),
        t * seed
      );
      if (n > 0.6) {
        let individ = random(1000);
        let p = createVector(h, v, random(-500, 500));
        body.push(new Shape(p, target, random(2, 70), random(50, 250), individ));
        randomSeed(int(individ));
        break;
      } else {
        // fill(0); rect(h, v, squareSize, squareSize);
      }
    }
  }
}

function noiseGridColor(seed, body, target) {
  let squareSize = 50;
  let t = 0.01;
  let t1 = 0.0001 * seed;
  for (let h = 0; h <= width; h += squareSize) {
    for (let v = 0; v <= height; v += squareSize) {
      let n = noise(
        map(h + t1, 0, width, 0, 5),
        map(v, 0, height, 0, 5),
        t * seed
      );
      if (n > 0.6) {
        let p = createVector(h, v, random(-500, 500));
        // Пробросим shapeColor, strokeColor, strokeW
        body.push(
          new Shape(p, target, random(2, 50), random(50, 250), 50,
                    color(255), color(255), 5)
        );
        break;
      }
    }
  }
}

// ---------------------------------------------------------
// Класс Shape (перевод на JS)
// ---------------------------------------------------------
class Shape {
  // В JS нет перегрузки конструкторов, поэтому делаем единый
  constructor(_position, _target, _h, _v, _d, _shapeColor, _strokeColor, _strokeW) {
    // Если что-то не передали, подставим дефолты
    this.position = _position;
    this.target = _target;
    this.h = _h;
    this.v = _v;
    // d может быть undefined, тогда 0
    this.d = _d || 0;

    this.shapeColor = _shapeColor || color(255, 0, 0);
    this.strokeColor = _strokeColor || color(0);
    this.strokeW = _strokeW || 1;

    this.seed = random(5);
    this.boxW = 100;
    this.boxH = 100;
    this.boxD = 100;
  }

  // Аналог build3Dline()
  build3Dline() {
    // Вычисляем вектор t = target - position, нормируем, умножаем на v
    let t = p5.Vector.sub(this.target, this.position);
    t.normalize();
    t.mult(this.v);

    push();
    // Сдвинулись к position
    translate(this.position.x, this.position.y, this.position.z);

    stroke(this.strokeColor);
    strokeCap(SQUARE);
    strokeWeight(this.h);
    line(0, 0, 0, t.x, t.y, t.z);

    pop();
  }

  // Аналог build3DBox()
  build3DBox() {
    let t = p5.Vector.sub(this.target, this.position);
    t.normalize();
    t.mult(this.v);

    push();
    translate(this.position.x, this.position.y, this.position.z);
    // Примитивная «попытка» повторить rotateX, rotateY как в Processing:
    rotateX(atan(t.y / (t.x || 0.001)));
    rotateY(atan(t.y / (t.z || 0.001)));

    strokeCap(SQUARE);
    // fill уже установили перед вызовом
    box(this.boxW, this.boxD, this.boxH);
    pop();
  }

  // Если нужно, можно добавить остальные методы, например archi(), buildLine() и т.п.
}
