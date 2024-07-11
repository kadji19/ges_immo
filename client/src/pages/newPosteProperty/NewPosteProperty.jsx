import React from 'react'
import './newPosteProperty.css'
const NewPosteProperty = () => {
  return (
    <div className="main--content">
        <div className="newPostPage">
        <div className="formContainer">
        <h1>Add New Post</h1>
        <hr class="centered-hr"/>
        <div className="wrapper">
            <form >
            <div className="item">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" />
            </div>
            <div className="item">
                <label htmlFor="price">Price</label>
                <input id="price" name="price" type="number" />
            </div>
            <div className="item">
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
                <label htmlFor="desc">Description</label>
                <textarea name="" id="" className="descrip"></textarea>
                {/* <ReactQuill theme="snow" onChange={setValue} value={value} /> */}
            </div>
            <div className="item">
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" />
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom Number</label>
                <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
                <label htmlFor="bathroom">Bathroom Number</label>
                <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type">
                <option value="rent" defaultChecked>
                    Rent
                </option>
                <option value="buy">Buy</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="type">Property</label>
                <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
                </select>
            </div>

            <div className="item">
                <label htmlFor="utilities">Status</label>
                <select name="utilities">
                <option value="disponsible" defaultChecked>disponsible</option>
                <option value="rent" >Rent</option>
                <option value="buy">Buy</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="size">Dépôt garantie</label>
                <input min={0} id="size" name="size" type="number" />
            </div>
           
            <button className="sendButton">Add</button>
    {/*           {error && <span>error</span>} */}
            </form>
        </div>
        </div>
    {/*     <div className="sideContainer">
        {images.map((image, index) => (
            <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
            uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
            }}
            setState={setImages}
        />
        </div> */}
        </div>
    </div>
  )
}

export default NewPosteProperty