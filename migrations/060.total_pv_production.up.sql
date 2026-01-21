-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_total_pv_production FLOAT;
COMMENT ON COLUMN buildings.sus_total_pv_production IS 'Sustainable total pv production';


