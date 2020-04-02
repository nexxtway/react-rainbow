export default function getWorkBookParams() {
    return {
        SheetNames: ['Sheet1'],
        Sheets: {
            Sheet1: {
                A1: { t: 's', v: 'First_Name', w: 'First_Name' },
                B1: { t: 's', v: 'Last_Name', w: 'Last_Name' },
                C1: { t: 's', v: 'Email', w: 'Email' },
                A2: { t: 's', v: 'John' },
                B2: { t: 's', v: 'Doe' },
                C2: { t: 's', v: 'john@gmail.com' },
                A3: { t: 's', v: 'Jane' },
                B3: { t: 's', v: 'Doe' },
                C3: { t: 's', v: 'jane@gmail.com' },
                '!ref': 'A1:C3',
            },
        },
    };
}
