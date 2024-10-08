var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoVIPolgonoAqutico_1 = new ol.format.GeoJSON();
var features_AnexoVIPolgonoAqutico_1 = format_AnexoVIPolgonoAqutico_1.readFeatures(json_AnexoVIPolgonoAqutico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIPolgonoAqutico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIPolgonoAqutico_1.addFeatures(features_AnexoVIPolgonoAqutico_1);
var lyr_AnexoVIPolgonoAqutico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIPolgonoAqutico_1, 
                style: style_AnexoVIPolgonoAqutico_1,
                popuplayertitle: "Anexo VI - Polígono Aquático",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIPolgonoAqutico_1.png" /> Anexo VI - Polígono Aquático'
            });
var format_AnexoXVIIIPerCCP6_2 = new ol.format.GeoJSON();
var features_AnexoXVIIIPerCCP6_2 = format_AnexoXVIIIPerCCP6_2.readFeatures(json_AnexoXVIIIPerCCP6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIIPerCCP6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIIPerCCP6_2.addFeatures(features_AnexoXVIIIPerCCP6_2);
var lyr_AnexoXVIIIPerCCP6_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIIPerCCP6_2, 
                style: style_AnexoXVIIIPerCCP6_2,
                popuplayertitle: "Anexo XVIII - Píer CCP 6",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIIPerCCP6_2.png" /> Anexo XVIII - Píer CCP 6'
            });
var format_AnexoXVIIPerCCP5_3 = new ol.format.GeoJSON();
var features_AnexoXVIIPerCCP5_3 = format_AnexoXVIIPerCCP5_3.readFeatures(json_AnexoXVIIPerCCP5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIPerCCP5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIPerCCP5_3.addFeatures(features_AnexoXVIIPerCCP5_3);
var lyr_AnexoXVIIPerCCP5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIPerCCP5_3, 
                style: style_AnexoXVIIPerCCP5_3,
                popuplayertitle: "Anexo XVII - Píer CCP 5",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIPerCCP5_3.png" /> Anexo XVII - Píer CCP 5'
            });
var format_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4 = new ol.format.GeoJSON();
var features_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4 = format_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.readFeatures(json_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.addFeatures(features_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4);
var lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4, 
                style: style_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4,
                popuplayertitle: "Anexo XVI - Píer CCP 4 Anexo 16 - Píer CCP 4 (Área = 11,39 m²)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.png" /> Anexo XVI - Píer CCP 4 Anexo 16 - Píer CCP 4 (Área = 11,39 m²)'
            });
var format_AnexoXVPerCCP3_5 = new ol.format.GeoJSON();
var features_AnexoXVPerCCP3_5 = format_AnexoXVPerCCP3_5.readFeatures(json_AnexoXVPerCCP3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVPerCCP3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVPerCCP3_5.addFeatures(features_AnexoXVPerCCP3_5);
var lyr_AnexoXVPerCCP3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVPerCCP3_5, 
                style: style_AnexoXVPerCCP3_5,
                popuplayertitle: "Anexo XV - Píer CCP 3",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVPerCCP3_5.png" /> Anexo XV - Píer CCP 3'
            });
var format_AnexoXIIIPerCCP1_6 = new ol.format.GeoJSON();
var features_AnexoXIIIPerCCP1_6 = format_AnexoXIIIPerCCP1_6.readFeatures(json_AnexoXIIIPerCCP1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIPerCCP1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIPerCCP1_6.addFeatures(features_AnexoXIIIPerCCP1_6);
var lyr_AnexoXIIIPerCCP1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIPerCCP1_6, 
                style: style_AnexoXIIIPerCCP1_6,
                popuplayertitle: "Anexo XIII - Píer CCP 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIPerCCP1_6.png" /> Anexo XIII - Píer CCP 1'
            });
var format_AnexoXIVPerCCP2_7 = new ol.format.GeoJSON();
var features_AnexoXIVPerCCP2_7 = format_AnexoXIVPerCCP2_7.readFeatures(json_AnexoXIVPerCCP2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVPerCCP2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVPerCCP2_7.addFeatures(features_AnexoXIVPerCCP2_7);
var lyr_AnexoXIVPerCCP2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVPerCCP2_7, 
                style: style_AnexoXIVPerCCP2_7,
                popuplayertitle: "Anexo XIV - Píer CCP 2",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVPerCCP2_7.png" /> Anexo XIV - Píer CCP 2'
            });
var format_AnexoXIIPraticagem_8 = new ol.format.GeoJSON();
var features_AnexoXIIPraticagem_8 = format_AnexoXIIPraticagem_8.readFeatures(json_AnexoXIIPraticagem_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIPraticagem_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIPraticagem_8.addFeatures(features_AnexoXIIPraticagem_8);
var lyr_AnexoXIIPraticagem_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIPraticagem_8, 
                style: style_AnexoXIIPraticagem_8,
                popuplayertitle: "Anexo XII - Praticagem",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIPraticagem_8.png" /> Anexo XII - Praticagem'
            });
var format_AnexoXITerminaldePassageiros_9 = new ol.format.GeoJSON();
var features_AnexoXITerminaldePassageiros_9 = format_AnexoXITerminaldePassageiros_9.readFeatures(json_AnexoXITerminaldePassageiros_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXITerminaldePassageiros_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXITerminaldePassageiros_9.addFeatures(features_AnexoXITerminaldePassageiros_9);
var lyr_AnexoXITerminaldePassageiros_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXITerminaldePassageiros_9, 
                style: style_AnexoXITerminaldePassageiros_9,
                popuplayertitle: "Anexo XI - Terminal de Passageiros",
                interactive: true,
                title: '<img src="styles/legend/AnexoXITerminaldePassageiros_9.png" /> Anexo XI - Terminal de Passageiros'
            });
var format_AnexoXFerryboatBalsa_10 = new ol.format.GeoJSON();
var features_AnexoXFerryboatBalsa_10 = format_AnexoXFerryboatBalsa_10.readFeatures(json_AnexoXFerryboatBalsa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXFerryboatBalsa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXFerryboatBalsa_10.addFeatures(features_AnexoXFerryboatBalsa_10);
var lyr_AnexoXFerryboatBalsa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXFerryboatBalsa_10, 
                style: style_AnexoXFerryboatBalsa_10,
                popuplayertitle: "Anexo X - Ferryboat (Balsa)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXFerryboatBalsa_10.png" /> Anexo X - Ferryboat (Balsa)'
            });
var format_AnexoIXAcessoaoPerPesqueiro2_11 = new ol.format.GeoJSON();
var features_AnexoIXAcessoaoPerPesqueiro2_11 = format_AnexoIXAcessoaoPerPesqueiro2_11.readFeatures(json_AnexoIXAcessoaoPerPesqueiro2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXAcessoaoPerPesqueiro2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXAcessoaoPerPesqueiro2_11.addFeatures(features_AnexoIXAcessoaoPerPesqueiro2_11);
var lyr_AnexoIXAcessoaoPerPesqueiro2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXAcessoaoPerPesqueiro2_11, 
                style: style_AnexoIXAcessoaoPerPesqueiro2_11,
                popuplayertitle: "Anexo IX - Acesso ao Píer Pesqueiro 2",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXAcessoaoPerPesqueiro2_11.png" /> Anexo IX - Acesso ao Píer Pesqueiro 2'
            });
var format_AnexoVIIIAcessoaoPerPesqueiro1_12 = new ol.format.GeoJSON();
var features_AnexoVIIIAcessoaoPerPesqueiro1_12 = format_AnexoVIIIAcessoaoPerPesqueiro1_12.readFeatures(json_AnexoVIIIAcessoaoPerPesqueiro1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIAcessoaoPerPesqueiro1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIAcessoaoPerPesqueiro1_12.addFeatures(features_AnexoVIIIAcessoaoPerPesqueiro1_12);
var lyr_AnexoVIIIAcessoaoPerPesqueiro1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIAcessoaoPerPesqueiro1_12, 
                style: style_AnexoVIIIAcessoaoPerPesqueiro1_12,
                popuplayertitle: "Anexo VIII - Acesso ao Píer Pesqueiro 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIAcessoaoPerPesqueiro1_12.png" /> Anexo VIII - Acesso ao Píer Pesqueiro 1'
            });
var format_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13 = new ol.format.GeoJSON();
var features_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13 = format_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.readFeatures(json_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.addFeatures(features_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13);
var lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13, 
                style: style_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13,
                popuplayertitle: "Anexo VII - Píer em Frente à Antiga Inspetoria do Porto",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.png" /> Anexo VII - Píer em Frente à Antiga Inspetoria do Porto'
            });
var format_AnexoVImvelemNavegantes_14 = new ol.format.GeoJSON();
var features_AnexoVImvelemNavegantes_14 = format_AnexoVImvelemNavegantes_14.readFeatures(json_AnexoVImvelemNavegantes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVImvelemNavegantes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVImvelemNavegantes_14.addFeatures(features_AnexoVImvelemNavegantes_14);
var lyr_AnexoVImvelemNavegantes_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVImvelemNavegantes_14, 
                style: style_AnexoVImvelemNavegantes_14,
                popuplayertitle: "Anexo V - Imóvel em Navegantes",
                interactive: true,
                title: '<img src="styles/legend/AnexoVImvelemNavegantes_14.png" /> Anexo V - Imóvel em Navegantes'
            });
var format_AnexoIVASSPI_15 = new ol.format.GeoJSON();
var features_AnexoIVASSPI_15 = format_AnexoIVASSPI_15.readFeatures(json_AnexoIVASSPI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVASSPI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVASSPI_15.addFeatures(features_AnexoIVASSPI_15);
var lyr_AnexoIVASSPI_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVASSPI_15, 
                style: style_AnexoIVASSPI_15,
                popuplayertitle: "Anexo IV - ASSPI",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVASSPI_15.png" /> Anexo IV - ASSPI'
            });
var format_AnexoIIIComplexoNutico_16 = new ol.format.GeoJSON();
var features_AnexoIIIComplexoNutico_16 = format_AnexoIIIComplexoNutico_16.readFeatures(json_AnexoIIIComplexoNutico_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIComplexoNutico_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIComplexoNutico_16.addFeatures(features_AnexoIIIComplexoNutico_16);
var lyr_AnexoIIIComplexoNutico_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIComplexoNutico_16, 
                style: style_AnexoIIIComplexoNutico_16,
                popuplayertitle: "Anexo III - Complexo Náutico",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIComplexoNutico_16.png" /> Anexo III - Complexo Náutico'
            });
var format_AnexoIICentroComercialPorturioCCP_17 = new ol.format.GeoJSON();
var features_AnexoIICentroComercialPorturioCCP_17 = format_AnexoIICentroComercialPorturioCCP_17.readFeatures(json_AnexoIICentroComercialPorturioCCP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIICentroComercialPorturioCCP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIICentroComercialPorturioCCP_17.addFeatures(features_AnexoIICentroComercialPorturioCCP_17);
var lyr_AnexoIICentroComercialPorturioCCP_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIICentroComercialPorturioCCP_17, 
                style: style_AnexoIICentroComercialPorturioCCP_17,
                popuplayertitle: "Anexo II - Centro Comercial Portuário (CCP)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIICentroComercialPorturioCCP_17.png" /> Anexo II - Centro Comercial Portuário (CCP)'
            });
var format_AnexoIPolgonoPrincipaleExpanso_18 = new ol.format.GeoJSON();
var features_AnexoIPolgonoPrincipaleExpanso_18 = format_AnexoIPolgonoPrincipaleExpanso_18.readFeatures(json_AnexoIPolgonoPrincipaleExpanso_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoPrincipaleExpanso_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoPrincipaleExpanso_18.addFeatures(features_AnexoIPolgonoPrincipaleExpanso_18);
var lyr_AnexoIPolgonoPrincipaleExpanso_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoPrincipaleExpanso_18, 
                style: style_AnexoIPolgonoPrincipaleExpanso_18,
                popuplayertitle: "Anexo I - Polígono Principal e Expansão ",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoPrincipaleExpanso_18.png" /> Anexo I - Polígono Principal e Expansão '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoVIPolgonoAqutico_1.setVisible(true);lyr_AnexoXVIIIPerCCP6_2.setVisible(true);lyr_AnexoXVIIPerCCP5_3.setVisible(true);lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.setVisible(true);lyr_AnexoXVPerCCP3_5.setVisible(true);lyr_AnexoXIIIPerCCP1_6.setVisible(true);lyr_AnexoXIVPerCCP2_7.setVisible(true);lyr_AnexoXIIPraticagem_8.setVisible(true);lyr_AnexoXITerminaldePassageiros_9.setVisible(true);lyr_AnexoXFerryboatBalsa_10.setVisible(true);lyr_AnexoIXAcessoaoPerPesqueiro2_11.setVisible(true);lyr_AnexoVIIIAcessoaoPerPesqueiro1_12.setVisible(true);lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.setVisible(true);lyr_AnexoVImvelemNavegantes_14.setVisible(true);lyr_AnexoIVASSPI_15.setVisible(true);lyr_AnexoIIIComplexoNutico_16.setVisible(true);lyr_AnexoIICentroComercialPorturioCCP_17.setVisible(true);lyr_AnexoIPolgonoPrincipaleExpanso_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoVIPolgonoAqutico_1,lyr_AnexoXVIIIPerCCP6_2,lyr_AnexoXVIIPerCCP5_3,lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4,lyr_AnexoXVPerCCP3_5,lyr_AnexoXIIIPerCCP1_6,lyr_AnexoXIVPerCCP2_7,lyr_AnexoXIIPraticagem_8,lyr_AnexoXITerminaldePassageiros_9,lyr_AnexoXFerryboatBalsa_10,lyr_AnexoIXAcessoaoPerPesqueiro2_11,lyr_AnexoVIIIAcessoaoPerPesqueiro1_12,lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13,lyr_AnexoVImvelemNavegantes_14,lyr_AnexoIVASSPI_15,lyr_AnexoIIIComplexoNutico_16,lyr_AnexoIICentroComercialPorturioCCP_17,lyr_AnexoIPolgonoPrincipaleExpanso_18];
lyr_AnexoVIPolgonoAqutico_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIIPerCCP6_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIPerCCP5_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVPerCCP3_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIPerCCP1_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVPerCCP2_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIPraticagem_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXITerminaldePassageiros_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXFerryboatBalsa_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXAcessoaoPerPesqueiro2_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIAcessoaoPerPesqueiro1_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVImvelemNavegantes_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVASSPI_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIComplexoNutico_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIICentroComercialPorturioCCP_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoPrincipaleExpanso_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIPolgonoAqutico_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIIIPerCCP6_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIIPerCCP5_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVPerCCP3_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIPerCCP1_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVPerCCP2_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIPraticagem_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXITerminaldePassageiros_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXFerryboatBalsa_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXAcessoaoPerPesqueiro2_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIAcessoaoPerPesqueiro1_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVImvelemNavegantes_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVASSPI_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIComplexoNutico_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIICentroComercialPorturioCCP_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoPrincipaleExpanso_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIPolgonoAqutico_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIIIPerCCP6_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIIPerCCP5_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIPerCCP4Anexo16PerCCP4rea1139m_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVPerCCP3_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIPerCCP1_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVPerCCP2_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIPraticagem_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXITerminaldePassageiros_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXFerryboatBalsa_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXAcessoaoPerPesqueiro2_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIAcessoaoPerPesqueiro1_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIPeremFrenteAntigaInspetoriadoPorto_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVImvelemNavegantes_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVASSPI_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIComplexoNutico_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIICentroComercialPorturioCCP_17.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipaleExpanso_18.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoPrincipaleExpanso_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});