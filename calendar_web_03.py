import tkinter as tk
from tkcalendar import Calendar
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure

# Load the data
def read_thref(file):
	df = pd.read_csv(file, sep=',', skiprows=1, na_values=['NaN', '-999.0'])
	df = df.drop([0,1])

	df = df.set_index(pd.DatetimeIndex(df['TIMESTAMP']))
	df.index.names = ['date']
	df = df.drop('TIMESTAMP', axis=1)
	df = df.astype(float)
	return df

# Function to update the selected dates
def update_selected_dates(date):
	df_selected = df[df.index.strftime('%Y-%m-%d') == date.strftime('%Y-%m-%d')]
	fig = fig_canvas[0]  # Get the figure
	ax = fig.get_axes()[0]  # Get the axis
	ax.clear()  # Clear the previous plot
	ax.plot(df_selected.index, df_selected['R1_T_Avg'].values)
	ax.set_title(f"Time Series Data for {date.strftime('%Y-%m-%d')}")
	ax.set_xlabel("Date")
	ax.set_ylabel("Value")
	fig_canvas[1].draw()  # Update the canvas

file_thref = "/home/fhertop/THref/data/20240527/THref_TH_1min_terraza.dat"
df = read_thref(file_thref)

# Create a Tkinter window
root = tk.Tk()
root.title("Time Series Data")

# Create a calendar widget
calendar = Calendar(root, selectmode='day', year=2024, month=5, day=25)
calendar.pack(fill='both', expand=True)

# Create a figure and canvas
fig = Figure(figsize=(10, 6))
ax = fig.add_subplot(111)
fig_canvas = [fig, FigureCanvasTkAgg(fig, master=root)]
fig_canvas[1].draw()
fig_canvas[1].get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=1)

# Set the calendar to update the figure when a date is selected
calendar.bind('<<CalendarSelected>>', lambda event: update_selected_dates(calendar.selection_get()))

# Run the Tkinter event loop
root.mainloop()
