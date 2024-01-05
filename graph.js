let road_point_1 = [
    [113.99742, 22.61072],  //欣园
    [113.99763, 22.61055],  //1
    [113.99772, 22.61046],
    [113.99787, 22.61015],
    [113.99809, 22.60985],
    [113.99842, 22.60904],
    [113.99865, 22.60848],
    [113.99879, 22.60830],
    [113.99889, 22.60805],
    [113.99887, 22.60791],  //2
    [113.99880, 22.60751],  //3
    [113.99875, 22.60722],  //4
    [113.99867, 22.60667],
    [113.99867, 22.60666],
    [113.99865, 22.60659],  //5
    [113.99842, 22.60612],  //6
    [113.99834, 22.60601],  //7
    [113.99830, 22.60596],  //慧园
    [113.99821, 22.60594],  //8
    [113.99796, 22.60582],
    [113.99788, 22.60580],
    [113.99779, 22.60578],
    [113.99768, 22.60577],
    [113.99743, 22.60580],
    [113.99733, 22.60582],
    [113.99668, 22.60607],  //创园
    [113.99639, 22.60617],  //9
    [113.99599, 22.60632],
    [113.99580, 22.60637],
    [113.99558, 22.60639],
    [113.99546, 22.60638],
    [113.99539, 22.60637],  //10
    [113.99532, 22.60636],
    [113.99523, 22.60634],  //荔园
    [113.99516, 22.60633],
    [113.99508, 22.60630],  //11
    [113.99491, 22.60625],
    [113.99471, 22.60617],
    [113.99381, 22.60563],
    [113.99365, 22.60555],
    [113.99346, 22.60547],  //12
    [113.99316, 22.60537],
    [113.99252, 22.60524],
    [113.99194, 22.60513],
    [113.99173, 22.60509],  //13
    [113.99113, 22.60504],
    [113.99029, 22.60503],  //14 //creative Rd(w>e)
    [113.99028, 22.60488],
    [113.99013, 22.60464],  //15
    [113.99072, 22.60463],
    [113.99150, 22.60473],  //16 连接节点13
    [113.99181, 22.60476],  //17
    [113.99243, 22.60484],
    [113.99366, 22.605115],  //18
    [113.99385, 22.60515],
    [113.99409, 22.60520],
    [113.99424, 22.60526],
    [113.99430, 22.605305],
    [113.99441, 22.60546],
    [113.99448, 22.60553],
    [113.99480, 22.60563],  //19
    [113.99495, 22.60571],
    [113.99507, 22.60583],
    [113.99516, 22.60590],
    [113.99524, 22.60595],
    [113.99536, 22.60599],
    [113.99548, 22.60601],
    [113.99561, 22.60602],
    [113.99570, 22.606015],  //20
    [113.99628, 22.60587],  //21 连节点9
    [113.99638, 22.60584],  //22
    [113.99654, 22.60583],  //23
    [113.99659, 22.60584],
    [113.99702, 22.60569],
    [113.99718, 22.60558],
    [113.99737, 22.60549],
    [113.99740, 22.60548],
    [113.99765, 22.60541],
    [113.99774, 22.605365]];  //24 #road1 above
let road_point_2 = [[113.99387, 22.60472],  //学生宿舍 连18
    [113.99393, 22.60460],  //27
    [113.99420, 22.60424],  //28
    [113.99458, 22.60392],
    [113.99470, 22.603785],  //29
    [113.99501, 22.60341],  //30
    [113.99507, 22.60336],  //31
    [113.99516, 22.60325],  //32
    [113.99542, 22.60299],
    [113.99548, 22.60294],
    [113.99561, 22.60290],  //社康中心
    [113.99582, 22.60289],  //33
    [113.99661, 22.60294],
    [113.99675, 22.60297],  //34
    [113.99773, 22.60329],  //教工餐厅
    [113.99788, 22.60334],
    [113.99795, 22.60319],
    [113.99800, 22.60289],  //35
    [113.99802, 22.60267],
    [113.99831, 22.60196],
    [113.99835, 22.60189],  //专家公寓
    [113.99863, 22.60160],  //36
    [113.99868, 22.60154],
    [113.99874, 22.60137],
    [113.99877, 22.60105],
    [113.99882, 22.60084],
    [113.99900, 22.60056],
    [113.99912, 22.60046],  //37
    [113.99845, 22.60025],  //三号门
    [113.99820, 22.60016],
    [113.99800, 22.60008],  //38
    [113.99787, 22.59999],
    [113.99768, 22.59981],
    [113.99731, 22.59909],
    [113.99716, 22.59891],
    [113.99681, 22.59862],
    [113.99676, 22.59860],  //39
    [113.99642, 22.59833],
    [113.99586, 22.59781],  //二号门
    [113.99565, 22.59753],  //40
    [113.99538, 22.59725],  //41
    [113.99516, 22.59688],
    [113.99508, 22.59661],
    [113.99503, 22.59652],
    [113.99495, 22.59643],
    [113.99467, 22.59620],
    [113.99453, 22.59614],
    [113.99440, 22.59609],  //一号门
    [113.99424, 22.59604],  //42
    [113.99405, 22.59602],
    [113.99374, 22.59606],
    [113.99374, 22.59606],
    [113.99350, 22.59613],
    [113.99328, 22.59622],
    [113.99303, 22.59644],  //43
    [113.99274, 22.59673],  //44
    [113.99241, 22.59703],  //行政楼
    [113.99226, 22.597135],  //45
    [113.99214, 22.59722],
    [113.99209, 22.59724],  //46
    [113.99201, 22.59727],
    [113.99188, 22.59727],
    [113.99179, 22.59726],
    [113.99158, 22.59722],  //47
    [113.99124, 22.59711],  //48
    [113.99082, 22.59699],
    [113.99065, 22.59698],
    [113.99056, 22.59699],
    [113.99047, 22.59702],
    [113.99036, 22.59711],  //七号门
    [113.99030, 22.59722],
    [113.99029, 22.59730],  //49
    [113.99030, 22.59739],  //50
    [113.99034, 22.59792],  //51
    [113.99037, 22.59852],  //52
    [113.99038, 22.59858],  //53
    [113.99041, 22.59875],
    [113.99045, 22.59889],
    [113.99053, 22.59900],
    [113.99060, 22.59907],
    [113.99068, 22.59911],  //54
    [113.99082, 22.59920],  //55
    [113.99093, 22.59926],  //56
    [113.99153, 22.59959],  //科研楼
    [113.99172, 22.59977],  //57
    [113.99187, 22.60000],
    [113.99195, 22.60019],  //58
    [113.99197, 22.60025],
    [113.99202, 22.60045],  //59
    [113.99199, 22.60082],
    [113.99196, 22.60093],  //60
    [113.99190, 22.60110],
    [113.99176, 22.60136],
    [113.99152, 22.60161],  //61
    [113.99074, 22.60229],  //62
    [113.99040, 22.60261],
    [113.99031, 22.60280],
    [113.99027, 22.60304],  //63
    [113.99021, 22.60337],  //工学院
    [113.99056, 22.60341],  //64
    [113.99153, 22.60353],  //65
    [113.99225, 22.60287],  //66
    [113.99234, 22.60296],
    [113.99262, 22.60313],
    [113.99280, 22.60326],  //67
    [113.99299, 22.60306],
    [113.99315, 22.60301],
    [113.99330, 22.60291],
    [113.99339, 22.60272],  //68
    [113.99340, 22.60256],
    [113.99338, 22.60238],  //69
    [113.99331, 22.60224],
    [113.99325, 22.60201],
    [113.99328, 22.60187],
    [113.99344, 22.6018425],  //70
    [113.99352, 22.60185],  //71
    [113.99393, 22.601875],
    [113.99390, 22.60224],
    [113.99390, 22.60266],
    [113.99381, 22.60286],
    [113.99383, 22.60314],
    [113.99368, 22.60331],  //72
    [113.994225, 22.60350],  //73
    [113.99430, 22.60354],
    [113.99433, 22.60362],
    [113.99439, 22.60368],
    [113.99452, 22.60369],
    [113.99464, 22.603735]];  //连29 road2 above
let road_point_3 = [[113.99683, 22.60279],  //连节点34
    [113.99694, 22.60260],
    [113.99701, 22.60241],
    [113.99704, 22.60222],
    [113.99705, 22.60198],
    [113.99710, 22.60180],
    [113.99725, 22.60148],
    [113.99739, 22.60127],  //74
    [113.99749, 22.60110],
    [113.99757, 22.60092],  //75 连节点38
    [113.99744, 22.60089],
    [113.99733, 22.600905],  //76 人文社科中心
    [113.99709, 22.60098],
    [113.99636, 22.60066],
    [113.99617, 22.60053],
    [113.99609, 22.60043],
    [113.99608, 22.60032],  //77
    [113.99617, 22.60013],
    [113.99605, 22.59973],
    [113.99585, 22.59957],  //78 连节点77
    [113.99578, 22.59941],
    [113.99570, 22.59914],  //79 连节点39
    [113.99501, 22.59956],
    [113.99439, 22.59887],  //80
    [113.99505, 22.59839],  //81 连节点二号门
    [113.99453, 22.59783],  //82 连节点41
    [113.99407, 22.59815],  //83
    [113.99395, 22.59764],
    [113.99381, 22.59749],  //84
    [113.99354, 22.59717],
    [113.99345, 22.59710],
    [113.99322, 22.59692],
    [113.99311, 22.59688]];  //85 连节点44 road3 above
let road_point_4 = [[113.99969, 22.59999],  //86 连 37
    [113.99942, 22.59992],
    [113.99915, 22.59980],
    [113.99871, 22.59949],
    [113.99827, 22.59919],
    [113.99800, 22.59896],
    [113.99767, 22.59861],  //87
    [113.99722, 22.59807],
    [113.99658, 22.59728],  //88 连节点40
    [113.99647, 22.59719],
    [113.99554, 22.59611],
    [113.99528, 22.59594],  //89
    [113.99454, 22.59554],  //90 连节点42
    [113.99374, 22.59528],
    [113.99286, 22.59510],
    [113.99274, 22.59511],
    [113.99266, 22.59512],
    [113.99260, 22.59516],
    [113.99252, 22.59522],
    [113.99224, 22.59566],
    [113.99165, 22.59626]];  //91 road4 above
let road_point_5 = [[113.99529, 22.60669],  //92 连荔园
    [113.99478, 22.60680],
    [113.99472, 22.60691],
    [113.99479, 22.60714],  //93
    [113.99487, 22.60746],  //94
    [113.99497, 22.60775],
    [113.99507, 22.60777],
    [113.99549, 22.60767],
    [113.99553, 22.60763],
    [113.99545, 22.60730],  //95 连节点94
    [113.99537, 22.60699],  //96 连节点93， 连92
    [113.99593, 22.60655],  //97 连92
    [113.99601, 22.60683],  //98 连节点96
    [113.99610, 22.60715],  //99 连节点95
    [113.99665, 22.60702],
    [113.99657, 22.60669],  //100 连98
    [113.99649, 22.60636],  //101 连97
    [113.99661, 22.60632],
    [113.99704, 22.60614],
    [113.99759, 22.60596],  //连到节点9
    [113.99766, 22.60622],
    [113.99775, 22.60674],
    [113.99802, 22.60669],  //102
    [113.99812, 22.60730],
    [113.99843, 22.60726],
    [113.99833, 22.60664],  //103 连节点102
    [113.99830, 22.60640],
    [113.99838, 22.60627]];  //连节点6
let road_dlc = [
    [113.99287, 22.60337],  // lian 183
    [113.99298, 22.60349],
    [113.99346,22.60358],  //
    [113.99377,22.603645],
    [113.99387,22.603695],
    [113.99393,22.60376],  //lian 81
//////////////////////////////////////////////////
    [113.99213,22.60274], //lian 180
    [113.99197,22.60251],
    [113.99176,22.60209], // 侧路且 lian 172
//////////////////////////////////////////////////
    [113.99194,22.60421],//侧路 连51
    [113.99200,22.60417],
    [113.99261,22.60427],
    [113.99343,22.60445], //lian 80
//////////////////////////////////////////////////
    [113.99008,22.60456], //lian 48
    [113.990055,22.60449],
    [113.990045,22.60444],
    [113.990035,22.60434],
    [113.99005,22.60426],
    [113.99009,22.60405],//
    [113.99016,22.60370],//chalu    lian 177
//////////////////////////////////////////////////////
    [113.99830,22.60585],//lian 17
    [113.99804,22.60552],
    [113.99782,22.60532],
    [113.997675,22.60505],
    [113.99760,22.60472],
    [113.99759,22.60456],
    [113.99757,22.60441],
    [113.99756,22.60427],
    [113.99756,22.60411],
    [113.99757,22.60396],
    [113.99762,22.60371],
    [113.99765,22.60364],
    [113.99771,22.60353],//lian 94
///////////////////////////////////////////////
    [113.99409,22.59775],//lian 233
    [113.99384,22.59734],
    [113.99353,22.59699],
    [113.99326,22.59669],//lian 133
/////////////////////////////////////////////////
    [113.99192,22.59965],//lian 163
    [113.992045,22.59962],
    [113.99216,22.59958],
    [113.99216,22.59981],
]
let path_coordinate_list_1 = [
    [113.99245,22.59944],//1
    [113.99271,22.59933],
    [113.99283,22.59930],
    [113.99293,22.5993025],
    [113.99303,22.59934],//2
    [113.99333,22.5994975],//3
    [113.99347,22.599575],//4
    [113.99351,22.59959],
    [113.99375,22.59963],//5
    [113.99373,22.59973],
    [113.99370,22.60051],
    [113.99371,22.60059],
    [113.99363,22.60062],//6
    [113.99368,22.60080],
    [113.99377,22.60094],
    [113.99380,22.60110],
    [113.99391,22.60130],
    [113.99386,22.60137],
    [113.99362,22.60159],
    [113.99342,22.60160],
    [113.99334,22.60164],//7
    [113.99317,22.60122],
    [113.9931075,22.60113],//8
    [113.99321,22.601095],
    [113.99351,22.60103],
    [113.99358975,22.600987],
    [113.993595,22.60093],
    [113.99347,22.60069],//9 lian 6
    [113.99348,22.59986],//10 lian 4
    [113.99298,22.60006],
    [113.99277,22.60018],//11
    [113.99289,22.60031],
    [113.99296,22.60046],
    [113.99302,22.60057],
    [113.99313,22.60081],//lian 9
    [113.99290,22.60091],//12
    [113.99251,22.60053],
    [113.99228,22.60026],//13
    [113.99229,22.59952],//14 lian 1 lian 328
    [113.99214,22.59932],
    [113.99194,22.59906],
    [113.99181,22.59889],
    [113.99166,22.59870],//
    [113.99156,22.59856],//
    [113.99135,22.59832],//
    [113.99133,22.59807],
    [113.99130,22.59779],
    [113.99128,22.59754],
    [113.99125,22.59723],//lian 143
    [113.99098,22.59726],
    [113.99077,22.59727],
    [113.99057,22.59729],
    [113.99042,22.59729],//lian 150
]

let path_coordinate_list_2 = [
    [113.99219,22.59734],//
    [113.99222,22.59756],
    [113.99225,22.59761],
    [113.99235,22.59773],
    [113.99162,22.59777],
    [113.99163,22.59786],
    [113.991595,22.59790],
    [113.99162,22.59805],
    [113.99167,22.59808],
    [113.99177,22.59850],
    [113.99212,22.59840],
    [113.99248,22.59830],
    [113.99261,22.59857],
    [113.99274,22.59869],
    [113.99285,22.59879],
    [113.99285,22.59885],
    [113.99286,22.59892],
    [113.99290,22.59897],
    [113.99304,22.59899],
    [113.99304,22.59905],
    [113.99304,22.59918],
    [113.99334,22.59927],
    [113.99349,22.59917],
    [113.99364,22.59905],
    [113.99348,22.59884],
    [113.99332,22.59861],
    [113.99318,22.59846],
    [113.99324,22.59835],
    [113.99326,22.59833],
    [113.99329,22.59817],
    [113.99327,22.59777],
    [113.99323,22.59761],
    [113.99323,22.59750],
    [113.99307,22.59700],
    [113.99301,22.59695],
    [113.99273,22.59708],
    [113.99250,22.59711],
    [113.99256,22.59716],
    [113.99252,22.59725],
    [113.99256,22.59732],
    [113.99251,22.59749],
    [113.99262,22.59760],
    [113.99262,22.59770],
    [113.99273,22.59784],
    [113.99265,22.59802],
    [113.99266,22.59815],
    [113.99271,22.59822],
    [113.99282,22.59829],
    [113.9928625,22.59844],
    [113.99292,22.59854],
    [113.99311,22.59839],
    [113.992945,22.59822],
    [113.992895,22.59815],
    [113.992875,22.59811],
    [113.99283,22.59795],
    [113.99278,22.59769],
    [113.99277,22.59763],
    [113.99276,22.59754],
    [113.99274,22.59749],
    [113.99270,22.59737],
    [113.99264,22.59722],
];

let path_coordinate_list_3 = [
    [113.99383,22.59928],
    [113.99398,22.59949],
    [113.99390,22.59954],
    [113.99413,22.59984],
    [113.994145,22.59992],
    [113.994085,22.599995],
    [113.993865,22.600095],
    [113.99380,22.60018],
    [113.99380,22.60035],
    [113.99383,22.60052],
    [113.99383,22.60072],
    [113.99394,22.60090],
    [113.99403,22.60106],
    [113.99409,22.60116],
    [113.99406,22.60127],
    [113.99410,22.60142],
    [113.99426,22.60169],
    [113.99432,22.60180],
    [113.99454,22.60211],
    [113.99478,22.60235],
    [113.99516,22.60259],
    [113.99548,22.60278],
]
function point_search(longitude, latitude, point_set){
    for (let i = 0; i < point_set.length; i++) {
        if (point_set[i][0] === longitude && point_set[i][1] === latitude){return i;}
    }
    return -1
}



function point_check(longitude, latitude, point_set){
    for (let i = 0; i < point_set.length; i++) {
        if (point_set[i][0] === longitude && point_set[i][1] === latitude){return true;}
    }
    return false;
}


function point_set_construction(array){
    let set_points_data = [];
    for (let i = 0; i < array.length; i++) {
        if (!point_check(array[i][0], array[i][1], set_points_data)){
            set_points_data.push([array[i][0], array[i][1]]);
        }
    }
    return set_points_data;
}



function point_add_construction(lists, array){
    for (let i = 0; i < array.length; i++) {
        if (!point_check(array[i][0], array[i][0], lists) ){
            lists.push([array[i][0], array[i][1]]);
        }
    }
    return lists;
}



function distance_calculate(point_1, point_2){
    return Math.sqrt((point_1[0] - point_2[0]) ** 2 + (point_1[1] - point_2[1]) ** 2)
}



function point_closest_get(longitude, latitude, point_list){
    let point_distance = [];
    for (let i = 0; i < point_list.length; i++) {
        point_distance.push([i, distance_calculate([longitude, latitude], point_list[i])])
    }
    point_distance.sort(function (a,b){return a[1] - b[1]})
    //alert(point_distance)
    return point_distance[0][0]
}




function graph_construct_test(my_graph,point_list, length_1, length_2, length_3, length_4, length_5){
    //console.log(length_1 + " " + length_2 + " " + length_3 + " " + length_4 + " " + length_5)

    for (let i = 0; i < length_1 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 1

    for (let i = length_1; i < length_2 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 2

    for (let i = length_2; i < length_3 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 3

    for (let i = length_3; i < length_4 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 4

    for (let i = length_4; i < length_5 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 5

    for (let i = 289; i < 294 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_1

    for (let i = 295; i < 297 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_2

    for (let i = 298; i < 301 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_3

    for (let i = 302; i < 308 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_4

    for (let i = 309; i < 321 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_5

    for (let i = 322; i < 325 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_6

    for (let i = 326; i < 329 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_7



    let list_pathway = [[40, 53], [51, 44], [69, 26],  //添加road1 的岔边
        [53, 79], [206, 83],  //添加road2 的岔边
        [207, 92], [216, 109], [223, 226], [228, 115], [231, 117], [232, 119], [239, 134],  //添加road3 的岔边
        [106, 240], [248, 118], [252, 127],  //添加road4 的岔边
        [261, 33], [270, 265], [271, 264], [271, 261], [272, 261], [273, 271], [274, 270], [276, 273],
        [277, 272], [283, 286], [288, 15],  //添加road5 的岔边
        [289, 183], [294, 81],[295, 180], [297, 172], [298, 51], [301, 88],
        [302, 48], [308, 177],[309, 17],[321, 94],[322, 233],[325, 133],[326, 163]
    ]
    for (let i = 0; i < list_pathway.length; i++) {
        let f = list_pathway[i][0]
        let t = list_pathway[i][1]
        my_graph.addEdge(f, t, distance_calculate(point_list[f], point_list[t]))
        my_graph.addEdge(t, f, distance_calculate(point_list[f], point_list[t]))
    }
}


function graph_construct_test_walk(my_graph,point_list, length_1, length_2, length_3, length_4, length_5){
    //console.log(length_1 + " " + length_2 + " " + length_3 + " " + length_4 + " " + length_5)

    for (let i = 0; i < length_1 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 1

    for (let i = length_1; i < length_2 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 2

    for (let i = length_2; i < length_3 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 3

    for (let i = length_3; i < length_4 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 4

    for (let i = length_4; i < length_5 - 1; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road 5

    for (let i = 289; i < 294 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_1

    for (let i = 295; i < 297 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_2

    for (let i = 298; i < 301 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_3

    for (let i = 302; i < 308 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_4

    for (let i = 309; i < 321 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_5

    for (let i = 322; i < 325 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_6

    for (let i = 326; i < 329 ; i++) {
        my_graph.addEdge(i, i+1, distance_calculate(point_list[i], point_list[i + 1]))
        my_graph.addEdge(i+1, i, distance_calculate(point_list[i], point_list[i + 1]))
    }//road_dlc_7

    for (let i = 0; i < path_coordinate_list_1.length-1; i++) {
        my_graph.addEdge(i+330, i+331, distance_calculate(point_list[i+330], point_list[i+331]))
        my_graph.addEdge(i+331, i+330, distance_calculate(point_list[i+330], point_list[i+331]))
    }//path_1

    let counter = 330 + path_coordinate_list_1.length;
    for (let i = 0; i < path_coordinate_list_2.length-1; i++) {
        my_graph.addEdge(i+counter, i+counter+1, distance_calculate(point_list[i+counter], point_list[i+counter+1]))
        my_graph.addEdge(i+counter+1, i+counter, distance_calculate(point_list[i+counter], point_list[i+counter+1]))
    }//path_2

    counter+=path_coordinate_list_2.length;
    for (let i = 0; i < path_coordinate_list_3.length-1; i++) {
        my_graph.addEdge(i+counter, i+counter+1, distance_calculate(point_list[i+counter], point_list[i+counter+1]))
        my_graph.addEdge(i+counter+1, i+counter, distance_calculate(point_list[i+counter], point_list[i+counter+1]))
    }//path_3
    counter+=path_coordinate_list_3.length;

    console.log('point num:'+point_list.length+'counter:'+counter)

    let list_pathway = [[40, 53], [51, 44], [69, 26],  //添加road1 的岔边
        [53, 79], [206, 83],  //添加road2 的岔边
        [207, 92], [216, 109], [223, 226], [228, 115], [231, 117], [232, 119], [239, 134],  //添加road3 的岔边
        [106, 240], [248, 118], [252, 127],  //添加road4 的岔边
        [261, 33], [270, 265], [271, 264], [271, 261], [272, 261], [273, 271], [274, 270], [276, 273],
        [277, 272], [283, 286], [288, 15],  //添加road5 的岔边
        [289, 183], [294, 81],[295, 180], [297, 172], [298, 51], [301, 88],
        [302, 48], [308, 177],[309, 17],[321, 94],[322, 233],[325, 133],[326, 163],//road_dlc
        [150,382],[143,378],[328,368],[330,368],[373,392],[334,403],[335,404],[336,358],
        [338,446],[342,357],[364,357],[350,193],[352,365],[341,458],
        [376,152],[372,160],[360,330],//path_1
        [383,138],[386,425],[386,394],[387,142],[394,429],[396,432],
        [406,444],[408,233],[409,433],[414,235],[414,438],[417,239],[419,135],
        [420,443],[425,438],[429,435],//path_2
        [444,230],[459,195],[465,89]
    ]
    for (let i = 0; i < list_pathway.length; i++) {
        let f = list_pathway[i][0]
        let t = list_pathway[i][1]
        my_graph.addEdge(f, t, distance_calculate(point_list[f], point_list[t]))
        my_graph.addEdge(t, f, distance_calculate(point_list[f], point_list[t]))
    }
}


function shortest_path_print(array, point_list){
    let coordinate = [];
    for (let i = 0; i < array.length; i++) {
        coordinate.push([ point_list[array[i]][0],point_list[array[i]][1] ])
        //console.log("[" + point_list[array[i]][0] + "," + point_list[array[i]][1] + "],")
    }
    return coordinate
}


function shortestCar_point_search(point){
    let point_list_1 = point_set_construction(road_point_1)

    let point_list = point_add_construction(point_list_1, road_point_2)

    point_list = point_add_construction(point_list, road_point_3)

    point_list = point_add_construction(point_list, road_point_4)

    point_list = point_add_construction(point_list, road_point_5)

    point_list = point_add_construction(point_list, road_dlc);

    let point_index =  point_closest_get(point[0], point[1], point_list)
    return [point_list[point_index][0],point_list[point_index][1]];

}

function shortestPath(start, end){
    const my_graph = new Graph();

    let point_list_1 = point_set_construction(road_point_1)
    let list_length_1 = point_list_1.length;

    let point_list = point_add_construction(point_list_1, road_point_2)
    let list_length_2 = point_list.length;

    point_list = point_add_construction(point_list, road_point_3)
    let list_length_3 = point_list.length;

    point_list = point_add_construction(point_list, road_point_4)
    let list_length_4 = point_list.length;

    point_list = point_add_construction(point_list, road_point_5)
    let list_length_5 = point_list.length;

    point_list = point_add_construction(point_list, road_dlc);

    for (let i = 0; i < point_list.length; i++) {
        my_graph.addVertex(i)
    }

    let start_point = point_closest_get(start[0], start[1], point_list)
    let end_point = point_closest_get(end[0], end[1], point_list)

    graph_construct_test(my_graph, point_list, list_length_1, list_length_2, list_length_3, list_length_4, list_length_5);

    //console.log(my_graph.edges.length)
    let shortest_path = dijkstra(my_graph, start_point, end_point)
    //console.log(shortest_path);
    //console.log(point_list);
    return shortest_path_print(shortest_path, point_list)
}


function shortestPath_walk(start, end){
    const my_graph = new Graph();

    let point_list_1 = point_set_construction(road_point_1)
    let list_length_1 = point_list_1.length;

    let point_list = point_add_construction(point_list_1, road_point_2)
    let list_length_2 = point_list.length;

    point_list = point_add_construction(point_list, road_point_3)
    let list_length_3 = point_list.length;

    point_list = point_add_construction(point_list, road_point_4)
    let list_length_4 = point_list.length;

    point_list = point_add_construction(point_list, road_point_5)
    let list_length_5 = point_list.length;

    point_list = point_add_construction(point_list, road_dlc);
    point_list = point_add_construction(point_list,path_coordinate_list_1);
    point_list = point_add_construction(point_list,path_coordinate_list_2);
    point_list = point_add_construction(point_list,path_coordinate_list_3);



    for (let i = 0; i < point_list.length; i++) {
        my_graph.addVertex(i)
    }

    let start_point = point_closest_get(start[0], start[1], point_list)
    let end_point = point_closest_get(end[0], end[1], point_list)

    graph_construct_test_walk(my_graph, point_list, list_length_1, list_length_2, list_length_3, list_length_4, list_length_5);

    //console.log(my_graph.edges.length)
    let shortest_path = dijkstra(my_graph, start_point, end_point)
    //console.log(shortest_path);
    //console.log(point_list);
    return shortest_path_print(shortest_path, point_list)
}



class Graph {
    constructor() {
        this.vertices = [];
        this.edges = {};
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(src, dest, weight) {
        this.edges[src].push({ dest, weight });
        this.edges[dest].push({ dest: src, weight }); // 如果是无向图，需要添加反向边
    }
}

function dijkstra(graph, start, end) {
    const distance = {};
    const previous = {};
    const visited = {};
    const queue = [];

    graph.vertices.forEach(vertex => {
        distance[vertex] = Infinity;
        previous[vertex] = null;
        visited[vertex] = false;
    });

    distance[start] = 0;
    queue.push({ vertex: start, distance: 0 });

    while (queue.length > 0) {
        queue.sort((a, b) => a.distance - b.distance);
        const { vertex: currentVertex, distance: currentDistance } = queue.shift();

        if (visited[currentVertex]) continue;
        visited[currentVertex] = true;

        graph.edges[currentVertex].forEach(edge => {
            const newDistance = currentDistance + edge.weight;
            if (newDistance < distance[edge.dest]) {
                distance[edge.dest] = newDistance;
                previous[edge.dest] = currentVertex;
                queue.push({ vertex: edge.dest, distance: newDistance });
            }
        });
    }

    return buildPath(previous, start, end);
}

function buildPath(previous, start, end) {
    const path = [end];
    let current = end;

    while (previous[current] !== null && previous[current] !== undefined) {
        path.unshift(previous[current]);
        current = previous[current];
    }

    return path;
}

function forward_car(start_longitude,start_latitude,end_longitude,end_latitude){
    let start_filled = false;
    let end_filled = false;

    if(!isNaN(start_latitude) && !isNaN(start_longitude) ){start_filled = true;}
    if(!isNaN(end_latitude) && !isNaN(end_longitude) ){end_filled = true;}

    if(start_filled && end_filled){
        //point_Layer_construction(map,[start_longitude, start_latitude],[end_longitude, end_latitude])
        return shortestPath([start_longitude, start_latitude],[end_longitude, end_latitude])

        //layer_construct(map, shortest_path_coordinate)
    }else {
        console.log("the information invalid")
        return []
    }
}

function forward_walk(start_longitude,start_latitude,end_longitude,end_latitude){
    let start_filled = false;
    let end_filled = false;

    if(!isNaN(start_latitude) && !isNaN(start_longitude) ){start_filled = true;}
    if(!isNaN(end_latitude) && !isNaN(end_longitude) ){end_filled = true;}

    if(start_filled && end_filled){
        //point_Layer_construction(map,[start_longitude, start_latitude],[end_longitude, end_latitude])
        return shortestPath_walk([start_longitude, start_latitude],[end_longitude, end_latitude])

        //layer_construct(map, shortest_path_coordinate)
    }else {
        console.log("the information invalid")
        return []
    }
}

function path_String(list){0
    let str = '[['
    for (let i = 0; i < list.length; i++) {
        //console.log(list[i][0]);
        str = str+ '[' + list[i][0] +','+list[i][1] +'],'
    }
    str = str +'],],'
    return str;

}

//实现函数
//function onclick

function from_here(longitude,latitude){
    document.getElementById('start_longitude').value=Number(longitude);
    document.getElementById('start_latitude').value=Number(latitude);
}
function to_here(longitude,latitude){
    document.getElementById('end_longitude').value=Number(longitude);
    document.getElementById('end_latitude').value=Number(latitude);
}
function to_station(longitude,latitude){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML === "superuser"){
        document.getElementById('longitude_input').value=Number(longitude);
        document.getElementById('latitude_input').value=Number(latitude);
        document.getElementById('longitude_input_1').value=Number(longitude);
        document.getElementById('latitude_input_1').value=Number(latitude);
    }else {
        alert("invalid user")
    }

}





function removeStation(inputobj) {
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    if (!inputobj) return;
    let parentTD = inputobj.parentNode;
    let parentTR = parentTD.parentNode;
    let parentTBODY = parentTR.parentNode;
    parentTBODY.removeChild(parentTR);
    bus_index_update();
}
function bus_station_add() {
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let station_index = bodyObj.rows.length;
    let station_name = document.getElementById('station_name_input').value;
    let longitude = Number(document.getElementById('longitude_input').value)
    let latitude = Number(document.getElementById('latitude_input').value)
    let rowCount = bodyObj.rows.length;
    let cellCount = bodyObj.rows[0].cells.length;
    bodyObj.style.display = ""; // display the tbody

    let newRow = bodyObj.insertRow(rowCount++);
    newRow.insertCell(0).innerHTML = String(station_index);
    newRow.insertCell(1).innerHTML = String(station_name);
    newRow.insertCell(2).innerHTML = String(longitude);
    newRow.insertCell(3).innerHTML = String(latitude);
    newRow.insertCell(4).innerHTML = bodyObj.rows[0].cells[cellCount - 1].innerHTML;// copy the "delete" button
    bodyObj.rows[0].style.display = "none"; // hide first row
}

function bus_index_update(){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        document.getElementById("tbody").rows[i].cells[0].innerHTML = String(i);
        console.log(document.getElementById("tbody").rows[i].cells[0].innerHTML)
        console.log(document.getElementById("tbody").rows[i].cells[1].innerHTML)
        console.log(document.getElementById("tbody").rows[i].cells[2].innerHTML)
    }
}


function bus_station_up(inputobj){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }

    var row = inputobj.closest('tr'); // 获取最近的tr元素
    var row_index = row.rowIndex - 1; // 获取行序号
    console.log(row_index);
    if(row_index === 1 ){
        alert('no position above')
        return;
    }

    let name_tmp = document.getElementById("tbody").rows[row_index].cells[1].innerHTML;
    let longitude_tmp = document.getElementById("tbody").rows[row_index].cells[2].innerHTML;
    let latitude_tmp = document.getElementById("tbody").rows[row_index].cells[3].innerHTML;

    document.getElementById("tbody").rows[row_index].cells[1].innerHTML = document.getElementById("tbody").rows[row_index - 1].cells[1].innerHTML;
    document.getElementById("tbody").rows[row_index].cells[2].innerHTML = document.getElementById("tbody").rows[row_index - 1].cells[2].innerHTML;
    document.getElementById("tbody").rows[row_index].cells[3].innerHTML = document.getElementById("tbody").rows[row_index - 1].cells[3].innerHTML;

    document.getElementById("tbody").rows[row_index - 1].cells[1].innerHTML = name_tmp;
    document.getElementById("tbody").rows[row_index - 1].cells[2].innerHTML = longitude_tmp;
    document.getElementById("tbody").rows[row_index - 1].cells[3].innerHTML = latitude_tmp;


}

function bus_station_down(inputobj){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    var row = inputobj.closest('tr'); // 获取最近的tr元素
    var row_index = row.rowIndex - 1; // 获取行序号
    console.log(row_index);
    if(row_index === rowCount - 1 ){
        alert('no position below')
        return;
    }
    let name_tmp = document.getElementById("tbody").rows[row_index].cells[1].innerHTML;
    let longitude_tmp = document.getElementById("tbody").rows[row_index].cells[2].innerHTML;
    let latitude_tmp = document.getElementById("tbody").rows[row_index].cells[3].innerHTML;

    document.getElementById("tbody").rows[row_index].cells[1].innerHTML = document.getElementById("tbody").rows[row_index + 1].cells[1].innerHTML;
    document.getElementById("tbody").rows[row_index].cells[2].innerHTML = document.getElementById("tbody").rows[row_index + 1].cells[2].innerHTML;
    document.getElementById("tbody").rows[row_index].cells[3].innerHTML = document.getElementById("tbody").rows[row_index + 1].cells[3].innerHTML;

    document.getElementById("tbody").rows[row_index + 1].cells[1].innerHTML = name_tmp;
    document.getElementById("tbody").rows[row_index + 1].cells[2].innerHTML = longitude_tmp;
    document.getElementById("tbody").rows[row_index + 1].cells[3].innerHTML = latitude_tmp;
}

function table_fold(){
    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        bodyObj.rows[i].style.display = "none"; // hide row
    }
}

function table_unfold(){
    let bodyObj = document.getElementById("tbody");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        bodyObj.rows[i].style.display = ""; // un   hide row
    }
}

/////////////////////////////2////////////////////////////////////


function removeStation_1(inputobj) {
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    if (!inputobj) return;
    let parentTD = inputobj.parentNode;
    let parentTR = parentTD.parentNode;
    let parentTBODY = parentTR.parentNode;
    parentTBODY.removeChild(parentTR);
    bus_index_update_1();
}
function bus_station_add_1() {
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let station_index = bodyObj.rows.length;
    let station_name = document.getElementById('station_name_input_1').value;
    let longitude = Number(document.getElementById('longitude_input_1').value)
    let latitude = Number(document.getElementById('latitude_input_1').value)
    let rowCount = bodyObj.rows.length;
    let cellCount = bodyObj.rows[0].cells.length;
    bodyObj.style.display = ""; // display the tbody

    let newRow = bodyObj.insertRow(rowCount++);
    newRow.insertCell(0).innerHTML = String(station_index);
    newRow.insertCell(1).innerHTML = String(station_name);
    newRow.insertCell(2).innerHTML = String(longitude);
    newRow.insertCell(3).innerHTML = String(latitude);
    newRow.insertCell(4).innerHTML = bodyObj.rows[0].cells[cellCount - 1].innerHTML;// copy the "delete" button
    bodyObj.rows[0].style.display = "none"; // hide first row
}

function bus_index_update_1(){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        document.getElementById("tbody_1").rows[i].cells[0].innerHTML = String(i);
        console.log(document.getElementById("tbody_1").rows[i].cells[0].innerHTML)
        console.log(document.getElementById("tbody_1").rows[i].cells[1].innerHTML)
        console.log(document.getElementById("tbody_1").rows[i].cells[2].innerHTML)
    }
}


function bus_station_up_1(inputobj){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }

    var row = inputobj.closest('tr'); // 获取最近的tr元素
    var row_index = row.rowIndex - 1; // 获取行序号
    console.log(row_index);
    if(row_index === 1 ){
        alert('no position above')
        return;
    }

    let name_tmp = document.getElementById("tbody_1").rows[row_index].cells[1].innerHTML;
    let longitude_tmp = document.getElementById("tbody_1").rows[row_index].cells[2].innerHTML;
    let latitude_tmp = document.getElementById("tbody_1").rows[row_index].cells[3].innerHTML;

    document.getElementById("tbody_1").rows[row_index].cells[1].innerHTML = document.getElementById("tbody_1").rows[row_index - 1].cells[1].innerHTML;
    document.getElementById("tbody_1").rows[row_index].cells[2].innerHTML = document.getElementById("tbody_1").rows[row_index - 1].cells[2].innerHTML;
    document.getElementById("tbody_1").rows[row_index].cells[3].innerHTML = document.getElementById("tbody_1").rows[row_index - 1].cells[3].innerHTML;

    document.getElementById("tbody_1").rows[row_index - 1].cells[1].innerHTML = name_tmp;
    document.getElementById("tbody_1").rows[row_index - 1].cells[2].innerHTML = longitude_tmp;
    document.getElementById("tbody_1").rows[row_index - 1].cells[3].innerHTML = latitude_tmp;


}

function bus_station_down_1(inputobj){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML !== "superuser"){
        alert("you can not use such admin")
        return;
    }

    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    var row = inputobj.closest('tr'); // 获取最近的tr元素
    var row_index = row.rowIndex - 1; // 获取行序号
    console.log(row_index);
    if(row_index === rowCount - 1 ){
        alert('no position below')
        return;
    }
    let name_tmp = document.getElementById("tbody_1").rows[row_index].cells[1].innerHTML;
    let longitude_tmp = document.getElementById("tbody_1").rows[row_index].cells[2].innerHTML;
    let latitude_tmp = document.getElementById("tbody_1").rows[row_index].cells[3].innerHTML;

    document.getElementById("tbody_1").rows[row_index].cells[1].innerHTML = document.getElementById("tbody_1").rows[row_index + 1].cells[1].innerHTML;
    document.getElementById("tbody_1").rows[row_index].cells[2].innerHTML = document.getElementById("tbody_1").rows[row_index + 1].cells[2].innerHTML;
    document.getElementById("tbody_1").rows[row_index].cells[3].innerHTML = document.getElementById("tbody_1").rows[row_index + 1].cells[3].innerHTML;

    document.getElementById("tbody_1").rows[row_index + 1].cells[1].innerHTML = name_tmp;
    document.getElementById("tbody_1").rows[row_index + 1].cells[2].innerHTML = longitude_tmp;
    document.getElementById("tbody_1").rows[row_index + 1].cells[3].innerHTML = latitude_tmp;
}

function table_fold_1(){
    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        bodyObj.rows[i].style.display = "none"; // hide row
    }
}

function table_unfold_1(){
    let bodyObj = document.getElementById("tbody_1");
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    let rowCount = bodyObj.rows.length;
    for (let i = 1; i < rowCount; i++) {
        bodyObj.rows[i].style.display = ""; // un   hide row
    }
}


function register_log_change(){
    let tab_1 = document.getElementById("road_search");
    let tab_2 = document.getElementById("bus_line_set");
    let tab_3 = document.getElementById("register_log");

    tab_1.style.display = "none";
    tab_2.style.display = "none";
    tab_3.style.display = "";

}
function road_search_change(){
    let tab_1 = document.getElementById("road_search");
    let tab_2 = document.getElementById("bus_line_set");
    let tab_3 = document.getElementById("register_log");

    tab_1.style.display = "";
    tab_2.style.display = "none";
    tab_3.style.display = "none";

}
function bus_line_set_change(){
    let tab_1 = document.getElementById("road_search");
    let tab_2 = document.getElementById("bus_line_set");
    let tab_3 = document.getElementById("register_log");

    tab_1.style.display = "none";
    tab_2.style.display = "";
    tab_3.style.display = "none";

}



function check_number_get(){
}


var account = [
    ['account1', '123456', 'user'],
    ['account2', '654321', 'user'],
    ['account3', '13579', 'user'],
    ['account4', '24680', 'user'],
    ['Paranoid', '224013367', 'superuser']
]


function register(){
    let name = document.getElementById("user_name_input").value;
    let password = document.getElementById("user_password_input").value;
    let password_repeat = document.getElementById("user_password_repeat").value;
    for (let i = 0; i < account.length; i++) {
        if(name === account[i][0]){
            alert("the user name used");
            return;
        }
    }
    if(password !== password_repeat){
        alert("password checked wrong");
        return;
    }
    alert("new account register success!\n"+"account: "+name+"\n"+"password: "+ password+"\n"+ "identity: user")
    account.push([name,password,'user'])

}


function log_in(){
    let bodyObj = document.getElementById("users_state")
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }

    let name = document.getElementById("user_name").value
    let password = document.getElementById("user_password").value

    for (let i = 0; i < account.length; i++) {
        if(account[i][0] === name && account[i][1] === password ){
            document.getElementById("user_log").rows[1].cells[0].innerHTML = account[i][0];
            document.getElementById("user_log").rows[1].cells[1].innerHTML = account[i][1];
            document.getElementById("user_log").rows[1].cells[2].innerHTML = account[i][2];
            console.log(account[i][0] + account[i][1] + account[i][2] )
            document.getElementById("user_name").value = "";
            document.getElementById("user_password").value = "";
            alert("log in success!")
            server_hide_update();
            document.getElementById("user_log_in").style.display = "none";
            document.getElementById("user_register").style.display = "none";
            document.getElementById("log_test").style.display = "none";
            return;
        }
    }
    alert("user or password wrong!")
}

function log_out(){
    let bodyObj =document.getElementById("users_state")
    if (!bodyObj) {
        alert("Body of Table not Exist!");
        return;
    }
    document.getElementById("user_log").rows[1].cells[0].innerHTML = "Temporary";
    document.getElementById("user_log").rows[1].cells[1].innerHTML = "NULL";
    document.getElementById("user_log").rows[1].cells[2].innerHTML = "VISITOR";
    alert("log out success")
    document.getElementById("user_log_in").style.display = "";
    document.getElementById("user_register").style.display = "";
    document.getElementById("log_test").style.display = "";
}


function AS_Paranoid(){
    document.getElementById("user_name").value = "Paranoid"
    document.getElementById("user_password").value = "224013367"
}
function AS_user(){
    document.getElementById("user_name").value = "account1"
    document.getElementById("user_password").value = "123456"
}

function server_hide_update(){
    if(document.getElementById("user_log").rows[1].cells[2].innerHTML === "superuser"){
        document.getElementById("bus_line_2_add").style.display = "";
        document.getElementById("bus_line_1_add").style.display = "";

    }else{
        document.getElementById("bus_line_2_add").style.display = "none";
        document.getElementById("bus_line_1_add").style.display = "none";
    }
}