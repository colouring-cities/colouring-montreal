''' Generate an SQL Script to insert Colouring Cities building footprints from GEOJSON Data '''

import json

INPUT_DIRECTORY = "./"
INPUT_FILENAME = "buildings_with_correct_archetype_key.geojson"

OUTPUT_FILENAME = "buildings_with_correct_archetype_key_category_function.sql"

OUTPUT = []

print(f"Saving to file: '{OUTPUT_FILENAME}' ... ", end='')

OUTPUT.append("DROP TABLE IF EXISTS new_geometries;\n")
OUTPUT.append("""CREATE TABLE IF NOT EXISTS new_geometries (
    source_id varchar(30),
    archetype_key  varchar(150),
    function_category varchar(150)

);\n""")

IDENTIFIER_COUNTER = 1

def file_location():
    ''' Docstring '''
    return INPUT_DIRECTORY

def file_location_name():
    ''' Docstring '''
    return INPUT_FILENAME

def location_code():
    ''' Docstring '''
    # things like "inspire+localmap_intersect5201"
    # lc - leicester
    # nc - Newcastle
    # lbx - area_around_loughborough
    #return "lbx"
    return "bos"

# end of configuration

def fake_toid_prefix():
    ''' Docstring '''
    return 'inspire+local_ntrsc_' + location_code()

def files_loaded():
    ''' Docstring '''
    return [
        file_location() + file_location_name()
    ]

def load_into_table(table, geojson_file):
    ''' Docstring '''
    global IDENTIFIER_COUNTER

    with open(geojson_file, 'r', encoding="utf8") as content_file:
        content = content_file.read()
        data = json.loads(content)    
        insert_prefix = "INSERT INTO " + table + "(source_id, archetype_key, function_category) VALUES"

        OUTPUT.append(insert_prefix)    #no new line!

        values = []

        for entry in data["features"]:
            geometry_type = entry["geometry"]["type"]

            if geometry_type == 'MultiPolygon':
                for ring in entry["geometry"]["coordinates"]:
                    for coord_list in ring:
                        for coord in coord_list:
                            lon = coord[0]
                            lat = coord[1]
                            # if lon > 180:
                            #     raise Exception("out of bounds coordinate")
                            # if lon < -180:
                            #     raise Exception("out of bounds coordinate")
                            # if lat > 90:
                            #     raise Exception("out of bounds coordinate")
                            # if lat <-90:
                            #     raise Exception("out of bounds coordinate")
            elif geometry_type == 'Polygon':
                for coord_list in entry["geometry"]["coordinates"]:
                    for coord in coord_list:
                        lon = coord[0]
                        lat = coord[1]
                        # if lon > 180:
                        #     raise Exception("out of bounds coordinate")
                        # if lon < -180:Invalid coordinate (2049)
                        #     raise Exception("out of bounds coordinate")
                        # if lat > 90:
                        #     raise Exception("out of bounds coordinate")
                        # if lat <-90:
                        #     raise Exception("out of bounds coordinate")
            #else:
                #print(entry["geometry"]["type"])
                #print(entry["geometry"])
                #print(entry)
                #raise Exception("Unexpected type")

            object_id = fake_toid_prefix() + str(IDENTIFIER_COUNTER)

            # if len(object_id) > 30:
            #     print(object_id)
            #     print(len(object_id))
            #     raise Exception("Too long")
            #if entry["properties"]["YR_BUILT"] is not None: 

            key=str(entry['properties']['archetype_key']).lower()
            if 'single family' in key:
                value='Single family'
            elif 'row house 'in key:
              value=  'Row house'
            elif 'murb' in key: 
              value='Small murb'
            elif 'mid rise' in key:
                value='Mid rise'
            elif 'duplex' in key:
                value='Duplex-trplex'
            else:
                 value='none'                       
            #values.append("('\""  + str(entry['properties']["cerc_id"]) + "\"', " + str(float(entry['properties']['height'])) + ", " + str(float(entry['properties']['build_area'])) +  ", " + str(int(entry['properties']['floor_num'])) +  ")")

            values.append("('\""  + str(entry['properties']["cerc_id"]) + "\"',  '" + value +  "', '" + str(entry['properties']['function_category']) + "' )")

               
            #values.append("('" + json.dumps(str(entry["properties"]["cerc_id"]) ) + "', ST_setSRID(ST_GeomFromGeoJSON('" + json.dumps(entry["contr_year"]) + "'), 3857))")

            IDENTIFIER_COUNTER += 1
            grouping = 50_000

            if len(values) > grouping:
                OUTPUT.append(", ".join(values[0:grouping]) + ";\n")
                values = values[grouping:]
                OUTPUT.append(insert_prefix)    #no new line

        OUTPUT.append(", ".join(values) + ";\n")

for file in files_loaded():
    load_into_table("new_geometries", file)


OUTPUT.append(""" update buildings b
                 set current_landuse_group=ARRAY[g.function_category],
                     is_Domestic=g.archetype_key
                 from  new_geometries g
                 where b.ref_toid=g.source_id;\n""")

OUTPUT.append("DROP TABLE IF EXISTS new_geometries;\n")
OUTPUT.append("REINDEX TABLE geometries;\n")
OUTPUT.append("REINDEX TABLE buildings;\n")

with open(OUTPUT_FILENAME, 'w', newline='', encoding="utf8") as f:
    for row in OUTPUT:
        f.write(row)

print("Done!")
