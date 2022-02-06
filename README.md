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

GraphQL http://localhost:9000/api

UserList GraphQL [Query] example:
![image](https://user-images.githubusercontent.com/34220627/152700719-01093744-b6d1-4cf3-8033-a5cacfe40e99.png)

DeleteUser by id GraphQL [Mutation] example:

![image](https://user-images.githubusercontent.com/34220627/152700789-2d4d574d-a687-4013-9cca-eba0af771c54.png)

