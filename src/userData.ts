export const personalInfo: (
    | {
          title: string;
          info?: undefined;
      }
    | {
          title: string;
          info: string;
      }
)[] = [
    {title: 'full name'},
    {title: 'phone number'},
    {title: 'email address'},
    {title: 'bvn'},
    {title: 'gender'},
    {title: 'marital status', info: 'Single'},
    {title: 'children', info: 'None'},
    {title: 'type of apartment', info: "Parent's Apartment"},
];

export const educationAndEmployment: {
    title: string;
}[] = [
    {title: 'level of education'},
    {title: 'employment status'},
    {title: 'sector of employment '},
    {title: 'duration of employment '},
    {title: 'office  email '},
    {title: 'monthly  income '},
    {title: 'loan repayment '},
];

export const socials: {
    title: string;
}[] = [{title: 'twitter'}, {title: 'facebook'}, {title: 'instagram'}];

export const guarantor: {
    title: string;
}[] = [
    {title: 'full name'},
    {title: 'phone number'},
    {title: 'email address'},
    {title: 'relationship'},
];

export const userData = {
    createdAt: '',
    orgName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    accountBalance: '',
    accountNumber: '',
    id: '',
    lastActiveDate: '',
    education: {
        level: '',
        employmentStatus: '',
        sector: '',
        duration: '',
        officeEmail: '',
        loanRepayment: '',
        monthlyIncome: [],
    },
    guarantor: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        address: '',
    },
    profile: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        avatar: '',
        gender: '',
        address: '',
        bvn: '',
        currency: '',
    },
    socials: {
        facebook: '',
        instagram: '',
        twitter: '',
    },
};
