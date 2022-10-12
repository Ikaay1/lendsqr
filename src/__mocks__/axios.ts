import { userData } from '../userData';

const mockedData = {
    data: {...userData, email: 'test@gmail.com'},
};

const mockedResponse = {
    get: jest.fn().mockResolvedValue(mockedData),
};

export default mockedResponse;
