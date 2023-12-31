export {Layer5_1,Layer5_2,Layer5_3,
    Layer5_4,Layer5_5,Layer5_6,
    Source5_1,Layer5_1_L,Source5_2,Layer5_2_L,Source5_3,Layer5_3_L,
    Source5_4,Layer5_4_L,Source5_5,Layer5_5_L,Source5_6,Layer5_6_L,
    }

//5.1 风雨操场
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99457, 22.60206],
            [113.99560, 22.60280],
            [113.99620, 22.60280],
            [113.99620, 22.60273],
            [113.99566, 22.60264],
            [113.99551, 22.60252],
            [113.99543, 22.60238],
            [113.99525, 22.60248],
            [113.99507, 22.60236],
            [113.99476, 22.60188],
            [113.99510, 22.60172],
            [113.99489, 22.60157],
            [113.99450, 22.60146],
            [113.99439, 22.60130],
            [113.99416, 22.60143],
            [113.99457, 22.60206]
        ]]
    }
};
const Layer5_1 = ({
    'id': 'fengyucaochang',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99457,22.60206]
        },
        'properties': {
            'description': '风雨操场'
        }
    }
};
const Layer5_1_L = ({
    'id': 'fengyucaochangL',
    'type': 'symbol',
    'source': 'label5_1',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//5.2 松禾田径场
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99776, 22.60497],
            [113.99783, 22.60513],
            [113.99795, 22.60524],
            [113.99811, 22.60530],
            [113.99827, 22.60532],
            [113.99844, 22.60528],
            [113.99860, 22.60519],
            [113.99870, 22.60507],
            [113.99874, 22.60495],
            [113.99875, 22.60401],
            [113.99872, 22.60391],
            [113.99866, 22.60381],
            [113.99852, 22.60370],
            [113.99834, 22.60365],
            [113.99812, 22.60367],
            [113.99797, 22.60373],
            [113.99784, 22.60387],
            [113.99778, 22.60401],
            [113.99776, 22.60497]// 闭合多边形
        ]]
    }
};
const Layer5_2 = ({
    'id': 'songhetianjingchang',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 0,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99776,22.60497]
        },
        'properties': {
            'description': '松禾田径场'
        }
    }
};
const Layer5_2_L = ({
    'id': 'songhetianjingchangL',
    'type': 'symbol',
    'source': 'label5_2',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//5.3 润扬体育馆
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99876, 22.60499],
            [113.99959, 22.60499],
            [113.99960, 22.60437],
            [113.99878, 22.60438],
            [113.99876, 22.60499]
        ]]
    }
};
const Layer5_3 = ({
    'id': 'runyangtiyuguan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99876,22.60499]
        },
        'properties': {
            'description': '润扬体育馆'
        }
    }
};
const Layer5_3_L = ({
    'id': 'runyangtiyuguanL',
    'type': 'symbol',
    'source': 'label5_3',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//5.4 棒球场
const polygon4 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99748, 22.60122],
            [113.99858, 22.60155],
            [113.99868, 22.60131],
            [113.99869, 22.60107],
            [113.99874, 22.60084],
            [113.99895, 22.60050],
            [113.99800, 22.60016],
            [113.99776, 22.60048],
            [113.99750, 22.60114],
            [113.99748, 22.60122]
        ]]
    }
};
const Layer5_4 = ({
    'id': 'bangqiuchang',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon4
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 0,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_4 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99748,22.60122]
        },
        'properties': {
            'description': '棒球场'
        }
    }
};
const Layer5_4_L = ({
    'id': 'bangqiuchangL',
    'type': 'symbol',
    'source': 'label5_4',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//5.5 篮球场
const polygon5 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99682, 22.60334],
            [113.99718, 22.60344],
            [113.99717, 22.60350],
            [113.99754, 22.60360],
            [113.99765, 22.60328],
            [113.99692, 22.60305],
            [113.99682, 22.60334]
        ]]
    }
};
const Layer5_5 = ({
    'id': 'lanqiuchang',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon5
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 0,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_5 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99682,22.60334]
        },
        'properties': {
            'description': '篮球场'
        }
    }
};
const Layer5_5_L = ({
    'id': 'lanqiuchangL',
    'type': 'symbol',
    'source': 'label5_5',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//5.6 足球场
const polygon6 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99835, 22.60952],
            [113.99879, 22.60968],
            [113.99919, 22.60888],
            [113.99942, 22.60865],
            [113.99899, 22.60822],
            [113.99875, 22.60855],
            [113.99835, 22.60952]

        ]]
    }
};
const Layer5_6 = ({
    'id': 'zuqiuchang',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon6
    },
    'paint': {
        'fill-extrusion-color': '#0080ff',
        'fill-extrusion-height': 0,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source5_6 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99835,22.60952]
        },
        'properties': {
            'description': '足球场'
        }
    }
};
const Layer5_6_L = ({
    'id': 'zuqiuchangL',
    'type': 'symbol',
    'source': 'label5_6',
    'layout': {
        'text-field': ['get', 'description'],
        'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
        'text-radial-offset': 0.5,
        'text-justify': 'auto',
        // 使用表达式动态调整文本大小
        'text-size': [
            'interpolate',
            ['linear'], // 线性插值
            ['zoom'],   // 当前地图的缩放级别
            // 在不同缩放级别下指定文本大小

            10, 0.1,
            12, 1,
            14, 2,
            16, 8,
            18, 24,// 缩放级别10时，字体大小为12
            20, 36      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});