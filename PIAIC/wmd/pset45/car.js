function store_car_info(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < details.length; i++) {
        var detail = details[i];
        var key = Object.keys(detail)[0];
        var value = detail[key];
        car[key] = value;
    }
    console.log(car);
}
store_car_info('Toyota', 'Camry', { color: 'Silver' }, { year: 2022 }, { trim: 'LE' });
store_car_info('Ford', 'Mustang', { color: 'Red' }, { year: 2021 }, { convertible: true });
