function store_car_info(manufacturer: string, model: string, ...details: { [key: string]: any }[]): void {
  let car: { manufacturer: string, model: string, [key: string]: any } = {
    manufacturer: manufacturer,
    model: model
  };
  for (let i = 0; i < details.length; i++) {
    let detail = details[i];
    let key = Object.keys(detail)[0];
    let value = detail[key];
    car[key] = value;
  }
  console.log(car);
}store_car_info('Toyota', 'Camry', { color: 'Silver' }, { year: 2022 }, { trim: 'LE' });
store_car_info('Ford', 'Mustang', { color: 'Red' }, { year: 2021 }, { convertible: true });