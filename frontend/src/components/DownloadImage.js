import React from 'react';

const DownloadImage = ({ imageUrl, fileName, imgName }) => {
  const downloadHandler = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div>
      <img src={window.location.origin + imageUrl} alt={imgName} />
      <div>
        <button onClick={downloadHandler} data-cy={imgName}>
          Download {imgName}
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default DownloadImage;
