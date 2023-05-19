This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Starting your own project

### Setting up Dev

1. Make sure that Noje.js is installed on your system: https://nodejs.org/en
2. Once Node is installed open up a local terminal and install the create-next-app library with this command ```npx install create-next-app```
3. then go to whatever directory you would like to start your project in and type ```create-next-app 'yourSampleAppName'```
4. Now open the terminal to your new app and use the `npm run dev`, `npm run build` and `npm run start` commands.
5. Congrats! you now have a boilerplate app setup.

### Now to setup your Fork

Fork this repo into your own Github, and then once all of your changes have been made make sure you commit and push often so you don't lose your work. Then we will merge your work into your own branch on the main repository to keep track of how our training is.

### How to Develop
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learning
Now that you have a boilerplate app setup from the above instructions or you successfully cloned the repository, you can now start learning about Next.

First off, let's start with the Basics. Next is built on top of React and removes alot of the manual routing that has to be done with libraries in vanilla React (at any point in this feel free to read up on Next's documentation https://nextjs.org/docs) 

### Routing
With no explicit Routing, Next will automatically route any pages placed in the pages directory other than the document and the app files. The `index.tsx` file will be the default for whenever that directory is rendered. So the `index.tsx` file in the root of pages is rendered when you go to `localhost:3000/`

To then add pages into another directory create a folder and then place the pages underneath that for example the `test.tsx` file is both under the root directory and under the `test` directory. This will lead to `localhost:3000/test` and `localhost:3000/test/test` being the same page.

### API 
Now we can talk about the built in API system. Next has built in endpoints that render under the `/pages/api/` directory that server to get and post data easily. 

This is a feature to remove the distance between the front end and the back end in software. Feel free to play around with the included `example.ts` and create your own similar endpoint to learn how these work.

### Exercises
With all of that infomration and new tools on your belt lets build something! 

Using all of your knowledge and good programming skills, create a simple application that counts the number of animals. One type of animal for each page and it can refresh when the page refreshes. 

This example should help you build something that updates state in Next dynamically and it should be fairly straight forward to implement, but reach out if you have any questions.

After this make a simple reciept displayer. Pull data from an endpoint that will act as the last receipt in the system aka an endpoint in the api structure.

Once you have made both of these, let's make a combination of the two where you make a counter that posts to an api that stores the value and pressing a counter up or down not only updates the count on the page, but also updates it on the API. (Will add more direction for this if needed)

## Tutorials

Please look at these for some core concepts if any of this is not making sense:

https://fullstackopen.com/en/

https://www.theodinproject.com/

Also reach out to Zac Poorman (zacpoorman@gmail.com) if you are still having any problems.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

