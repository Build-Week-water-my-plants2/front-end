import * as yup from 'yup';

const Schema = yup.object().shape({
    nickname: yup 
            .string()
            .trim()
            .required("Enter the plant's Nickname Here"),

    species: yup
            .string()
            .required("Enter the plant's Species Here"),

})

export default Schema;