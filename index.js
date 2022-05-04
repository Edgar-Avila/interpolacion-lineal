const data_form = document.getElementById("data-form");
const x1_input = document.getElementById("x1-input");
const y1_input = document.getElementById("y1-input");
const x2_input = document.getElementById("x2-input");
const y2_input = document.getElementById("y2-input");
const x_input = document.getElementById("x-input");

const linear_interpolation = (x1, x2, y1, y2, x) => {
    let m = (y2 - y1) / (x2 - x1);
    return y1 + m * (x - x1);
};

const plot = () => {
    let x1 = parseFloat(x1_input.value);
    let y1 = parseFloat(y1_input.value);
    let x2 = parseFloat(x2_input.value);
    let y2 = parseFloat(y2_input.value);
    let x = parseFloat(x_input.value);
    let y = linear_interpolation(x1, x2, y1, y2, x);

    let data = [
        {
            x: [x1, x2],
            y: [y1, y2],
            mode: "lines+markers"
        },
        {
            x: [x],
            y: [y],
            mode: "markers",
            marker: {
                size: 12
            }
        }
    ];

    let layout = {
        title: "Interpolacion",
        scaleratio: 1
    };

    let config = {
        responsive: true
    };

    Plotly.newPlot("plot", data, layout, config);
};

window.addEventListener("load", () => {
    plot();
})

data_form.addEventListener("change", () => {
    plot();
});