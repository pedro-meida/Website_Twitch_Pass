import React, { useState } from "react";

const SliderPass = ({ lvl, imageData }) => {
  const [currentSet, setCurrentSet] = useState(0);

  const nextSet = () => {
    setCurrentSet((prevSet) => (prevSet + 10) % imageData.length);
  };

  const hasPrevious = currentSet > 0;
  const hasNext = currentSet + 10 < imageData.length;

  return (
    <div className="container">
      <div className="image-grid">
        {imageData.slice(currentSet, currentSet + 10).map((image, index) => {
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
              currentSet - 10 < 0 ? imageData.length - 10 : currentSet - 10
            )
          }
        />
      )}
      {hasNext && <button className="next-btn" onClick={nextSet} />}
    </div>
  );
};

export default SliderPass;
