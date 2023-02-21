import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageURL;

      if (
        profileImage &&
        (profileImage.type === "image/png" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/jpeg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "zinotrust");
        image.append("upload_preset", upload_preset);

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/zinotrust/image/upload",
          {
            method: "post",
            body: image,
          }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
        setImagePreview(null);
      }
      alert(imageURL);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="--flex-center">
      <div className="container">
        <h2>Upload Image To Cloudinary...</h2>
        <div className="card">
          <form onSubmit={uploadImage} className="--form-control">
            <p>
              <label>Photo:</label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="image"
                onChange={handleImageChange}
              />
            </p>
            <p>
              {isLoading ? (
                "Uploading..."
              ) : (
                <button type="submit" className="--btn --btn-primary">
                  Upload Image
                </button>
              )}
            </p>
          </form>
          <div className="profile-photo">
            <div>
              {imagePreview && (
                <img src={imagePreview && imagePreview} alt="profileImg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
