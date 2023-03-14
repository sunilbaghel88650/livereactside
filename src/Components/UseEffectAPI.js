import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {

    const mystyle = {
        height: "300px",
        width: "300px",
      };

    const [users,setUsers] = useState([]);
    // const getUsers = () => {
      const getUser = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setUsers(await response.json());
        console.log(users);
    };
        useEffect(() => {
          getUser();
        },[]);
  return (
    <>
          <div className="container mt-2">
        <div className="row text-Center">

{
users.map ((CurEle)=>{
    return (
        <div className="col-md-4 mt-2" >
        <div className="card">
          <img src=" https://avatars.dicebear.com/v2/avataaars/psamd.svg?options[mood][]=happy" className="card-img-top" alt="avatar" style={mystyle}/>
       <h5 className="card-title mx-5">{CurEle.name}</h5>
            <p className="card-title mx-5">{CurEle.email}</p>
            <p className="card-title mx-5">{CurEle.phone}</p>
            <p className="card-title mx-5">http://{CurEle.website}</p>
            {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> */}
        </div>
        </div>
    )
}
)

}



        </div>
      </div>
    </>
  )
}

export default UseEffectAPI
