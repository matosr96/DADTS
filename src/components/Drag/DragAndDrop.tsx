import React, { useState } from "react";
import "./drag.css";

const DragAndDrop = () => {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState("");

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files![0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files![0]);
      reader.onload = (e: any) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); 
      };
    }
  };
  return (
    <div className="container-drag">
      <div className="container-input-file">
        <input
          className="file-upload-input"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            changeImage(e);
          }}
        />
        <div className="text-information">
          <h3>Arrastra tu imagen o dale clic para agregarla</h3>
        </div>
      </div>

      <div className="center">
        <img src={ImageSelectedPrevious} alt="" height="150px" width="250px" />
      </div>
    </div>
  );
};

export default DragAndDrop;
