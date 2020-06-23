/* global AFRAME, THREE */
var global_pos;
var field;
var prev_pos = { x: 0, y: 0.2, z: -3 };

if (typeof AFRAME === "undefined") {
  throw new Error(
    "Component attempted to register before AFRAME was available."
  );
}

var x = [0];
var y = [0];
var z = [0];
var count = 0;
var cubeNumber;

function makeCube(cubeNumber) {
  var opacity = Math.random();
  var rotate = 90 * Math.round(Math.random() * 3);
  var cube = document.createElement("a-entity");
  cube.setAttribute(
    "unit",
    `cubeRotate:${rotate}; cubeOpacity:${opacity}; modelNumber:${cubeNumber}`
  );
  cube.setAttribute("position", `${x[count]} ${y[count]} ${z[count]}`);
  count++;
  var xNew = x[count - 1] + (Math.round(Math.random() * 2) * 0.5 - 0.5);
  x.push(xNew);
  var yNew = y[count - 1] + (Math.round(Math.random() * 2) * 0.5 - 0.5);
  if (yNew > 0) {
    y.push(yNew);
  } else {
    y.push(0);
  }
  var zNew = z[count - 1] + (Math.round(Math.random() * 2) * 0.5 - 0.5);
  if (xNew == 0 && yNew <= 0) {
    z.push(0.5);
  } else {
    z.push(zNew);
  }
  field.appendChild(cube);
}

AFRAME.registerComponent("position-reader", {
  tick: function () {
    var position = this.el.object3D.getWorldPosition(position);
    global_pos = position;
    if (
      Math.sqrt(
        Math.pow(global_pos.x - prev_pos.x, 2) +
          Math.pow(global_pos.z - prev_pos.z, 2)
      ) > 0.5
    ) {
      var randCube = Math.round(Math.random() * 5 + 1);
      makeCube(randCube);
      prev_pos = global_pos;
    }
  },
});

AFRAME.registerComponent("unit", {
  schema: {
    cubeRotate: { type: "number", default: 0 },
    cubeOpacity: { type: "number", default: 1 },
    modelNumber: { type: "number", default: 2 },
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    var cubeO = data.cubeOpacity;
    var cubeR = data.cubeRotate;
    var modNum = data.modelNumber;

    var b2 = document.createElement("a-entity");
    b2.setAttribute("material", {
      side: "double",
      color: "#655F50",
      roughness: 0.9,
      metalness: 1,
    });
    b2.setAttribute("position", `0 0 0`);
    b2.setAttribute("rotation", `0 ${cubeR} 0`);
    b2.setAttribute("scale", "0.01, 0.01, 0.01");
    b2.setAttribute(
      "animation",
      "property: material.opacity; from: 0; to: 1; loop: false; dur: 3000"
    );
    switch (modNum) {
      case 1:
        b2.setAttribute("obj-model", "obj: models/Building1.obj");
        b2.setAttribute("sound", {
          src: "sound/Eindhoven.mp3",
          autoplay: true,
          loop: true,
          refDistance: 0.01,
          rolloffFactor: 0.01,
        });
        break;
      case 2:
        b2.setAttribute("obj-model", "obj: models/Building2.obj");
        b2.setAttribute("sound", {
          src: "sound/SD2.mp3",
          autoplay: true,
          loop: true,
          refDistance: 0.01,
          rolloffFactor: 0.01,
        });
        break;
      case 3:
        b2.setAttribute("obj-model", "obj: models/Building3.obj");
        b2.setAttribute("sound", {
          src: "sound/SF.mp3",
          autoplay: true,
          loop: true,
          refDistance: 0.01,
          rolloffFactor: 0.01,
        });
        break;
      case 4:
        b2.setAttribute("obj-model", "obj: models/Building4.obj");
        b2.setAttribute("sound", {
          src: "sound/Shanghai.mp3",
          autoplay: true,
          loop: true,
          refDistance: 0.01,
          rolloffFactor: 0.01,
        });
        break;
      case 5:
        b2.setAttribute("obj-model", "obj: models/Building5.obj");
        b2.setAttribute("sound", {
          src: "sound/Valencia.mp3",
          autoplay: true,
          loop: true,
          refDistance: 0.01,
          rolloffFactor: 0.01,
        });
        break;
    }
    b2.setAttribute("shadow", "cast:true; receive:true");
    el.appendChild(b2);
  },
  update: function () {},
});
