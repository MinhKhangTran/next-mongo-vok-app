# A Simple Vok App using nextjs Api Routes

this is a metawork readme inspired from [Harry Wolff](https://www.youtube.com/watch?v=FN03r_jXPxI)

# From Users Perspective

User goes to the homepage:

- User sees a list of vocabularies
- to add one user can sign in or sign up
- once signed in the user can create a new vocabulary or edit an old one (the vocabulary must be from the user)
- User can go to his profile an see his created vocabularies

# Tech Stack behind

- Next js
- typescript
- axios
- nprogress
- moment/ react-moment
- ChakraUI
- React Context
- react-hook-forms
- MongoDB / mongoose
- NextAuth.js
- Vercel

# Milestones

1. Start a new Next js App using typescript✅
   - create tsconfig.json ✅
   - add baseUrl and no relative paths✅
   - create relevant pages✅
     - /
     - /create
     - /v/:slug
     - /profile
2. Add MongoDB Atlas (backendish)
   - initialize a new Mongo DB✅
   - connect it to the App✅
   - create a new Vok Schema with mongoose✅
   - create API Route to read and create voks
     - /api/voks
   - create API Route to read vok by ID, delete and update vok
     - /api/voks/[id]
3. Style the pages using ChakraUI
   - initialize ChakraUI Provider
   - Create a Layout with Navigation to navigate through pages
   - Mobile Responsive
4. Create Components from the frontend to call this functions
   - fetch voks on the homepage (getStaticProps)
   - use react-hook-forms for creating new voks
   - create Icons to delete and update
   - use react-hook-forms for updating an old vok => get voks data in form
5. Add support for user auth with nextAuth
   - create a auth0 app as auth system
   - redirect unlogged user to homepage
   - if logged in show user profile page with made voks
6. Comments?
7. Like?
8. Lauch on Vercel
   - deploy DB
   - deploy app
   - add env variables to vercel
