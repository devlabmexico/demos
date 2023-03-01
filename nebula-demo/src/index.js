import * as React from 'react';
import DeckGL from '@deck.gl/react';
import * as Layers from '@nebula.gl/layers';
import * as Modes from '@nebula.gl/edit-modes';
import * as ReactDOM from 'react-dom/client';

import StaticMap from 'react-map-gl';

const Nebula = {
    Layers,
    Modes,
    DeckGL,
}


export {React, ReactDOM, StaticMap, Nebula}