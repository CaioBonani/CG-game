import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import {chao} from './chao.js'
const cena = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000)
camera.position.set(4.61, 2.74, 8)

const renderizador = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderizador.shadowMap.enabled = true
renderizador.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderizador.domElement)

const controles = new OrbitControls(camera, renderizador.domElement)

const bloco = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
const cubo = new THREE.Mesh(bloco, material)
cena.add(cubo)

cena.add(chao)

const luz = new THREE.DirectionalLight(0xffffff, 1)
luz.position.z = 3
cena.add(luz)

camera.position.z = 5


function anim () {

    requestAnimationFrame(anim)
    renderizador.render(cena, camera)
    cubo.rotation.x += 0.01
    cubo.rotation.y += 0.01
}

anim()