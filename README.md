This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) made by Truong Nghia.

## To run project locally

First you need to install all the packages by running
`npm install`
Then run
`npm run dev`
Log in with a github account or using credentials `webdev22` and password `greatfrontend123` shown in the input placeholder

## Setting up

I started by setting up all the needed packages that I'm familiar with and know that I will need such as [tailwind](https://tailwindcss.com/), [eslint](https://eslint.org/), [prettier](https://prettier.io/), [clsx](https://www.npmjs.com/package/clsx)

## Build Component from the designs

I noticed in the figma design there's a component section so I decided to start by making all of them individually before putting them into any layouts. This proved to have been a mistake since the designs in that section did not account for any responsiveness so I had to go back to fix a lot of trivial sizing styles

## Creat initial layout and mock api endpoints for the three pages

Using the component built previously, I scaffolded the layout for the pages using static data at first.
After that, utilizing [next api route](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) handler, I built a few endpoints for getting the data for the components. At first I wanted to fetch the initial data for the meal list and column list at built time so we would have a nice, seo-friendly page pre-rendered, but this was not possible using the Next route handler since it have not yet built the route. As a result, I ended up implementing a basic react custom hook to get the paginated data on the client side. Lastly, I added some animation with [auto-animate](https://auto-animate.formkit.com/) to make the page feels less static.

## Finish the charts and handling responsiveness

This is the first time I have worked with charts in a react based project so I did a little research into which library should be used. Initially, it was [chartjs](https://www.chartjs.org/) that dominated my search results and I assumed that it was the best for the use case. Howerver, upon further digging, I decided on using [recharts](https://recharts.org/en-US) for its simplicity of integration and beginner friendly documentation.
Once all the components had been correctly built, I started to work on some responsive designs.

## Implement Authentication

With [NextAuth](https://next-auth.js.org/) library, I quickly implemented authentication with OAuth for github or a custom credentials. There were not enough time for me to make a custom login page to match the theme of the site so I ended up using Next Auth prebuilt UI

## End to end compatibility

I always want to make sure my code runs smoothly in both development and production environment. This is why I utilize vercel platform to make sure of that, you can test this out at this [link](https://healthy-app-beta.vercel.app/)
