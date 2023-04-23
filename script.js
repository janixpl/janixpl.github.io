let x = [], y = [], z = [];

const values = [1, 2, 3, 4, 5];

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
        for (let k = 0; k < values.length; k++) {
            x.push(values[i]);
            y.push(values[j]);
            z.push(values[k]);
        }
    }
}

const sphereSizes = x.map((_, i) => (x[i] + y[i] + z[i])**1.8);

const data = [
    {
        x: x,
        y: y,
        z: z,
        mode: 'markers',
        marker: {
            color: 'blue',
            size: sphereSizes,
            opacity: 0.7
        },
        type: 'scatter3d',
        name: 'Spheres'
    },
    {
        x: [0, 5],
        y: [0, 5],
        z: [0, 5],
        mode: 'lines',
        line: {
            color: 'red',
            width: 5
        },
        type: 'scatter3d',
        name: 'Line'
    }
];

const layout = {
    scene: {
        xaxis: {
            title: 'Effort', color: 'white'
        },
        yaxis: {
            title: 'Unknowns', color: 'white'
        },
        zaxis: {
            title: 'Complexity', color: 'white'
        }
    },
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    showlegend: false,
    paper_bgcolor: 'rgb(0, 0, 0)',
    plot_bgcolor: 'rgb(0, 0, 0)'
};

var config = {responsive: true}

Plotly.newPlot('chart', data, layout, config);
