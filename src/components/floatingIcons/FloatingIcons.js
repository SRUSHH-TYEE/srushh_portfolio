import React, { useEffect, useState, useRef } from "react";
import "./FloatingIcons.scss";

const FloatingIcons = ({ icons }) => {
  const [floatingIcons, setFloatingIcons] = useState([]);
  const containerRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(false);
  const mouseTimeoutRef = useRef(null);

  // Track mouse/pointer position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePositionRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      };
      mouseActiveRef.current = true;
      
      // Reset the active flag after mouse stops moving
      clearTimeout(mouseTimeoutRef.current);
      mouseTimeoutRef.current = setTimeout(() => {
        mouseActiveRef.current = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      mouseActiveRef.current = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchend', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  // Initialize icons with safe distances to prevent overlapping
  useEffect(() => {
    const safeDistance = 15; // Minimum distance between icons in percentage
    const initializeIcons = () => {
      const initializedIcons = [];
      
      // Helper function to check if a position would cause overlap
      const wouldOverlap = (newX, newY, size) => {
        for (const icon of initializedIcons) {
          const distance = Math.sqrt(
            Math.pow(newX - icon.x, 2) + 
            Math.pow(newY - icon.y, 2)
          );
          if (distance < safeDistance + (size + icon.size)) {
            return true;
          }
        }
        return false;
      };
      
      // Place each icon in a non-overlapping position
      icons.forEach((icon, index) => {
        let attempts = 0;
        let x, y;
        const size = 4; // Fixed larger size for all icons
        
        // Try to find a non-overlapping position
        do {
          x = Math.random() * 80 + 10; // 10-90%
          y = Math.random() * 80 + 10; // 10-90%
          attempts++;
          
          // If still can't find position after many attempts, just place it
          if (attempts > 100) {
            break;
          }
        } while (wouldOverlap(x, y, size));
        
        initializedIcons.push({
          ...icon,
          id: index,
          x,
          y,
          size,
          originalSize: size,
          speedX: (Math.random() - 0.5) * 0.1, // slower movement
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.3 + 0.7, // 0.7-1.0
          rotation: Math.random() * 360,
          repelStrength: 1 + Math.random() * 0.5 // How strongly it responds to pointer
        });
      });
      
      return initializedIcons;
    };

    setFloatingIcons(initializeIcons());
  }, [icons]);

  // Animation loop
  useEffect(() => {
    if (floatingIcons.length === 0) return;
    
    const animationFrame = requestAnimationFrame(function animate() {
      setFloatingIcons(prevIcons => {
        // First handle mouse repulsion for all icons
        let updatedIcons = [...prevIcons];
        
        if (mouseActiveRef.current) {
          updatedIcons = updatedIcons.map(icon => {
            // Calculate distance from mouse
            const dx = icon.x - mousePositionRef.current.x;
            const dy = icon.y - mousePositionRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only repel if mouse is within certain range
            if (distance < 20) {
              // Repulsion force inversely proportional to distance
              const repelForce = (20 - distance) * 0.05 * icon.repelStrength;
              
              // Calculate new position
              let newX = icon.x + (dx / distance) * repelForce;
              let newY = icon.y + (dy / distance) * repelForce;
              
              // Ensure within bounds
              newX = Math.max(0, Math.min(100, newX));
              newY = Math.max(0, Math.min(100, newY));
              
              return {
                ...icon,
                x: newX,
                y: newY,
                // Keep same size - no scaling on hover
                size: icon.originalSize
              };
            }
            
            // Reset size if mouse not close
            return {
              ...icon,
              size: icon.originalSize
            };
          });
        }
        
        // Then handle regular movement and collision avoidance
        return updatedIcons.map((icon, iconIndex) => {
          // Calculate normal movement
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= 100) icon.speedX *= -1;
          if (newY <= 0 || newY >= 100) icon.speedY *= -1;
          
          // Ensure within bounds
          newX = Math.max(0, Math.min(100, newX));
          newY = Math.max(0, Math.min(100, newY));
          
          // Check for collisions with other icons and adjust
          updatedIcons.forEach((otherIcon, otherIndex) => {
            if (iconIndex !== otherIndex) {
              const dx = newX - otherIcon.x;
              const dy = newY - otherIcon.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDistance = 5 + icon.size + otherIcon.size;
              
              // If too close, apply small repulsion force
              if (distance < minDistance) {
                const repelForce = (minDistance - distance) * 0.03;
                newX += (dx / distance) * repelForce;
                newY += (dy / distance) * repelForce;
                
                // Slightly adjust speed for natural movement
                icon.speedX += (Math.random() - 0.5) * 0.01;
                icon.speedY += (Math.random() - 0.5) * 0.01;
                
                // Limit maximum speed
                icon.speedX = Math.max(-0.2, Math.min(0.2, icon.speedX));
                icon.speedY = Math.max(-0.2, Math.min(0.2, icon.speedY));
              }
            }
          });
          
          // Slowly rotate icon
          const newRotation = (icon.rotation + 0.03) % 360;
          
          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: newRotation
          };
        });
      });
      
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [floatingIcons]);

  return (
    <div ref={containerRef} className="floating-container">
      {/* Custom cursor effect */}
      {mouseActiveRef.current && (
        <div className="custom-cursor" 
          style={{
            left: `${mousePositionRef.current.x}%`,
            top: `${mousePositionRef.current.y}%`,
          }}
        />
      )}
      
      {floatingIcons.map(icon => (
        <div
          key={icon.id}
          className="floating-icon"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
            fontSize: `${icon.size}rem`,
            opacity: icon.opacity,
            width: `${icon.size * 2}rem`,
            height: `${icon.size * 2}rem`,
          }}
        >
          <i className={icon.fontAwesomeClassname}></i>
        </div>
      ))}
    </div>
  );
};

// Example usage with default props
const SkillsBackground = ({ icons }) => {
  // Use provided icons or default to example icons
  const defaultIcons = [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ];
  
  return <FloatingIcons icons={icons || defaultIcons} />;
};

export default SkillsBackground;
export { FloatingIcons };