const EventEmitter = require("events");
const http = require("http");

//////////////////////  Observer Pattern  /////////////////////////

// const myEmitter = new EventEmitter();
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

//observer-1 for "newSale" event
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

//observer-2 for "newSale" event
myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

///Emitter with "newSale" event
//we can additional argument in the emitter
//that will be accessed as callback argument in the listener
myEmitter.emit("newSale", 9);

////////////////// Server  ////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
