import Matter from "matter-js";

class Physics {
  init() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite;

    var engine = Engine.create();

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        background: "#f0f0f0",
        wireframes: false,
      },
    });

    let walls = [
      Bodies.rectangle(300, 0, 600, 10, { isStatic: true }),
      Bodies.rectangle(300, 600, 600, 10, { isStatic: true }),
      Bodies.rectangle(600, 300, 10, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 10, 600, { isStatic: true }),
    ];

    let boxes = [
      Bodies.rectangle(100, 200, 150, 60, { chamfer: { radius: 30 } }),
      Bodies.rectangle(180, 200, 150, 60, { chamfer: { radius: 30 } }),
      Bodies.rectangle(240, 200, 150, 60, { chamfer: { radius: 30 } }),
      Bodies.rectangle(300, 200, 150, 60, { chamfer: { radius: 30 } }),
      Bodies.rectangle(360, 200, 150, 60, { chamfer: { radius: 30 } }),
      Bodies.rectangle(460, 200, 150, 60, { chamfer: { radius: 30 } }),
    ];

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseCoonstrain = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: false,
        },
      },
    });
    render.mouse = mouse;

    Composite.add(engine.world, [...walls, ...boxes, mouseCoonstrain]);

    Render.run(render);
    var runner = Runner.create();
    Runner.run(runner, engine);
  }
}

const physics = new Physics();
physics.init();
