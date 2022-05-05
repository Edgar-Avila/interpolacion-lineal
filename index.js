const data_form = document.getElementById("data-form");
const x1_input = document.getElementById("x1-input");
const y1_input = document.getElementById("y1-input");
const x2_input = document.getElementById("x2-input");
const y2_input = document.getElementById("y2-input");
const x_input = document.getElementById("x-input");

data = [
    {
        x: [0, 0],
        y: [0, 0],
        mode: "lines+markers",
        marker: {
            size: 8
        }
    },
    {
        x: [0],
        y: [0],
        mode: "markers",
        marker: {
            size: 14
        }
    }
];

let layout = {
    title: "Interpolación Lineal",
    showlegend: false,
};

let config = {
    responsive: true
};

const linear_interpolation = (x1, x2, y1, y2, x) => {
    let m = (y2 - y1) / (x2 - x1);
    return y1 + m * (x - x1);
};

const calc_data = () => {
    let x1 = parseFloat(x1_input.value);
    let y1 = parseFloat(y1_input.value);
    let x2 = parseFloat(x2_input.value);
    let y2 = parseFloat(y2_input.value);
    let x = parseFloat(x_input.value);
    let y = linear_interpolation(x1, x2, y1, y2, x);
    return { x1, y1, x2, y2, x, y };
}

const update_data = () => {
    const { x1, y1, x2, y2, x, y } = calc_data();
    data[0].x = [x1, x2];
    data[0].y = [y1, y2];
    data[1].x = [x];
    data[1].y = [y];
}

const plot = () => {
    update_data();
    Plotly.newPlot("plot", data, layout, config);
};

const redraw = () => {
    update_data();
    Plotly.redraw("plot");
}

window.addEventListener("load", () => {
    plot();
})

data_form.addEventListener("change", () => {
    redraw();
});