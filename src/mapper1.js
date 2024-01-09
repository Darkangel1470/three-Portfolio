import * as Three from 'three';
const json = scene.toJSON()
function mapper1() {
    var group = new THREE.Group();
    let step1;
    let step2;
    let geometry = new THREE.BoxGeometry(1,1,1)
    let material = new THREE.MeshBasicMaterial({color: 0x0000ff})
    step1 = new THREE.Mesh(geometry, material)
    step2 = new THREE.Mesh(geometry, material)
    step1.position.x=1;
    group.add(step1);
    group.add(step2);
    return group
}

export default mapper1;