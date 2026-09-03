---
title: "Starting a .NET Software Craftsmanship Repo"
description: "Why I started an open .NET software-craftsmanship repository, how the Clean Code phase is put together, and who it is for."
date: "2026-09-04"
tags: ["dotnet", "clean-code", "software-craftsmanship", "learning"]
published: true
---

I started a public repository called [.NET Software Craftsmanship](https://github.com/agurokeendavid/dotnet-software-craftsmanship). It is a structured way to work through software engineering ideas that I keep coming back to, written for developers who already ship C# for a living.

## Why I started it

Most "clean code" material is written for beginners. It uses toy examples like `Animal`, `Shape`, and `Foo`, and it treats every guideline as a rule you always follow. After a few years of writing C# for real systems, that is not the version I need.

What I wanted was the version that talks about tradeoffs. When an abstraction costs more than it saves. When small functions turn into noise. When a repository is just ceremony. So every lesson in the repo has a section I call the Senior Developer Lens that argues the other side and points out where applying the idea mechanically becomes overengineering.

The other reason is simple. Writing something down so another developer could read it forces me to actually understand it, not just recognize it.

## The order

The repo works through three areas, and the order matters.

First is Clean Code: how should I write an individual method or class? Then Clean Architecture: how should those pieces be organized into an application? Last is Refactoring: how do I move existing code toward a better design without a rewrite.

Clean Code goes first because most of the work is reading and editing methods. Architecture comes next, because once the small parts are readable the next problem is how they depend on each other. Refactoring is last, because it is the safe technique for moving a real system from where it is to where the first two say it should be.

## How a lesson is built

Phase one is Clean Code, as 35 short lessons, one per day. Each lesson has the same shape: the concept stated plainly, why it matters in production, a realistic .NET code smell, a before and after refactor with the reasoning, how it lands in ASP.NET Core, EF Core, Dapper, background services, and tests, the Senior Developer Lens, a short code review checklist, a scenario quiz, and a 5 to 10 minute challenge to try in a repo you already work on.

The examples are enterprise-shaped on purpose. Payments, registrations, approvals, document processing, background jobs, integrations, and the legacy code around all of it. One lesson takes an endpoint named `check` that returns an `int` where `3` secretly means "identity document not verified", and turns it into a `GetPaymentEligibility` endpoint that returns a named result the caller can switch on. The point is not fewer lines. It is that the names carry the meaning.

## What is done and what is not

The 35 Clean Code lessons are written. Clean Architecture and Refactoring are planned as separate phases of 30 to 40 lessons each, and I have not started them yet. There is also a pull-request review checklist that links each item back to the lesson behind it.

## Who it is for

Intermediate to senior .NET developers, people working on ASP.NET Core and Web APIs, and anyone maintaining legacy .NET systems. It assumes you already know C#, async, dependency injection, and testing basics. It does not re-explain syntax.

If you use it, read one lesson and do the short challenge in real code. Ten minutes of practice beats an hour of reading. And if you think a Senior Developer Lens recommendation is wrong for your situation, that is the right way to read it. These are heuristics, not laws.

The repo is on GitHub at [agurokeendavid/dotnet-software-craftsmanship](https://github.com/agurokeendavid/dotnet-software-craftsmanship). It is MIT licensed, and corrections or better .NET examples are welcome.
