/**
 * Blocks for driving Motor connected to ports M1, M2 */
//% weight=100 color=#FFA500 icon="\uf21c" block="Motor Driver"
namespace quadrobotics_motor_driver {
    /************************************************************************************************************************************************
    * micro:bit motor driver blocks 
    ************************************************************************************************************************************************/
    /*Note that Forward and reverse are slightly arbitrary, as it depends on how the motor is wired...*/
    export enum MotorDirection {
        //% block="Clockwise ⟳"
        Clockwise,
        //% block="Anti-Clockwise ⟲"
        Anti-Clockwise
    }

