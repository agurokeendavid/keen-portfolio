---
title: "Production Changes Everything: Lessons From Maintaining Real-World Systems"
description: "What debugging production applications, integrations, databases, and infrastructure taught me about becoming a better software developer."
date: "2026-08-13"
tags: ["software-engineering", "production", "debugging", "devops"]
published: true
---

There is a big difference between learning to code and doing it as a job, and for me that difference is production.

When I was starting out, I measured progress by features. The form submits, the list loads, the tests pass, so the work is done. After a few years of maintaining systems that people actually use, I see it differently. Building the feature is usually the easy part. Keeping it running is the part that taught me the most.

## When it isn't your code

A lot of the production problems I remember were not bugs in the application.

A website goes down because the database hit its connection limit. A deployment fails because a library that was on my machine was never installed on the server. Sometimes a third-party API just stops sending notifications and nothing tells you. Sometimes an email provider accepts the request but a later step fails anyway. Or a payment goes through on the provider side while our own record still says pending, or a firewall change quietly blocks the app from a service it needs.

After enough of these, I stopped looking at the code first. I go through the whole path instead: user, application, server, database, network, external service. Then I figure out which part actually failed.

One time this happened with a third-party API we depend on. Fetching data from it got really slow, slow enough that requests were hanging. The first thing I checked was the connection from our application server to their API. That part was fine, no network issue on our side, and we had not changed the code that calls it.

So the problem was on their end. I checked our logs and our API monitoring tool to see how long each request was taking. One record fetch from that provider was taking almost 2 to 3 minutes, when it is normally under a second. There was nothing I could fix in our code for that, so I sent them the numbers and asked them to fix it on their side.

## Logs became my main tool

When everything is working, logging feels like extra work. When something breaks in production, it is often the only way to find out what happened.

Over time I got more careful about what the application actually records. A good log entry should tell you what operation was running, which transaction it was for, when it happened, which external service was called and what it returned, whether it was retried, and whether another process already handled the same transaction. That last one matters a lot with payments and external APIs, because the result can exist outside your own system.

## "Works on my machine" isn't enough

I have worked with different generations of .NET, from old ASP.NET apps to current ones, and deploying them to Windows Server and IIS taught me to pay attention to the environment itself. The .NET runtime version, database drivers, native libraries, IIS and application pool settings, environment variables, certificates, network access, firewall rules. Any of those can be different on the server.

A clean build on my machine does not tell me any of that. So now, when something works locally but fails after deployment, I check the differences between the environments before I assume the code is wrong.

## External services will fail eventually

Payments, email, APIs, analytics, CDN, authentication. Most apps depend on other platforms for a lot of this. What I learned is simple: do not design an important workflow assuming the external service will always respond correctly.

You need a plan for when it fails. Depending on the case, that means retries, background jobs, protection against duplicate requests, status checks, timeout handling, error logging, a way to reconcile records manually, and monitoring. The system becomes a lot more reliable once you treat failure as something that will happen, not something surprising.

## Fixing it is half the job

Early in my career, fixing the immediate problem felt like the end of the task. Now I try to ask one more question: how do we stop this from happening again next month?

Sometimes the answer is more monitoring. Sometimes it is a better query, a change to the deployment steps, or writing down a server dependency somewhere. Sometimes it is reworking part of the design. And sometimes it is just giving the support team enough information to catch it earlier next time.

For a while the most common support ticket on the eServices portal was "I already paid but my application still says pending." It kept happening because of how online payments work. The applicant pays through GCash, Maya, or Landbank, the payment goes through on the gateway side, but the confirmation never reaches our system. Usually they closed the browser or lost connection before getting redirected back. The payment was real, but our transaction stayed pending, so someone on the team had to check the gateway manually and fix the record by hand. This happened several times a week.

The fix was a Hangfire job that runs on a schedule and picks up every transaction still marked pending after a few minutes. For each one it calls the gateway's inquiry API, checks the real status, and updates our record if the payment already went through. I also added a check so a repeated confirmation for the same transaction is ignored instead of posting it twice. After that the pending payments cleared themselves and the manual checking mostly stopped.

## Production made me better

Maintaining real systems changed how I write software. I think about failure earlier, I validate more, I pay attention to logs, I plan for deployment sooner, and I assume any API can go down. I also try to leave code that the next developer can understand.

Building something new is satisfying. But keeping a real system running while people depend on it every day is a different skill, and it is the one I have learned the most from.
