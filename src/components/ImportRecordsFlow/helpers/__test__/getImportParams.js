export default function getDataToImport() {
    return {
        data: [
            { First_Name: 'John', Last_Name: 'Doe', Email: 'jonh@gmail.com' },
            { First_Name: 'Jane', Last_Name: 'Doe', Email: 'jane@gmail.com' },
            { First_Name: 'Fred', Last_Name: 'Flinstone', Email: 'fred@gmail.com' },
        ],
        fieldsMap: {
            name: 'First_Name,Last_Name',
            email: 'Email',
        },
        schema: {
            collection: 'users',
            attributes: {
                name: { required: true },
                email: {},
                date: {},
            },
        },
        actionOption: 'add-records',
        matchField: 'default',
    };
}
