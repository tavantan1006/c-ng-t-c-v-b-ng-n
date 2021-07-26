class SwitchButton {
    lamp;
    status;

    constructor(status) {
        this.status = status;
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOff() {
        this.lamp.turnOff();
        this.status = false;
    }

    switchOn() {
        this.lamp.turnOn();
        this.status = true;

    }

}

class ElectricLamp {
    status;

    constructor(status) {
        this.status = status;
    }


    turnOff() {
        this.status = false
    }

    turnOn() {
        this.status = true
    }
}
let electricLamp=new ElectricLamp(false);
let switchButton=new SwitchButton(false);
switchButton.connectToLamp(electricLamp)
document.write('công tắc đang?'+ switchButton.status +'<br>')
switchButton.switchOn()
if(switchButton.status)
{
    electricLamp.turnOn()
    document.write('bóng đèn bật'+ electricLamp.status +'<br>')

}
else{
    electricLamp.turnOff()
    document.write('bóng đèn đang'+ electricLamp.status)
}
document.write('công tác đang?' + switchButton.status + ' <br>')
switchButton.switchOff()
if(switchButton.status)
{
    electricLamp.turnOn()
    document.write('bóng đèn bật'+ electricLamp.status +'<br>')

}
else{
    electricLamp.turnOff()
    document.write('bóng đèn tắt'+ electricLamp.status)}