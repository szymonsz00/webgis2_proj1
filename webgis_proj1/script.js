let link1=document.getElementById("link1");
let link2=document.getElementById("link2");
let link3=document.getElementById("link3");
let mapa=document.getElementById("map");

let i=0;
let coords=[20.5,50.2];
link1.addEventListener("click",function(){
    coords=[22.52,51.552];
    console.log(i);
    if(i===1){
        mapa.lastChild.remove();
        mapa.lastChild.remove();
    map();}
    if(i===0){
        i=1;
        map();
    }
})

link2.addEventListener("click",function(){
    coords=[22.96,51.425];
    console.log(i);
    if(i===1){
        mapa.lastChild.remove();
        mapa.lastChild.remove();
    map();}
    if(i===0){
        i=1;
        map();
    }
})

link3.addEventListener("click",function(){
    coords=[23.03,51.383];
    console.log(i);
    if(i===1){
        mapa.lastChild.remove();
        mapa.lastChild.remove();
    map();}
    if(i===0){
        i=1;
        map();
    }
})

function map(){
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "dijit/form/Button",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/widgets/Measurement",
    "esri/widgets/Search"
],(Map,MapView,GraphicsLayer,Graphic,Button,BasemapGallery,Expand,LayerList,Legend,Search,Measurement)=>{
///////////////////////////////////////////////////////
    let point1 = {
        type: "point",
        longitude: 22.517,
        latitude: 51.554
    };
    let point2 = {
        type: "point",
        longitude: 22.96,
        latitude: 51.427
    };
    let point3 = {
        type: "point",
        longitude: 23.03,
        latitude: 51.385
    };
    let markerSymbol = {
        type: "simple-marker",
        style: "square",
        color: "blue",
        size: "8px",
    };
    let attr1={
        country:"Polska",
        code:"Firlej"
    };
    let attr2={
        country:"Polska",
        code:"Krasne"
    };
    let attr3={
        country:"Polska",
        code:"Piaseczno"
    };
    let pop={
        title:"Jezioro",
        content:"Jezioro{code}"
    };
    let graph1 = new Graphic({
        geometry: point1,
        symbol: markerSymbol,
        attributes:attr1,
        popupTemplate:pop
    });
    let graph2 = new Graphic({
        geometry: point2,
        symbol: markerSymbol,
        attributes:attr2,
        popupTemplate:pop
    });
    let graph3 = new Graphic({
        geometry: point3,
        symbol: markerSymbol,
        attributes:attr3,
        popupTemplate:pop
    });
    let gl=new GraphicsLayer({
        graphics:[graph1,graph2,graph3],
        title:"Jeziora"
    });
///////////////////////////////////////////////////////
    let map1=new Map({
        basemap:"topo-vector",
        layers:[gl]
    });
    let view=new MapView({
        map:map1,
        container:"map",
        center:coords,
        zoom:15
    });
////////////////////////////////////////////////
    let zoomIn=new Button({
        onClick:()=>{
            view.zoom=view.zoom+1;
        }
    },"zoomIn");
    let zoomOut=new Button({
        onClick:()=>{
            view.zoom=view.zoom-1;
        }
    },"zoomOut");
///////////////////////////////////////////////////
    let bmW=new BasemapGallery({
        view:view
    });
    let layerList = new LayerList({
        view: view
    });
    view.ui.add(layerList, {
        position: "top-left"
    });
    let legend = new Legend({
        view: view,
        LayerInfos:[{layer:gl,
            title:"Legenda"}]
    });
      view.ui.add(legend, "bottom-right");
      let measurement = new Measurement({
        view: view,
        activeTool: "distance", 
      });
      
    view.ui.add(measurement,{
        position:"top-right",
    });
      
    let searchWidget = new Search({
        view: view
    });
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });  
    let layerListExpand = new Expand({
        expandIconClass: "esri-icon-layer-list",
        view: view,
        content: bmW
    });
    view.ui.add(layerListExpand,{
        position:"top-right",
        index: 2
    });
});
}
