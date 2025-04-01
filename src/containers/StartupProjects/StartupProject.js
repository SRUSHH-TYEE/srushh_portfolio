import React, { useContext, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Carousel component for project images
const ImageCarousel = ({ images, projectName, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-carousel effect
  React.useEffect(() => {
    // Only set up auto-rotation if there are multiple images
    if (images.length <= 1) return;
    
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, 1500); // 2 seconds per slide
    }
    
    // Clear the interval when component unmounts or when isPaused changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentIndex, isPaused, images.length]);

  const goToPrevious = () => {
    // Pause auto-rotation temporarily when user interacts
    setIsPaused(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNext = () => {
    // Pause auto-rotation temporarily when user interacts
    setIsPaused(true);
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (slideIndex) => {
    // Pause auto-rotation temporarily when user interacts
    setIsPaused(true);
    setCurrentIndex(slideIndex);
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  // If there's only one image, display it without carousel controls
  if (images.length === 1) {
    return (
      <div className="project-image">
        <img
          src={images[0]}
          alt={`${projectName} - image 1`}
          className="project-card-image"
        />
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <button 
          className={`carousel-arrow left-arrow ${isDark ? "dark-mode" : ""}`} 
          onClick={goToPrevious}
        >
          &#10094;
        </button>
        
        <div 
          className="carousel-slides-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={image}
                alt={`${projectName} - image ${index + 1}`}
                className="project-card-image"
              />
            </div>
          ))}
        </div>
        
        <button 
          className={`carousel-arrow right-arrow ${isDark ? "dark-mode" : ""}`} 
          onClick={goToNext}
        >
          &#10095;
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`carousel-dot ${currentIndex === slideIndex ? "active" : ""} ${isDark ? "dark-mode" : ""}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle} 
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              // Check if project has images array or single image
              const projectImages = project.images || (project.image ? [project.image] : []);
              
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {projectImages.length > 0 ? (
                    <ImageCarousel 
                      images={projectImages} 
                      projectName={project.projectName}
                      isDark={isDark}
                    />
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode project-card-title" : "project-card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode project-card-subtitle" : "project-card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag-dark" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}