export { Layer2_1 , Layer2_2 , Layer2_3,
    Layer2_4 , Layer2_5 , Layer2_6,
    Layer2_7 , Layer2_8 , Layer2_9,
    Layer2_10 , Layer2_11 , Layer2_12,
    Layer2_13 , Layer2_14 , Layer2_15,
    Layer2_16 , Layer2_17 , Layer2_18,
    Layer2_19 ,
    Source2_1,Layer2_1_L,Source2_2,Layer2_2_L,Source2_3,Layer2_3_L,};
//2.0.1 九华精舍
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99444,22.60319],
            [113.99493,22.60321],
            [113.99508,22.60305],
            [113.99508,22.60272],
            [113.99460,22.60265],
            [113.99457,22.60300],
            [113.99443,22.60300],
            [113.99444,22.60319]// 闭合多边形
        ]]
    }
};
const Layer2_1 = {
    'id': 'jiuhuajingshe',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#090909',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source2_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [ 113.99444,22.60319]
        },
        'properties': {
            'description': '九华精舍'
        }
    }
};
const Layer2_1_L = ({
    'id': 'jiuhuajingsheL',
    'type': 'symbol',
    'source': 'label2_1',
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

//2.0.2 教师公寓
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99701,22.60293],
            [113.99729,22.60292],
            [113.99729,22.60270],
            [113.99743,22.60248],
            [113.99747,22.60204],
            [113.99806,22.60222],
            [113.99830,22.60157],
            [113.99748,22.60135],
            [113.99742,22.60156],
            [113.99801,22.60171],
            [113.99789,22.60192],
            [113.99730,22.60175],
            [113.99722,22.60196],
            [113.99718,22.60226],
            [113.99719,22.60246],
            [113.99701,22.60270],
            [113.99701,22.60293],
           // 闭合多边形
        ]]
    }
};
const Layer2_2 = {
    'id': 'jiaoshigongyu',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#0c0c0c',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source2_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99701,22.60293]
        },
        'properties': {
            'description': '教师'
        }
    }
};
const Layer2_2_L = ({
    'id': 'jiaoshigongyuL',
    'type': 'symbol',
    'source': 'label2_2',
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

//2.1-2.17 学生公寓
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
        //2.1
            [[113.99330, 22.60210],
                [113.99348, 22.60209],
                [113.99387, 22.60214],
                [113.99387, 22.60193],
                [113.99330, 22.60189],
                [113.99330, 22.60210]// 闭合多边形
        ]]
    }
};
const Layer2_3 = {
    'id': 'xueshengsushe',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};
const Source2_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99397,22.60488]
        },
        'properties': {
            'description': '学生公寓区'
        }
    }
};
const Layer2_3_L = ({
    'id': 'xueshengsusheL',
    'type': 'symbol',
    'source': 'label2_3',
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

const polygon4 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99346, 22.60260],
                [113.99385, 22.60266],
                [113.99387, 22.60241],
                [113.99348, 22.60242],
                [113.99346, 22.60260]
            ]]
    }
};
const Layer2_4 = {
    'id': 'xueshengsushe4',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon4
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon5 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99306, 22.60329],
                [113.99347, 22.60322],
                [113.99346, 22.60315],
                [113.99367, 22.60312],
                [113.99364, 22.60292],
                [113.99333, 22.60297],
                [113.99335, 22.60305],
                [113.99302, 22.60310],
                [113.99306, 22.60329]
            ]]
    }
};
const Layer2_5 = {
    'id': 'xueshengsushe5',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon5
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon6 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99357, 22.60353],
                [113.99410, 22.60364],
                [113.99413, 22.60350],
                [113.99385, 22.60340],
                [113.99361, 22.60338],
                [113.99357, 22.60353]
            ]]
    }
};
const Layer2_6 = {
    'id': 'xueshengsushe6',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon6
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon7 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99410, 22.60388],
                [113.99447, 22.60393],
                [113.99448, 22.60376],
                [113.99412, 22.60372],
                [113.99410, 22.60388]
            ]]
    }
};
const Layer2_7 = {
    'id': 'xueshengsushe7',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon7
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon8 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99439, 22.60362],
                [113.99473, 22.60361],
                [113.99473, 22.60344],
                [113.99441, 22.60344],
                [113.99439, 22.60362]
            ]]
    }
};
const Layer2_8 = {
    'id': 'xueshengsushe8',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon8
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon9 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99312, 22.60491],
                [113.99367, 22.60499],
                [113.99369, 22.60485],
                [113.99315, 22.60477],
                [113.99312, 22.60491]
            ]]
    }
};
const Layer2_9 = {
    'id': 'xueshengsushe9',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon9
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon10 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99212, 22.60410],
                [113.99255, 22.60418],
                [113.99257, 22.60406],
                [113.99215, 22.60398],
                [113.99212, 22.60410]
            ]]
    }
};
const Layer2_10 = {
    'id': 'xueshengsushe10',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon10
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon11 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99270, 22.60452],
                [113.99316, 22.60462],
                [113.99319, 22.60447],
                [113.99274, 22.60437],
                [113.99270, 22.60452]
            ]]
    }
};
const Layer2_11 = {
    'id': 'xueshengsushe11',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon11
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon12 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99315, 22.60469],
                [113.99361, 22.60477],
                [113.99367, 22.60456],
                [113.99344, 22.60451],
                [113.99340, 22.60462],
                [113.99319, 22.60457],
                [113.99315, 22.60469]
            ]]
    }
};
const Layer2_12 = {
    'id': 'xueshengsushe12',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon12
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon13 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99393, 22.60501],
                [113.99449, 22.60512],
                [113.99452, 22.60498],
                [113.99397, 22.60488],
                [113.99393, 22.60501]
            ]]
    }
};
const Layer2_13 = {
    'id': 'xueshengsushe13',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon13
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon14 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
              [[ 113.99451, 22.60541],
                [113.99506, 22.60553],
                [113.99509, 22.60539],
                [113.99454, 22.60528],
                [113.99451, 22.60541]]
            ]
    }
};
const Layer2_14 = {
    'id': 'xueshengsushe14',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon14
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon15 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99434, 22.60458],
                [113.99481, 22.60442],
                [113.99479, 22.60434],
                [113.99474, 22.60436],
                [113.99471, 22.60428],
                [113.99428, 22.60442],
                [113.99434, 22.60458]
            ]]
    }
};
const Layer2_15 = {
    'id': 'xueshengsushe15',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon15
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon16 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99481, 22.60470],
                [113.99525, 22.60478],
                [113.99528, 22.60462],
                [113.99486, 22.60454],
                [113.99481, 22.60470]
            ]]
    }
};
const Layer2_16 = {
    'id': 'xueshengsushe16',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon16
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon17 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99519, 22.60518],
                [113.99566, 22.60502],
                [113.99557, 22.60490],
                [113.99514, 22.60504],
                [113.99519, 22.60518]
            ]]
    }
};
const Layer2_17 = {
    'id': 'xueshengsushe17',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon17
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon18 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99565, 22.60529],
                [113.99604, 22.60538],
                [113.99605, 22.60524],
                [113.99569, 22.60517],
                [113.99565, 22.60529]
            ]]
    }
};
const Layer2_18 = {
    'id': 'xueshengsushe18',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon18
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

const polygon19 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [
            //2.1
            [[113.99577, 22.60585],
                [113.99618, 22.60573],
                [113.99617, 22.60571],
                [113.99622, 22.60569],
                [113.99620, 22.60562],
                [113.99615, 22.60564],
                [113.99613, 22.60560],
                [113.99568, 22.60573],
                [113.99570, 22.60578],
                [113.99567, 22.60579],
                [113.99568, 22.60584],
                [113.99576, 22.60582],
                [113.99577, 22.60585]
            ]]
    }
};
const Layer2_19 = {
    'id': 'xueshengsushe19',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon19
    },
    'paint': {
        'fill-extrusion-color': '#000000',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
};

