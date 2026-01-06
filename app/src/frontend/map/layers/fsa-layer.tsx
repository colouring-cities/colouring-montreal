import { GeoJsonObject } from 'geojson';
import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet';
import { apiGet } from '../../apiHelpers';
import { useDisplayPreferences } from '../../displayPreferences-context';

export function FsaLayer() {
    const [boundaryGeojson, setBoundaryGeojson] = useState<GeoJsonObject>(null);
    const { fsa } = useDisplayPreferences();
    console.log("hh")
    useEffect(() => {
        apiGet('/geometries/fsa_4326.geojson')
            .then(data => setBoundaryGeojson(data as GeoJsonObject));
    }, []);

    if(fsa == "enabled") {
        console.log({boundaryGeojson})
        return boundaryGeojson &&
        <GeoJSON 
        attribution="hello"
        data={boundaryGeojson}
        style={{color: '#00ff00ff', fill: true, opacity: 0.6}}
    />;
    } else if (fsa == "disabled") {
        return <div></div>
    }
}
