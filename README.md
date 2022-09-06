# JainX

# Running locally in development mode
To get started, just clone the repository and run npm install && npm run dev:

git clone https://github.com/bhasink/JainX.git

npm install

npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. npm install --no-optional) which will skip installing fsevents.

# Building and deploying in production
If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:

npm install

npm run build

npm start

You should run npm run build again any time you make changes to the site.

===============================

# Component folder
1. We are managing common header and footer
2. Desktop and mobile filter logic
3. Tooltip slider logic

# Pages folder
1. We have courses folder to manage the listing, institute and course detail page. 
   
   Course folder-> 
    
         1. index.js -> to manage listing page
         2. [institutes] folder ->
                1. index.js to manage institute logic
                2. [_id].js for course details
                
2. _app.js to initialize pages and global changes
3. _document.js to manage global scripts
4. .env file to manage base and API URL



