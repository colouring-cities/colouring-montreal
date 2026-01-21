-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_total_pv_self_suffi FLOAT;
COMMENT ON COLUMN buildings.sus_total_pv_self_suffi IS 'Sustainable total pv self sufficiancy';


