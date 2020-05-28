#monitor browser resources

Gathers browser resource timing data of a system that has the snippet.

Guide to install the snippet:

This steps needs to be reproduced inside the folder "data-monitor"

1 - Inside the file "index.js" set your configurations at the last line of the file;

Configurations available:

- Endpoint: The adress of the server that the monitor should send the information. By default it sends data to a localhost server;
- Collection frequency: In wich frequency it should send the data gathered in that time window to the server.
- User Session Identification: The id generated for the user session. By default it has already an id generator, but you can plug another unique session generator there easily.

2 - Run the command "npm run build";

3 - Copy the script generated on the dist folder to a script tag inside the system that needs to be monitorated;
