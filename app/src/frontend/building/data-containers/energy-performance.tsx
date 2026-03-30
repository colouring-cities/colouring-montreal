import React from 'react';
import { commonSourceTypes, dataFields } from '../../config/data-fields-config';
import SelectDataEntry from '../data-components/select-data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import Verification from '../data-components/verification';
import { LogicalDataEntry } from '../data-components/logical-data-entry/logical-data-entry';
import { DataEntryGroup } from '../data-components/data-entry-group';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import withCopyEdit from '../data-container';
import { CategoryViewProps } from './category-view-props';
import DataEntry from '../data-components/data-entry';
import InfoBox from '../../components/info-box';

const EnergyCategoryOptions = ["A", "B", "C", "D", "E", "F", "G"];
const BreeamRatingOptions = [
    'Outstanding',
    'Excellent',
    'Very good',
    'Good',
    'Pass',
    'Unclassified'
];

/**
* Energy performance & systems view/edit section
*/
const EnergyPerformanceView: React.FunctionComponent<CategoryViewProps> = (props) => {
    const queryParameters = new URLSearchParams(window.location.search);
    const subcat = queryParameters.get("sc");

    const currentYear = new Date().getFullYear();

    return (
        <form>
            <DataEntryGroup name="Energy Consumption" collapsed={subcat==null || subcat!="1"}>
                <DataEntryGroup name="Total Energy Consumption" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_total_energy_consum.title}
                        slug="sus_total_energy_consum"
                        tooltip={dataFields.sus_total_energy_consum.tooltip}
                        value={props.building.sus_total_energy_consum}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_total_energy_consum"
                        allow_verify={props.user !== undefined && props.building.sus_total_energy_consum !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_total_energy_consum")}
                        user_verified_as={props.user_verified.sus_total_energy_consum}
                        verified_count={props.building.verified.sus_total_energy_consum}
                    />
                
                </DataEntryGroup>
                <DataEntryGroup name="Total Energy Cunsumption/area" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_total_energy_consum_area.title}
                        slug="sus_total_energy_consum_area"
                        tooltip={dataFields.sus_total_energy_consum_area.tooltip}
                        value={props.building.sus_total_energy_consum_area}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_total_energy_consum_area"
                        allow_verify={props.user !== undefined && props.building.sus_total_energy_consum_area !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_total_energy_consum_area")}
                        user_verified_as={props.user_verified.sus_total_energy_consum_area}
                        verified_count={props.building.verified.sus_total_energy_consum_area}
                    />
                
                </DataEntryGroup>
            </DataEntryGroup>   
            <DataEntryGroup name="PV" collapsed={subcat==null || subcat!="1"}>   
            <DataEntryGroup name="Total PV Production" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_total_pv_production.title}
                        slug="sus_total_pv_production"
                        tooltip={dataFields.sus_total_pv_production.tooltip}
                        value={props.building.sus_total_pv_production}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_total_pv_production"
                        allow_verify={props.user !== undefined && props.building.sus_total_pv_production !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_total_pv_production")}
                        user_verified_as={props.user_verified.sus_total_pv_production}
                        verified_count={props.building.verified.sus_total_pv_production}
                    />
                
                </DataEntryGroup>
                <DataEntryGroup name="Total PV  Self Sufficiancy" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_total_pv_self_suffi.title}
                        slug="sus_total_pv_self_suffi"
                        tooltip={dataFields.sus_total_pv_self_suffi.tooltip}
                        value={props.building.sus_total_pv_self_suffi}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_total_pv_self_suffi"
                        allow_verify={props.user !== undefined && props.building.sus_total_pv_self_suffi !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_total_pv_self_suffi")}
                        user_verified_as={props.user_verified.sus_total_pv_self_suffi}
                        verified_count={props.building.verified.sus_total_pv_self_suffi}
                    />
                
                </DataEntryGroup>
            </DataEntryGroup>

            <DataEntryGroup name="open loop heat production" collapsed={subcat==null || subcat!="1"}>   
            <DataEntryGroup name="Total potential open loop" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_geo_heat_open_loop.title}
                        slug="sus_geo_heat_open_loop"
                        tooltip={dataFields.sus_geo_heat_open_loop.tooltip}
                        value={props.building.sus_geo_heat_open_loop}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_geo_heat_open_loop"
                        allow_verify={props.user !== undefined && props.building.sus_geo_heat_open_loop !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_geo_heat_open_loop")}
                        user_verified_as={props.user_verified.sus_geo_heat_open_loop}
                        verified_count={props.building.verified.sus_geo_heat_open_loop}
                    />
                
                </DataEntryGroup>
                <DataEntryGroup name="Total share open loop" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_geo_share_open_loop.title}
                        slug="sus_geo_share_open_loop"
                        tooltip={dataFields.sus_geo_share_open_loop.tooltip}
                        value={props.building.sus_geo_share_open_loop}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_geo_share_open_loop"
                        allow_verify={props.user !== undefined && props.building.sus_geo_share_open_loop !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_geo_share_open_loop")}
                        user_verified_as={props.user_verified.sus_geo_share_open_loop}
                        verified_count={props.building.verified.sus_geo_share_open_loop}
                    />
                
                </DataEntryGroup>
            </DataEntryGroup>
            
            
            <DataEntryGroup name="close loop heat production" collapsed={subcat==null || subcat!="1"}>   
            <DataEntryGroup name="Total potential close loop" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_geo_heat_close_loop.title}
                        slug="sus_geo_heat_close_loop"
                        tooltip={dataFields.sus_geo_heat_close_loop.tooltip}
                        value={props.building.sus_geo_heat_close_loop}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_geo_heat_close_loop"
                        allow_verify={props.user !== undefined && props.building.sus_geo_heat_close_loop !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_geo_heat_close_loop")}
                        user_verified_as={props.user_verified.sus_geo_heat_close_loop}
                        verified_count={props.building.verified.sus_geo_heat_close_loop}
                    />
                
                </DataEntryGroup>
                <DataEntryGroup name="Total share close loop" collapsed={subcat==null || subcat!="1"}>
                   <NumericDataEntry
                        title={dataFields.sus_geo_share_close_loop.title}
                        slug="sus_geo_share_close_loop"
                        tooltip={dataFields.sus_geo_share_close_loop.tooltip}
                        value={props.building.sus_geo_share_close_loop}
                        copy={props.copy}
                        mode={props.mode}
                        onChange={props.onChange}
                        step={0.1}
                        min={0}
                    />
                    <Verification
                        slug="sus_geo_share_close_loop"
                        allow_verify={props.user !== undefined && props.building.sus_geo_share_close_loop !== null && !props.edited}
                        onVerify={props.onVerify}
                        user_verified={props.user_verified.hasOwnProperty("sus_geo_share_close_loop")}
                        user_verified_as={props.user_verified.sus_geo_share_close_loop}
                        verified_count={props.building.verified.sus_geo_share_close_loop}
                    />
                
                </DataEntryGroup>
            </DataEntryGroup>
            

        </form>
    );
};
const EnergyPerformanceContainer = withCopyEdit(EnergyPerformanceView);

export default EnergyPerformanceContainer;
