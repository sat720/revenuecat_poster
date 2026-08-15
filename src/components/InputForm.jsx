import React, { useState, useRef } from "react";

const InputForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (!file) return;

    // Allow only image files
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image.");
      return;
    }

    setPhoto(file);

    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }

    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (!photo) {
      alert("Please upload a photo.");
      return;
    }

    onSubmit({
      name: name.trim(),
      role: role.trim(),
      photo,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Upload */}
      <div className="form-group">
        <label>Upload Your Photo</label>

        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Preview"
              className="preview-photo"
            />
          ) : (
            <div style={{ textAlign: "center" }}>
              <img
                src="/images/shippy-rocket-triangle.webp"
                alt="Upload"
                className="drop-zone-bear"
              />

              <p style={{ marginTop: "12px" }}>
                🚀 Drag & Drop your photo here
              </p>

              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.75,
                  marginTop: "8px",
                }}
              >
                Click or drag an image to generate your
                <strong> Shipathon 2026 Attendee Pass</strong>
              </p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            hidden
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      </div>

      {/* Name */}
      <div className="form-group">
        <label>Name (Max 14 chars)</label>

        <input
          className="form-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          maxLength={14}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Role */}
      <div className="form-group">
        <label>Company / Designation (Optional, Max 14 chars)</label>

        <input
          className="form-input"
          type="text"
          placeholder="e.g. AI Engineer"
          value={role}
          maxLength={14}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="btn-primary"
        disabled={!name.trim() || !photo}
      >
        Generate My Attendee Pass
      </button>
    </form>
  );
};

export default InputForm;
