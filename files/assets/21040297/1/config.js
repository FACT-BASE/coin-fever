const Config = pc.createScript('config');
Config.attributes.add("Wallet", { type: "number", default: 30 });
Config.attributes.add("Timer", { type: "number", default: 5 });
Config.attributes.add("Interval",{type:"number", default: 1000});

let TimerValue,WalletValue,Interval;
Config.prototype.initialize = function() {
    TimerValue = this.Timer;
    WalletValue = this.Wallet;
    IntervalValue = this.Interval;
};

