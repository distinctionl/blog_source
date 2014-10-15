---
layout: post
title: "The future of technical computing"
date: 2014-10-15 13:02:54 +0100
comments: true
categories: programming
---

I've been thinking a bit in recent months about whether I should move to using a new programming langauge. Traditionally I've done prototyping of algorithms in [MATLAB](http://www.mathworks.com/products/matlab/), and the development of real-time or production code in [C++](http://en.wikipedia.org/wiki/C%2B%2B), using [Visual Studio](http://www.visualstudio.com/). However, for various reasons, which I'll discuss, I've considered moving to [Julia](http://julialang.org/). Here are my current thoughts on the subject. 

<!-- more -->

### MATLAB
I like MATLAB for several reasons:

 1. The high-level syntax makes programming complex algorithms quite simple, using relatively few lines of code.
 2. It's interpreted, so there is no compilation step before running. You just type and execute. This makes the development cycle very fast.
 3. Debugging is very easy. Firstly, when errors occur, MATLAB prints out useful comments about where the error occurred and what caused the error. Secondly, the MATLAB IDE allows you pause to execution on any line, as well as when an error occurs, then inspect the variables as well as run commands on the command line.
 4. There's a very good profiler, so you can write your code straightfowardly first, then optimize it later using the profiler to work out which areas to speed up.
 5. The graphics API is very high-level, so it's easy to render some useful plots in 2D or 3D in just a few lines of code.
 6. There's great documentation and a good online community to answer questions and provide lots of user-written functions.
 7. It's cross platform. You can run the same code on Windows, Linux or Mac, as long as you have MATLAB installed.

So why would I need anything else? Well, for one thing, MATLAB execution times can be quite slow. Even after I've fully optimized some code (and I consider myself an expert at that), some algorithms can be sped up by as much as 10x with a C++ implementation. Secondly, the graphics can be quite slow, and are also limited by the API. Lastly, it's expensive; most languages are free and open, but MATLAB is a proprietary language and IDE, and licenses cost a lot, especially when all the required toolboxes have been added. Now that I'm freelance I've had to ask myself whether I want to fork out for the MATLAB license in order to keep working in it, or whether now might be the time to switch to a new language.

### Other options
There is a large and ever growing number of programming languages to choose from. As I said, I've tended to use C++ alongside MATLAB. It's slower to develop and debug in, but being *closer to the metal* (i.e. what you write resembles more closely what the CPU actually does), it's possible to write faster programs, as well as have better control over concurrency. When I need to really parallelize something I write [CUDA](https://developer.nvidia.com/cuda-zone) code for Nvidia GPUs. But I wouldn't choose this to prototype in, because the development time is too slow.

So what other high-level, interpreted languages like MATLAB are available, which overcome the cost and speed issues, whilst not sacrificing too much on the other points. "[Python](http://www.python.org/)", I hear many of you say. Well, it's certainly free, but it isn't fast, plus the debugging and profiling tools aren't nearly as good. Personally, I'd rather pay for MATLAB right now.

### Julia
How about the new kid on the block in technical computing, Julia? Using an LLVM compiler, it claims speeds similar to C, which is fantastic; it would forgo the need to reimplement anything for production code. It has built in support for concurrency for large scale computing, and, with a small but dedicated user community, new functionality is being developed all the time. It is a very exciting proposition.

Having said that, as things stand, from my experience, the debugging capabilites aren't quite there yet, which makes development a little slow at the moment. Also, because it's a langauge and not an IDE, the graphics aren't built in. There are several graphics packages, but they mostly do 2D plots only, and there is no unified interface. But, like I say, there's a strong community working on these things, so I expect good things in the future.

However, I've also just attended a European MATLAB Advisory Board meeting, where I got a sneak preview of the future of MATLAB. I can't share what I saw, but there were some reasons to believe that MATLAB will continue to become an even better product. As for the price, MATLAB is now available with a variety of non-commercial licenses, and I've been told that startups who can't afford the commercial licenses should contact sales, so perhaps their previous inflexibility on pricing is on the wane.

One thing is for sure. The future of technical computing is exciting. As for me, I haven't yet decided what I'll use.
