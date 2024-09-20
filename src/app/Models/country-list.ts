export interface Country {
    name: string;
    code: string;
     cities: string[];
  }
  export const countryList: Country[] = [
    {
      name: 'United States',
      code: 'US',
      cities: ['New York', 'Los Angeles', 'Chicago', 'Houston']
    },
    {
      name: 'India',
      code: 'IN',
      cities: ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata']
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      cities: ['London', 'Manchester', 'Birmingham', 'Liverpool']
    },
    {
      name: 'Canada',
      code: 'CA',
      cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary']
    },
    {
      name: 'Australia',
      code: 'AU',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth']
    },
    {
      name: 'Germany',
      code: 'DE',
      cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg']
    },
    {
      name: 'France',
      code: 'FR',
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse']
    },
    {
      name: 'Italy',
      code: 'IT',
      cities: ['Rome', 'Milan', 'Florence', 'Venice']
    },
    {
      name: 'Japan',
      code: 'JP',
      cities: ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima']
    },
    {
      name: 'China',
      code: 'CN',
      cities: ['Beijing', 'Shanghai', 'Shenzhen', 'Guangzhou']
    }
  ];