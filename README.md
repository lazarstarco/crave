.env file in root
```
DATABASE_URL="mysql://root:root@localhost:3306/oopim"
NEXTAUTH_SECRET=12D16C923BA17672F89B18C1DB22A
NEXTAUTH_URL=http://localhost:3000
```
.env in root/server
```
DATABASE_URL="mysql://root:root@localhost:3306/oopim"
```
open your terminal of choice in the root folder of the project and write
```
npm install
```
navigate the terminal to the server folder and install dependencies
```
cd server
npm install
```
run the Prisma migration now. Make sure you are in the server folder
```
npm run prisma
```
to insert demo data you need to run
```
npm run insert
```
run the backend
```
node app.js
```
while your backend is running you need to open another terminal (don't stop the backend). In the second terminal, you need to make sure you are in your root project folder and run
```
npm run dev
```
