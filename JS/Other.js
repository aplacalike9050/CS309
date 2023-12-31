export {Layer7_1,Layer7_2,Layer7_3,
    Layer7_4,Layer7_5,Layer7_6,
    Layer7_7,Layer7_8,
    Source7_1,Layer7_1_L,Source7_2,Layer7_2_L,Source7_3,Layer7_3_L,
    Source7_4,Layer7_4_L,Source7_5,Layer7_5_L,Source7_6,Layer7_6_L,
    Source7_7,Layer7_7_L,Source7_8,Layer7_8_L
}

//7.1 行政楼
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99298, 22.59756],
            [113.99334, 22.59747],
            [113.99355, 22.59721],
            [113.99343, 22.59710],
            [113.99313, 22.59696],
            [113.99273, 22.59724],
            [113.99298, 22.59756]
        ]]
    }
};
const Layer7_1 = ({
    'id': 'xingzhenglou',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99298,22.59756]
        },
        'properties': {
            'description': '行政楼'
        }
    }
};
const Layer7_1_L = ({
    'id': 'xingzhenglouL',
    'type': 'symbol',
    'source': 'label7_1',
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

//7.2 检测中心
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99176, 22.59837],
            [113.99200, 22.59829],
            [113.99232, 22.59826],
            [113.99219, 22.59787],
            [113.99172, 22.59790],
            [113.99176, 22.59837]
        ]]
    }
};
const Layer7_2 = ({
    'id': 'jiancezhongxin',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [ 113.99176,22.59837]
        },
        'properties': {
            'description': '检测中心'
        }
    }
};
const Layer7_2_L = ({
    'id': 'jiancezhongxinL',
    'type': 'symbol',
    'source': 'label7_2',
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

//7.3 会议中心
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99153, 22.59605],
            [113.99199, 22.59569],
            [113.99217, 22.59549],
            [113.99238, 22.59517],
            [113.99179, 22.59507],
            [113.99169, 22.59542],
            [113.99152, 22.59563],
            [113.99143, 22.59578],
            [113.99153, 22.59605]
        ]]
    }
};
const Layer7_3 = ({
    'id': 'huiyizhongxin',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99153,22.59605]
        },
        'properties': {
            'description': '会议中心'
        }
    }
};
const Layer7_3_L = ({
    'id': 'huiyizhongxinL',
    'type': 'symbol',
    'source': 'label7_3',
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

//7.4 办公楼
const polygon4 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99609, 22.60124],
            [113.99670, 22.60161],
            [113.99702, 22.60114],
            [113.99669, 22.60098],
            [113.99639, 22.60079],
            [113.99621, 22.60110],
            [113.99609, 22.60124],
            [113.99609, 22.60124]
        ]]
    }
};
const Layer7_4 = ({
    'id': 'bangonglou',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon4
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_4 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99609,22.60124]
        },
        'properties': {
            'description': '办公楼'
        }
    }
};
const Layer7_4_L = ({
    'id': 'bangonglouL',
    'type': 'symbol',
    'source': 'label7_4',
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

//7.5 荔园
const polygon5 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99501, 22.60771],
            [113.99670, 22.60730],
            [113.99646, 22.60649],
            [113.99479, 22.60690],
            [113.99501, 22.60771]
        ]]
    }
};
const Layer7_5 = ({
    'id': 'liyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon5
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_5 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99501,22.60771]
        },
        'properties': {
            'description': '荔园'
        }
    }
};
const Layer7_5_L = ({
    'id': 'liyuanL',
    'type': 'symbol',
    'source': 'label7_5',
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

//7.6 慧园
const polygon6 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99669, 22.60662],
            [113.99727, 22.60642],
            [113.99736, 22.60656],
            [113.99763, 22.60646],
            [113.99764, 22.60625],
            [113.99757, 22.60605],
            [113.99661, 22.60639],
            [113.99669, 22.60662]
        ]]
    }
};
const Layer7_6 = ({
    'id': 'huiyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon6
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_6 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99669,22.60662]
        },
        'properties': {
            'description': '慧园'
        }
    }
};
const Layer7_6_L = ({
    'id': 'huiyuanL',
    'type': 'symbol',
    'source': 'label7_6',
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

//7.7 创园
const polygon7 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99793, 22.60793],
            [113.99855, 22.60786],
            [113.99860, 22.60806],
            [113.99881, 22.60804],
            [113.99861, 22.60665],
            [113.99822, 22.60669],
            [113.99813, 22.60615],
            [113.99776, 22.60603],
            [113.99768, 22.60605],
            [113.99793, 22.60793]
        ]]
    }
};
const Layer7_7 = ({
    'id': 'chuangyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon7
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_7 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99793,22.60793]
        },
        'properties': {
            'description': '创园'
        }
    }
};
const Layer7_7_L = ({
    'id': 'chuangyuanL',
    'type': 'symbol',
    'source': 'label7_7',
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

//7.8 欣园
const polygon8 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99676, 22.61139],
            [113.99708, 22.61172],
            [113.99794, 22.61098],
            [113.99763, 22.61064],
            [113.99676, 22.61139]
        ]]
    }
};
const Layer7_8 = ({
    'id': 'xinyuan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon8
    },
    'paint': {
        'fill-extrusion-color': '#505050',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source7_8 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99676,22.61139]
        },
        'properties': {
            'description': '欣园'
        }
    }
};
const Layer7_8_L = ({
    'id': 'xinyuanL',
    'type': 'symbol',
    'source': 'label7_8',
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