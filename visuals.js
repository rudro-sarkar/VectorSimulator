
const simulate_visuals = (draw_info) => {
  const visual_representation_div = document.getElementById("visual_representation_div");
  const vector_line_comp = document.getElementById("vector_line_comp");
  
  visual_representation_div.style.display = 'block';

  if (draw_info.direction < 0) {
    let prop_dir = 360 - Math.abs(draw_info.direction);
    vector_line_comp.style.display = `flex`;
    vector_line_comp.style.transform = `rotate(-${prop_dir}deg)`;
  }else if (draw_info.resultant == 'abnormal' || draw_info.direction == 'abnormal' || draw_info.resultant == 0) {
    vector_line_comp.style.display = `none`;
  }else {
    vector_line_comp.style.display = `flex`;
    vector_line_comp.style.transform = `rotate(-${draw_info.direction}deg)`;
  }
  
}