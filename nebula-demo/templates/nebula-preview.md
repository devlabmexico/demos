<div id="root"></div>
{ longitude }
{ latitude }
{ features }
<script id="bundle" async src="https://41da-2806-2f0-7420-dbe3-7f57-ae7-579a-90df.ngrok.io/dist/index_bundle.js"></script>
        
<script>

    var script = document.querySelector('#bundle');
    script.addEventListener('load', function() {
    

    const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoiem9layIsImEiOiJjaWc0b2ZmaXozMTlzdXNtNXR4bzF3bWI3In0.Qiyq_HteQro9bmzovEa-3w";
    const initialViewState = {
        longitude: parseFloat(document.querySelector(".longitude").textContent),
        latitude: parseFloat(document.querySelector(".latitude").textContent),
        zoom: 12
    };

    function App() {
        const [features, setFeatures] = $.React.useState(JSON.parse(document.querySelector(".features").textContent.replaceAll("'", '"')));
        const [mode, setMode] = $.React.useState(() => $.Nebula.Modes.DrawPolygonMode);
        const [selectedFeatureIndexes] = $.React.useState([]);


        
        const layer = new $.Nebula.Layers.EditableGeoJsonLayer({
            data: features,
            mode,
            selectedFeatureIndexes,
            onEdit: ({ updatedData }) => {
                console.log(updatedData);
                setFeatures(updatedData);
            }
        });

        return $.React.createElement("div", null,
            $.React.createElement($.Nebula.DeckGL, {
                initialViewState: initialViewState,
                controller: {
                    doubleClickZoom: false
                },
                layers: [layer],
                getCursor: layer.getCursor.bind(layer)

            },
                $.React.createElement($.StaticMap, {
                    mapboxAccessToken: MAPBOX_ACCESS_TOKEN,
                    mapStyle:"mapbox://styles/mapbox/streets-v9"
                })
            ),
            $.React.createElement("div", {
                style: { position: "absolute", top: 0, right: 0, color: "white" }
            }, 
                $.React.createElement("button", {
                    onClick: () => setMode(() => $.Nebula.Modes.DrawLineStringMode),
                    style: { background: mode === $.Nebula.Modes.DrawLineStringMode ? "#3090e0" : null }
                }, "Line"),

                $.React.createElement("button", {
                    onClick: () => setMode(() => $.Nebula.Modes.DrawPolygonMode),
                    style: { background: mode === $.Nebula.Modes.DrawPolygonMode ? "#3090e0" : null }
                }, "Polygon")
            )
        )
    }

    var container = document.getElementById('root');
    var root = $.ReactDOM.createRoot(container);
    root.render($.React.createElement(App, null));

    });
</script>