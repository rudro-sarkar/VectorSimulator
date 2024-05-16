
const define_vector_btn = document.getElementById("define_vector_btn");

const vector_keyword_inp = document.getElementById("vector_keyword_inp");
const vector_mag_inp = document.getElementById("vector_mag_inp");
const vector_dir_inp = document.getElementById("vector_dir_inp");

const vector_display_div = document.getElementById("vector_display_div");

const calc_resultant_btn = document.getElementById("calc_resultant_btn");

const vector_result_div = document.getElementById("vector_result_div");

const visual_simulation_btn = document.getElementById("visual_simulation_btn");

let pockets_occupied = 0;

let vct_results = {
    resultant: 0,
    direction: 0
}

define_vector_btn.addEventListener('click', e => {
    e.preventDefault();
    if (pockets_occupied >=10){
        show_error(99);
    }else {
        validate_inputs();
    }
});

calc_resultant_btn.addEventListener('click', e => {
    e.preventDefault();
    calculate_vector_resultant();
});

visual_simulation_btn.addEventListener('click', e => {
    e.preventDefault();
    simulate_visuals(vct_results);
});

const validate_inputs = () => {
    let vector_alias = vector_keyword_inp.value;
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(vector_alias) === true && vector_alias.length ===1){
        ultimate_vector_alias = vector_alias.toUpperCase();
        mag_validation(ultimate_vector_alias);
    }else {
        show_error('101')
    }
}

const mag_validation = (alias) => {
    let vector_mag = parseFloat(vector_mag_inp.value);
    if(typeof(vector_mag) === 'number' && vector_mag <= 9999 && vector_mag >= 0){
        ultimate_vector_magnitude = vector_mag;
        dir_validation(alias, ultimate_vector_magnitude)
    }else {
        show_error('102')
    }
}

const dir_validation = (alias, magnitude) => {
    let vector_dir = parseFloat(vector_dir_inp.value);
    if (typeof(vector_dir) === 'number' && vector_dir >=0 && vector_dir <=360) {
        ultimate_vector_direction = vector_dir;
        save_vector_object(alias, magnitude, ultimate_vector_direction);
        display_defined_vector(alias, magnitude, ultimate_vector_direction);
        clear_input_fields();
    }else {
        show_error('103')
    }
}

const save_vector_object = (name, magnitude, direction) => {
    if (pockets_occupied == 0) {
        vectors.vector_1.name = name;
        vectors.vector_1.mag = magnitude;
        vectors.vector_1.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 1) {
        vectors.vector_2.name = name;
        vectors.vector_2.mag = magnitude;
        vectors.vector_2.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 2) {
        vectors.vector_3.name = name;
        vectors.vector_3.mag = magnitude;
        vectors.vector_3.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 3) {
        vectors.vector_4.name = name;
        vectors.vector_4.mag = magnitude;
        vectors.vector_4.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 4) {
        vectors.vector_5.name = name;
        vectors.vector_5.mag = magnitude;
        vectors.vector_5.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 5) {
        vectors.vector_6.name = name;
        vectors.vector_6.mag = magnitude;
        vectors.vector_6.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 6) {
        vectors.vector_7.name = name;
        vectors.vector_7.mag = magnitude;
        vectors.vector_7.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 7) {
        vectors.vector_8.name = name;
        vectors.vector_8.mag = magnitude;
        vectors.vector_8.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 8) {
        vectors.vector_9.name = name;
        vectors.vector_9.mag = magnitude;
        vectors.vector_9.dir = direction;
        pockets_occupied += 1;
    }else if (pockets_occupied == 9) {
        vectors.vector_10.name = name;
        vectors.vector_10.mag = magnitude;
        vectors.vector_10.dir = direction;
        pockets_occupied += 1;
    }
}

const clear_input_fields = () => {
    vector_keyword_inp.value = '';
    vector_mag_inp.value = '';
    vector_dir_inp.value = '';
}

const display_defined_vector = (name, magnitude, direction) => {
    const vector_card_div = document.createElement('div');
    vector_card_div.setAttribute('class', 'vector_card');

    const name_p = document.createElement('p');
    name_p.setAttribute('class', 'vector_name');
    name_p.innerHTML = `${name} =>`;

    const mag_p = document.createElement('p');
    mag_p.setAttribute('class', 'vector_mag');
    mag_p.innerHTML = `Mag: ${magnitude.toFixed(2)}U`;

    const dir_p = document.createElement('p');
    dir_p.setAttribute('class', 'vector_dir');
    dir_p.innerHTML = `Dir: ${direction.toFixed(2)}°`;

    vector_card_div.appendChild(name_p);
    vector_card_div.appendChild(mag_p);
    vector_card_div.appendChild(dir_p);

    vector_display_div.appendChild(vector_card_div);
}

const calculate_vector_resultant = () => {
    if (pockets_occupied < 2) {
        show_error(104);
    }else if (pockets_occupied >= 2 && pockets_occupied <= 10) {
        proceed_calculation();
    }
}

const proceed_calculation = () => {
    if (pockets_occupied == 2) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);

    }
    else if (pockets_occupied == 3) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 4) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 5) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 6) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;
        let v6m = vectors.vector_6.mag;
        let v6d = vectors.vector_6.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d) + v6m * Math.cos(v6d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d) + v6m * Math.sin(v6d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 7) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;
        let v6m = vectors.vector_6.mag;
        let v6d = vectors.vector_6.dir * Math.PI / 180;
        let v7m = vectors.vector_7.mag;
        let v7d = vectors.vector_7.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d) + v6m * Math.cos(v6d) + v7m * Math.cos(v7d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d) + v6m * Math.sin(v6d) + v7m * Math.sin(v7d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 8) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;
        let v6m = vectors.vector_6.mag;
        let v6d = vectors.vector_6.dir * Math.PI / 180;
        let v7m = vectors.vector_7.mag;
        let v7d = vectors.vector_7.dir * Math.PI / 180;
        let v8m = vectors.vector_8.mag;
        let v8d = vectors.vector_8.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d) + v6m * Math.cos(v6d) + v7m * Math.cos(v7d) + v8m * Math.cos(v8d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d) + v6m * Math.sin(v6d) + v7m * Math.sin(v7d) + v8m * Math.sin(v8d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 9) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;
        let v6m = vectors.vector_6.mag;
        let v6d = vectors.vector_6.dir * Math.PI / 180;
        let v7m = vectors.vector_7.mag;
        let v7d = vectors.vector_7.dir * Math.PI / 180;
        let v8m = vectors.vector_8.mag;
        let v8d = vectors.vector_8.dir * Math.PI / 180;
        let v9m = vectors.vector_9.mag;
        let v9d = vectors.vector_9.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d) + v6m * Math.cos(v6d) + v7m * Math.cos(v7d) + v8m * Math.cos(v8d) + v9m * Math.cos(v9d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d) + v6m * Math.sin(v6d) + v7m * Math.sin(v7d) + v8m * Math.sin(v8d) + v9m * Math.sin(v9d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
    else if (pockets_occupied == 10) {
        let v1m = vectors.vector_1.mag;
        let v1d = vectors.vector_1.dir * Math.PI / 180;
        let v2m = vectors.vector_2.mag;
        let v2d = vectors.vector_2.dir * Math.PI / 180;
        let v3m = vectors.vector_3.mag;
        let v3d = vectors.vector_3.dir * Math.PI / 180;
        let v4m = vectors.vector_4.mag;
        let v4d = vectors.vector_4.dir * Math.PI / 180;
        let v5m = vectors.vector_5.mag;
        let v5d = vectors.vector_5.dir * Math.PI / 180;
        let v6m = vectors.vector_6.mag;
        let v6d = vectors.vector_6.dir * Math.PI / 180;
        let v7m = vectors.vector_7.mag;
        let v7d = vectors.vector_7.dir * Math.PI / 180;
        let v8m = vectors.vector_8.mag;
        let v8d = vectors.vector_8.dir * Math.PI / 180;
        let v9m = vectors.vector_9.mag;
        let v9d = vectors.vector_9.dir * Math.PI / 180;
        let v10m = vectors.vector_10.mag;
        let v10d = vectors.vector_10.dir * Math.PI / 180;


        let Rcost = v1m * Math.cos(v1d) + v2m * Math.cos(v2d) + v3m * Math.cos(v3d) + v4m * Math.cos(v4d) + v5m * Math.cos(v5d) + v6m * Math.cos(v6d) + v7m * Math.cos(v7d) + v8m * Math.cos(v8d) + v9m * Math.cos(v9d) + v10m * Math.cos(v10d);
        let Rsint = v1m * Math.sin(v1d) + v2m * Math.sin(v2d) + v3m * Math.sin(v3d) + v4m * Math.sin(v4d) + v5m * Math.sin(v5d) + v6m * Math.sin(v6d) + v7m * Math.sin(v7d) + v8m * Math.sin(v8d) + v9m * Math.sin(v9d) + v10m * Math.sin(v10d);

        let Resultant = Math.sqrt((Rcost ** 2) + (Rsint ** 2));
        let Theta = Math.atan(Rsint / Rcost) * 180 / Math.PI;

        show_vector_result(Resultant, Theta);
    }
}

const show_vector_result = (resultant, theta) => {
    vector_result_div.style.display = 'flex';

    const resulatant_span_view = document.getElementById("resulatant_span_view");
    const direction_span_view = document.getElementById("direction_span_view");

    resulatant_span_view.innerHTML = "";
    direction_span_view.innerHTML = "";
    
    resulatant_span_view.innerHTML = resultant.toFixed(3);
    direction_span_view.innerHTML = theta.toFixed(3);

    visual_simulation_btn.style.pointerEvents = 'auto';
    visual_simulation_btn.style.display = 'flex';

    vct_results.resultant = resultant;
    vct_results.direction = theta;
    
}

const show_error = (err_code) => {
    if (err_code == 99) {
        Swal.fire({
          title: 'Limit Reached!',
          text: 'You can define up to 10 vectors at a time.',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
    }
    else if (err_code == 101) {
        Swal.fire({
          title: 'Invalid Format!',
          text: 'You need to use one single letter from A to Z as your vector name.',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
    }
    else if (err_code == 102) {
        Swal.fire({
          title: 'Number Error!',
          text: 'Please use number within 0 to 9999.',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
    }
    else if (err_code == 103) {
        Swal.fire({
          title: 'Angle Error!',
          text: 'Please use angle within 0 to 360.',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
    }
    else if (err_code == 104) {
        Swal.fire({
          title: 'Calculation Error!',
          text: 'Please define at least two vectors to calculate their resultant.',
          icon: 'error',
          confirmButtonText: 'Okay!'
        })
    }
}