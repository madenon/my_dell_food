import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
 
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Body",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const obSubmitHandler = async (event) => {
    event.preventDefault();
    const formDta = new FormData();
    formDta.append("name", data.name)
    formDta.append("description", data.description)
    formDta.append("price",Number( data.price))
    formDta.append("category", data.category)
    formDta.append("image", image)
  const response = await axios.post(`${url}/api/vendre/add`,formDta);
   if(response.data.success){
 
    setData({
      name: "",
      description: "",
      price: "",
      category: "Body",
    })
    setImage(false)
    toast.success(response.data.message)
   }else{
    toast.error(response.data.message)

   }
  };

  return (
    <div className="add">
      <form onSubmit={obSubmitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Charger une image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_arera}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Nom du produit</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Le nom de l'artcile"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Description du produit</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Decrivez votre produit ici"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>La Category </p>
            <select onChange={onChangeHandler} name="category" id="">
              <option value="Body">Body</option>
              <option value="Parfum">Parfum</option>
              <option value="Boubou">Boubou</option>
              <option value="Atieke">Atiéké</option>
              <option value="Alloco">Alloco</option>
              <option value="Banane">Banane</option>
              <option value="Tchep">Tchep</option>
              <option value="Soup">Soup</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Produit</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              min="0"
              placeholder="Le prix ici"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          AJOUTER
        </button>
      </form>
    </div>
  );
};

export default Add;
