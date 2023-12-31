export {Layer4_1,Layer4_2,Layer4_3,
    Layer4_4,Layer4_5,Layer4_6,
    Layer4_7,Layer4_8,Layer4_9,
    Source4_1,Layer4_1_L,Source4_2,Layer4_2_L,Source4_3,Layer4_3_L,
    Source4_4,Layer4_4_L,Source4_5,Layer4_5_L,Source4_6,Layer4_6_L,
    Source4_7,Layer4_7_L,Source4_8,Layer4_8_L,Source4_9,Layer4_9_L,
}

//4.1理学院西
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99044,22.59775],
            [113.99089,22.59773],
            [113.99089,22.59769],
            [113.99101,22.59768],
            [113.99101,22.59772],
            [113.99124,22.59771],
            [113.99122,22.59736],
            [113.99099,22.59737],
            [113.99100,22.59744],
            [113.99087,22.59744],
            [113.99087,22.59738],
            [113.99042,22.59741],
            [113.99044,22.59775]// 闭合多边形
        ]]
    }
};
const Layer4_1 = ({
    'id': 'lixueyuan1',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99101,22.59768]
        },
        'properties': {
            'description': '理学院西'
        }
    }
};

const Layer4_1_L = ({
    'id': 'lixueyuan1L',
    'type': 'symbol',
    'source': 'label4_1',
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

//4.2理学院西
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99049, 22.59832],
            [113.99094, 22.59829],
            [113.99094, 22.59825],
            [113.99106, 22.59824],
            [113.99106, 22.59828],
            [113.99129, 22.59827],
            [113.99126, 22.59793],
            [113.99102, 22.59795],
            [113.99103, 22.59800],
            [113.99091, 22.59801],
            [113.99090, 22.59795],
            [113.99047, 22.59798],
            [113.99049, 22.59832]
        ]]
    }
};
const Layer4_2 = ({
    'id': 'lixueyuan2',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99129,22.59827]
        },
        'properties': {
            'description': '理学院西'
        }
    }
};

const Layer4_2_L = ({
    'id': 'lixueyuan2L',
    'type': 'symbol',
    'source': 'label4_2',
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

//4.3 第二科研楼
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99079, 22.59898],
            [113.99154, 22.59870],
            [113.99139, 22.59838],
            [113.99066, 22.59869],
            [113.99079, 22.59898]

        ]]
    }
};
const Layer4_3 = ({
    'id': 'dierkeyanlou',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99079,22.59898]
        },
        'properties': {
            'description': '第二科研楼'
        }
    }
};

const Layer4_3_L = ({
    'id': 'dierkeyanlouL',
    'type': 'symbol',
    'source': 'label4_3',
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

//4.4 第一科研楼
const polygon4 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99171, 22.59960],
            [113.99208, 22.59935],
            [113.99170, 22.59888],
            [113.99119, 22.59920],
            [113.99160, 22.59945],
            [113.99171, 22.59960]
        ]]
    }
};
const Layer4_4 = ({
    'id': 'diyikeyanlou',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon4
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_4 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99171,22.59960]
        },
        'properties': {
            'description': '第一科研楼'
        }
    }
};

const Layer4_4_L = ({
    'id': 'diyikeyanlouL',
    'type': 'symbol',
    'source': 'label4_4',
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

//4.5 理学院东
const polygon5 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99433, 22.59791],
            [113.99516, 22.59729],
            [113.99432, 22.59631],
            [113.99416, 22.59643],
            [113.99484, 22.59722],
            [113.99457, 22.59741],
            [113.99372, 22.59643],
            [113.99393, 22.59627],
            [113.99378, 22.59609],
            [113.99316, 22.59653],
            [113.99333, 22.59672],
            [113.99352, 22.59658],
            [113.99437, 22.59757],
            [113.99418, 22.59772],
            [113.99433, 22.59791]
        ]]
    }
};
const Layer4_5 = ({
    'id': 'lixueyuan3',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon5
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_5 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [ 113.99416,22.59643]
        },
        'properties': {
            'description': '理学院东'
        }
    }
};

const Layer4_5_L = ({
    'id': 'lixueyuan3L',
    'type': 'symbol',
    'source': 'label4_5',
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

//4.6 商学院
const polygon6 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99568, 22.59904],
            [113.99579, 22.59895],
            [113.99539, 22.59848],
            [113.99568, 22.59827],
            [113.99608, 22.59873],
            [113.99627, 22.59859],
            [113.99574, 22.59798],
            [113.99514, 22.59840],
            [113.99568, 22.59904]
        ]]
    }
};
const Layer4_6 = ({
    'id': 'shangxueyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon6
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_6 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99568,22.59827]
        },
        'properties': {
            'description': '商学院'
        }
    }
};

const Layer4_6_L = ({
    'id': 'shangxueyuanL',
    'type': 'symbol',
    'source': 'label4_6',
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

//4.7 工学院北
const polygon7 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99027, 22.60450],
            [113.99142, 22.60465],
            [113.99144, 22.60447],
            [113.99048, 22.60435],
            [113.99056, 22.60376],
            [113.99141, 22.60387],
            [113.99144, 22.60369],
            [113.99037, 22.60354],
            [113.99022, 22.60443],
            [113.99027, 22.60450]
        ]]
    }
};

const Layer4_7 = ({
    'id': 'gongxueyuanbei',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon7
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_7 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99048,22.60435]
        },
        'properties': {
            'description': '工学院北'
        }
    }
};

const Layer4_7_L = ({
    'id': 'gongxueyuanbeiL',
    'type': 'symbol',
    'source': 'label4_7',
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

//4.8 工学院南
const polygon8 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99041, 22.60327],
            [113.99150, 22.60343],
            [113.99216, 22.60284],
            [113.99203, 22.60272],
            [113.99146, 22.60324],
            [113.99067, 22.60311],
            [113.99072, 22.60279],
            [113.99160, 22.60200],
            [113.99151, 22.60186],
            [113.99056, 22.60266],
            [113.99050, 22.60278],
            [113.99041, 22.60327]
        ]]
    }
};
const Layer4_8 = ({
    'id': 'gongxueyuannan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon8
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_8 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99041,22.60327]
        },
        'properties': {
            'description': '工学院南'
        }
    }
};

const Layer4_8_L = ({
    'id': 'gongxueyuannanL',
    'type': 'symbol',
    'source': 'label4_8',
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

//4.1 人文社科学院
const polygon9 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99657, 22.60064],
            [113.99732, 22.60053],
            [113.99763, 22.60016],
            [113.99738, 22.59997],
            [113.99713, 22.60023],
            [113.99731, 22.60036],
            [113.99711, 22.60044],
            [113.99707, 22.60021],
            [113.99667, 22.60027],
            [113.99672, 22.60050],
            [113.99651, 22.60047],
            [113.99662, 22.60027],
            [113.99632, 22.60010],
            [113.99614, 22.60038],
            [113.99657, 22.60064]

        ]]
    }
};
const Layer4_9 = ({
    'id': 'renwenshekexueyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon9
    },
    'paint': {
        'fill-extrusion-color': '#ffa500',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});

const Source4_9 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99657,22.60064]
        },
        'properties': {
            'description': '人文社科学院'
        }
    }
};

// 添加一个 symbol 图层来显示文本
const Layer4_9_L = ({
    'id': 'renwenshekexueyuanL',
    'type': 'symbol',
    'source': 'label4_9',
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