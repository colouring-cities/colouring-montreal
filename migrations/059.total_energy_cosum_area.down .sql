-- Rollback migration: remove sus_total_energy_consum from buildings table

ALTER TABLE buildings
DROP COLUMN IF EXISTS sus_total_energy_consum_area;
