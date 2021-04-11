let scene, camera, renderer;
let raycaster, mouse;

var scene_objects = [];

var chassis_base_m;
var chassis_base_l;
var chassis_plate_l;
var chassis_base_r;
var chassis_plate_r;

var turret_base;
var turret_middle_base;
var turret_core;

var turret_base_l;
var turret_middle_panel_l;
var turret_side_plate_l;
var turret_front_corner_l;
var turret_back_corner_l;

var turret_base_r;
var turret_middle_panel_r;
var turret_side_plate_r;
var turret_front_corner_r;
var turret_back_corner_r;

var turret_hinge_back;
var turret_hinge_front;
var barrel;

var track_l;
var wheel_outer_l;
var wheel_inner_l;
var track_r;
var wheel_outer_r;
var wheel_inner_r;

var tick = 0;
var state = 2;
var disassemble = true;

var button = document.getElementById("toggle");

init();
