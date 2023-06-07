import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Product from "./Product";
const Products2 = ({ ApiTopPropduct }) => {
  const [pageCount, setPageCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [ApiTopPropductList, setApiTopPropductList] = useState([]);
  const [pageList, setPageList] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    let tempArr = [];
    ApiTopPropduct.map((product, index) => {
      if (index === 5) {
        setApiTopPropductList((prev) => [...prev, tempArr]);
        tempArr = [];
        return tempArr.push(product);
      }
      return tempArr.push(product);
    });
    if (ApiTopPropduct.length % 5 !== 0) {
      setPageCount((ApiTopPropduct.length % 5) + 1);
    } else {
      setPageCount(ApiTopPropduct.length / 5);
    }
    setPageList([]);

    for (let i = 0; i < pageCount - 1; i++) {
      setPageList((prev) => [...prev, i]);
    }
    setFetched(true);
  }, [pageIndex, fetched]);

  useEffect(() => {
    console.log("starting use  effect");
    let tempArr = [];

    ApiTopPropduct.map((product, index) => {
      if (index === 5) {
        setApiTopPropductList((prev) => [...prev, tempArr]);
        tempArr = [];
        return tempArr.push(product);
      }
      return tempArr.push(product);
    });
    if (ApiTopPropduct.length % 5 !== 0) {
      setPageCount((ApiTopPropduct.length % 5) + 1);
    } else {
      setPageCount(ApiTopPropduct.length / 5);
    }
    for (let i = 0; i < pageCount - 1; i++) {
      setPageList((prev) => [...prev, i]);
    }
    setFetched(true);
  }, []);
  return (
    <div>
      <div className="p-5 flex flex-wrap">
        {fetched &&
          ApiTopPropductList[pageIndex].map((product, index) => {
            return <Product item={product} key={index} />;
          })}
      </div>
      <div className=" p-5 flex flex-row flex-wrap justify-center">
        {fetched &&
          pageList.map((index) => {
            return (
              <Button
                style={{
                  backgroundColor: "#97DECE",
                  margin: "5px",
                }}
                variant="contained"
                onClick={() => {
                  setPageIndex(index + 1);
                }}
                className="bg-gray-200 p-2 m-2"
              >
                {/* {index + 1} next */}next
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default Products2;
