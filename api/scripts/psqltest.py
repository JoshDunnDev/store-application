#!/usr/bin/python3
import psycopg2
import time
import os
t_end = time.time() + 30
while (time.time() < t_end):
    try:
        db = psycopg2.connect("dbname='postgres' user='postgres' host='db'")
        print("OK!")
        os.system("python manage.py makemigrations")
        os.system("python manage.py migrate")
        #TODO : not safe, should fix later
        os.system("python manage.py loaddata data/*.json")
        os.system("python manage.py runserver 0.0.0.0:8000")
        break;
    except:
        # print("Trying again!")
        continue;
else:
    print("FAIL!")
    exit(1)