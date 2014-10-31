---
layout: post
title: "Profiling performance"
date: 2014-10-31 15:11:52 +0000
comments: true
categories: tips
---
If you've ever had to speed up some code you wrote, then hopefully you'll know about code profiling. If not then you really need to find out about it! What profiling does is tell you where your program spent most of its computation time. Knowing this allows you to focus your code optimization where it really matters - on the slow bits!

But what about how *well* your code, or rather your algorithm, performs? If you want to improve your algorithms performance, and it consists of a set of distinct tasks, it's worth knowing which of those tasks you should spend your time improving in order to get a gain in performance. No point wasting your time developing a much better object detector if it's your object classifier that sucks! But in order to know which tasks to improve, we need to perform some kind of profiling on algorithm performance, instead of computation time. How?

Well that's where another great tip from [Andrew Ng](http://en.wikipedia.org/wiki/Andrew_Ng)'s [Machine Learning course](http://www.coursera.org/course/ml) can help you out: **ceiling analysis**. It's a way of profiling performance of algorithms. I'll let Andrew explain [how it works](https://class.coursera.org/ml-003/lecture/113).
