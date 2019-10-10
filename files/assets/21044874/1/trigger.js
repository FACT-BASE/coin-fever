const Trigger = pc.createScript('trigger');

Trigger.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

Trigger.prototype.onTriggerEnter = function(entity) {
    if(entity.tags.list()[0] === "coin"){
        entity.destroy()
    }
};