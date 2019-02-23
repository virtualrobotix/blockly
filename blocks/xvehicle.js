'use strict';

goog.provide('Blockly.Blocks.xvehicle');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks.xvehicle.HUE = 260;

Blockly.Blocks['is_armable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is Armable");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Is Armable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['is_armed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is Armed");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Is Armed");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['simple_takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Simple Takeoff");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.appendValueInput("ALTITUDE")
        .setCheck("Number")
        .appendField("Target Altitude");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Simple takeoff");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vehicle_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vehicle Location");
    this.appendValueInput("VEHICLE")
        .setCheck("Vehicle")
        .appendField("Vehicle");
    this.setOutput(true, "Locations");
    this.setColour(230);
 this.setTooltip("Vehicle Location");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['location_globalrelativeframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Location Global Relative Frame");
    this.appendValueInput("LOCATION")
        .setCheck("Locations")
        .appendField("Location");
    this.setOutput(true, "LocationGlobalRelative");
    this.setColour(230);
 this.setTooltip("Location Global Relative Frame");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['globalrelativeframe_alt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Global Relative Frame Alt");
    this.appendValueInput("GLOBALRELATIVEFRAME")
        .setCheck("LocationGlobalRelative")
        .appendField("Global Relative Frame");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Global Relative Frame Alt");
    this.setHelpUrl("");
  }
};

