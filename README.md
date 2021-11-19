# 11283group59

PROJECT: Aquatic Analyzer

DEVELOPERS:
 Pranay Raman
 Rachel Peterson
 Chidiogo Onoh
 Rakesh Lingechetty

PROJECT OVERVIEW:
Provide a map of bodies of water in florida in which users are able to freely scroll
and click on bodies of water to see the health of the water through different qualties
as well as see the health of the aquatic life. The user will be able to draw their own 
conclusions on the health of the water through these given characteristics.

COMPONENTS:
A basic angular fronted codebase has been utilized as well as a map component within 
the app which uses the leafet library. A mock json server allows for the lakeData json 
to communicate with the frontend with a GET request.

START UP:
To start clone this repository in vscode and open a split terminal and do the following:
Git clone: https://github.com/PranayRaman/11283group59.git
Install Node latest (https://nodejs.org/download/release/)
Use Homebrew for MacOS (https://brew.sh/)
brew install node
Split terminal
Command: npm install -g @angular/cli
Command: npm i
Command: npm i json-mock
Left terminal command: ng serve -o
Right terminal command: npm run server


CHALLENGES:
Implementing tile layers within the map component - the map uses an access token to connect
with Mapbox 


