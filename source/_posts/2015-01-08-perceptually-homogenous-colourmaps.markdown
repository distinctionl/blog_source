---
layout: post
title: "Perceptually homogenous colourmaps"
date: 2015-01-08 11:51:19 +0000
comments: true
categories: 
---

A colourmap is a function which maps intensity values to RGB colours. They can be used to create [pseudocolour](http://en.wikipedia.org/wiki/False_color#Pseudocolor) images, often providing more contrast and allowing more details to be made out by the human eye. In fact, the study of human perception of colour is an extensive scietific field. But more on that later.

<!-- more -->

MATLAB has always had lots of colourful colourmaps, perhaps the most commonly used one being the default, *Jet*. A selection of the colourmaps are shown below.

![MATLAB colourmaps](https://farm8.staticflickr.com/7576/16232226021_8c8296e382_o_d.png)

I've also enjoyed creating my own colourmaps, to improve the visualization of data. In particular, I've liked creating colourmaps which linearly traverse the full gamut of luminance, but that also vary in chrominance as much as possible, in order to maximize the contrast in colours. I was especially pleased when my *hicontrast* colourmap, which I used to colour depthmaps in a [paper of mine](http://www.robots.ox.ac.uk/~ojw/2op/index.html), was adopted by a [stereo benchmark](http://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=stereo). Below are some of the colourmaps I've created in the past.

![My colourmaps](https://farm8.staticflickr.com/7505/16233272732_6c258823e7_o_d.png)

Coming back to the topic of human perception, a desirable property of a colourmap is that a given intensity difference looks about the same magnitude, regardless of where that difference occurs in the intensity spectrum, and for any value of intensity difference. Let's call this property **perceptual homogeneity**, because our perception of intensity differences should be the same (i.e. homogenous) over the whole spectrum.

In order to achieve perceptual homogeneity, a colourmap must have evenly spaced colours in a colourspace where Euclidean distance is equal to perceptual distance. Fortunately such colourspaces exist: CIE L\*a\*b colourspaces. Unfortunately, none of the colourmaps above actually achieve this. Creating such colourmaps has been something I've wanted to for some time, but I never quite got round to it. However, The MathWorks recently released a new colourmap, [*Parula*](http://blogs.mathworks.com/steve/2014/10/13/a-new-colormap-for-matlab-part-1-introduction/), which *is* perceptually homogenous, and it looks good.

This has spurred me on to create a few of my own, using optimization of the colourmap values in CIE 1976 L\*a\*b colourspace to achieve the perceptual homogeneity. As before, I've also made them use the full range of luminance. You can see Parula, and my new colourmaps, below.

![New colourmaps](https://farm8.staticflickr.com/7497/16048240007_2dfdd3736b_o_d.png)

I'm not entirely happy with them; I'd like them to be a bit brighter. However, achieving that, along with all the other constraints I had proved too much of a challenge. For now.

My six new, perceptually homogenous colourmaps, along with all my other colourmaps, including several more not shown here, are available for download as part of my [SC toolbox](http://www.mathworks.com/matlabcentral/fileexchange/16233) for MATLAB, along with many other colourmaps and visualization tools. If you want to port them to another language and make them publicly available in that language also, feel free to do so, but please keep my copyright notice in the file(s) containing the colourmap values.

