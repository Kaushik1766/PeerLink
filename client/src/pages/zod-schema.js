import zod from "zod"
import axios from "axios"

const schema = zod.string().regex(/^\d{2}[A-Z]{3}\d{1,5}$/);

function verifyUid(uid){
    uid = uid.toUpperCase();
    if (schema.safeParse(uid).success) {
        window.alert('success')
    }
    else{
        window.alert("Invalid Uid");
    }
}

export  default verifyUid;