function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
let location1 = city_country('Lahore', 'Pakistan');
let location2 = city_country('Doha', 'Qatar');
let location3 = city_country('New York', 'United States');
console.log(location1);
console.log(location2);
console.log(location3);