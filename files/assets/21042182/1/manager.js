const Manager = pc.createScript('manager');
Manager.attributes.add("MainCamera",{type:"entity"});
Manager.attributes.add("SpecialCoin",{type:"entity"});
Manager.attributes.add("Coin",{type:"entity"});

let isShowered = false

Manager.prototype.initialize = function() {
    this.cameraAnimation(this.MainCamera);
    this.setTimer(IntervalValue);
    // this.special(IntervalValue);

};


Manager.prototype.cameraAnimation = function({camera}){
    
    if(this.app.touch){

       camera.fov = 35;
    }else{
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.create, this);
    }
}

Manager.prototype.setTimer = function(IntervalValue){
    setInterval(() => {
    
    if(TimerValue > 0){
        TimerValue = TimerValue - 1;
    }else{
        TimerValue = 5;
        WalletValue++;
    }
    
}, IntervalValue)
}

Manager.prototype.special = function(IntervalValue){
setInterval(() => {
 
  const randNum = Math.floor(Math.random()*(0-(100))+(100))
  if(randNum > 50){
      isShowered = true
  }else{
      isShowered = false
  }
  const coin = this.SpecialCoin.clone(); // テンプレート化されたコインを取得する
  const position = this.entity.getPosition();
  coin.setName("coin");
  coin.setLocalPosition(Math.floor(Math.random()*(3-(-3))+(-3)), 6 , 0);
  this.app.root.addChild(coin);
  coin.enabled = true; // 非表示になっているコインを表示する
    
    
}, IntervalValue * 3)
}


Manager.prototype.update = function(){
    
    if(isShowered){
          const coin = this.Coin.clone(); // テンプレート化されたコインを取得する
          const position = this.entity.getPosition();
          coin.setName("coin");
          coin.setLocalPosition(Math.random()*(1.5-(-1.5))+(-1.5), Math.random()*(6-(5))+(5), Math.random()*(0.8-(0.4))+(0.4));
          this.app.root.addChild(coin);
          coin.enabled = true; // 非表示になっているコインを表示する
    }
    
}