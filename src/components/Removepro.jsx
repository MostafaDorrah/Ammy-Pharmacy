import {React, useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Removecost() {

   const [quantity, setQuantity] = useState();
   const [product_ID, setProduct_ID] = useState();

   async function handleSubmit(e) {
     e.preventDefault();

     try {
       console.log("error 1");
       let result = await fetch("http://127.0.0.1:8000/Update_product", {
         method: "POST",
         mode: "no-cors",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           Product_ID: product_ID,
           Quantity: quantity,
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
    <div class="px-6 h-full text-gray-800 mt-10">
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
          <p class="text-4xl font-bold mb-10 mr-14 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 item-center text-center ">
            Update Product
          </p>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3  mt-12 justify-center">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Enter Product ID
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="name"
                  placeholder="000"
                  value={product_ID}
                  onChange={(e) => setProduct_ID(e.target.value)}
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Quantity
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="name"
                  placeholder="000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
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
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Removecost