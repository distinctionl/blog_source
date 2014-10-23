---
layout: post
title: "DeepMind patents: I"
date: 2014-09-02 14:12:01 +0100
comments: true
categories: [DeepMind, patents]
---
I'm sure many of you will have heard about [Google's £400m purchase](http://www.bbc.co.uk/news/technology-25908379) of [DeepMind](http://deepmind.com), a startup founded to solve Artificial Intelligence (AI). They focussed on developing algorithms that would allow machines to learn how to play computer games. It's this generality which makes their approach AI rather than Machine Learning (ML). And apparently the computer gets pretty good, eventually beating human players.

What intrigues me is how this technology works. Of course much of it is a closely guarded secret, but prior to being bought, DeepMind did file three patents, so I thought it would be interesting to read these. In this blog post, I'll be taking a look at the first of them, [US20140185959](http://www.google.com/patents/US20140185959).

<!-- more -->

To save some of you some time, it's probably worth saying up front that this particular patent doesn't contain any AI or ML technology. Instead, it presents two ideas, to be used in conjunction, for the purpose of searching for images using example images, a.k.a. *content-based image retrieval*.

The first idea is what I'll call the *composite feature query*. Basically, it's an image query that consists of user-selected image features from one or more images. For example, if you wanted to find a particular sofa you could use the shape and colour features of a sofa in one image with the texture of some curtains in another image as your query.

The second idea is what I'll call *iterated query refinement*. You start with one or more features from one image, do a search, then use one or more extra features from the original image or the search results to augment the query, and repeat the search. This process can be repeated until you find an image you're happy with.

That's it! It's not related to learning to play computer games. But then, that could be just the toy problem that DeepMind use to develop their algorithms, and perhaps making online shopping easier is the real target application (or at least one of them). Nor does it explain how image features might be described and matched within the search process - the tricky ML part. Perhaps the answer to that will crop up in other patents. But I am reminded of something my friend Tom at [Metail](http://metail.com/) once told me, which was that if you're a business that's looking to get bought, then you need an IP portfolio that's broad, covering all areas of your business, not just the core technology.


