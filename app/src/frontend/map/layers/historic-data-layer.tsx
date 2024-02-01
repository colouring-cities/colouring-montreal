import * as React from 'react';
import { TileLayer } from 'react-leaflet';
import { LayerEnablementState } from '../../config/map-config';
import { BuildingBaseLayerAllZoom } from './building-base-layer-all-zoom';
import { useDisplayPreferences } from '../../displayPreferences-context';
import { BuildingDataLayer } from './building-data-layer';
import {CCConfig} from "../../../cc-config";
let config: CCConfig = require('../../../cc-config.json')

export function HistoricDataLayer({revisionId}: {revisionId: string}) {
    const { historicData } = useDisplayPreferences();
    if(historicData == "enabled") {
        return <>
                <TileLayer
                    url={config.historicDataLayerAPI}
                    attribution='&copy; CC BY 4.0 - Reproduced with the permission of the <a href="https://maps.nls.uk/">National Library of Scotland</a>'
                />
                <BuildingBaseLayerAllZoom theme="night_outlines" />
                <BuildingDataLayer tileset={'survival_status'} revisionId={revisionId} />
            </>
	} else {
        return null;
    }
}

