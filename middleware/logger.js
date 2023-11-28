export const logger =  (req, res,next) => {
    const {email, password, confirmpassword} = req.body
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(!email && password && confirmpassword){
        throw new Error('you are missing register')
    }if(!regex.test(email)){
        throw new Error('email is not exsist')
    }
    if(password !== confirmpassword){
        throw new Error('passwword and confirmpasswword are compare')
    next()
}
}
