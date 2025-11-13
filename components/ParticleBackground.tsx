'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Setup da cena
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Criar partículas
    const particlesCount = 150
    const positions = new Float32Array(particlesCount * 3)
    const velocities: THREE.Vector3[] = []
    const originalPositions: THREE.Vector3[] = []

    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 100
      const y = (Math.random() - 0.5) * 100
      const z = (Math.random() - 0.5) * 50
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.01
      ))

      originalPositions.push(new THREE.Vector3(x, y, z))
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Material das partículas com gradiente
    const material = new THREE.PointsMaterial({
      size: 0.8,
      transparent: true,
      opacity: 0.6,
      vertexColors: false,
      color: 0x3b82f6, // primary-500
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Criar linhas conectando partículas próximas
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf97316, // accent-500
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      const positionAttribute = geometry.attributes.position

      // Smooth mouse movement
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05

      const mouseVector = new THREE.Vector3(
        mouseRef.current.x * 50,
        mouseRef.current.y * 50,
        0
      )

      // Atualizar posição das partículas
      const linePositions: number[] = []
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        const particlePos = new THREE.Vector3(
          positionAttribute.array[i3],
          positionAttribute.array[i3 + 1],
          positionAttribute.array[i3 + 2]
        )

        // Distância do mouse
        const distance = particlePos.distanceTo(mouseVector)
        const maxDistance = 20

        if (distance < maxDistance) {
          // Repelir partículas do mouse
          const force = (1 - distance / maxDistance) * 0.5
          const direction = new THREE.Vector3()
            .subVectors(particlePos, mouseVector)
            .normalize()
            .multiplyScalar(force)
          
          velocities[i].add(direction)
        } else {
          // Retornar à posição original suavemente
          const returnForce = new THREE.Vector3()
            .subVectors(originalPositions[i], particlePos)
            .multiplyScalar(0.01)
          
          velocities[i].add(returnForce)
        }

        // Aplicar velocidade com damping
        velocities[i].multiplyScalar(0.95)
        particlePos.add(velocities[i])

        // Adicionar movimento ondulante
        particlePos.x += Math.sin(elapsedTime + i * 0.1) * 0.01
        particlePos.y += Math.cos(elapsedTime + i * 0.15) * 0.01

        positionAttribute.array[i3] = particlePos.x
        positionAttribute.array[i3 + 1] = particlePos.y
        positionAttribute.array[i3 + 2] = particlePos.z

        // Criar linhas entre partículas próximas
        for (let j = i + 1; j < particlesCount; j++) {
          const j3 = j * 3
          const otherPos = new THREE.Vector3(
            positionAttribute.array[j3],
            positionAttribute.array[j3 + 1],
            positionAttribute.array[j3 + 2]
          )

          const dist = particlePos.distanceTo(otherPos)
          if (dist < 15) {
            linePositions.push(
              particlePos.x, particlePos.y, particlePos.z,
              otherPos.x, otherPos.y, otherPos.z
            )
          }
        }
      }

      positionAttribute.needsUpdate = true

      // Atualizar linhas
      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      )

      // Rotação suave da câmera
      camera.position.x = mouseRef.current.x * 5
      camera.position.y = mouseRef.current.y * 5
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      lineMaterial.dispose()
      lineGeometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

