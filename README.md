# habit-hub-intern
A fullstack To-do and habit tracking app built with Next.JS

# What is it?

It is a fullstack app that lets users add tasks and keep their habits in check.

# Live 

- A demo instance of the app can be found on https://habithub.linuxoyun.com
- linuxoyun.com is a personal project I have started while I was developing this application, and I decided deploying habithub on a domain I own would be cool :) 

# Features
- OAuth (Github only - check notes for more information)
- Credentails Auth (hashed)
- Adding Tasks
- Completing Tasks
- Deleting Tasks
- Calendar View
- Multiple Languages (Turkish and English)

# Tech Stack
- Next.JS
- TailwindCSS
- DrizzleORM
- Sqlite3
- Formik
- Lucia Auth
- i18n

# Notes
  - I have deviated a little bit from the specs provided and as a result, to be able to deploy this application on the cloud, you will need root and ssh access. That means deploying this app on "serverless" providers such as vercel is not possible. See deployment steps for more information
  - OAuth is only available for Github as I do not have a facebook account and did not feel comfortable implementing a Google OAuth with my personal account.

# Environment Variables

You need to provide a couple of environment variables for the app to function correctly.
- `AUTH_SECRET=XXXXXXXXXXXX` (Secret to generate pw hash)
- `STATE=DEV`
- `GITHUB_CLIENT_ID=XXXXXXXXXXX` (Get it from Github OAuth)
- `GITHUB_CLIENT_SECRET=XXXXXXXXXXXXX` (Get it from Github OAuth)
- `NEXT_PUBLIC_ORIGIN=http://localhost:3000` (you can change it as you please)

 # Deployment 

- First clone the repo to your machine
- Install dependencies using `npm install`
- Populate the .env file with required information (See Enivorment Variables section)
- Build the application using `npm run build`
- Install sqlite3 on your system, see: https://www.sqlite.org/download.html
- Create a sqlite database using `sqlite3 .open test.db` then exit with CTRL+C
- Generate the necessary migrations using `npm run generate`
- Make the migrations using `npm run migrate`
- The application is ready to be used.
- Since we are using sqlit3 locally, as far as my knowledge goes, it is not possible to deploy this on a "serverless" service such as vercel.

# Shortcomings
- The app as it stands is not responsive, it only works well on mobile devices. (Returns an under maintenance response now)
- Some features are missing due to lack of design. (I did not invent any flows on my own sadly)
- The form and input validations are done only on the client-side, there is little server-side validation apart from `auth_session` token validations.

 


  
