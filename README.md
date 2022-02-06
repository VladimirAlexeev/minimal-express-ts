# minimal-express-ts
Express server with minimal configuration 

Minimal express server configuration:
  * express
  * eslint
  * nodemon
  * ts-node
  * typescript
  * body-partser

Run command
  > npm install
  > npm run start

Compile TypeScript code to valid JavaScript:
  > npm run build

Curl command for user delete from list:
  > curl -X POST http://localhost:9000/delete-user -H 'Content-Type: application/json' -d '{"id": 1}'
