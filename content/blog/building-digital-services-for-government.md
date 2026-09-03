---
title: "Building Digital Services for Government: What I Learned Working in Immigration"
description: "Lessons from more than five years of building, maintaining, and improving digital services inside the Philippine Bureau of Immigration."
date: "2026-08-13"
tags: ["software-development", "government", "dotnet", "career"]
published: true
---

Building a system is only part of the job. In government work it is often the smaller part.

For more than five years I have worked on software for the **Bureau of Immigration in the Philippines**. That included new applications, older systems that still had to keep running, integrations with other services, production problems, and the work of moving transactions that used to be done at a counter to online.

It is different from building a normal website or a small business app. A system that a government agency runs on has to deal with security review, the infrastructure that is already there, procurement rules, applications that were written many years ago, and the people who need the service that same day.

## Online immigration services

A lot of my time went into the online services. These are the transactions where an applicant submits their information, pays, gets a notification, and finishes part of the process without going to an office.

My work covered most parts of it. ASP.NET and .NET on the web side, Oracle on the database side, payment gateway and email integrations, background processing, deployment on IIS, and the troubleshooting that comes after it is live. Some of it used current .NET and some of it was older code that still needed support.

That taught me something that took time to accept. In real work you are not always using the newest technology. Sometimes you build something new. More often you have to understand a system that was written years ago and find the safest way to change it without breaking what is already running.

One change I was nervous about was on an older transaction module that had been running for years. Applicants use it every day. I had to change how it saved a transaction so it would work with a newer payment flow, but the same code was also used by transactions that were already in progress.

What I was afraid of was breaking a transaction that someone already paid for. Fixing those by hand in production takes time and it is easy to make it worse. So I did it carefully. I copied recent data from production into a test database and ran the old code and the new code on the same records to check that the results matched. I did not delete the old code, I left it there so we could go back to it fast if something was wrong. I deployed it late at night when there is almost no traffic, and I watched the logs and the transaction records for a while before I said it was fine.

## Payments are more than an API call

Payment integration sounds like four steps. Send the transaction, let the applicant pay, get the result, update the record.

In production there is a lot more to handle. The payment goes through but the callback never reaches you. The user closes the browser before coming back. Two notifications arrive for the same payment. For a few minutes the provider and your database do not agree on the status.

Working on those cases is how I actually learned what idempotency, transaction validation, retries, and reconciliation mean, instead of just reading about them.

One payment issue took me a while to figure out. Sometimes one payment created two records in our system. The applicant only paid once and was only charged once, but our side made two entries, and a few times it made two official receipts for the same payment. Support saw the duplicate receipts and asked me to check.

I looked at the logs and saw that the payment gateway was sending us the confirmation more than once for the same transaction. I think it was a retry on their side when our response was slow. Our handler just processed whatever came in, so a second confirmation meant a second record. What I did is I made the handler check the gateway reference number first. If we already processed that reference, it just replies okay and does nothing else. After that the duplicate records stopped.

## Supporting systems after they ship

The bigger change was supporting things that were already in production.

During development it is easy to think that if the feature works, the task is done. Production is not like that. A system can pass every test and still behave differently once real users, network restrictions, database load, and external APIs are involved.

I have worked on problems across application servers, Oracle, IIS deployments, WordPress infrastructure, third-party APIs, email services, payment notifications, and firewall rules. Now I think about those things while designing. What happens if this API is down. How will we know that something failed. Can the transaction be retried safely. Is there enough logging to check what happened. What happens if the same request comes in twice.

## Not always writing code

Government work also took me out of the codebase sometimes. I have been in discussions about infrastructure, security, CDN and email platforms, disaster recovery, and the technical requirements for procurement.

Sometimes the job is to explain a requirement in simpler terms, review a proposed design, point out what is missing, or check whether a vendor's solution can work with what we already have. That made me better at talking about technical things with people who do not write code.

## What it taught me

A government system is not judged only by how clean the code is. It has to be reliable, easy enough to understand and maintain, secure, and practical for the team that runs it.

The best solution on paper is not always the best one for the situation. Often the better choice is the one that works with the existing systems, can be supported by the current team, fits inside the infrastructure limits, and can keep running for years.

I would not have run into most of these problems if I only built personal projects. That experience still affects how I approach every system I work on.
