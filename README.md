# Kitty Carousel

This is a small JavaScript project that utilizes the questionable technique of a never-ending carousel of pictures: in this case, four cat photos that loop in perpetuity. While debatable in terms of UX, the carousel served as a great learning experience while I was a student at [SPICED Academy](https://spiced.academy/program/full-stack-web-development/).

## Demo (click to try for yourself)

[![Kitty Carousel](kitty-carousel.gif)](https://thenightshadefamily.github.io/kitty-carousel/)

## Built with

HTML, CSS, JavaScript

## Features

-   Every two seconds, the currently displayed photo slides out of frame to the left and is replaced by the next photo in line, which slides in from the right
-   If the user wishes to override the order in which the photos are displayed or the two-second wait before the next switch of photos, (s)he can choose which photo to display by simply clicking the dot corresponding to it
-   To prevent the animation going awry, the dot-clicking feature does not work while images are in motion

## Goals of Project

-   Exercise in logic and using `setTimeout` and `clearTimeout`
-   Conditionally adding and removing CSS classes
-   Animating movement of images on- and off-screen using `transform: translateX()`
