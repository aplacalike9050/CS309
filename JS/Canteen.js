export { Layer3_1 , Layer3_2 , Layer3_3,
    Layer3_4_1 , Layer3_4_2 , Layer3_4_3,
    Layer3_5 , Layer3_6 , Layer3_7, Layer3_8,Layer3_9,
    Source3_1,Layer3_1_L,Source3_2,Layer3_2_L,Source3_3,Layer3_3_L,
    Source3_4,Layer3_4_L,Source3_5,Layer3_5_L,Source3_6,Layer3_6_L,
    Source3_7,Layer3_7_L,Source3_8,Layer3_8_L,Source3_9,Layer3_9_L,
};
//3.1 湖畔餐厅
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99260, 22.59980],
            [113.99307, 22.59980],
            [113.99306, 22.59964],
            [113.99324, 22.59974],
            [113.99339, 22.59974],
            [113.99343, 22.59964],
            [113.99285, 22.59937],
            [113.99275, 22.59938],
            [113.99248, 22.59951],
                [113.99260, 22.59980]
// 闭合多边形
        ]]
    }
};
const Layer3_1 = {
    'id': 'hupancanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99285, 22.59963]
        },
        'properties': {
            'description': '湖畔餐厅'
        }
    }
};
const Layer3_1_L = ({
    'id': 'hupancantingL',
    'type': 'symbol',
    'source': 'label3_1',
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

//3.2 中心餐厅
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99290, 22.60087],
            [113.99308, 22.60079],
            [113.99287, 22.60038],
            [113.99268, 22.60016],
            [113.99248, 22.59976],
            [113.99244, 22.59953],
            [113.99230, 22.59962],
            [113.99230, 22.60020],
                [113.99290, 22.60087]

// 闭合多边形
        ]]
    }
};
const Layer3_2 = {
    'id': 'zhongxincanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99251, 22.60025]
        },
        'properties': {
            'description': '中心餐厅'
        }
    }
};
const Layer3_2_L = ({
    'id': 'zhongxincantingL',
    'type': 'symbol',
    'source': 'label3_2',
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

//3.3 九栋餐厅
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99362, 22.60478],
            [113.99376, 22.60480],
            [113.99378, 22.60470],
            [113.99365, 22.60468],
                [113.99362, 22.60478]

// 闭合多边形
        ]]
    }
};
const Layer3_3 = {
    'id': 'jiudongcanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99371,22.60477]
        },
        'properties': {
            'description': '九栋餐厅'
        }
    }
};
const Layer3_3_L = ({
    'id': 'jiudongcantingL',
    'type': 'symbol',
    'source': 'label3_3',
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
            16, 6,
            18, 20,// 缩放级别10时，字体大小为12
            20, 30      // 缩放级别20时，字体大小为24
            // 可以根据需要添加更多的级别
        ]
    },
    'paint': {
        'text-color': '#000000',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
    }
});

//3.4.1 麦香屋
const polygon4 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99756, 22.60310],
            [113.99780, 22.60317],
            [113.99787, 22.60295],
            [113.99764, 22.60288],
                [113.99756, 22.60310]
// 闭合多边形
        ]]
    }
};
const Layer3_4_1 = {
    'id': 'maixiangwu',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon4
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
//3.4.2 西餐厅
const polygon5 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99739, 22.60261],
            [113.99762, 22.60267],
            [113.99768, 22.60246],
            [113.99746, 22.60240],
                [113.99739, 22.60261]
// 闭合多边形
        ]]
    }
};
const Layer3_4_2 = {
    'id': 'xicanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon5
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_4 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99739,22.60261]
        },
        'properties': {
            'description': '西餐厅'
        }
    }
};
const Layer3_4_L = ({
    'id': 'xicantingL',
    'type': 'symbol',
    'source': 'label3_4',
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
//3.4.3 教工餐厅
const polygon6 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99764, 22.60287],
            [113.99787, 22.60294],
            [113.99789, 22.60271],
            [113.99797, 22.60249],
            [113.99772, 22.60241],
            [113.99764, 22.60263],
                [113.99764, 22.60287]
// 闭合多边形
        ]]
    }
};
const Layer3_4_3 = {
    'id': 'jiaogongcanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon6
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

//3.5 天虹超市
const polygon7 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99484, 22.60448],
            [113.99499, 22.60451],
            [113.99501, 22.60446],
            [113.99484, 22.60446],
            [113.99484, 22.60448]
// 闭合多边形
        ]]
    }
};
const Layer3_5 = {
    'id': 'tianhongchaoshi',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon7
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_5 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99484,22.60448]
        },
        'properties': {
            'description': '天虹超市'
        }
    }
};
const Layer3_5_L = ({
    'id': 'tianhongchaoshiL',
    'type': 'symbol',
    'source': 'label3_5',
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

//3.6 湖畔超市
const polygon8 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99367, 22.60312],
            [113.99381, 22.60310],
            [113.99376, 22.60290],
            [113.99364, 22.60292],
            [113.99367, 22.60312]
// 闭合多边形
        ]]
    }
};
const Layer3_6 = {
    'id': 'hupanchaoshi',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon8
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_6 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99367,22.60312]
        },
        'properties': {
            'description': '湖畔超市'
        }
    }
};
const Layer3_6_L = ({
    'id': 'hupanchaoshiL',
    'type': 'symbol',
    'source': 'label3_6',
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

//3.7 荔园餐厅
const polygon9 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99437, 22.60791],
            [113.99486, 22.60777],
            [113.99480, 22.60756],
            [113.99430, 22.60770],
            [113.99437, 22.60791]

// 闭合多边形
        ]]
    }
};
const Layer3_7 = {
    'id': 'liyuancanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon9
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_7 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99437,22.60791]
        },
        'properties': {
            'description': '荔园餐厅'
        }
    }
};
const Layer3_7_L = ({
    'id': 'liyuancantingL',
    'type': 'symbol',
    'source': 'label3_7',
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

//3.8 荔园超市
const polygon10 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99444, 22.60752],
            [113.99478, 22.60744],
            [113.99468, 22.60710],
            [113.99457, 22.60712],
            [113.99464, 22.60737],
            [113.99453, 22.60740],
            [113.99448, 22.60722],
            [113.99436, 22.60724],
            [113.99444, 22.60752]
// 闭合多边形
        ]]
    }
};
const Layer3_8 = {
    'id': 'liyuanchaoshi',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon10
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_8 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99444,22.60752]
        },
        'properties': {
            'description': '荔园超市'
        }
    }
};
const Layer3_8_L = ({
    'id': 'liyuanchaoshiL',
    'type': 'symbol',
    'source': 'label3_8',
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

//3.9 欣园餐厅
const polygon11 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99685, 22.61070],
            [113.99710, 22.61093],
            [113.99722, 22.61082],
            [113.99699, 22.61059],
            [113.99685, 22.61070]
// 闭合多边形
        ]]
    }
};
const Layer3_9 = {
    'id': 'xinyuancanting',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon11
    },
    'paint': {
        'fill-extrusion-color': '#6ed293',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source3_9 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99685,22.61070]
        },
        'properties': {
            'description': '欣园餐厅'
        }
    }
};
const Layer3_9_L = ({
    'id': 'xinyuancantingL',
    'type': 'symbol',
    'source': 'label3_9',
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