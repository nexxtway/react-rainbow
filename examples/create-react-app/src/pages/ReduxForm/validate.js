export default function validate(values) {
    const { firstName, lastName, email, gender } = values;
    const errors = {};
    if (!firstName) {
        errors.firstName = 'First name is a required field';
    }
    if (!lastName) {
        errors.lastName = 'Last name is a required field';
    }
    if (!email) {
        errors.email = 'Email is a required field';
    }
    if (!gender) {
        errors.gender = 'Gender is a required field';
    }
    return errors;
}
