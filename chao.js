import * as THREE from 'three'
import './index.js'

const chao = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.5, 10),
    new THREE.MeshLambertMaterial({ color: 0x0000ff })
)
chao.position.y = -2

export {chao}

// chao.receiveShadow = true