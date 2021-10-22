import * as yup from "yup";


const form_schema = yup.object().shape({

    nickname: yup
        .string()
        .trim()
        .min(2, "Nickname must be at least 2 characters")
        .required("Nickname is required."),
    species: yup
        .string()
        .trim()
        .min(2, "Species name must be at least 2 characters")
        .required("Species is required."),
    h2oFrequency: yup
        .string()
        .oneOf(["Once a Day", "Every other day", "Once a week", "Twice a week"],
                "Please choose watering schedule: ")
        .required("Watering schedule is required."),
    image:yup
        .string()
        .trim()

})


export default form_schema;