export interface Location {
  value: string;
  label: string;
  state: string;
}

export const locations: Location[] = [
  { value: 'chicago', label: 'Chicago', state: 'Illinois' },
  { value: 'rosemont', label: 'Rosemont', state: 'Illinois' },
  { value: 'las-vegas', label: 'Las Vegas', state: 'Nevada' },
  { value: 'orlando', label: 'Orlando', state: 'Florida' },
  { value: 'miami', label: 'Miami', state: 'Florida' },
  { value: 'miami-beach', label: 'Miami Beach', state: 'Florida' },
  { value: 'fort-lauderdale', label: 'Fort Lauderdale', state: 'Florida' },
  { value: 'tampa', label: 'Tampa', state: 'Florida' },
  { value: 'atlanta', label: 'Atlanta', state: 'Georgia' },
  { value: 'houston', label: 'Houston', state: 'Texas' },
  { value: 'dallas', label: 'Dallas', state: 'Texas' },
  { value: 'san-antonio', label: 'San Antonio', state: 'Texas' },
  { value: 'new-orleans', label: 'New Orleans', state: 'Louisiana' },
  { value: 'san-diego', label: 'San Diego', state: 'California' },
  { value: 'san-francisco', label: 'San Francisco', state: 'California' },
  { value: 'san-jose', label: 'San Jose', state: 'California' },
  { value: 'anaheim', label: 'Anaheim', state: 'California' },
  { value: 'phoenix', label: 'Phoenix', state: 'Arizona' },
  { value: 'indianapolis', label: 'Indianapolis', state: 'Indiana' },
  { value: 'boston', label: 'Boston', state: 'Massachusetts' },
  { value: 'washington-dc', label: 'Washington', state: 'D.C.' },
  { value: 'nashville', label: 'Nashville', state: 'Tennessee' },
  { value: 'denver', label: 'Denver', state: 'Colorado' },
  { value: 'philadelphia', label: 'Philadelphia', state: 'Pennsylvania' },
  { value: 'detroit', label: 'Detroit', state: 'Michigan' },
  { value: 'louisville', label: 'Louisville', state: 'Kentucky' },
  { value: 'salt-lake-city', label: 'Salt Lake City', state: 'Utah' },
  { value: 'atlantic-city', label: 'Atlantic City', state: 'New Jersey' },
  { value: 'portland', label: 'Portland', state: 'Oregon' },
  { value: 'seattle', label: 'Seattle', state: 'Washington' }
];