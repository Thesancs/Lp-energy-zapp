"use client";

import React, { useEffect, useRef } from 'react';

export const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    
    // Configuration adapted to Energy Zaap colors
    const connectionDistance = 150;
    const mouseConnectionDistance = 220;
    const fallSpeed = 0.8; 
    const particleColor = '#00FFA3'; // The main cyberpunk green
    const lineColor = 'rgba(0, 255, 163, '; // Match #00FFA3

    let mouse = {
      x: -1000,
      y: -1000,
      radius: mouseConnectionDistance
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      firing: number; 
      firingSpeed: number;

      constructor(width: number, height: number, isInitial = false) {
        this.x = Math.random() * width;
        this.y = isInitial ? Math.random() * height : -20; 
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = Math.random() * fallSpeed + 0.2; 
        this.radius = Math.random() * 2 + 1;
        this.firing = 0;
        this.firingSpeed = Math.random() * 0.02 + 0.005;
      }

      update(width: number, height: number, isMobile: boolean) {
        this.vx += (Math.random() - 0.5) * (isMobile ? 0.05 : 0.1);
        
        this.x += this.vx;
        this.y += this.vy;

        if (this.firing > 0) {
          this.firing -= this.firingSpeed;
          if (this.firing < 0) this.firing = 0;
        } else if (Math.random() < (isMobile ? 0.00005 : 0.0001)) { 
          this.firing = 1;
        }

        if (this.y > height + 20) {
          this.y = -20;
          this.x = Math.random() * width;
          this.vy = Math.random() * fallSpeed + 0.2;
        }

        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw(ctx: CanvasRenderingContext2D, isMobile: boolean) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + (this.firing * 2), 0, Math.PI * 2);
        
        if (this.firing > 0) {
          if (!isMobile) {
            ctx.shadowBlur = 15 * this.firing;
            ctx.shadowColor = particleColor;
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${this.firing})`; 
          ctx.fill();
          ctx.fillStyle = particleColor;
          ctx.globalAlpha = 0.8;
          ctx.fill();
          ctx.globalAlpha = 1.0;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = particleColor;
          ctx.fill();
        }
        ctx.closePath();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      // Define physical pixels based on the DPR
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Force scaling via CSS to ensure the logical size doesn't change
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Normalize drawing scale
      ctx.scale(dpr, dpr);

      particles = [];
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 30000 : 7000;
      const count = Math.min(Math.floor(window.innerWidth * window.innerHeight / density), isMobile ? 30 : 200);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(window.innerWidth, window.innerHeight, true));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const isMobile = window.innerWidth < 768;
      
      // Removed the hardcoded black background fill so it can be transparent 
      // over the dark sections, or kept if we want it isolated.
      // We will leave it fully transparent since it's going to be integrated as a background block.

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(window.innerWidth, window.innerHeight, isMobile);
        particles[i].draw(ctx, isMobile);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - (distance / connectionDistance)) * 0.3;
            const fireIntensity = Math.max(particles[i].firing, particles[j].firing);
            
            ctx.beginPath();
            if (fireIntensity > 0) {
              // Decreased white opacity significantly to make it more sublime and less aggressive
              ctx.strokeStyle = `rgba(255, 255, 255, ${(opacity + fireIntensity * 0.2) * 0.4})`;
              ctx.lineWidth = 0.5 + (fireIntensity * 0.3);
            } else {
              ctx.strokeStyle = `${lineColor}${opacity})`;
              ctx.lineWidth = 0.5;
            }
            
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();

            if (fireIntensity > 0.5) {
              const t = (Date.now() % 1000) / 1000;
              const px = particles[i].x + (particles[j].x - particles[i].x) * t;
              const py = particles[i].y + (particles[j].y - particles[i].y) * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#fff';
              ctx.fill();
              ctx.closePath();
            }
          }
        }

        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceMouse < mouse.radius) {
          const opacity = (1 - (distanceMouse / mouse.radius)) * 0.6;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 163, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.closePath();
          
          if (Math.random() < 0.01) particles[i].firing = 1;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      // Adjust mouse pos relative to canvas if it's positioned absolutely. 
      // For a fixed/absolute full-screen canvas, clientX/Y is usually fine.
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    const handleTouchMove = (e: TouchEvent) => { 
      if (e.touches.length > 0) { 
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left; 
        mouse.y = e.touches[0].clientY - rect.top; 
      } 
    };
    const handleTouchEnd = () => { mouse.x = -1000; mouse.y = -1000; };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent pointer-events-none"
    />
  );
};
