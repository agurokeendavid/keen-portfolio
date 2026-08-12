---
title: "Building Digital Services for Government: What I Learned Working in Immigration"
description: "Lessons from more than five years of building, maintaining, and improving digital services inside the Philippine Bureau of Immigration."
date: "2026-08-13"
tags: ["software-development", "government", "dotnet", "career"]
published: true
---

Working as a software developer in government taught me that building a system is only one part of the job.

For more than five years, I have worked on software and web systems for the **Bureau of Immigration in the Philippines**. During that time, I became involved in developing new applications, maintaining legacy systems, integrating third-party services, troubleshooting production issues, and helping improve the way some government transactions are delivered online.

It is a different environment from building a normal website or a small business application. A system used by a government agency needs to consider not only functionality, but also security, reliability, existing infrastructure, procurement requirements, legacy applications, and the people who depend on the service every day.

## Working on online immigration services

One of the areas I spent a significant amount of time working on was our online services.

These systems handle different types of immigration-related transactions where applicants can submit information, make payments, receive notifications, and complete parts of their transactions online instead of doing everything manually.

My work involved different parts of the application, including:

- ASP.NET and .NET web development
- Oracle database development
- Payment gateway integrations
- Email notification integrations
- API integrations
- Background processing
- Production deployment on IIS
- Troubleshooting production issues
- Improving existing workflows

Some projects were built using newer versions of .NET, while others were legacy applications that still needed to be supported.

That combination taught me an important lesson: **software development in the real world is rarely about always using the newest technology.**

Sometimes your job is to build something new. Other times your job is to understand a system written many years ago and find the safest way to improve it without disrupting existing operations.

## Integrating payments is more than calling an API

I also worked on integrations with different online payment channels.

At first, payment integration sounds straightforward:

1. Send the transaction to the payment provider.
2. Let the applicant pay.
3. Receive the result.
4. Update the transaction.

In production, there are many more situations to handle.

What happens if the payment succeeds but the callback does not reach your system?

What if the user closes the browser before returning to the application?

What if two notifications arrive for the same payment?

What if the payment provider and your database temporarily disagree about the transaction status?

Working on these scenarios helped me understand concepts such as **idempotency, transaction validation, background processing, logging, retries, and reconciliation** much better than simply reading about them.

## Supporting systems after deployment

One of the biggest changes in my mindset happened when I started supporting applications that were already in production.

During development, it is easy to think:

> The feature works, so the task is finished.

Production teaches you otherwise.

A system can work perfectly during testing but behave differently once real users, network restrictions, database load, external APIs, and infrastructure are involved.

I have worked on issues involving application servers, Oracle databases, IIS deployments, WordPress infrastructure, third-party APIs, email services, payment notifications, and firewall restrictions.

Because of that experience, I now think about questions such as:

- What happens when this API becomes unavailable?
- How will we know that something failed?
- Can the transaction safely be retried?
- Is there enough logging to investigate the problem?
- What happens if the same request is processed twice?
- How can we recover without manually modifying production data?

These questions have become part of how I design applications.

## Working with more than just code

Another thing government development taught me is that a developer cannot stay completely inside the codebase.

I have also been involved in technical discussions related to infrastructure, security, CDN services, email platforms, system integrations, disaster recovery, and technical requirements for procurement.

Sometimes my role is not to write code at all.

Instead, I may need to explain a technical requirement in simpler terms, review a proposed architecture, identify missing requirements, or help determine whether a vendor's solution can work with our existing systems.

That experience improved my ability to communicate technical topics to people who are not developers.

## What government development taught me

After several years of working on these systems, one lesson stands out:

**A successful government system is not measured only by how good the code looks.**

It also needs to be reliable, understandable, maintainable, secure, and practical for the organization using it.

The best technical solution on paper is not always the best solution for the environment.

Sometimes the better solution is the one that can integrate with existing systems, can be supported by the current team, works within infrastructure limitations, and can continue operating for years.

Working in immigration has exposed me to problems that I would never encounter by building personal projects alone.

And that experience continues to influence how I approach every system I build today.
