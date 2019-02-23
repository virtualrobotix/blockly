'use strict';

goog.provide('Blockly.Blocks.xbrain');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks.xbrain.HUE = 260;

Blockly.Blocks['connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Connect to vehicle");
    this.appendValueInput("IP")
        .setCheck("String")
        .appendField("Connection string");
    this.appendValueInput("WAIT_READY")
        .setCheck("Boolean")
        .appendField("Wait ready");
    this.appendValueInput("BAUD")
        .setCheck("Number")
        .appendField("Baudrate");
    this.setOutput(true, 'Vehicle');
    this.setColour(230);
    this.setTooltip("Connect to vehicle");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vehicle_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set vehicle mode");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.appendValueInput("MODE")
        .setCheck("String")
        .appendField("Vehicle mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set vehicle mode");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vehicle_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arm vehicle");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.appendValueInput("ARM")
        .setCheck("Boolean")
        .appendField("Arming");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Arm vehicle");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for seconds");
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("Seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Wait for seconds");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['arm_and_takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arm and Takeoff");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.appendValueInput("ALTITUDE")
        .setCheck("Number")
        .appendField("Altitude");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Arm And Takeoff");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Close vehicle");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("Close vehicle");
 this.setHelpUrl("");
  }
};
