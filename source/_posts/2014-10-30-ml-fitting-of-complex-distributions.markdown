---
layout: post
title: "ML fitting of complex distributions"
date: 2014-10-30 15:52:23 +0000
comments: true
categories: notes
---

This post gives me the chance to show off something I've just added support for: LaTeX equations using MathJax. Beautiful!

Let's imagine that I have some training data, $\{\x\_1,..,\x\_N\}$, and a non-negative function, $f(\x;\params)$, parameterized by $\params$, that I want to use as a probability distribution to fit to the data. The probability distribution is therefore given by

$$
p(\x;\params) = \frac{f(\x;\params)}{\int f(\x;\params)\d\x}.
$$

A common thing to do is to maximize the likelihood (ML learning, not to be confused with machine learning) of the data, w.r.t. $\params$, i.e.

$$
\params^* = \argmax\_\params \left(\int f(\x;\params)\d\x\right)^{-N}\prod\_{i=1}^N f(\x\_i;\params).
$$

Whilst $f(\x;\params)$ is computable (since we defined it), the integral $\int f(\x;\params) \d \x$ may not not be. For example, this is the case with complex models such as those defined by many deep networks. This creates a problem in ML fitting of the distribution.

<!-- more -->

There are several ways of overcoming this problem, which I'm not going to list (though I invite people to name methods in the comments), but I will mention one: **Contrastive Divergence**, introduced by Geoffrey Hinton in 2002 in his paper *["Training products of experts by minimizing contrastive divergence"](http://www.mitpressjournals.org/doi/abs/10.1162/089976602760128018)*. It describes a way of computing a gradient of the training data likelihood w.r.t. model parameters, without computing the normalized likelihood itself, by perturbing the training data in the direction of the current model using [MCMC](http://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo) sampling.

I read and implemented this approach during my DPhil in 2005, but I thought the original paper on the subject was rather heavy going. So, because I'm the kind of guy who likes to share knowledge, and to do so in an accessible way, I gave a couple of introductory seminars on the subject in Oxford.

Around the same time, January 2006, I also published some easy-to-follow [notes on contrastive divergence](https://sites.google.com/site/oliverwoodford/notes/NotesOnCD.pdf) online. Since then, people seem to have found them useful. They've been referenced in several other course notes, seminar slides and blogs. I'll even quote one: *"For me, this paper is the best; precise, intuitive and make you hungry to know more!"*, [Kittipat Kampa](http://kittipatkampa.wordpress.com/2010/03/23/contrastive-divergence-for-parameter-estimation-in-dscrfs/). So if you want to fit a non-integrable probability distribution to data, and are considering using contrastive divergence, give my notes a read.
