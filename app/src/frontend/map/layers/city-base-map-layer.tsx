import * as React from 'react';
import { TileLayer } from 'react-leaflet';

import { MapTheme } from '../../config/map-config';
import {CCConfig} from "../../../cc-config";
let config: CCConfig = require('../../../cc-config.json')

/**
 * Base raster layer for the map.
 * @param theme map theme
 */
export function CityBaseMapLayer({ theme }: { theme: MapTheme }) {

    // Note that OS APIs does not provide dark theme
    const layer = 'Light_3857';

    // In either theme case, we will use OS's light theme, but add our own filter
    const theme_class = theme === 'light' ? "light-theme" : "night-theme";
    const attribution = `Building attribute data is © Colouring Cities contributors. Maps contain OS data © Crown copyright: OS Maps baselayers and building outlines. <a href=/ordnance-survey-licence.html>OS licence</a>`;

    return <TileLayer
        url={config.cityBaseMapLayerAPI}
        attribution={attribution}
        maxNativeZoom={18}
        maxZoom={19}
        detectRetina={false}
        className={theme_class}
    />;
}

