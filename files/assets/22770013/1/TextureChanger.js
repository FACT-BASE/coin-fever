//このスクリプトがアタッチされたentityのテクスチャを入れ替えます
var TextureChanger = pc.createScript('textureChanger');
TextureChanger.attributes.add("meshInstanceID",{type:"number",default:0});
TextureChanger.attributes.add('ShadingNetwork', {
    type: 'number',
    enum: [
        { 'deffuse': 1 },
        { 'emissive': 2 },
        { 'opacity': 3 }
    ],
    default:1
});
//TextureChanger.attributes.add("defaultTexture",{type:"asset",assetType: 'texture'});
TextureChanger.attributes.add("changeTextrue",{type:"asset",assetType: 'texture',array:true});

// initialize code called once per entity
TextureChanger.prototype.initialize = function() {
    this.defaultTexture = new pc.Texture();
    switch(this.ShadingNetwork){
        case 1 : this.defaultTexture = this.entity.model.meshInstances[this.meshInstanceID].material._diffuseMap; break;
        case 2 : this.defaultTexture = this.entity.model.meshInstances[this.meshInstanceID].material._emissiveMap; break;
        case 3 : this.defaultTexture = this.entity.model.meshInstances[this.meshInstanceID].material._opacityMap; break;
        default : break;
    }
    this.textures = [this.defaultTexture,...this.changeTextrue.map((texture)=>texture.resource)];

};

// update code called every frame
TextureChanger.prototype.update = function(dt) {
};


TextureChanger.prototype.change = function(changeID){
    this.switchTexture(this.changeTextrue[changeID].resource);
};

TextureChanger.prototype.backToOriginal = function(){
    this.switchTexture(this.textures[0]);
};

TextureChanger.prototype.blink = function(){
    this.switchTexture(this.textures[parseInt(Math.random()*this.textures.length,10)]);
};

TextureChanger.prototype.switchTexture = function(texture){
    switch(this.ShadingNetwork){
        case 1 : this.entity.model.meshInstances[this.meshInstanceID].material._diffuseMap = texture; break;
        case 2 : this.entity.model.meshInstances[this.meshInstanceID].material._emissiveMap = texture; break;
        case 3 : this.entity.model.meshInstances[this.meshInstanceID].material._opacityMap = texture; break;
        default : break;
    }
    this.entity.model.meshInstances[this.meshInstanceID].material.update();
};

// swap method called for script hot-reloading
// inherit your script state here
TextureChanger.prototype.swap = function(old) {

};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/