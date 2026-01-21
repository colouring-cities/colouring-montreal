-- Migration: add sus_total_energy_consum to buildings table


ALTER TABLE buildings
ADD COLUMN sus_total_energy_consum FLOAT;
COMMENT ON COLUMN buildings.sus_total_energy_consum IS 'Sustainable total energy consumption in kWh';


