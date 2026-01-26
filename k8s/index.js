import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (res, req) => {
  res.json({message: "Hello World container!",
			service: "hello Node",
			pod: process.env.POD_NAME || 'unknown',
			time: new Date().toISOString(),
		   });
});

app.get('/readyz', (res,req) => res.status(200).send("ready"));
app.get('/healthz', (res,req) => res.status(200).send("ok"));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
  
})
