import { PasswordInput } from "@customtypes/ui/PasswordInput";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useState } from "react";

const PasswordInput:NextPage<PasswordInput> = ({placeholder="password",id="password",value='',onValueChange}:PasswordInput) => {
   const [show,setShow] = useState<boolean>(false)
   
    return (
    <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
           <div className="flex items-center justify-center">
            <div className="relative">
            <input
              type={show?"text":"password"}
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={(e)=>onValueChange(e)}
              className="input input-bordered form-input"
            />
            <FontAwesomeIcon icon={show?faEye:faEyeSlash}
                        width="20"
                        height="20"
                        className="absolute top-1/2 transform -translate-y-1/2 right-3"
                        onClick={()=>setShow(!show)}
                        />
                 </div>
           
           </div>

     </div>

   )
}

export default PasswordInput;