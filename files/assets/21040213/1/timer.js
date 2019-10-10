const Timer = pc.createScript('timer');

Timer.prototype.update = function(dt) {
        this.entity.element.text = TimerValue.toString()
    
};
