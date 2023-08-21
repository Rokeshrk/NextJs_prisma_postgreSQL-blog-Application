import api from '../../utils/api';

export const login = async (RegisteredEmail: String,RegisteredPassword: String) =>{
    const email = RegisteredEmail;
    const password = RegisteredPassword;
    const body={email,password};
    console.log(body);

    try{
        const res = await api.post('/Auth', body);
        console.log("Success");
        console.log(res);
    }
    catch(err) {
        console.log(err);
    }
}
export const Register = async (name: String, email: String,password:String) =>{
    const body={name,email,password};

    try{
        const res = await api.post('/Users', body);
        console.log("Success");
        console.log(res);
    }
    catch(err) {
        console.log(err);
    }
}

