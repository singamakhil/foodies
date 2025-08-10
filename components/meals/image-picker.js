"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleInputChange(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div>
        <div className={classes.preview}>
          {!pickedImage && <p>Image not picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="image picked" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png , image/jpeg"
          ref={imageInput}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handlePickClick}
      >
        Pick an image
      </button>
    </div>
  );
}
