/* Check the following for configuration options */

/* canvas-gauges.com/documentation/user-guide/configuration */
/* Do not keep numbers or boolean inside quotes, It should be used as it is  */
/* Reference : https://github.com/Mikhus/canvas-gauges/wiki/Gauge-API */
var dial_ctr = 0;
var blue_compass_obj;

function blue_compass(container_id, w, h) {
  dial_ctr += 1;
  var canvas_id = "compass_canvas_".concat(dial_ctr.toString());
  var cv = document.createElement("canvas");
  cv.setAttribute("id", canvas_id);
  cv.setAttribute("data-type", "radial-gauge");

  var main_container = document.getElementById(container_id);
  main_container.appendChild(cv);

  blue_compass_obj = new RadialGauge({
    renderTo: canvas_id,
    width: w,
    height: h,
    minValue: 0,
    maxValue: 360,
    majorTicks: ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"],
    minorTicks: 22,
    ticksAngle: 360,
    startAngle: 180,
    strokeTicks: false,
    highlights: false,
    colorPlate: "#33a",
    colorMajorTicks: "#f5f5f5",
    colorMinorTicks: "#ddd",
    colorNumbers: "#ccc",
    colorNeedle: "rgba(240, 128, 128, 1)",
    colorNeedleEnd: "rgba(255, 160, 122, .9)",
    valueBox: false,
    valueTextShadow: false,
    colorNeedleCircleInner: "#fff",
    colorNeedleCircleOuter: "#ccc",
    needleCircleSize: 15,
    needleCircleOuter: false,
    animationRule: "linear",
    needleType: "line",
    needleStart: 75,
    NeedleEnd: 99,
    needleWidth: 3,
    borders: true,
    borderInnerWidth: 0,
    borderMiddleWidth: 0,
    borderOuterWidth: 10,
    colorBorderOuter: "#ccc",
    colorBorderOuterEnd: "#ccc",
    colorNeedleShadowDown: "#222",
    borderShadowWidth: 0,
    animationTarget: "plate",
    units: "ᵍ",
    title: "DIRECTION",
    fontTitleSize: 19,
    colorTitle: "#f5f5f5",
    animationDuration: 1500,
    value: 360,
    animateOnInit: true,
  });
  blue_compass_obj.draw();
}

function update_compass_value(degrees) {
  blue_compass_obj.value = degrees;
}

function display_current_value() {
  var value = blue_compass_obj.value;
  console.log(value);
}

blue_compass("main_container", 200, 200);
update_compass_value(140);
display_current_value();
