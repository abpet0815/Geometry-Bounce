const scene = new THREE.Scene();
//scene.background = new THREE.Color("#C0FF33");
const camera = new THREE.OrthographicCamera();

// Abpet Variables
let xSpeed = 0.0029;
let ySpeed = 0.0039;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

const planeGeometry = new THREE.PlaneGeometry( 0.35, 0.2 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const abpet = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( abpet );

abpet.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
camera.position.z = 1;

function updateColor()
{
    abpet.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
}

function animate() {
    requestAnimationFrame( animate );
    
    abpet.position.x += xSpeed;
   
    //If Statement
    if (abpet.position.x > 0.90)
    {
        xSpeed = -0.0029;
        abpet.scale.x -= 0.1;
        abpet.scale.y -= 0.1;
        updateColor();
    }
    if (abpet.position.x < -0.90)
    {
        xSpeed = 0.0029;
        abpet.scale.x -= 0.1;
        abpet.scale.y -= 0.1;
        updateColor();
    }
    
    abpet.position.y += ySpeed;

    if (abpet.position.y > 0.92)
    {
        ySpeed = -0.0029;
        abpet.scale.x -= 0.1;
        abpet.scale.y -= 0.1;
        updateColor();
    }
    if (abpet.position.y < -0.92)
    {
        ySpeed = 0.0029;
        abpet.scale.x -= 0.1;
        abpet.scale.y -= 0.1;
        updateColor();
    }


    renderer.render( scene, camera );
}
animate();