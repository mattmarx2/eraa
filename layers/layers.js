ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-29393.716292, 102788.186268, -28867.478829, 103155.179698]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcelasBUPI_Fev_1 = new ol.format.GeoJSON();
var features_ParcelasBUPI_Fev_1 = format_ParcelasBUPI_Fev_1.readFeatures(json_ParcelasBUPI_Fev_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ParcelasBUPI_Fev_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasBUPI_Fev_1.addFeatures(features_ParcelasBUPI_Fev_1);
var lyr_ParcelasBUPI_Fev_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasBUPI_Fev_1, 
                style: style_ParcelasBUPI_Fev_1,
                popuplayertitle: 'ParcelasBUPI_Fev',
                interactive: true,
                title: '<img src="styles/legend/ParcelasBUPI_Fev_1.png" /> ParcelasBUPI_Fev'
            });
var format_xref_tracado_2 = new ol.format.GeoJSON();
var features_xref_tracado_2 = format_xref_tracado_2.readFeatures(json_xref_tracado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_xref_tracado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xref_tracado_2.addFeatures(features_xref_tracado_2);
var lyr_xref_tracado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xref_tracado_2, 
                style: style_xref_tracado_2,
                popuplayertitle: 'xref_tracado',
                interactive: false,
                title: '<img src="styles/legend/xref_tracado_2.png" /> xref_tracado'
            });
var format_PrediosERAA_3 = new ol.format.GeoJSON();
var features_PrediosERAA_3 = format_PrediosERAA_3.readFeatures(json_PrediosERAA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_PrediosERAA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosERAA_3.addFeatures(features_PrediosERAA_3);
var lyr_PrediosERAA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosERAA_3, 
                style: style_PrediosERAA_3,
                popuplayertitle: 'PrediosERAA',
                interactive: true,
                title: '<img src="styles/legend/PrediosERAA_3.png" /> PrediosERAA'
            });
var format_LimitesAdmin_4 = new ol.format.GeoJSON();
var features_LimitesAdmin_4 = format_LimitesAdmin_4.readFeatures(json_LimitesAdmin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimitesAdmin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesAdmin_4.addFeatures(features_LimitesAdmin_4);
var lyr_LimitesAdmin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesAdmin_4, 
                style: style_LimitesAdmin_4,
                popuplayertitle: 'LimitesAdmin',
                interactive: false,
                title: '<img src="styles/legend/LimitesAdmin_4.png" /> LimitesAdmin'
            });
var format_LimiteExpropriacao_5 = new ol.format.GeoJSON();
var features_LimiteExpropriacao_5 = format_LimiteExpropriacao_5.readFeatures(json_LimiteExpropriacao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimiteExpropriacao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteExpropriacao_5.addFeatures(features_LimiteExpropriacao_5);
var lyr_LimiteExpropriacao_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteExpropriacao_5, 
                style: style_LimiteExpropriacao_5,
                popuplayertitle: 'LimiteExpropriacao',
                interactive: true,
                title: '<img src="styles/legend/LimiteExpropriacao_5.png" /> LimiteExpropriacao'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ParcelasBUPI_Fev_1.setVisible(true);lyr_xref_tracado_2.setVisible(true);lyr_PrediosERAA_3.setVisible(true);lyr_LimitesAdmin_4.setVisible(true);lyr_LimiteExpropriacao_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParcelasBUPI_Fev_1,lyr_xref_tracado_2,lyr_PrediosERAA_3,lyr_LimitesAdmin_4,lyr_LimiteExpropriacao_5];
lyr_ParcelasBUPI_Fev_1.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', });
lyr_xref_tracado_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PrediosERAA_3.set('fieldAliases', {'Parcela': 'Parcela', 'AreaTotal': 'AreaTotal', 'BUPI': 'BUPI', 'Artigo Matriz': 'Artigo Matriz', 'Artigo Antigo': 'Artigo Antigo', 'Descrição Predial': 'Descrição Predial', 'Morada': 'Morada', 'Nome': 'Nome', 'Contribuinte': 'Contribuinte', 'Telefone': 'Telefone', 'Observações': 'Observações', 'AreaCadernetaAtual': 'AreaCadernetaAtual', 'AreasProj_x_AreasMatriz': 'AreasProj_x_AreasMatriz', 'RAN': 'RAN', 'REN': 'REN', 'MatrizBupi': 'MatrizBupi', });
lyr_LimitesAdmin_4.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Ilha': 'Ilha', 'TAA': 'TAA', 'Area_T_ha': 'Area_T_ha', 'Area_EA_ha': 'Area_EA_ha', 'Distrito': 'Distrito', 'Des_Simpli': 'Des_Simpli', 'layer': 'layer', });
lyr_LimiteExpropriacao_5.set('fieldAliases', {});
lyr_ParcelasBUPI_Fev_1.set('fieldImages', {'fid': '', 'area_m2': '', });
lyr_xref_tracado_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PrediosERAA_3.set('fieldImages', {'Parcela': 'TextEdit', 'AreaTotal': 'TextEdit', 'BUPI': 'TextEdit', 'Artigo Matriz': 'TextEdit', 'Artigo Antigo': 'TextEdit', 'Descrição Predial': 'TextEdit', 'Morada': 'TextEdit', 'Nome': 'TextEdit', 'Contribuinte': 'TextEdit', 'Telefone': 'TextEdit', 'Observações': 'TextEdit', 'AreaCadernetaAtual': 'TextEdit', 'AreasProj_x_AreasMatriz': 'TextEdit', 'RAN': 'TextEdit', 'REN': 'TextEdit', 'MatrizBupi': 'TextEdit', });
lyr_LimitesAdmin_4.set('fieldImages', {'fid': '', 'DICOFRE': '', 'Freguesia': '', 'Municipio': '', 'Ilha': '', 'TAA': '', 'Area_T_ha': '', 'Area_EA_ha': '', 'Distrito': '', 'Des_Simpli': '', 'layer': '', });
lyr_LimiteExpropriacao_5.set('fieldImages', {});
lyr_ParcelasBUPI_Fev_1.set('fieldLabels', {'fid': 'no label', 'area_m2': 'inline label - visible with data', });
lyr_xref_tracado_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PrediosERAA_3.set('fieldLabels', {'Parcela': 'inline label - visible with data', 'AreaTotal': 'inline label - visible with data', 'BUPI': 'inline label - visible with data', 'Artigo Matriz': 'inline label - visible with data', 'Artigo Antigo': 'inline label - visible with data', 'Descrição Predial': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Contribuinte': 'inline label - visible with data', 'Telefone': 'inline label - visible with data', 'Observações': 'inline label - visible with data', 'AreaCadernetaAtual': 'inline label - visible with data', 'AreasProj_x_AreasMatriz': 'inline label - visible with data', 'RAN': 'inline label - visible with data', 'REN': 'inline label - visible with data', 'MatrizBupi': 'inline label - visible with data', });
lyr_LimitesAdmin_4.set('fieldLabels', {'fid': 'no label', 'DICOFRE': 'no label', 'Freguesia': 'inline label - always visible', 'Municipio': 'no label', 'Ilha': 'no label', 'TAA': 'no label', 'Area_T_ha': 'no label', 'Area_EA_ha': 'no label', 'Distrito': 'no label', 'Des_Simpli': 'no label', 'layer': 'no label', });
lyr_LimiteExpropriacao_5.set('fieldLabels', {});
lyr_LimiteExpropriacao_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});