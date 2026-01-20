import insert_sql_values
import psycopg2

# Database connection settings
DB_HOST = "localhost"        # e.g. "localhost" or a server address
DB_PORT = "5432"             # default PostgreSQL port
DB_NAME = "colouringcitiesdb" # replace with  DB name
DB_USER ="colouring_cities"   # replace with your username
DB_PASS = "123456"    # replace with your password


SQL_FILE = "/media/sf_Shared/buildings_with_correct_archetype_key.sql" # Path to your SQL script

def run_sql_file(filename):
    try:
        # Connect to PostgreSQL
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASS,
            sslmode='disable',
            connect_timeout=300
        )
        conn.autocommit = True  # so DROP/CREATE/INSERT work outside transactions
        cur = conn.cursor()

        print(f"Reading SQL file: {filename}")

        # Read SQL script from file
        with open(filename, "r", encoding="utf-8") as f:
            sql_script = f.read()

        print("Executing SQL script...")
        #cur.execute(sql_script)
              # 🔹CHANGED: split SQL file into smaller executable statements
        print("Executing SQL script in chunks...")
        statements = [s.strip() for s in sql_script.split(';') if s.strip()]  # 🔹CHANGED

        for i, statement in enumerate(statements, 1):  # 🔹CHANGED
            try:
                cur.execute(statement)
                if i % 100 == 0:  # show progress every 100 statements 🔹CHANGED
                    print(f"Executed {i} statements...")
            except Exception as e:
                print(f"❌ Error in statement {i}: {e}")  # 🔹CHANGED

        print("✅ SQL script executed successfully!")
        print("SQL script executed successfully!")

        cur.close()
        conn.close()

    except Exception as e:
        print(" Error:", e)

if __name__ == "__main__":
    run_sql_file(SQL_FILE)
