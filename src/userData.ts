const personalInfo: {
    title: string;
    info: string;
}[] = [
    {title: 'full name', info: 'Grace Effiom'},
    {title: 'phone number', info: '07060780922'},
    {title: 'email address', info: 'grace@gmail.com'},
    {title: 'bvn', info: '07060780922'},
    {title: 'gender', info: 'Female'},
    {title: 'marital status', info: 'Single'},
    {title: 'children', info: 'None'},
    {title: 'type of apartment', info: "Parent's Apartment"},
];

const educationAndEmployment: {
    title: string;
    info: string;
}[] = [
    {title: 'level of education', info: 'B.Sc'},
    {title: 'employment status', info: 'Employed'},
    {title: 'sector of employment ', info: 'Fintech'},
    {title: 'duration of employment ', info: '2 years'},
    {title: 'office  email ', info: 'grace@lendsqr.com'},
    {title: 'monthly  income ', info: '₦200,000.00- ₦400,000.00'},
    {title: 'loan repayment ', info: '40,000'},
];

const socials: {
    title: string;
    info: string;
}[] = [
    {title: 'twitter', info: '@grace_effiom'},
    {title: 'facebook', info: 'Grace Effiom'},
    {title: 'instagram', info: '@grace-effiom'},
];

const guarantor: {
    title: string;
    info: string;
}[] = [
    {title: 'full name', info: 'Debby Ogana'},
    {title: 'phone number', info: '07060780922'},
    {title: 'email address', info: 'debby@gmail.com'},
    {title: 'relationship', info: 'Sister'},
];

const userData: {
    title: string;
    info: string;
}[][] = [personalInfo, educationAndEmployment, socials, guarantor];

export default userData;
