import * as yup from 'yup';

const Schema = yup.object().shape({
    nickname: yup 
            .string()
            .trim()
            .required("Enter the plant's Nickname Here"),

    species: yup
            .string()
            .required("Enter the plant's Species Here"),

    username: yup
            .string()
            .required('Username is required ya chump!'),
            
    password: yup
            .string()
            .required('Email is required!'),
         
    email: yup
            .string()
            .email("Email")
            .required('Email is required!'),
          

})

export default Schema;