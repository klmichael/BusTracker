# Project Title: Boston Bus Tracker

## Description of Project: 
This project started with an assignment from Professor Abel Sanchez in my MIT XPro Bootcamp in week 9.  We were given several exercises related to maps, with a final challenge of animating the movement of a bus running along the given bus stops in between MIT and Harvard. 

After doing the assignment, I continued to work on the code and added the following features:
- The map loads all bus stops based on the MBTA's most recent data (instead of a hard coded array in the js file).
- The program receives the for all MBTA buses currently running. It then maps this data in a different color and scale than the stops on the map. All of this data refreshes, removing the previous bus markers and adding the new markers, every 30 seconds.
- Bus and stop icons have an associated pop up with the Bus's route number or the stop's name.

*Original Author:* Dr. Abel Sanchez  
*Additional Coding:* Kathryn Michael

## How to Run:

Download these three files and save them itogether in a directory:
- index.html
- style.css
- mapanimation.js

Open index.html in your browser. You should now be able to use the map.

## Roadmap of Future Improvements:

In the future, I would like to clarify the relatioship between the displayed stops and the animated buses for the map user.  I would also like to make the direction of the bus trip (outbound, inbound) obvious.

## License Information:

**MIT License**

*Copyright (c) 2021 Kathryn Michael*

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.