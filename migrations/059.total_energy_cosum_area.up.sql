-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_total_energy_consum_erea FLOAT;
COMMENT ON COLUMN buildings.sus_total_energy_consum_erea IS 'Sustainable total energy consumption/area ';


