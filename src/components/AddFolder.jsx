import {React, useState} from "react";
import Button from "@mui/material/Button";

function AddFolder() {



  const [proname, setProname] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

    async function handleSubmit(e) {
      e.preventDefault();
      console.log(JSON.stringify({
            Product_Name: proname,
            Company: company,
            Category: category,
            Price: price,
            Amount: amount,
            Photo: photo,
            Description: description,
          }))

      try {
        console.log("error 1");
        let result = await fetch("http://127.0.0.1:8000/Add_Product", {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Product_Name: proname,
            Company: company,
            Category: category,
            Price: price,
            Amount: amount,
            Photo: photo,
            Description: description,
          }),
        });
        //   window.alert(result);
        const data = await result.json();
        // this.setRs(data.Value);
        console.log(data.Value);
        console.log(data.ID);
      } catch (e) {
        console.log(e);
      }
      //window.location.reload();
      // navigate("/Cart/" + id_user);
    }



  return (
    <div class="px-6 h-full text-gray-800 mt-9">
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
          <p class="text-4xl font-bold mb-10 mr-14 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 item-center text-center ">
            Add Product
          </p>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 justify-center">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Product Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="text"
                  placeholder="Product Name"
                  value={proname}
                  onChange={(e) => setProname(e.target.value)}
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Company
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 justify-center">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Category
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="text"
                  placeholder="Category of product"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Price
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="number"
                  placeholder="0000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Amount
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="number"
                  placeholder="000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Photo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="link to photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 ">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Description
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="name"
                  placeholder="Description of product"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div class="text-center lg:text-center mt-6 ">
              <Button
                onClick={handleSubmit}
                style={{
                  color: "#ffffff",
                  backgroundColor: "#62B6B7",
                  marginTop: "10px",
                }}
                size="large"
                variant="contained"
                disableElevation
              >
                ADD
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFolder;
