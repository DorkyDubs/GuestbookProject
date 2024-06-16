# GuestbookProject

repo
server
render links
GuestbookProject
🎯 Create a page containing a form to leave a message and a list of all the messages that have been left.

🎯 Style the form and the messages so they're easy to read on multiple kinds of device.

🎯 Create an API POST route to accept the text from your message input form

🎯 Create a database to store the messages, and create a seed file to create the table

🎯 Create an API GET route to retrieve all the messages from the database

🎯 Fetch the messages from your API in the browser and display them on the page.

Stretch Goals
🏹 Add a delete button to each message, that sends a request to the server to delete the message

🏹 Add a like button to each message, that sends a separate request to the server to increment the likes on the message

Please also provide an assignment reflection in your project README.md file.
(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.
Maybe the page still looks nice in the browser.

🎯 Were there any requirements or goals that you were not quite able to achieve?
I couldn't get the page to communicate with the server. There were several issues but after working through some of the eventually it came to a point where the top of the index page appears to be causing an issue due to not being in json.The only resources I was able to find referring to this particular issue suggested a fix which was already in place, namely insuring the server was using the express json module, which it was.
It got to the point where making further changes broke the system already in place to run it through local host, so I stopped.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
It was difficult to determine the cause of the error after the page being minified and working with an unfamiliar data path made it hard to single out specific points in the sequence.
(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

I spent some time thinking about how to add delete and like functions to the page but never quite figured it out. while never implemented I thought about using a switch to measure the length of the objects coming to the served through the post method to determine if it was data to be insert, updated or deleted. As it was never implemeneted I never discovered if this would be a viable method.

What went really well and what could have gone better?

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
