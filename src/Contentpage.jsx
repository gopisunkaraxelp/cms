import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contentpage = () => {
    const [data, setData] = useState({});
    

    

  const [resultMsg, setResultMsg] = useState("");

  const [usersList, setUsersList] = useState([]);
  const [content, setContent] = useState("")
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
      const onSubmit = (items)=> {
        setContent(items)
      }







      let newContentsList = []
    const contents = usersList && usersList?.map((each) => each.subtitle?.map((item,index) => {

        newContentsList.push(item.content)

    }))

    console.log(newContentsList, "newContentsListlkvmmmmmmmmmmmmmmmmmmmskdnvlksdgggggg")

    const htmlFromCMS =newContentsList
    console.log(htmlFromCMS,"dangerous html i am cms .........................")



  return (
    <div className='flex mt-[-6%]'>
    <div className='w-[250px] bg-slate-300 h-[100vh] position-fixed'> {usersList?.map((item) => (
          <div>
            <div class="text-green-800 text-xl px-2">
              <b>{item.title}</b>
            </div>
            <ul>
              <li>
                {item &&
                  item?.subtitle?.map((each) => (
                    <div >
                      <Link to={`/${item._id}`}
                        class="no-underline text-gray-800 text-xl">
                      </Link>
                      <div onClick={()=>{onSubmit(each.content)}}>{each.subtitlename}</div> 

                    </div>
                  ))}
              </li>
            </ul>
          </div>
        ))}</div>
    <div className='ml-[280px]' > 
        <div>
                    
                        <div class="mt-[10%]"><Link to="/" target="_parent" className="btn btn-danger w-20 mx-5">Back</Link><div class="border-2 border-red-400 " dangerouslySetInnerHTML={{__html: content}} ></div>
                        </div>
                        
                   
                </div>
    
    
    </div>
    </div>
  )
}

export default Contentpage