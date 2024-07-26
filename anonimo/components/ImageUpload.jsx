import React, { useState } from 'react';
import Image from 'next/image';
import UploadImg from '../public/uploadImg.svg';
import Cross from '../public/close-logo.svg';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (selectedImages.length + files.length > 10) {
      alert('You can only upload up to 10 images.');
      return;
    }
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className='image-upload-container'>
      <div className={`image-upload-box ${selectedImages.length > 0 ? 'has-images' : ''}`}>
        <input
          type='file'
          id='image-upload'
          multiple
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor='image-upload' className={`w-full h-full flex flex-col justify-center items-center gap-3 ${selectedImages.length > 0 ? 'hidden' : ''}`}>
          <div className='flex flex-col gap-1 justify-center w-full items-center'>
            <Image src={UploadImg} alt='Upload Image' />
            <p className='drop-img-txt'>Drop your images here, or</p>
          </div>
          <div className='flex justify-center items-center w-[69px] h-[19px] browse-btn'>
            <p className='click-to-browse'>Click to browse</p>
          </div>
        </label>
        {selectedImages.length > 0 && (
          <div className='selected-images-list'>
            {selectedImages.map((image, index) => (
              <div key={index} className='selected-image-item'>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  className='selected-image'
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className='remove-image-button'
                >
                  <Image src={Cross} alt='Remove' width={12} height={12} />
                </button>
              </div>
            ))}
            {selectedImages.length < 10 && (
              <label htmlFor='image-upload' className='upload-more'>
                <Image src={UploadImg} alt='Upload Image' />
                <p className='drop-img-txt'>Upload more images</p>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
