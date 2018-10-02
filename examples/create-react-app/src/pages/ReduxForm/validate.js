export default function validate(values) {
    const { email, password } = values;
    const errors = {};
    if (!email) {
        errors.email = 'Email is a required field';
    }
    if (!password) {
        errors.password = 'Password is a required field';
    }
    return errors;
}

