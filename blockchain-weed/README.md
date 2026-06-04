./network.sh up createChannel -c mychannel -s couchdb
./network.sh deployCC -ccn agri -ccp ../chaincode/ -ccl typescript

npm start  - gateway application
http://localhost:5984/_utils