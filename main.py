import json
# import os
import datetime as dt
import eel


@eel.expose
def return_data():
	with open('data.json', 'r') as file:
		data = json.load(file)
	return data


@eel.expose
def add_data(task):
	date = dt.datetime.now().strftime('%d:%m:%y')

	data.append({"task": task, "date": date})
	with open('data.json', 'w') as file:
		json.dump(data, file, indent=2)

eel.init('web')
eel.start('index.html', size=(1100, 700))





