import axios from "axios";
import { React, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../apifolder/useFetch";
import My_navbar from "../pages/My_navbar";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
function Input() {
     const { id_user } = useParams();

      const { data, isPending, error } = useFetch(
        "http://127.0.0.1:8000/View_Customer/" + id_user
      );

      console.log(data);


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [email_, setEmail_] = useState("");
    const [password_, setPassword_] = useState("");
    const [firstName_, setFirstName_] = useState("");
    const [lastName_, setLastName_] = useState("");
    const [phone_, setPhone_] = useState("");

            const check = () => {
                if (data) {
                    setFirstName_(data.First_Name);
                    setLastName_(data.Last_Name);
                    setEmail_(data.Email);
                    setPassword_(data.Password);
                    setPhone_(data.Phone_Number);
                }

            }
            useEffect(() => {
                check();
            }, [data]);
               


 
  async function handleSubmit(e) {
    e.preventDefault();
 
    try {
      console.log("error 1");
      let result = await fetch(
        `http://127.0.0.1:8000/Customer_update/${id_user}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Phone_Number: phone,
            Password: password,
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
          }),
        }
      );
      //   window.alert(result);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
    // navigate("/Cart/" + id_user);
  }

  async function UsehandleDelete(e) {
    e.preventDefault();

    try {
      console.log("error 1");
      let result = await fetch(
        `http://127.0.0.1:8000/Customer_delete/${id_user}`,
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
      navigate("/register");
  }



  return (
    <div>
      <My_navbar />
      <div className="mt-7">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
      </div>
      <div class="flex justify-center mb-7">
        <form>
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput2"
              class="form-label inline-block mb-2 text-gray-700 text-xl"
            >
              First Name
            </label>
            <input
              type="text"
              class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput2"
              placeholder={firstName_}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput2"
                class="form-label inline-block mb-2 text-gray-700 text-xl"
              >
                Last Name
              </label>
              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder={lastName_}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput2"
                class="form-label inline-block mb-2 text-gray-700 text-xl"
              >
                Email
              </label>
              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder={email_}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput2"
                class="form-label inline-block mb-2 text-gray-700 text-xl"
              >
                Phone
              </label>
              <input
                type="number"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder={phone_}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput2"
                class="form-label inline-block mb-2 text-gray-700 text-xl"
              >
                Password
              </label>
              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder={password_}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div class="flex space-x-2 justify-center mt-10">
            <div>
              <button
                onClick={handleSubmit}
                type="button"
                class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Updata User
              </button>
            </div>
          </div>

          <div class="flex space-x-2 justify-center mt-10">
            <div>
              <button
                onClick={UsehandleDelete}
                type="button"
                class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Delete User
              </button>
            </div>
          </div>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Input