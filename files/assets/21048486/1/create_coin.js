const CreateCoin = pc.createScript('createCoin');
CreateCoin.attributes.add("Coin", { type: "entity" }); //複製するコインの型と名前を指定

CreateCoin.prototype.create = function(point) {
  if(WalletValue < 1) return ;   
  WalletValue--;
  const {x,y} = point;
  const coin = this.Coin.clone(); // テンプレート化されたコインを取得する
  const position = this.entity.getPosition();
  coin.setLocalPosition(x, y , 0);
  this.app.root.addChild(coin);
  coin.enabled = true; // 非表示になっているコインを表示する

};