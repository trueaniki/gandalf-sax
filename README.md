# Simple node.js web application for serving static files

## How to run server:
``node main.js``
## How to run server on different port:
By default server would work on 80 port. You can change it by passing PORT env when starting server:
``PORT=3000 node main.js``
## How to serve files:
Delete all files in static directory and put yours
## How to prank:
Start application on a device that has access to the local network. Then open http://{yours-ip-in-local-network}:{port-80-by-default}/index.html (for example http://192.168.100.7/index.html) on other devices in local network. Press button 'About' and then press 'Go' at the same time on all devices
