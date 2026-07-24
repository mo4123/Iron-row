import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDSceneProps {
  className?: string;
}

export const ThreeDScene: React.FC<ThreeDSceneProps> = ({ className = 'w-full h-full' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 3, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0xf2ca50, 1.5, 100);
    secondaryLight.position.set(-5, -3, 2);
    scene.add(secondaryLight);

    // Group for Dumbbell / Kettlebell structure
    const group = new THREE.Group();

    // Gold material
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
    });

    // Handle
    const handleGeom = new THREE.CylinderGeometry(0.12, 0.12, 1.2, 32);
    const handle = new THREE.Mesh(handleGeom, goldMat);
    handle.rotation.z = Math.PI / 2;

    // Weights
    const weightGeom = new THREE.TorusGeometry(0.42, 0.16, 24, 100);

    const leftWeight = new THREE.Mesh(weightGeom, goldMat);
    leftWeight.position.x = -0.6;
    leftWeight.rotation.y = Math.PI / 2;

    const rightWeight = new THREE.Mesh(weightGeom, goldMat);
    rightWeight.position.x = 0.6;
    rightWeight.rotation.y = Math.PI / 2;

    // Inner detail rings
    const innerRingGeom = new THREE.TorusGeometry(0.28, 0.08, 16, 60);
    const leftInnerRing = new THREE.Mesh(innerRingGeom, goldMat);
    leftInnerRing.position.x = -0.4;
    leftInnerRing.rotation.y = Math.PI / 2;

    const rightInnerRing = new THREE.Mesh(innerRingGeom, goldMat);
    rightInnerRing.position.x = 0.4;
    rightInnerRing.rotation.y = Math.PI / 2;

    group.add(handle, leftWeight, rightWeight, leftInnerRing, rightInnerRing);
    scene.add(group);

    camera.position.z = 3.2;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (e.clientY - rect.top) / container.clientHeight - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Continuous rotation
      group.rotation.x += 0.008;
      group.rotation.y += 0.012;

      // Smooth floating oscillation
      group.position.y = Math.sin(Date.now() * 0.0018) * 0.22;

      // Mouse interactivity smoothing
      group.rotation.x += (mouseY - group.rotation.x * 0.1) * 0.05;
      group.rotation.y += (mouseX - group.rotation.y * 0.1) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};
