import axios from "axios";
import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState(555);
  const [todoList, setTodoList] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("error 1");
      let result = await fetch("http://127.0.0.1:8000/Admin_login", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Password: password,
          Work_Email: email,
        }),
      });
      //   window.alert(result);
      const data = await result.json();
      // this.setRs(data.Value);
      if (data.Value == "True") {
        window.alert("Login Successfully");
        navigate("/Home/" + data.ID);
      } else {
        window.alert(data.Value);
      }
    } catch (e) {
      console.log(e);
    }
    //window.location.reload();
    // navigate("/Cart/" + id_user);
  }

  return (
    <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://1.bp.blogspot.com/-S1MYUZT7PQs/YWnP8yw2tuI/AAAAAAAAYW8/W7OAvI2uMF8whQX0lMw_IpUg83rJ1vHNwCLcBGAsYHQ/s2048/%25D8%25B4%25D8%25B9%25D8%25A7%25D8%25B1%2B%25D8%25B5%25D9%258A%25D8%25AF%25D9%2584%25D9%258A%25D8%25A9.png"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="mb-6 flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <h1 class="text-center font-bold">Login Admin</h1>
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register