'use strict';

goog.provide('Blockly.Python.xvehicle');
goog.require('Blockly.Python');

Blockly.Python['is_armable'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);

  var code = vehicle + '.is_armable';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['is_armed'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);

  var code = vehicle + '.armed';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['simple_takeoff'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  var altitude = Blockly.Python.valueToCode(block, 'ALTITUDE', Blockly.Python.ORDER_ATOMIC);

  var code = vehicle + '.simple_takeoff(' + altitude + ')\n';

  return code;
};

Blockly.Python['vehicle_location'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);

  var code = vehicle + '.location';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['location_globalrelativeframe'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);

  var code = location + '.global_relative_frame';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['globalrelativeframe_alt'] = function(block) {
  var globalrelativeframe = Blockly.Python.valueToCode(block, 'GLOBALRELATIVEFRAME', Blockly.Python.ORDER_ATOMIC);

  var code = globalrelativeframe + '.alt';

  return [code, Blockly.Python.ORDER_NONE];
};