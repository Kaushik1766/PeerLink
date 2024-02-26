import React, { useState } from "react";

function Otp() {
    let otp=""
    function inputOtp(event) {
        otp += event.target.value;
        if(otp.length==6){
            axios.post('http://localhost:3000/login',{
            otp: otp         
          }).then((res)=>{
            window.alert(res)
          })
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="ver">Verification</label>
                <div>
                    <input 
                        type="number"
                        name="otp"
                        onChange={inputOtp}
                    />
                </div>
            </form>
        </div>
    );
}

export default Otp;
