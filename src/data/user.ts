export interface MockUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  address: {
    label: string;
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
  };
}

export const mockUser: MockUser = {
  firstName: 'Ananya',
  lastName: 'Krishnan',
  email: 'ananya.k@gmail.com',
  phone: '+91 98220 14478',
  dob: '14 March 1992',
  address: {
    label: 'Home',
    line1: 'B-204, Lotus Heights, Koregaon Park',
    line2: 'Near North Main Road junction',
    city: 'Pune',
    pincode: '411001',
    state: 'Maharashtra',
    country: 'India',
  },
};
