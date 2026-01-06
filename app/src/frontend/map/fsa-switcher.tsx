import React from 'react';

import './map-button.css';
import { useDisplayPreferences } from '../displayPreferences-context';

export const FsaSwitcher: React.FC<{}> = () => {
    const { fsa, fsaSwitch, darkLightTheme } = useDisplayPreferences();
    return (
    <form className={`map-button ${fsa}-state ${darkLightTheme}`} onSubmit={fsaSwitch}>
        <button className="btn btn-outline btn-outline-dark"
            type="submit">
            {(fsa === 'enabled')? 'fsa Zones on' : 'fsa Zones off'}
        </button>
    </form>
    );
}
