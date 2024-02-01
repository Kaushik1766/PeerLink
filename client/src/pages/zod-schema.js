const zod = require('zod');

const schema = zod.string().regex(/^\d{2}[A-Z]{3}\d{1,5}$/);

function verifyUid(uid){
    uid = uid.toUpperCase();
    if (schema.safeParse(uid).success) {
        return true;
    }
    else{
        return false;
    }
}