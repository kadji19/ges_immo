import React, { useEffect, useState, useRef } from "react";

const UploadWidget = ({ uwConfig, setState }) => {
  const [loaded, setLoaded] = useState(false);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    script.onload = () => {
      setLoaded(true);
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        { ...uwConfig, multiple: true },
        (error, result) => {
          if (!error && result && result.event === "success") {
            // Vérifiez si l'image existe déjà dans l'état avant de l'ajouter
            setState((prev) => {
              if (!prev.includes(result.info.secure_url)) {
                return [...prev, result.info.secure_url];
              }
              return prev;
            });
          }
        }
      );
    };
    document.body.appendChild(script);
  }, [uwConfig, setState]);

  const handleUpload = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  return (
    <button
      id="upload_widget"
      className="cloudinary-button"
      onClick={handleUpload}
      disabled={!loaded}
    >
      Upload Images
    </button>
  );
};

export default UploadWidget;
