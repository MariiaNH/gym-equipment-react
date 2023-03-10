import * as yup from "yup";

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

export default schema;
