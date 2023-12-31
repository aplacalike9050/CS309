export {Layer6_1,Layer6_2,Layer6_3,
    Source6_1,Layer6_1_L,Source6_2,Layer6_2_L,Source6_3,Layer6_3_L,
}

//6.1 一丹图书馆
const polygon1 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99313, 22.60076],
            [113.99342, 22.60065],
            [113.99343, 22.59990],
            [113.99283, 22.60018],
            [113.99296, 22.60033],
            [113.99313, 22.60076]
        ]]
    }
};
const Layer6_1 = ({
    'id': 'yidantushuguan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon1
    },
    'paint': {
        'fill-extrusion-color': '#651ece',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source6_1 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99313,22.60076]
        },
        'properties': {
            'description': '一丹图书馆'
        }
    }
};
const Layer6_1_L = ({
    'id': 'yidantushuguanL',
    'type': 'symbol',
    'source': 'label6_1',
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

//6.2 琳恩图书馆
const polygon2 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99304, 22.59823],
            [113.99340, 22.59815],
            [113.99380, 22.59815],
            [113.99379, 22.59768],
            [113.99330, 22.59776],
            [113.99295, 22.59778],
            [113.99304, 22.59823]
        ]]
    }
};
const Layer6_2 = ({
    'id': 'linentushuguan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon2
    },
    'paint': {
        'fill-extrusion-color': '#651ece',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source6_2 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [ 113.99304,22.59823]
        },
        'properties': {
            'description': '琳恩图书馆'
        }
    }
};
const Layer6_2_L = ({
    'id': 'linentushuguanL',
    'type': 'symbol',
    'source': 'label6_2',
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

//6.3 涵泳图书馆
const polygon3 = {
    'type': 'Feature',
    'geometry': {
        'type': 'Polygon',
        'coordinates': [[
            [113.99189, 22.60461],
            [113.99263, 22.60478],
            [113.99268, 22.60465],
            [113.99252, 22.60459],
            [113.99244, 22.60441],
            [113.99226, 22.60437],
            [113.99228, 22.60428],
            [113.99197, 22.60422],
            [113.99189, 22.60461]
        ]]
    }
};
const Layer6_3 = ({
    'id': 'hanyongtushuguan',
    'type': 'fill-extrusion',
    'source': {
        'type': 'geojson',
        'data': polygon3
    },
    'paint': {
        'fill-extrusion-color': '#651ece',
        'fill-extrusion-height': 20,
        'fill-extrusion-base': 0,
        'fill-extrusion-opacity': 0.8
    }
});
const Source6_3 = {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [113.99189,22.60461]
        },
        'properties': {
            'description': '涵泳图书馆'
        }
    }
};
const Layer6_3_L = ({
    'id': 'hanyongtushuguanL',
    'type': 'symbol',
    'source': 'label6_3',
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