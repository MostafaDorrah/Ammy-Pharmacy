import {React, useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function Removecost() {

  const [lastName, setLastName] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("error 1");
      let result = await fetch(
        `http://127.0.0.1:8000/Customer_delete/${lastName}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      //   window.alert(result);
      console.log(result);
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
            Remove Customer
          </p>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3  mt-12 justify-center">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Enter ID
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  type="name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="xxxxxxxxx"
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
                Delete
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Removecost;
