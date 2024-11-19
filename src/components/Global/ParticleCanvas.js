import { useEffect } from 'react';

const ParticleCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 250;
        this.dx = Math.random() * 3;
        this.dy = Math.random() * 3;
        this.hue = Math.random() * 360; // Random hue for color
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${this.hue}, 100%, 50%, 0.5)`; // 50% opacity using HSLA
        context.fill();
      }

      move() {
        this.x += this.dx;
        this.y += this.dy;
        // Reverse direction if particle reaches canvas boundaries
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
      }
    }

    function createInitialParticles() {
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const particle = new Particle(x, y);
        particles.push(particle);
      }
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.move();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    createInitialParticles();
    animate();

    // Handle window resizing to adjust canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="gradient bg-slate-300">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default ParticleCanvas;
