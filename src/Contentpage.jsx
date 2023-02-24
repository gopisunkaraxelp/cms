import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Contentpage = () => {
  const [data, setData] = useState({});

  const [resultMsg, setResultMsg] = useState("");

  const [usersList, setUsersList] = useState([]);
  const [content, setContent] = useState("");

  const [dropdown, setDropdown] = useState("false");

  useEffect(() => {
    axios
      .get("http://localhost:9000/content")
      .then((response) => setData(response));
  }, []);
  useEffect(() => {
    if (resultMsg === "User added successfully") {
      getAPICALL();
    } else {
      setResultMsg("");
    }
  }, [resultMsg]);

  useEffect(() => {
    getAPICALL();
  }, []);

  console.log(usersList, "");
  async function getAPICALL() {
    const response = await fetch(`http://localhost:9000/content`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    const result = await response.json();

    setUsersList(result);

    console.log(result, "i am from get api call");
  }
  const onSubmit = (items) => {
    setContent(items);
  };

  const openDrop = () => {
    setDropdown(!dropdown);
  };

  let newContentsList = [];
  const contents =
    usersList &&
    usersList?.map((each) =>
      each.subtitle?.map((item, index) => {
        newContentsList.push(item.content);
      })
    );

  console.log(
    newContentsList,
    "newContentsListlkvmmmmmmmmmmmmmmmmmmmskdnvlksdgggggg"
  );

  const htmlFromCMS = newContentsList;
  console.log(htmlFromCMS, "dangerous html i am cms .........................");
  console.log(content, "content=====>");
  return (
    <div className="flex flex-row z-40 h-[100vh]  ">
      <div className="w-[250px] bg-white h-[100vh] position-fixed overflow-scroll ">
        {" "}
        {usersList?.map((item) => (
          <div>
            <div
              class="text-sky-900 text-8px px-2  "
              onClick={() => openDrop()}
            >
              <p>{item.title}</p>
            </div>

            {!dropdown ? (
              <ul class="text-start text-blue-900 text-5px px-3 ">
                <li>
                  {item &&
                    item?.subtitle?.map((each) => (
                      <div>
                        <div
                          onClick={() => {
                            onSubmit(each.content);
                            window.history.replaceState(
                              null,
                              "new title",
                              `/${each.subtitlename}/${each._id}`
                            );
                          }}
                        >
                          {each.subtitlename}
                          {/* <Link to
                      ={`/contentpage/${each._id}`}
                      class="no-underline text-gray-800 text-xl">
                   
                      
                    </Link> */}
                        </div>
                        {/* <Link to
                        ={`/contentpage/${each._id}`}
                        class="no-underline text-gray-800 text-xl">
                      
                        {each.subtitlename} 
                      </Link> */}
                      </div>
                    ))}
                </li>
              </ul>
            ) : null}
          </div>
        ))}
        {/* <div>
                      <Link to
                        ={`/contentpage`}
                        class="no-underline text-gray-800 text-xl">
                      
                        {each.subtitlename} pushpa
                      </Link>
                    </div> */}
      </div>
      <div className="ml-[280px] text-center justify-center ">
        <div>
          <div class="mt-[6%] ">
            {/* <Link to="/" target="_parent" className="btn btn-danger w-20 mx-5">
              Back
            </Link>  */}
            <div class="border-2 border-green-400  ">{parse(content)}</div>
            <Link to="/" target="_parent" className="btn btn-danger w-20 mx-5">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentpage;
