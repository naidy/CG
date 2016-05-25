var Teapot = function(){
	this.mesh = teapot.clone();
	scene.add (this.mesh);
	meshes.push (this.mesh);

	this.angle = 0;
	this.turn = true;
	this.life = 1.0;
	this.ID = teapots.push (this) - 1;
}

Teapot.prototype.expire = function(){
	scene.remove (this.mesh);
}

Teapot.prototype.update = function(){
	this.life -= 0.005;
	if (this.life < 0)
		this.expire();
	else{
		if (this.turn){
			this.angle += 3 * this.life;
			this.mesh.rotation.y = dToR(this.angle);
			this.mesh.material.uniforms.lightPos.value.copy(light.position);
    		this.mesh.material.uniforms.opacity.value = this.life;
		}
	}
}