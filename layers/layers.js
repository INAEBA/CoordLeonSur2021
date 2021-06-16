var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionLeonSur_3 = new ol.format.GeoJSON();
var features_CoordinacionLeonSur_3 = format_CoordinacionLeonSur_3.readFeatures(json_CoordinacionLeonSur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonSur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonSur_3.addFeatures(features_CoordinacionLeonSur_3);
var lyr_CoordinacionLeonSur_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonSur_3, 
                style: style_CoordinacionLeonSur_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionLeonSur_3.png" /> Coordinacion Leon Sur'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionLE36_5 = new ol.format.GeoJSON();
var features_MicroregionLE36_5 = format_MicroregionLE36_5.readFeatures(json_MicroregionLE36_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE36_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE36_5.addFeatures(features_MicroregionLE36_5);
var lyr_MicroregionLE36_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE36_5, 
                style: style_MicroregionLE36_5,
                interactive: false,
    title: 'Microregion LE36<br />\
    <img src="styles/legend/MicroregionLE36_5_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionLE36_5_1.png" /> 15 - 33 Personas<br />\
    <img src="styles/legend/MicroregionLE36_5_2.png" /> 33 - 53 Personas<br />\
    <img src="styles/legend/MicroregionLE36_5_3.png" /> 53 - 92 Personas<br />\
    <img src="styles/legend/MicroregionLE36_5_4.png" /> 92 - 158 Personas<br />'
        });
var format_MicroregionLE35_6 = new ol.format.GeoJSON();
var features_MicroregionLE35_6 = format_MicroregionLE35_6.readFeatures(json_MicroregionLE35_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE35_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE35_6.addFeatures(features_MicroregionLE35_6);
var lyr_MicroregionLE35_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE35_6, 
                style: style_MicroregionLE35_6,
                interactive: false,
    title: 'Microregion LE35<br />\
    <img src="styles/legend/MicroregionLE35_6_0.png" /> 2 - 41 Personas<br />\
    <img src="styles/legend/MicroregionLE35_6_1.png" /> 41 - 133 Personas<br />\
    <img src="styles/legend/MicroregionLE35_6_2.png" /> 133 - 258 Personas<br />\
    <img src="styles/legend/MicroregionLE35_6_3.png" /> 258 - 435 Personas<br />\
    <img src="styles/legend/MicroregionLE35_6_4.png" /> 435 - 623 Personas<br />'
        });
var format_MicroregionLE34_7 = new ol.format.GeoJSON();
var features_MicroregionLE34_7 = format_MicroregionLE34_7.readFeatures(json_MicroregionLE34_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE34_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE34_7.addFeatures(features_MicroregionLE34_7);
var lyr_MicroregionLE34_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE34_7, 
                style: style_MicroregionLE34_7,
                interactive: false,
    title: 'Microregion LE34<br />\
    <img src="styles/legend/MicroregionLE34_7_0.png" /> 1 - 33 Personas<br />\
    <img src="styles/legend/MicroregionLE34_7_1.png" /> 33 - 103 Personas<br />\
    <img src="styles/legend/MicroregionLE34_7_2.png" /> 103 - 268 Personas<br />\
    <img src="styles/legend/MicroregionLE34_7_3.png" /> 268 - 528 Personas<br />\
    <img src="styles/legend/MicroregionLE34_7_4.png" /> 528 - 932 Personas<br />'
        });
var format_MicroregionLE32_8 = new ol.format.GeoJSON();
var features_MicroregionLE32_8 = format_MicroregionLE32_8.readFeatures(json_MicroregionLE32_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE32_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE32_8.addFeatures(features_MicroregionLE32_8);
var lyr_MicroregionLE32_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE32_8, 
                style: style_MicroregionLE32_8,
                interactive: false,
    title: 'Microregion LE32<br />\
    <img src="styles/legend/MicroregionLE32_8_0.png" /> 1 - 31 Personas<br />\
    <img src="styles/legend/MicroregionLE32_8_1.png" /> 31 - 79 Personas<br />\
    <img src="styles/legend/MicroregionLE32_8_2.png" /> 79 - 166 Personas<br />\
    <img src="styles/legend/MicroregionLE32_8_3.png" /> 166 - 359 Personas<br />\
    <img src="styles/legend/MicroregionLE32_8_4.png" /> 359 - 485 Personas<br />'
        });
var format_MicroregionLE31_9 = new ol.format.GeoJSON();
var features_MicroregionLE31_9 = format_MicroregionLE31_9.readFeatures(json_MicroregionLE31_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE31_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE31_9.addFeatures(features_MicroregionLE31_9);
var lyr_MicroregionLE31_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE31_9, 
                style: style_MicroregionLE31_9,
                interactive: false,
    title: 'Microregion LE31<br />\
    <img src="styles/legend/MicroregionLE31_9_0.png" /> 3 - 20 Personas <br />\
    <img src="styles/legend/MicroregionLE31_9_1.png" /> 20 - 47 Personas <br />\
    <img src="styles/legend/MicroregionLE31_9_2.png" /> 47 - 81 Personas <br />\
    <img src="styles/legend/MicroregionLE31_9_3.png" /> 81 - 135 Personas <br />\
    <img src="styles/legend/MicroregionLE31_9_4.png" /> 135 - 222 Personas <br />'
        });
var format_MicroregionLE30_10 = new ol.format.GeoJSON();
var features_MicroregionLE30_10 = format_MicroregionLE30_10.readFeatures(json_MicroregionLE30_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE30_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE30_10.addFeatures(features_MicroregionLE30_10);
var lyr_MicroregionLE30_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE30_10, 
                style: style_MicroregionLE30_10,
                interactive: false,
    title: 'Microregion LE30<br />\
    <img src="styles/legend/MicroregionLE30_10_0.png" /> 3 - 10 Personas<br />\
    <img src="styles/legend/MicroregionLE30_10_1.png" /> 10 - 20 Personas<br />\
    <img src="styles/legend/MicroregionLE30_10_2.png" /> 20 - 34 Personas<br />\
    <img src="styles/legend/MicroregionLE30_10_3.png" /> 34 - 62 Personas<br />\
    <img src="styles/legend/MicroregionLE30_10_4.png" /> 62 - 112 Personas<br />'
        });
var format_MicroregionLE29_11 = new ol.format.GeoJSON();
var features_MicroregionLE29_11 = format_MicroregionLE29_11.readFeatures(json_MicroregionLE29_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE29_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE29_11.addFeatures(features_MicroregionLE29_11);
var lyr_MicroregionLE29_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE29_11, 
                style: style_MicroregionLE29_11,
                interactive: false,
    title: 'Microregion LE29<br />\
    <img src="styles/legend/MicroregionLE29_11_0.png" /> 3 - 11 Personas<br />\
    <img src="styles/legend/MicroregionLE29_11_1.png" /> 11 - 26 Personas<br />\
    <img src="styles/legend/MicroregionLE29_11_2.png" /> 26 - 47 Personas<br />\
    <img src="styles/legend/MicroregionLE29_11_3.png" /> 47 - 91 Personas<br />\
    <img src="styles/legend/MicroregionLE29_11_4.png" /> 91 - 196 Personas<br />'
        });
var format_MicroregionLE25_12 = new ol.format.GeoJSON();
var features_MicroregionLE25_12 = format_MicroregionLE25_12.readFeatures(json_MicroregionLE25_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE25_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE25_12.addFeatures(features_MicroregionLE25_12);
var lyr_MicroregionLE25_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE25_12, 
                style: style_MicroregionLE25_12,
                interactive: false,
    title: 'Microregion LE25<br />\
    <img src="styles/legend/MicroregionLE25_12_0.png" /> 1 - 15 Personas <br />\
    <img src="styles/legend/MicroregionLE25_12_1.png" /> 15 - 30 Personas <br />\
    <img src="styles/legend/MicroregionLE25_12_2.png" /> 30 - 56 Personas <br />\
    <img src="styles/legend/MicroregionLE25_12_3.png" /> 56 - 108 Personas <br />\
    <img src="styles/legend/MicroregionLE25_12_4.png" /> 108 - 201 Personas <br />'
        });
var format_MicroregionLE25_13 = new ol.format.GeoJSON();
var features_MicroregionLE25_13 = format_MicroregionLE25_13.readFeatures(json_MicroregionLE25_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE25_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE25_13.addFeatures(features_MicroregionLE25_13);
var lyr_MicroregionLE25_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE25_13, 
                style: style_MicroregionLE25_13,
                interactive: false,
    title: 'Microregion LE25<br />\
    <img src="styles/legend/MicroregionLE25_13_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionLE25_13_1.png" /> 15 - 29 Personas<br />\
    <img src="styles/legend/MicroregionLE25_13_2.png" /> 29 - 48 Personas<br />\
    <img src="styles/legend/MicroregionLE25_13_3.png" /> 48 - 79 Personas<br />\
    <img src="styles/legend/MicroregionLE25_13_4.png" /> 79 - 135 Personas<br />'
        });
var format_MicroregionLE24_14 = new ol.format.GeoJSON();
var features_MicroregionLE24_14 = format_MicroregionLE24_14.readFeatures(json_MicroregionLE24_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE24_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE24_14.addFeatures(features_MicroregionLE24_14);
var lyr_MicroregionLE24_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE24_14, 
                style: style_MicroregionLE24_14,
                interactive: false,
    title: 'Microregion LE24<br />\
    <img src="styles/legend/MicroregionLE24_14_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionLE24_14_1.png" /> 15 - 27 Personas<br />\
    <img src="styles/legend/MicroregionLE24_14_2.png" /> 27 - 43 Personas<br />\
    <img src="styles/legend/MicroregionLE24_14_3.png" /> 43 - 61 Personas<br />\
    <img src="styles/legend/MicroregionLE24_14_4.png" /> 61 - 97 Personas<br />'
        });
var format_MicroregionLE23_15 = new ol.format.GeoJSON();
var features_MicroregionLE23_15 = format_MicroregionLE23_15.readFeatures(json_MicroregionLE23_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE23_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE23_15.addFeatures(features_MicroregionLE23_15);
var lyr_MicroregionLE23_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE23_15, 
                style: style_MicroregionLE23_15,
                interactive: false,
    title: 'Microregion LE23<br />\
    <img src="styles/legend/MicroregionLE23_15_0.png" /> 3 - 16 Personas<br />\
    <img src="styles/legend/MicroregionLE23_15_1.png" /> 16 - 32 Personas<br />\
    <img src="styles/legend/MicroregionLE23_15_2.png" /> 32 - 55 Personas<br />\
    <img src="styles/legend/MicroregionLE23_15_3.png" /> 55 - 125 Personas<br />\
    <img src="styles/legend/MicroregionLE23_15_4.png" /> 125 - 215 Personas<br />'
        });
var format_MicroregionLE22_16 = new ol.format.GeoJSON();
var features_MicroregionLE22_16 = format_MicroregionLE22_16.readFeatures(json_MicroregionLE22_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE22_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE22_16.addFeatures(features_MicroregionLE22_16);
var lyr_MicroregionLE22_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE22_16, 
                style: style_MicroregionLE22_16,
                interactive: false,
    title: 'Microregion LE22<br />\
    <img src="styles/legend/MicroregionLE22_16_0.png" /> 3 - 16 Personas <br />\
    <img src="styles/legend/MicroregionLE22_16_1.png" /> 16 - 32 Personas <br />\
    <img src="styles/legend/MicroregionLE22_16_2.png" /> 32 - 51 Personas <br />\
    <img src="styles/legend/MicroregionLE22_16_3.png" /> 51 - 76 Personas <br />\
    <img src="styles/legend/MicroregionLE22_16_4.png" /> 76 - 103 Personas <br />'
        });
var format_MicroregionLE21_17 = new ol.format.GeoJSON();
var features_MicroregionLE21_17 = format_MicroregionLE21_17.readFeatures(json_MicroregionLE21_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE21_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE21_17.addFeatures(features_MicroregionLE21_17);
var lyr_MicroregionLE21_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE21_17, 
                style: style_MicroregionLE21_17,
                interactive: false,
    title: 'Microregion LE21<br />\
    <img src="styles/legend/MicroregionLE21_17_0.png" /> 3 - 16 Personas<br />\
    <img src="styles/legend/MicroregionLE21_17_1.png" /> 16 - 28 Personas<br />\
    <img src="styles/legend/MicroregionLE21_17_2.png" /> 28 - 40 Personas<br />\
    <img src="styles/legend/MicroregionLE21_17_3.png" /> 40 - 54 Personas<br />\
    <img src="styles/legend/MicroregionLE21_17_4.png" /> 54 - 92 Personas<br />'
        });
var format_MicroregionLE17_18 = new ol.format.GeoJSON();
var features_MicroregionLE17_18 = format_MicroregionLE17_18.readFeatures(json_MicroregionLE17_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE17_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE17_18.addFeatures(features_MicroregionLE17_18);
var lyr_MicroregionLE17_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE17_18, 
                style: style_MicroregionLE17_18,
                interactive: false,
    title: 'Microregion LE17<br />\
    <img src="styles/legend/MicroregionLE17_18_0.png" /> 3 - 13 Personas <br />\
    <img src="styles/legend/MicroregionLE17_18_1.png" /> 13 - 28 Personas <br />\
    <img src="styles/legend/MicroregionLE17_18_2.png" /> 28 - 52 Personas <br />\
    <img src="styles/legend/MicroregionLE17_18_3.png" /> 52 - 89 Personas <br />\
    <img src="styles/legend/MicroregionLE17_18_4.png" /> 89 - 182 Personas <br />'
        });
var format_MicroregionLE16_19 = new ol.format.GeoJSON();
var features_MicroregionLE16_19 = format_MicroregionLE16_19.readFeatures(json_MicroregionLE16_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE16_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE16_19.addFeatures(features_MicroregionLE16_19);
var lyr_MicroregionLE16_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE16_19, 
                style: style_MicroregionLE16_19,
                interactive: false,
    title: 'Microregion LE16<br />\
    <img src="styles/legend/MicroregionLE16_19_0.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionLE16_19_1.png" /> 12 - 25 Personas<br />\
    <img src="styles/legend/MicroregionLE16_19_2.png" /> 25 - 43 Personas<br />\
    <img src="styles/legend/MicroregionLE16_19_3.png" /> 43 - 74 Personas<br />\
    <img src="styles/legend/MicroregionLE16_19_4.png" /> 74 - 108 Personas<br />'
        });
var format_MicroregionLE152N_20 = new ol.format.GeoJSON();
var features_MicroregionLE152N_20 = format_MicroregionLE152N_20.readFeatures(json_MicroregionLE152N_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE152N_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE152N_20.addFeatures(features_MicroregionLE152N_20);
var lyr_MicroregionLE152N_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE152N_20, 
                style: style_MicroregionLE152N_20,
                interactive: false,
    title: 'Microregion LE15-2N<br />\
    <img src="styles/legend/MicroregionLE152N_20_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionLE152N_20_1.png" /> 13 - 27 Personas<br />\
    <img src="styles/legend/MicroregionLE152N_20_2.png" /> 27 - 41 Personas<br />\
    <img src="styles/legend/MicroregionLE152N_20_3.png" /> 41 - 68 Personas<br />\
    <img src="styles/legend/MicroregionLE152N_20_4.png" /> 68 - 119 Personas<br />'
        });
var format_CoordinacionLeonSur_21 = new ol.format.GeoJSON();
var features_CoordinacionLeonSur_21 = format_CoordinacionLeonSur_21.readFeatures(json_CoordinacionLeonSur_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonSur_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonSur_21.addFeatures(features_CoordinacionLeonSur_21);
var lyr_CoordinacionLeonSur_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonSur_21, 
                style: style_CoordinacionLeonSur_21,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionLeonSur_21.png" /> Coordinacion Leon Sur'
            });
var group_CoordinacionLeonSurRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionLE36_5,lyr_MicroregionLE35_6,lyr_MicroregionLE34_7,lyr_MicroregionLE32_8,lyr_MicroregionLE31_9,lyr_MicroregionLE30_10,lyr_MicroregionLE29_11,lyr_MicroregionLE25_12,lyr_MicroregionLE25_13,lyr_MicroregionLE24_14,lyr_MicroregionLE23_15,lyr_MicroregionLE22_16,lyr_MicroregionLE21_17,lyr_MicroregionLE17_18,lyr_MicroregionLE16_19,lyr_MicroregionLE152N_20,],
                                title: "Coordinacion Leon Sur Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionLeonSur_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionLeonSur_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionLE36_5.setVisible(true);lyr_MicroregionLE35_6.setVisible(true);lyr_MicroregionLE34_7.setVisible(true);lyr_MicroregionLE32_8.setVisible(true);lyr_MicroregionLE31_9.setVisible(true);lyr_MicroregionLE30_10.setVisible(true);lyr_MicroregionLE29_11.setVisible(true);lyr_MicroregionLE25_12.setVisible(true);lyr_MicroregionLE25_13.setVisible(true);lyr_MicroregionLE24_14.setVisible(true);lyr_MicroregionLE23_15.setVisible(true);lyr_MicroregionLE22_16.setVisible(true);lyr_MicroregionLE21_17.setVisible(true);lyr_MicroregionLE17_18.setVisible(true);lyr_MicroregionLE16_19.setVisible(true);lyr_MicroregionLE152N_20.setVisible(true);lyr_CoordinacionLeonSur_21.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionLeonSurRezago,lyr_CoordinacionLeonSur_21];
lyr_CoordinacionLeonSur_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionLE36_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE35_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE34_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE32_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE31_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE30_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE29_11.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE25_12.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE25_13.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE24_14.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE23_15.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE22_16.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE21_17.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE17_18.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE16_19.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE152N_20.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionLeonSur_21.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionLeonSur_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionLE36_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE35_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE34_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE32_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE31_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE30_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE29_11.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE25_12.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE25_13.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE24_14.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE23_15.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE22_16.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE21_17.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE17_18.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE16_19.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE152N_20.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionLeonSur_21.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionLeonSur_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionLE36_5.set('fieldLabels', {});
lyr_MicroregionLE35_6.set('fieldLabels', {});
lyr_MicroregionLE34_7.set('fieldLabels', {});
lyr_MicroregionLE32_8.set('fieldLabels', {});
lyr_MicroregionLE31_9.set('fieldLabels', {});
lyr_MicroregionLE30_10.set('fieldLabels', {});
lyr_MicroregionLE29_11.set('fieldLabels', {});
lyr_MicroregionLE25_12.set('fieldLabels', {});
lyr_MicroregionLE25_13.set('fieldLabels', {});
lyr_MicroregionLE24_14.set('fieldLabels', {});
lyr_MicroregionLE23_15.set('fieldLabels', {});
lyr_MicroregionLE22_16.set('fieldLabels', {});
lyr_MicroregionLE21_17.set('fieldLabels', {});
lyr_MicroregionLE17_18.set('fieldLabels', {});
lyr_MicroregionLE16_19.set('fieldLabels', {});
lyr_MicroregionLE152N_20.set('fieldLabels', {});
lyr_CoordinacionLeonSur_21.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionLeonSur_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});