import React, { useState, useEffect } from "react";

const SliderPass = ({ lvl, imageData }) => {
  const [currentSet, setCurrentSet] = useState(0);
  const [imagesPerSet, setImagesPerSet] = useState(10); // State to control number of images per set

  // Effect to handle window resize and adjust images per set
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setImagesPerSet(5);
      } else {
        setImagesPerSet(10);
      }
    };

    // Set initial value based on current window size
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSet = () => {
    setCurrentSet((prevSet) => (prevSet + imagesPerSet) % imageData.length);
  };

  const hasPrevious = currentSet > 0;
  const hasNext = currentSet + imagesPerSet < imageData.length;

  return (
    <div className="container">
      <div className="image-grid">
        {imageData
          .slice(currentSet, currentSet + imagesPerSet)
          .map((image, index) => {
            // Convert id to number if it's not already
            const imageId = Number(image.id);
            return (
              <div
                key={index}
                className="paralelogramo"
                title={image.description}
                style={{
                  backgroundImage: `url(${image.image})`,
                  filter: imageId > lvl ? "grayscale(100%)" : "none", // Apply grayscale based on id
                }}
              >
                {image.isFree !== null && (
                  <div
                    className="top-left"
                    style={{ color: image.isFree ? "#d0ba23" : "#8B0000" }}
                  >
                    {image.isFree ? "Free" : "Subs"}
                  </div>
                )}
                <div className="bottom-right">{image.id}</div>
              </div>
            );
          })}
      </div>
      {hasPrevious && (
        <button
          className="prev-btn"
          onClick={() =>
            setCurrentSet(
              currentSet - imagesPerSet < 0
                ? imageData.length - imagesPerSet
                : currentSet - imagesPerSet
            )
          }
        />
      )}
      {hasNext && <button className="next-btn" onClick={nextSet} />}
    </div>
  );
};

export default SliderPass;
