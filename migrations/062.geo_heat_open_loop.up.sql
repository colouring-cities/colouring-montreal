-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_geo_heat_open_loop FLOAT;
ALTER TABLE buildings
ADD COLUMN sus_geo_share_open_loop FLOAT;
COMMENT ON COLUMN buildings.sus_geo_heat_open_loop IS 'Total geothermal open loop production';
COMMENT ON COLUMN buildings.sus_geo_share_open_loop IS 'Total geothermal open loop share';



