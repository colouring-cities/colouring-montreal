-- Rollback migration: remove sus_total_energy_consum from buildings table

ALTER TABLE buildings
DROP COLUMN IF EXISTS sus_geo_heat_open_loop;
ALTER TABLE buildings
DROP COLUMN IF EXISTS sus_geo_share_open_loop;

