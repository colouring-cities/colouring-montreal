import geopandas as gpd

# ---- INPUT / OUTPUT PATHS ----
input_geojson = "fsa.geojson"
output_geojson = "fsa_4326.geojson"

# ---- LOAD GEOJSON ----
gdf = gpd.read_file(input_geojson)

print("Original CRS:", gdf.crs)

# ---- SET CRS IF MISSING (IMPORTANT) ----
# If your data was created in Web Mercator (meters), uncomment this:
# gdf = gdf.set_crs(epsg=3857)

# If your data is from Statistics Canada (example: NAD83 / Statistics Canada Lambert):
# gdf = gdf.set_crs(epsg=3347)

# ---- CONVERT TO EPSG:4326 (lon/lat) ----
gdf_4326 = gdf.to_crs(epsg=4326)

print("Converted CRS:", gdf_4326.crs)

# ---- SAVE RESULT ----
gdf_4326.to_file(output_geojson, driver="GeoJSON")

print("Conversion completed successfully!")