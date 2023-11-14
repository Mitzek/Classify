import React, { useState, useEffect } from "react";
import styles from "./styles/adStyle.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createAdRoute } from "./../../API/apiRoutes";
import { storage } from "../Services/Firebase.js";

function CreateAd({ currentUser }) {
  const [ad, setAd] = useState({
    productTitle: "",
    productDescription: "",
    productPrice: "",
    sellerContact: "",
    productCity: "",
  });
  const [user, setUser] = useState();
  const [image, setImage] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      setUser(await JSON.parse(localStorage.getItem("classify-user")));
    };

    getUser();
  }, []);

  const navigate = useNavigate();

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAd({ ...ad, [name]: value });
  };

  const handleFile = (event) => {
    setImage(event.target.files[0]);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const upload = storage.ref(`images/${image.name}`).put(image);

    upload.on(
      "State_changed",
      (snapshot) => {
        const load = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(load);
        setProgress(load);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImgUrl(url);
            console.log(imgUrl);
          });
      }
    );
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { _id, name } = user;
    const {
      productTitle,
      productDescription,
      productPrice,
      sellerContact,
      productCity,
    } = ad;

    const { data } = await axios.post(createAdRoute, {
      _id,
      productTitle,
      productDescription,
      productPrice,
      sellerContact,
      name,
      productCity,
      imgLink: imgUrl,
    });

    if (data.status === false) {
      console.log(data.msg);
    } else {
      window.alert("Ad created Successfully");
      let name, value;
      setAd({ [name]: value });
      navigate("/home");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Sell your product</h1>
      <div className={styles.sellContainer}>
        <form className={styles.sellProductForm}>
          <label htmlFor="photo">Upload Photos Of Product</label>
          <input type="file" onChange={handleFile} />
          <button onClick={uploadImage}>Upload</button>
          <progress value={progress} max="100" />
          {console.log(progress)}
          <img
            style={{ width: "200px", height: "200px" }}
            src={imgUrl || "http://via.placeholder.com/200x200"}
            alt="images"
          />
        </form>

        <form className={styles.sellProductForm} onSubmit={sendData}>
          <input
            name="productTitle"
            type="text"
            placeholder="Enter your product title"
            onChange={handleInputs}
            value={ad.productTitle}
            maxlength="45"
          />
          <textarea
            name="productDescription"
            id={styles.productDesc}
            rows="10"
            cols="52"
            placeholder="Enter your product description"
            onChange={handleInputs}
            value={ad.productDescription}
          />
          <input
            name="productPrice"
            type="number"
            placeholder="Enter your product price (PKR)"
            onChange={handleInputs}
            value={ad.productPrice}
          />
          <input
            name="sellerContact"
            type="number"
            placeholder="Enter your contact number"
            onChange={handleInputs}
            value={ad.sellerContact}
          />
          <label htmlFor="city">Select Your City</label>
          <select name="productCity" onChange={handleInputs}>
            <option value="Karachi" selected>
              Karachi
            </option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Lahore">Lahore</option>
          </select>
          <button type="submit">Create Ad</button>
        </form>
      </div>
    </>
  );
}

export default CreateAd;
