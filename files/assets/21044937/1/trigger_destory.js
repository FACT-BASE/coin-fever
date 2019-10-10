var TriggerDestory = pc.createScript('triggerDestory');

// initialize code called once per entity
TriggerDestory.prototype.initialize = function() {
     this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

// update code called every frame
TriggerDestory.prototype.update = function(dt) {
    
};

TriggerDestory.prototype.onTriggerEnter = function(entity) {
    entity.destroy()
}