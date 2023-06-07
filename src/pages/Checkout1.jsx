import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../apifolder/useFetch";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import myPhoto from "../assets/images/photo3.jpg";

function Checkout1  ({visa, address})  {
  const [allert, setAllert] = useState(false);
  const [allert_, setAllert_] = useState(false);

  useEffect(() => {}, [visa, address]);
  console.log(address);
  const { id_user, total } = useParams();
  const [todoList, setTodoList] = useState("");

  const navigate = useNavigate();
  const countries = ["Egypt", "China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [streetName, setStreetName] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [id, setID] = useState();

  const [cvc, setCvc] = useState("");
  const [date, setDate] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [name_card, setNameCard] = useState("");
  

  function setAddress(data) {
    setCity(data.city);
    setArea(data.area);
    setStreetName(data.street_name);
    setBuildingNumber(data.building_number);
    setFloor(data.floor);
    setHouseNumber(data.house_number);
    setID(data.Customer_ID);
  }


   function setVisa(data) {
     setCvc(data.CVV);
     setDate(data.EXP_date);
     setCardNumber(data.Card_Number);
     setNameCard(data.Name_on_card);
   }


  

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("error 1");
      let result = await fetch("http://127.0.0.1:8000/Customer_add_address", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Customer_ID: id_user,
          city: city,
          area: area,
          street: streetName,
          building_number: buildingNumber,
          floor: floor,
          house_number: houseNumber,
        }),
      });
      const data = await result.json();
      if (data.Value == "True") {
        window.location.reload();
      } else {
        window.alert(data.Value);
      }
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  }

  async function handleSubmitvisa(e) {
        e.preventDefault();

        try {
          console.log("error 1");
          let result = await fetch("http://127.0.0.1:8000/Customer_add_visa", {
            method: "POST",
            mode: "no-cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Customer_ID: id_user,
              Card_Number: card_number,
              EXP_date: date,
              CVV: cvc,
              Name_on_card: name_card,
            }),
          });
          const data = await result.json();
          if (data.Value == "True") {
            window.location.reload();
          } else {
            window.alert(data.Value);
          }
        } catch (e) {
          console.log(e);
        }
        window.location.reload();
  }

    async function handlepayvisa(e) {
    e.preventDefault();

    try {
      console.log("error 1");
      let result = await fetch("http://127.0.0.1:8000/Confirm_order", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Customer_ID: id_user,
          total: total,
          visa: card_number.toString(),
          city: city,
          Area: area,
          streetName: streetName,
          buildingNumber: buildingNumber,
          floor: floor.toString(),
          houseNumber: houseNumber.toString(),
          Payment_Method: "visa",
        }),
      });
      const data = await result.json();
      window.alert(data.Value);
      navigate("/Home/" + id_user);
    } catch (e) {
      console.log(e);
    }
    //window.location.reload();
  }


      async function handlepaycash(e) {
        e.preventDefault();

        try {
          console.log("error 1");
          let result = await fetch("http://127.0.0.1:8000/Confirm_order", {
            method: "POST",
            mode: "no-cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Customer_ID: id_user,
              total: total,
              visa: card_number.toString(),
              city: city,
              Area: area,
              streetName: streetName,
              buildingNumber: buildingNumber,
              floor: floor.toString(),
              houseNumber: houseNumber.toString(),
              Payment_Method: "cash",
            }),
          });
          const data = await result.json();
          window.alert(data.Value);
          navigate("/Home/" + id_user);
        } catch (e) {
          console.log(e);
        }
      }


  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2 ml-5">
            <button
              onClick={() => {
                navigate("/Cart/" + id_user);
              }}
              className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1"
            >
              <svg
                className="fill-stroke"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none">Back</p>
            </button>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full ml-5">
            <div
              style={{
                backgroundImage: `url(${myPhoto})`,
                backgroundRepeat: "no-repeat",
                // backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "#CBEDD5",
              }}
              className="xl:w-4/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-4 "
            >
              <div className="xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                {/* <img
                  src="https://i.ibb.co/jgXmxP0/image.png"
                  alt="headphones"
                /> */}

                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 item-center text-center ">
                  AMMY pharmacy
                </p>
              </div>
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p class="text-2xl font-bold mb-5 mr-14 text-2xl lg:text-2xl font-semibold leading-5 lg:leading-9 text-gray-800 item-center text-center ">
                  My Address:
                </p>
                {allert && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert
                      onClose={() => {
                        setAllert(false);
                      }}
                    >
                      This is a success alert — check it out!
                    </Alert>
                  </Stack>
                )}
                <div className=" p-5 flex flex-row flex-wrap justify-center">
                  {address.map((data, index) => (
                    <Paper
                      className="  hover:scale-[1.1] ease-in duration-100 cursor-pointer border-2 border-gray-300 rounded-lg shadow-md p-5 m-5"
                      key={index}
                      style={{
                        backgroundColor: "#CBEDD5",
                        marginLeft: "35px",
                      }}
                    >
                      <Typography>City: {data.city} </Typography>
                      <Typography>Area: {data.area} </Typography>
                      <Typography>Street Name: {data.street_name} </Typography>
                      <Typography>
                        Building Number: {data.building_number}
                      </Typography>
                      <Typography>Floor: {data.floor} </Typography>
                      <Typography>House Number: {data.house_number}</Typography>
                      <Button
                        style={{
                          color: "#ffffff",
                          marginLeft: "35px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          backgroundColor: "#62B6B7",
                        }}
                        variant="contained"
                        size="small"
                        onClick={() => {
                          setAddress(data);
                          setAllert(true);
                        }}
                      >
                        ADD
                      </Button>
                    </Paper>
                  ))}
                </div>

                {/* { address.map((data) => {
                  console.log(data.city);
                  <Paper>
                    <Typography>City: {data.city} </Typography>
                    <Typography>Area: {data.area} </Typography>
                    <Typography>Street Name: {data.street_name} </Typography>
                    <Typography>
                      Building Number: {data.building_number}
                    </Typography>
                    <Typography>Floor: {data.floor} </Typography>
                    <Typography>House Number: {data.house_number}</Typography>
                    <button
                      onClick={() => {
                        setAddress(data);
                      }}
                    ></button>
                  </Paper>
                })} */}
                <p class="text-2xl font-bold mb-5 mr-14 text-2xl lg:text-2xl font-semibold leading-5 lg:leading-9 text-gray-800 item-center text-center ">
                  My Visa:
                </p>
                {allert_ && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert
                      onClose={() => {
                        setAllert_(false);
                      }}
                    >
                      This is a success alert — check it out!
                    </Alert>
                  </Stack>
                )}
                <div className=" p-5 flex flex-row flex-wrap justify-center">
                  {visa.map((data, index) => (
                    <Paper
                      className="   hover:scale-[1.1] ease-in duration-100 cursor-pointer border-2 border-gray-300 rounded-lg shadow-md p-5 m-5 "
                      key={index}
                      style={{
                        backgroundColor: "#CBEDD5",
                        marginLeft: "35px",
                      }}
                    >
                      <Typography>cvc: {data.CVV}</Typography>
                      <Typography>date: {data.EXP_date}</Typography>
                      <Typography>card_number: {data.Card_Number}</Typography>
                      <Typography>name_card: {data.Name_on_card}</Typography>
                      <Button
                        style={{
                          color: "#ffffff",
                          marginLeft: "90px",
                          marginTop: "10px",
                          marginBottom: "10px",
                          backgroundColor: "#62B6B7",
                        }}
                        size="small"
                        variant="contained"
                        onClick={() => {
                          setVisa(data);
                          setAllert_(true);
                        }}
                      >
                        ADD
                      </Button>
                    </Paper>
                  ))}
                </div>

                {/* {visa.map((data, index) => {
                  <Typography key={index}>
                    name_card: {data.Name_on_card}
                  </Typography>
                  <Paper key={index}>
                    <Typography>cvc: {data.CVV} </Typography>
                    <Typography>date: {data.EXP_date} </Typography>
                    <Typography>card_number: {data.Card_Number} </Typography>
                    <Typography>name_card: {data.Name_on_card} </Typography>
                    <button
                      onClick={() => {
                        setVisa(data);
                      }}
                    ></button>
                  </Paper>;
                })} */}
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                {/* <img
                  src="https://i.ibb.co/jgXmxP0/image.png"
                  alt="headphones"
                /> */}
                {/* <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 item-center text-center ">
                  AMMY pharmacy
                </p> */}
              </div>
            </div>
            <form>
              <div className=" p-3 bg-[#94D3E9] flex flex-col lg:w-full xl:w-5/5">
                <p className=" text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 item-center text-center ">
                  Total = {total}$
                </p>

                <div className="mt-8">
                  <div className="mt-2 flex-col">
                    <div className="flex-row flex">
                      <input
                        className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <input
                        className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="Area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                      />
                    </div>

                    <div className="flex-row flex">
                      <input
                        className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="street Name"
                        value={streetName}
                        onChange={(e) => setStreetName(e.target.value)}
                      />
                      <input
                        className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="Building Number"
                        value={buildingNumber}
                        onChange={(e) => setBuildingNumber(e.target.value)}
                      />
                    </div>

                    <div className="flex-row flex">
                      <input
                        className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="floor"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                      />
                      <input
                        className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                        type="text"
                        placeholder="House Number"
                        value={houseNumber}
                        onChange={(e) => setHouseNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-5 border border-transparent hover:border-gray-300 bg-[#62B6B7] hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">Add new address</p>
                  </div>
                </button>

                {/* <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                    or pay with card
                  </p>
                  <hr className="border w-full" />
                </div> */}

                <label className="mt-8 text-base leading-4 text-gray-800">
                  ADD Visa
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="0000 0000 0000 0000"
                      value={card_number}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex-row flex">
                    <input
                      className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="MM/YY"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                      className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="email"
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">
                  Name on card
                </label>
                <div className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      type="number"
                      placeholder="Name on card"
                      value={name_card}
                      onChange={(e) => setNameCard(e.target.value)}
                    />
                  </div>
                </div>

                <label className="mt-8 text-base leading-4 text-gray-800">
                  Country or region
                </label>
                <div className="mt-2 flex-col">
                  <div className="relative">
                    <button
                      className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                      type="email"
                    >
                      {country}
                    </button>
                    <svg
                      onClick={() => setMenu(!menu)}
                      className={
                        "transform  cursor-pointer absolute top-4 right-4 " +
                        (menu ? "rotate-180" : "")
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 5.75L8 10.25L12.5 5.75"
                        stroke="#27272A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div
                      className={
                        "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                        (menu ? "block" : "hidden")
                      }
                    >
                      {countries.map((country) => (
                        <div
                          key={country}
                          className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                          onClick={changeText}
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                  </div>
                  <input
                    className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="ZIP"
                  />
                </div>

                <button
                  onClick={handleSubmitvisa}
                  className="mt-5 border border-transparent hover:border-gray-300 bg-[#62B6B7] hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">Add new Visa</p>
                  </div>
                </button>

                <label className="mt-8 text-base leading-4 text-gray-800">
                  Methode For Payment
                </label>

                <button
                  onClick={handlepaycash}
                  className="mt-5 border border-transparent hover:border-gray-300 bg-[#62B6B7] hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">cash on delivery</p>
                  </div>
                </button>

                <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                    or pay with card
                  </p>
                  <hr className="border w-full" />
                </div>

                <button
                  onClick={handlepayvisa}
                  className="mt-8 border border-transparent hover:border-gray-300 bg-[#62B6B7] hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
                >
                  <div>
                    <p className="text-base leading-4">Pay With Card</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout1;
