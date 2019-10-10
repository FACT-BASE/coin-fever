var AnimatedTexture = pc.createScript('animatedTexture');

AnimatedTexture.attributes.add('materialAsset', {
    type: 'asset',
    assetType: 'material'
});

AnimatedTexture.attributes.add('numFrames', {
    type: 'number',
    default: 1,
    description: 'Number of frames to play before looping'
});

AnimatedTexture.attributes.add('startFrame', {
    type: 'number',
    default: 0,
    description: 'Frame to start animation from'
});

AnimatedTexture.attributes.add('width', {
    type: 'number',
    default: 1,
    description: 'Number of frames wide'
});

AnimatedTexture.attributes.add('height', {
    type: 'number',
    default: 1,
    description: 'Number of frames high'
});

AnimatedTexture.attributes.add('frameRate', {
    type: 'number',
    default: 1,
    description: 'Playback frames per second'
});

// initialize code called once per entity
AnimatedTexture.prototype.initialize = function() {
    if (this.materialAsset) {
        this.material = this.materialAsset.resource;
    }

    this.timer = 1/this.frameRate;
    this.frame = this.startFrame;
    this.transform = new pc.Vec4();

    this.updateMaterial(this.frame);
};

// update code called every frame
AnimatedTexture.prototype.update = function(dt) {
    // calculate when to animate to next frame
    this.timer -= dt;            
    if (this.timer < 0) {
        // move to next frame
        this.frame++;
        if (this.frame >= (this.numFrames + this.startFrame)) {
            this.frame = this.startFrame;
        }

        this.updateMaterial(this.frame);

        // reset the timer
        this.timer = 1/this.frameRate;
    }
};


AnimatedTexture.prototype.updateMaterial = function (frame) {
    // calculate how much to change UV to go to next frame
    var dx = 1 / this.width;
    var dy = 1 / this.height;

    // Convert frame number into UV co-ordinate
    var x = frame % this.width;
    var y = Math.floor(frame / this.width);

    var meshes = this.entity.model.meshInstances;

    // create the transform vector (tilingx, tilingy, offsetx, offsety)
    // and override the material properties for this mesh
    // This allows us to use different settings for different Entities, but share the same material
    this.transform.set(dx, dy, x * dx, (1 - dy) - (y * dy));
    meshes[0].setParameter("texture_diffuseMapTransform", this.transform.data);
    meshes[0].setParameter("texture_emissiveMapTransform", this.transform.data);
    meshes[0].setParameter("texture_opacityMapTransform", this.transform.data);
};
