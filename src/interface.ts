export interface dataInterface {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    accountBalance: string;
    accountNumber: string;
    id: string;
    lastActiveDate: string;
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        loanRepayment: string;
        monthlyIncome: string[];
    };
    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        gender: string;
        address: string;
    };
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar: string;
        gender: string;
        address: string;
        bvn: string;
        currency: string;
    };
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
}
