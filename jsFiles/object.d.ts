declare var EmployeeData: {
    name: string;
    company: string;
    Address: {
        sector: number;
        country: string;
        city?: string;
    };
    Friends: {
        [key: string]: string | number | boolean | undefined;
    };
};
declare var username: string;
