-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_geo_heat_close_loop FLOAT;
ALTER TABLE buildings
ADD COLUMN sus_geo_share_close_loop FLOAT;
COMMENT ON COLUMN buildings.sus_geo_heat_close_loop IS 'Total geothermal close loop production';
COMMENT ON COLUMN buildings.sus_geo_share_close_loop IS 'Total geothermal close loop share';



