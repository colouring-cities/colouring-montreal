import React, { Fragment } from 'react';

import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';
import SelectDataEntry from '../data-components/select-data-entry';
import Verification from '../data-components/verification';
import withCopyEdit from '../data-container';
import InfoBox from '../../components/info-box';

import { CategoryViewProps } from './category-view-props';
import { DataEntryGroup } from '../data-components/data-entry-group';
import { MultiDataEntry } from '../data-components/multi-data-entry/multi-data-entry';
import { LogicalDataEntry } from '../data-components/logical-data-entry/logical-data-entry';

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
* Sustainability view/edit section
*/
const SustainabilityView: React.FunctionComponent<CategoryViewProps> = (props) => {
    
    const currentYear = new Date().getFullYear();

    return (
        <Fragment>
            <DataEntryGroup name="Environmental quality rating">
                <DataEntry
                    title="Official environmental quality rating"
                    slug=""
                    value=""
                    mode='view'
                />
            </DataEntryGroup>
            <DataEntryGroup name="Energy rating">
                <SelectDataEntry
                    title={dataFields.sust_breeam_rating.title}
                    slug="sust_breeam_rating"
                    value={props.building.sust_breeam_rating}
                    tooltip={dataFields.sust_breeam_rating.tooltip}
                    options={BreeamRatingOptions}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="sust_breeam_rating"
                    allow_verify={props.user !== undefined && props.building.sust_breeam_rating !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("sust_breeam_rating")}
                    user_verified_as={props.user_verified.sust_breeam_rating}
                    verified_count={props.building.verified.sust_breeam_rating}
                    />
                <SelectDataEntry
                    title={dataFields.sust_dec.title}
                    slug="sust_dec"
                    value={props.building.sust_dec}
                    tooltip={dataFields.sust_dec.tooltip}
                    options={EnergyCategoryOptions}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
                <Verification
                    slug="sust_dec"
                    allow_verify={props.user !== undefined && props.building.sust_dec !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("sust_dec")}
                    user_verified_as={props.user_verified.sust_dec}
                    verified_count={props.building.verified.sust_dec}
                    />
                <SelectDataEntry
                    title={dataFields.sust_aggregate_estimate_epc.title}
                    slug="sust_aggregate_estimate_epc"
                    value={props.building.sust_aggregate_estimate_epc}
                    tooltip={dataFields.sust_aggregate_estimate_epc.tooltip}
                    options={EnergyCategoryOptions}
                    disabled={true}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                />
            </DataEntryGroup>
            <DataEntryGroup name="Retrofit history">
                <NumericDataEntry
                    slug='age_retrofit_date'
                    title={dataFields.age_retrofit_date.title}
                    value={props.building.age_retrofit_date}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    step={1}
                    min={1}
                    max={currentYear}
                    tooltip={dataFields.extension_year.tooltip}
                    />
                <Verification
                    slug="age_retrofit_date"
                    allow_verify={props.user !== undefined && props.building.age_retrofit_date !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("age_retrofit_date")}
                    user_verified_as={props.user_verified.age_retrofit_date}
                    verified_count={props.building.verified.age_retrofit_date}
                    />
                <SelectDataEntry
                    title={dataFields.age_retrofit_date_source_type.title}
                    slug="age_retrofit_date_source_type"
                    value={props.building.age_retrofit_date_source_type}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.age_retrofit_date_source_type.tooltip}
                    options={dataFields.age_retrofit_date_source_type.items}
                    placeholder={dataFields.age_retrofit_date_source_type.example}
                    />
                {(props.building.age_retrofit_date_source_type == dataFields.age_retrofit_date_source_type.items[0] ||
                    props.building.age_retrofit_date_source_type == dataFields.age_retrofit_date_source_type.items[1] ||
                    props.building.age_retrofit_date_source_type == null) ? <></> :
                    <>
                        <MultiDataEntry
                            title={dataFields.age_retrofit_date_source_links.title}
                            slug="age_retrofit_date_source_links"
                            value={props.building.age_retrofit_date_source_links}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.age_retrofit_date_source_links.tooltip}
                            placeholder="https://..."
                            editableEntries={true}
                            isUrl={true}
                        />
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Solar panels">
                <LogicalDataEntry
                    title={dataFields.energy_solar.title}
                    slug="energy_solar"
                    value={props.building.energy_solar}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.energy_solar.tooltip}
                />
                <Verification
                    slug="energy_solar"
                    allow_verify={props.user !== undefined && props.building.energy_solar !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("energy_solar")}
                    user_verified_as={props.user_verified.energy_solar}
                    verified_count={props.building.verified.energy_solar}
                    />
                {props.building.energy_solar == null ? <></> :
                    <>
                        <SelectDataEntry
                            title={dataFields.energy_solar_source_type.title}
                            slug="energy_solar_source_type"
                            value={props.building.energy_solar_source_type}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.energy_solar_source_type.tooltip}
                            options={dataFields.energy_solar_source_type.items}
                            placeholder={dataFields.energy_solar_source_type.example}
                        />
                        {(props.building.energy_solar_source_type == dataFields.energy_solar_source_type.items[0] ||
                            props.building.energy_solar_source_type == dataFields.energy_solar_source_type.items[1] ||
                            props.building.energy_solar_source_type == null) ? <></> :
                            <>
                                <MultiDataEntry
                                    title={dataFields.energy_solar_source_links.title}
                                    slug="energy_solar_source_links"
                                    value={props.building.energy_solar_source_links}
                                    mode={props.mode}
                                    copy={props.copy}
                                    onChange={props.onChange}
                                    tooltip={dataFields.energy_solar_source_links.tooltip}
                                    placeholder="https://..."
                                    editableEntries={true}
                                    isUrl={true}
                                />
                            </>
                        }
                    </>
                }
            </DataEntryGroup>
            <DataEntryGroup name="Green walls/roof">
            <LogicalDataEntry
                    title={dataFields.energy_green_roof.title}
                    slug="energy_green_roof"
                    value={props.building.energy_green_roof}
                    mode={props.mode}
                    copy={props.copy}
                    onChange={props.onChange}
                    tooltip={dataFields.energy_green_roof.tooltip}
                />
                <Verification
                    slug="energy_green_roof"
                    allow_verify={props.user !== undefined && props.building.energy_green_roof !== null && !props.edited}
                    onVerify={props.onVerify}
                    user_verified={props.user_verified.hasOwnProperty("energy_green_roof")}
                    user_verified_as={props.user_verified.energy_green_roof}
                    verified_count={props.building.verified.energy_green_roof}
                    />
                {props.building.energy_green_roof == null ? <></> :
                    <>
                        <SelectDataEntry
                            title={dataFields.energy_green_roof_source_type.title}
                            slug="energy_green_roof_source_type"
                            value={props.building.energy_green_roof_source_type}
                            mode={props.mode}
                            copy={props.copy}
                            onChange={props.onChange}
                            tooltip={dataFields.energy_green_roof_source_type.tooltip}
                            options={dataFields.energy_green_roof_source_type.items}
                            placeholder={dataFields.energy_green_roof_source_type.example}
                        />
                        {(props.building.energy_green_roof_source_type == dataFields.energy_green_roof_source_type.items[0] ||
                            props.building.energy_green_roof_source_type == dataFields.energy_green_roof_source_type.items[1] ||
                            props.building.energy_green_roof_source_type == null) ? <></> :
                            <>
                                <MultiDataEntry
                                    title={dataFields.energy_green_roof_source_links.title}
                                    slug="energy_green_roof_source_links"
                                    value={props.building.energy_green_roof_source_links}
                                    mode={props.mode}
                                    copy={props.copy}
                                    onChange={props.onChange}
                                    tooltip={dataFields.energy_green_roof_source_links.tooltip}
                                    placeholder="https://..."
                                    editableEntries={true}
                                    isUrl={true}
                                />
                            </>
                        }
                    </>
                }
            </DataEntryGroup>
        </Fragment>
    );
    };
const SustainabilityContainer = withCopyEdit(SustainabilityView);

export default SustainabilityContainer;
