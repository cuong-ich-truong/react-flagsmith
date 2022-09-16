# Sample Next.js with Feature Flag Management

## General
- [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Feature flag management using [Flagsmith](https://flagsmith.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, navigate to the book list page [http://localhost:3000/books/list](http://localhost:3000/books/list) to explore the simple feature flag implementation.

## What is Feature Flag ?

- A way to toggle selected functionalities on and off during runtime
- A feature flag management tool is a system helps manage these flags with much more functionalities such as A/T testing, analytics, system settings, ect.

## Why use Feature Flag ?

- De-risk/de-couple release and deployment
- Avoid long-live feature branch
- Other benefits depends on the vendors:
    - A/B testing
    - Targeted rollout
    - Feature experiment

## When to use Feature Flag ?

- A need for a fast functionality toggle system
- A need to ship the release "control" to the business
- Time to do some experiments

## What is the drawbacks ?

- Overhead: unorganized flags or removing archived flags will create chaos
- Cost: when something is both good and fast, it will be expensive
- Reliable: what happens when their APIs are not available

## How to make the most of out Feature Flag ?

- Experiment the experiments: got for a test drive before buying
- Set rules: on managing the flags and clean up old flags frequently
- Code defensively: don't trust anyone code, even your own

