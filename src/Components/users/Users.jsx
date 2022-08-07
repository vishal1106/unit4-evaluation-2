import { useEffect } from "react";
import { useState } from "react";
import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {
const [dta,setDta]=useState([])
const [page,setPage]=useState(1)
  const getdata=async()=>{
    let res=await fetch(`http://localhost:8080/detail?_page=${page}&per_page=10`)
    let data=await res.json();
    setDta(data)
  }
useEffect(()=>{
getdata()
},[page])

const handle=()=>{
  if(page<=10)
  {
    setPage(page+1)
  }

}

  return (
    <div>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>
      <UserCard dta={dta}/>
      <Filters/>
      <Pagination  setPage={setPage} total={dta.length} handle={handle}/>
   
    </div>
  );
}

export default Users;
