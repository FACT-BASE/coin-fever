var TriggerScore = pc.createScript('triggerScore');

TriggerScore.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

TriggerScore.prototype.onTriggerEnter = function(entity) {
        WalletValue++;
};
