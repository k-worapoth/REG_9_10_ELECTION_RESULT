var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CM_9_POLAREA_tambon_1 = new ol.format.GeoJSON();
var features_CM_9_POLAREA_tambon_1 = format_CM_9_POLAREA_tambon_1.readFeatures(json_CM_9_POLAREA_tambon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_9_POLAREA_tambon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_9_POLAREA_tambon_1.addFeatures(features_CM_9_POLAREA_tambon_1);
var lyr_CM_9_POLAREA_tambon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_9_POLAREA_tambon_1, 
                style: style_CM_9_POLAREA_tambon_1,
                popuplayertitle: 'CM_9_POLAREA_tambon',
                interactive: true,
                title: '<img src="styles/legend/CM_9_POLAREA_tambon_1.png" /> CM_9_POLAREA_tambon'
            });
var format_CM_9_POLAREA_Amphor_2 = new ol.format.GeoJSON();
var features_CM_9_POLAREA_Amphor_2 = format_CM_9_POLAREA_Amphor_2.readFeatures(json_CM_9_POLAREA_Amphor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_9_POLAREA_Amphor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_9_POLAREA_Amphor_2.addFeatures(features_CM_9_POLAREA_Amphor_2);
var lyr_CM_9_POLAREA_Amphor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_9_POLAREA_Amphor_2, 
                style: style_CM_9_POLAREA_Amphor_2,
                popuplayertitle: 'CM_9_POLAREA_Amphor',
                interactive: false,
                title: '<img src="styles/legend/CM_9_POLAREA_Amphor_2.png" /> CM_9_POLAREA_Amphor'
            });
var format_CM_9_PARTY_RZ_3 = new ol.format.GeoJSON();
var features_CM_9_PARTY_RZ_3 = format_CM_9_PARTY_RZ_3.readFeatures(json_CM_9_PARTY_RZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_9_PARTY_RZ_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_9_PARTY_RZ_3.addFeatures(features_CM_9_PARTY_RZ_3);
var lyr_CM_9_PARTY_RZ_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_9_PARTY_RZ_3, 
                style: style_CM_9_PARTY_RZ_3,
                popuplayertitle: 'CM_9_PARTY_RZ',
                interactive: true,
    title: 'CM_9_PARTY_RZ<br />\
    <img src="styles/legend/CM_9_PARTY_RZ_3_0.png" /> #N/A<br />\
    <img src="styles/legend/CM_9_PARTY_RZ_3_1.png" /> 27_DP<br />\
    <img src="styles/legend/CM_9_PARTY_RZ_3_2.png" /> 46_PPLE<br />\
    <img src="styles/legend/CM_9_PARTY_RZ_3_3.png" /> 9_PT<br />\
    <img src="styles/legend/CM_9_PARTY_RZ_3_4.png" /> <br />' });
var format_CM_9_RZ_4 = new ol.format.GeoJSON();
var features_CM_9_RZ_4 = format_CM_9_RZ_4.readFeatures(json_CM_9_RZ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_9_RZ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_9_RZ_4.addFeatures(features_CM_9_RZ_4);
var lyr_CM_9_RZ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_9_RZ_4, 
                style: style_CM_9_RZ_4,
                popuplayertitle: 'CM_9_RZ',
                interactive: false,
    title: 'CM_9_RZ<br />\
    <img src="styles/legend/CM_9_RZ_4_0.png" /> #N/A<br />\
    <img src="styles/legend/CM_9_RZ_4_1.png" /> 1_PJT<br />\
    <img src="styles/legend/CM_9_RZ_4_2.png" /> 2_PT<br />\
    <img src="styles/legend/CM_9_RZ_4_3.png" /> 3_PPLE<br />\
    <img src="styles/legend/CM_9_RZ_4_4.png" /> 5_KLA<br />\
    <img src="styles/legend/CM_9_RZ_4_5.png" /> 6_DP<br />\
    <img src="styles/legend/CM_9_RZ_4_6.png" /> <br />' });
var format_CM_10_POLAREA_Tambon_5 = new ol.format.GeoJSON();
var features_CM_10_POLAREA_Tambon_5 = format_CM_10_POLAREA_Tambon_5.readFeatures(json_CM_10_POLAREA_Tambon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_10_POLAREA_Tambon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_10_POLAREA_Tambon_5.addFeatures(features_CM_10_POLAREA_Tambon_5);
var lyr_CM_10_POLAREA_Tambon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_10_POLAREA_Tambon_5, 
                style: style_CM_10_POLAREA_Tambon_5,
                popuplayertitle: 'CM_10_POLAREA_Tambon',
                interactive: false,
                title: '<img src="styles/legend/CM_10_POLAREA_Tambon_5.png" /> CM_10_POLAREA_Tambon'
            });
var format_CM_10_POLAREA_Amphor_6 = new ol.format.GeoJSON();
var features_CM_10_POLAREA_Amphor_6 = format_CM_10_POLAREA_Amphor_6.readFeatures(json_CM_10_POLAREA_Amphor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_10_POLAREA_Amphor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_10_POLAREA_Amphor_6.addFeatures(features_CM_10_POLAREA_Amphor_6);
var lyr_CM_10_POLAREA_Amphor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_10_POLAREA_Amphor_6, 
                style: style_CM_10_POLAREA_Amphor_6,
                popuplayertitle: 'CM_10_POLAREA_Amphor',
                interactive: false,
                title: '<img src="styles/legend/CM_10_POLAREA_Amphor_6.png" /> CM_10_POLAREA_Amphor'
            });
var format_CM_10_PARTY_RZ_7 = new ol.format.GeoJSON();
var features_CM_10_PARTY_RZ_7 = format_CM_10_PARTY_RZ_7.readFeatures(json_CM_10_PARTY_RZ_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_10_PARTY_RZ_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_10_PARTY_RZ_7.addFeatures(features_CM_10_PARTY_RZ_7);
var lyr_CM_10_PARTY_RZ_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_10_PARTY_RZ_7, 
                style: style_CM_10_PARTY_RZ_7,
                popuplayertitle: 'CM_10_PARTY_RZ',
                interactive: true,
    title: 'CM_10_PARTY_RZ<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_0.png" /> #N/A<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_1.png" /> 1<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_2.png" /> 11<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_3.png" /> 27_DP<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_4.png" /> 4<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_5.png" /> 42_KLA<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_6.png" /> 46_PPLE<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_7.png" /> 9_PT<br />\
    <img src="styles/legend/CM_10_PARTY_RZ_7_8.png" /> <br />' });
var format_CM_10_RZ_8 = new ol.format.GeoJSON();
var features_CM_10_RZ_8 = format_CM_10_RZ_8.readFeatures(json_CM_10_RZ_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM_10_RZ_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM_10_RZ_8.addFeatures(features_CM_10_RZ_8);
var lyr_CM_10_RZ_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM_10_RZ_8, 
                style: style_CM_10_RZ_8,
                popuplayertitle: 'CM_10_RZ',
                interactive: true,
    title: 'CM_10_RZ<br />\
    <img src="styles/legend/CM_10_RZ_8_0.png" /> #N/A<br />\
    <img src="styles/legend/CM_10_RZ_8_1.png" /> 1_PT<br />\
    <img src="styles/legend/CM_10_RZ_8_2.png" /> 4_KLA<br />\
    <img src="styles/legend/CM_10_RZ_8_3.png" /> 6_PPLE<br />\
    <img src="styles/legend/CM_10_RZ_8_4.png" /> <br />' });
var group_cm_10 = new ol.layer.Group({
                                layers: [lyr_CM_10_POLAREA_Tambon_5,lyr_CM_10_POLAREA_Amphor_6,lyr_CM_10_PARTY_RZ_7,lyr_CM_10_RZ_8,],
                                fold: 'open',
                                title: 'cm_10'});
var group_CM_9 = new ol.layer.Group({
                                layers: [lyr_CM_9_POLAREA_tambon_1,lyr_CM_9_POLAREA_Amphor_2,lyr_CM_9_PARTY_RZ_3,lyr_CM_9_RZ_4,],
                                fold: 'open',
                                title: 'CM_9'});

lyr_EsriTopographic_0.setVisible(true);lyr_CM_9_POLAREA_tambon_1.setVisible(true);lyr_CM_9_POLAREA_Amphor_2.setVisible(true);lyr_CM_9_PARTY_RZ_3.setVisible(true);lyr_CM_9_RZ_4.setVisible(true);lyr_CM_10_POLAREA_Tambon_5.setVisible(true);lyr_CM_10_POLAREA_Amphor_6.setVisible(true);lyr_CM_10_PARTY_RZ_7.setVisible(true);lyr_CM_10_RZ_8.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_CM_9,group_cm_10];
lyr_CM_9_POLAREA_tambon_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_TH': 'ADM3_TH', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM3ALT1TH': 'ADM3ALT1TH', 'ADM3ALT2TH': 'ADM3ALT2TH', 'ADM2_EN': 'ADM2_EN', 'ADM2_TH': 'ADM2_TH', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_CM_9_POLAREA_Amphor_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_TH': 'ADM2_TH', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1TH': 'ADM2ALT1TH', 'ADM2ALT2TH': 'ADM2ALT2TH', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_CM_9_PARTY_RZ_3.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', '9_PT': '9_PT', '27_DP': '27_DP', '37_PJT': '37_PJT', '42_KLA': '42_KLA', '46_PPLE': '46_PPLE', 'FALSE_CARD': 'FALSE_CARD', 'NO_VOTE': 'NO_VOTE', 'total': 'total', 'winner': 'winner', });
lyr_CM_9_RZ_4.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', '1_PJT': '1_PJT', '2_PT': '2_PT', '3_PPLE': '3_PPLE', '4_NEWV': '4_NEWV', '5_KLA': '5_KLA', '6_DP': '6_DP', '7_PPRT': '7_PPRT', '8_SETHAKIT': '8_SETHAKIT', 'FALSECARD': 'FALSECARD', 'NOVOTE': 'NOVOTE', 'total': 'total', 'winner': 'winner', });
lyr_CM_10_POLAREA_Tambon_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_TH': 'ADM3_TH', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM3ALT1TH': 'ADM3ALT1TH', 'ADM3ALT2TH': 'ADM3ALT2TH', 'ADM2_EN': 'ADM2_EN', 'ADM2_TH': 'ADM2_TH', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_CM_10_POLAREA_Amphor_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_TH': 'ADM2_TH', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1TH': 'ADM2ALT1TH', 'ADM2ALT2TH': 'ADM2ALT2TH', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_CM_10_PARTY_RZ_7.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', '9_PT': '9_PT', '27_DP': '27_DP', '37_PJT': '37_PJT', '42_KLA': '42_KLA', '46_PPLE': '46_PPLE', 'FALSE_CARD': 'FALSE_CARD', 'NO_VOTE': 'NO_VOTE', 'winner': 'winner', });
lyr_CM_10_RZ_8.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'POPE': 'POPE', 'EPOP': 'EPOP', '1_PT': '1_PT', '2_PJT': '2_PJT', '3_DP': '3_DP', '4_KLA': '4_KLA', '5_PPR': '5_PPR', '6_PPLE': '6_PPLE', 'FALSECARD': 'FALSECARD', 'NOVOTE': 'NOVOTE', 'total': 'total', 'winner': 'winner', });
lyr_CM_9_POLAREA_tambon_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_TH': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM3ALT1TH': 'TextEdit', 'ADM3ALT2TH': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_TH': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_CM_9_POLAREA_Amphor_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_TH': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1TH': 'TextEdit', 'ADM2ALT2TH': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_CM_9_PARTY_RZ_3.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', '9_PT': 'TextEdit', '27_DP': 'TextEdit', '37_PJT': 'TextEdit', '42_KLA': 'TextEdit', '46_PPLE': 'TextEdit', 'FALSE_CARD': 'TextEdit', 'NO_VOTE': 'TextEdit', 'total': 'TextEdit', 'winner': 'TextEdit', });
lyr_CM_9_RZ_4.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', '1_PJT': 'TextEdit', '2_PT': 'TextEdit', '3_PPLE': 'TextEdit', '4_NEWV': 'TextEdit', '5_KLA': 'TextEdit', '6_DP': 'TextEdit', '7_PPRT': 'TextEdit', '8_SETHAKIT': 'TextEdit', 'FALSECARD': 'TextEdit', 'NOVOTE': 'TextEdit', 'total': 'TextEdit', 'winner': 'TextEdit', });
lyr_CM_10_POLAREA_Tambon_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_TH': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM3ALT1TH': 'TextEdit', 'ADM3ALT2TH': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_TH': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_CM_10_POLAREA_Amphor_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_TH': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1TH': 'TextEdit', 'ADM2ALT2TH': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_CM_10_PARTY_RZ_7.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', '9_PT': 'TextEdit', '27_DP': 'TextEdit', '37_PJT': 'TextEdit', '42_KLA': 'TextEdit', '46_PPLE': 'TextEdit', 'FALSE_CARD': 'TextEdit', 'NO_VOTE': 'TextEdit', 'winner': 'TextEdit', });
lyr_CM_10_RZ_8.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'POPE': 'TextEdit', 'EPOP': 'TextEdit', '1_PT': 'TextEdit', '2_PJT': 'TextEdit', '3_DP': 'TextEdit', '4_KLA': 'TextEdit', '5_PPR': 'TextEdit', '6_PPLE': 'TextEdit', 'FALSECARD': 'TextEdit', 'NOVOTE': 'TextEdit', 'total': 'TextEdit', 'winner': 'TextEdit', });
lyr_CM_9_POLAREA_tambon_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_TH': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM3ALT1TH': 'no label', 'ADM3ALT2TH': 'no label', 'ADM2_EN': 'no label', 'ADM2_TH': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_CM_9_POLAREA_Amphor_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_TH': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM2ALT1TH': 'no label', 'ADM2ALT2TH': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_CM_9_PARTY_RZ_3.set('fieldLabels', {'ref': 'no label', 'reg_off': 'no label', 'tambon': 'no label', 'el_num': 'no label', 'el_place': 'no label', 'POPE': 'no label', 'EPOP': 'no label', '9_PT': 'no label', '27_DP': 'no label', '37_PJT': 'no label', '42_KLA': 'no label', '46_PPLE': 'no label', 'FALSE_CARD': 'no label', 'NO_VOTE': 'no label', 'total': 'no label', 'winner': 'no label', });
lyr_CM_9_RZ_4.set('fieldLabels', {'ref': 'no label', 'reg_off': 'no label', 'tambon': 'no label', 'el_num': 'no label', 'el_place': 'no label', 'POPE': 'no label', 'EPOP': 'no label', '1_PJT': 'no label', '2_PT': 'no label', '3_PPLE': 'no label', '4_NEWV': 'no label', '5_KLA': 'no label', '6_DP': 'no label', '7_PPRT': 'no label', '8_SETHAKIT': 'no label', 'FALSECARD': 'no label', 'NOVOTE': 'no label', 'total': 'no label', 'winner': 'no label', });
lyr_CM_10_POLAREA_Tambon_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_TH': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM3ALT1TH': 'no label', 'ADM3ALT2TH': 'no label', 'ADM2_EN': 'no label', 'ADM2_TH': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_CM_10_POLAREA_Amphor_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_TH': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM2ALT1TH': 'no label', 'ADM2ALT2TH': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_CM_10_PARTY_RZ_7.set('fieldLabels', {'ref': 'inline label - visible with data', 'reg_off': 'inline label - visible with data', 'tambon': 'inline label - visible with data', 'el_num': 'inline label - visible with data', 'el_place': 'inline label - visible with data', 'POPE': 'inline label - visible with data', 'EPOP': 'inline label - visible with data', '9_PT': 'inline label - visible with data', '27_DP': 'inline label - visible with data', '37_PJT': 'inline label - visible with data', '42_KLA': 'inline label - visible with data', '46_PPLE': 'inline label - visible with data', 'FALSE_CARD': 'inline label - visible with data', 'NO_VOTE': 'inline label - visible with data', 'winner': 'inline label - visible with data', });
lyr_CM_10_RZ_8.set('fieldLabels', {'ref': 'inline label - visible with data', 'reg_off': 'inline label - visible with data', 'tambon': 'inline label - visible with data', 'el_num': 'inline label - visible with data', 'el_place': 'inline label - visible with data', 'POPE': 'inline label - visible with data', 'EPOP': 'inline label - visible with data', '1_PT': 'inline label - visible with data', '2_PJT': 'inline label - visible with data', '3_DP': 'inline label - visible with data', '4_KLA': 'inline label - visible with data', '5_PPR': 'inline label - visible with data', '6_PPLE': 'inline label - visible with data', 'FALSECARD': 'inline label - visible with data', 'NOVOTE': 'inline label - visible with data', 'total': 'inline label - visible with data', 'winner': 'inline label - visible with data', });
lyr_CM_10_RZ_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});