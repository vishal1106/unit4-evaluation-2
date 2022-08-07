import { useState } from "react";
import Button from "./Button";

function Pagination({ onChange, total, current,setpage ,handle}) {



  return (
    <div>
      {
          new Array(total).fill(0).map((item, index) => {
          return <Button children={index+1} handle={handle} />
         })
      }
      
    </div>
  )
}
export default Pagination;
