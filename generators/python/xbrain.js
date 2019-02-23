'use strict';

goog.provide('Blockly.Python.xbrain');
goog.require('Blockly.Python');

Blockly.Python['connect'] = function(block) {
  var ip = Blockly.Python.valueToCode(block, 'IP', Blockly.Python.ORDER_ATOMIC) || "127.0.0.1:15550";
  var wait_ready = Blockly.Python.valueToCode(block, 'WAIT_READY', Blockly.Python.ORDER_ATOMIC) || 'True';
  var baud = Blockly.Python.valueToCode(block, 'BAUD', Blockly.Python.ORDER_ATOMIC) || 115200;
  
  Blockly.Python.definitions_['import_dronekit'] = 'import dronekit';

  var code = 'dronekit.connect(' + ip + ', wait_ready=' + wait_ready + ', baud=' + baud + ')\n';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['vehicle_mode'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  var mode = Blockly.Python.valueToCode(block, 'MODE', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_dronekit'] = 'import dronekit';

  var code = vehicle + '.mode = dronekit.VehicleMode(' + mode + ')\n';
  
  return code;
};

Blockly.Python['vehicle_arm'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  var arm = Blockly.Python.valueToCode(block, 'ARM', Blockly.Python.ORDER_ATOMIC) || 'True';

  var code = vehicle + '.armed=' + arm + '\n';

  return code;
};

Blockly.Python['sleep'] = function(block) {
  var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = 'time.sleep(' + seconds + ')\n';

  return code;
};

Blockly.Python['arm_and_takeoff'] = function(block) {
  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  var altitude = Blockly.Python.valueToCode(block, 'ALTITUDE', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_dronekit'] = 'import dronekit';
  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = '';
  code += 'def arm_and_takeoff(aTargetAltitude):\n';
  code += Blockly.Python.INDENT + 'print("Basic pre-arm checks")\n';
  code += Blockly.Python.INDENT + 'while not ' + vehicle + '.is_armable:\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'print(" Waiting for vehicle to initialise...")\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'time.sleep(1)\n';
  code += Blockly.Python.INDENT + 'print("Arming motors")\n';
  code += Blockly.Python.INDENT + vehicle + '.mode = dronekit.VehicleMode("GUIDED")\n';
  code += Blockly.Python.INDENT + vehicle + '.armed = True\n';
  code += Blockly.Python.INDENT + 'while not ' + vehicle + '.armed:\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'print(" Waiting for arming...")\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'time.sleep(1)\n';
  code += Blockly.Python.INDENT + 'print("Taking off!")\n';
  code += Blockly.Python.INDENT + vehicle + '.simple_takeoff(aTargetAltitude)\n';
  code += Blockly.Python.INDENT + 'while True:\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'print(" Altitude: ", ' + vehicle + '.location.global_relative_frame.alt)\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'if ' + vehicle + '.location.global_relative_frame.alt>=aTargetAltitude*0.95:\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + Blockly.Python.INDENT + 'print("Reached target altitude")\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + Blockly.Python.INDENT + 'break\n';
  code += Blockly.Python.INDENT + Blockly.Python.INDENT + 'time.sleep(1)\n\n';
  code += 'arm_and_takeoff('+ altitude + ')\n';

  return code;
};

Blockly.Python['close'] = function(block) {
	  var vehicle = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  
  var code = vehicle + '.close()\n';

  return code;
};

