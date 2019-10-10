const Coin = pc.createScript('coin');

Coin.prototype.update = function(dt) {
    this.entity.element.text = WalletValue.toString()
};

