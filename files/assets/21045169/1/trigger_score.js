var TriggerScore = pc.createScript('triggerScore');

// initialize code called once per entity
TriggerScore.prototype.initialize = function() {
     this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};


TriggerScore.prototype.onTriggerEnter = function(entity) {
}