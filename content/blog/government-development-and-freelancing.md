---
title: "What Government Development and Freelancing Taught Me About Building Software"
description: "How working on large government systems while taking on freelance projects shaped the way I approach software, clients, and problem solving."
date: "2026-08-13"
tags: ["freelancing", "government", "software-development", "career"]
published: true
---

For years my work has come from two very different places.

One is software inside the **Bureau of Immigration in the Philippines**. The other is freelance and project-based work. They work in different ways, and doing both has changed how I build software.

## Government: think about the whole system

Government applications do not get replaced every time something newer comes out. There are existing databases, older applications, network policies, security requirements, integrations, and approval processes that all have to keep working. A small change in one application can affect another one.

So I learned to look beyond the feature I was working on. Before making a change I ask what depends on this, will it affect transactions that are already running, how will it behave in production, can the current infrastructure handle it, what happens if it fails, and how will the support team troubleshoot it. That kind of environment made me more careful about architecture and about the parts of a system that have to keep running for a long time.

## Freelance: move faster

Freelance work has a different kind of pressure. The client does not care how clever the code is. They care whether it solves their problem. Budgets are smaller, timelines are shorter, requirements change more often, and usually one person handles everything from understanding the requirements to designing the database to explaining the finished system to the client.

That taught me to find the real problem before writing code. A client asks for a specific feature, but after talking through how they actually work, the better solution is often much simpler. Learning when not to over-engineer something has been as useful as learning how to build something complex.

One example was a company website I built for a project management and quantity surveying firm. At the start the client asked for a full content management system so they could log in and edit any part of the site themselves, including the project portfolio.

When we talked more about how they actually work, it did not match that request. They update the project list about two times a year, and nobody on their side wanted to manage a CMS. It would also mean a login to keep secure, more hosting cost, and more software to keep updated.

So I built the site as static pages. The project list is kept in a simple file, and when they have a change they send it to me and I update the site and deploy it again. It loads fast, there is very little that can break, and hosting is cheap. They were fine with it once they saw that an update only takes me a short time. If they start needing content changes every week, a CMS makes sense then. Right now it would just be one more thing to maintain.

## Communication became part of the job

Both environments changed how I explain things. Inside an organization I might be talking to developers, network administrators, management, procurement, or an outside vendor. In freelance work I explain the same decision directly to the client.

Each of them needs a different version. Instead of saying "we need asynchronous processing with retry logic", it is better to say "if the external service goes down for a while, the transaction will try again on its own instead of someone having to do it by hand". Being able to turn a technical decision into its practical effect is a real part of the job.

## The two feed each other

Government work taught me to be patient and to care about reliability. Freelance work taught me to move faster and adapt. One made me think hard about integration, security, infrastructure, and long-term support. The other pushed me to decide faster, understand the business need, control the scope, and deliver within real limits.

I bring each one into the other. On a freelance project, my experience keeping government systems running makes me think about logging, security, backups, and maintainability earlier than I used to. On a larger organization project, my freelance experience reminds me that the result still has to be simple enough for people to actually use.

## I stopped thinking only like a programmer

The biggest change is that I no longer see the job as just turning requirements into code. You also have to understand the problem behind the requirement. The useful question is often not "how do I build this" but "why do we need it in the first place", and the answer can change the whole solution.

There is still a lot I want to learn and build. But I am glad I got to see software from both sides. One taught me what reliability means when a lot of people depend on a system. The other taught me what simple really means when a client just needs their problem solved.
