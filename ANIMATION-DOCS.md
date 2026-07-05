# Animation Docs

This file explains the floating and background animations used in the portfolio home section.

## Main Location

The main animation code is in:

```text
Css-file/Home.css
```

The JavaScript particle animation is in:

```text
Java/script.js
```

The animation is shown inside this HTML section:

```html
<section id="home">
  <canvas id="homeParticles" aria-hidden="true"></canvas>
  ...
</section>
```

## 1. Floating Background Dots

Selector:

```css
#home::before
```

This creates the small floating dots in the background using `radial-gradient`.

Important code:

```css
#home::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
        radial-gradient(circle at 10% 20%, rgba(255,255,255,0.30) 1px, transparent 1.2px),
        radial-gradient(circle at 18% 72%, rgba(255,255,255,0.26) 1.2px, transparent 1.4px);
    animation: particle-float 14s linear infinite;
}
```

The animation name is:

```css
particle-float
```

Animation code:

```css
@keyframes particle-float {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(-28px, 20px);
    }
    100% {
        transform: translate(0, 0);
    }
}
```

What it does:

- At `0%`, the dots start in their normal position.
- At `50%`, the dots move left by `28px` and down by `20px`.
- At `100%`, the dots return to the starting position.

To make it faster:

```css
animation: particle-float 8s linear infinite;
```

To make it slower:

```css
animation: particle-float 20s linear infinite;
```

To make it move farther:

```css
transform: translate(-50px, 35px);
```

## 2. Moving Grid Background

Selector:

```css
#home::after
```

This creates the thin moving grid lines behind the home content.

Important code:

```css
#home::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
        linear-gradient(120deg, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(60deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 120px 120px, 120px 120px;
    opacity: 0.25;
    animation: grid-shift 30s linear infinite;
}
```

The animation name is:

```css
grid-shift
```

Animation code:

```css
@keyframes grid-shift {
    0% {
        background-position: 0 0, 0 0;
    }
    100% {
        background-position: 80px 80px, -80px -80px;
    }
}
```

What it does:

- Moves the background grid positions over time.
- The first grid moves to `80px 80px`.
- The second grid moves to `-80px -80px`.

To make the grid more visible:

```css
opacity: 0.45;
```

To make the grid less visible:

```css
opacity: 0.12;
```

## 3. Canvas Particle Animation

HTML element:

```html
<canvas id="homeParticles" aria-hidden="true"></canvas>
```

CSS selector:

```css
#homeParticles
```

CSS code:

```css
#homeParticles {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
}
```

JavaScript location:

```text
Java/script.js
```

Important JavaScript:

```js
const particleCanvas = document.getElementById('homeParticles');
```

This canvas draws moving white dots and lines using JavaScript.

Particle count:

```js
const particleCount = 30;
```

To add more particles:

```js
const particleCount = 60;
```

To reduce particles:

```js
const particleCount = 15;
```

Particle speed:

```js
vx: (Math.random() - 0.5) * 0.4,
vy: (Math.random() - 0.5) * 0.4,
```

To make particles move faster:

```js
vx: (Math.random() - 0.5) * 0.8,
vy: (Math.random() - 0.5) * 0.8,
```

To make particles move slower:

```js
vx: (Math.random() - 0.5) * 0.2,
vy: (Math.random() - 0.5) * 0.2,
```

## 4. Floating Profile Image

Selector:

```css
.flex
```

This is your profile image:

```html
<img class="flex" src="./Assets/Me.jpg" />
```

Important CSS:

```css
.flex {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    object-fit: cover;
    animation: float-glow 3s ease-in-out infinite;
}
```

The animation name is:

```css
float-glow
```

Animation code:

```css
@keyframes float-glow {
    0% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-8px) scale(1.01);
    }
    100% {
        transform: translateY(0px) scale(1);
    }
}
```

What it does:

- Starts at normal position.
- Moves up by `8px`.
- Gets slightly bigger with `scale(1.01)`.
- Returns to normal.

To make the image float higher:

```css
transform: translateY(-16px) scale(1.01);
```

To make it slower:

```css
animation: float-glow 5s ease-in-out infinite;
```

## 5. Rotating Circle Around Image

Selector:

```css
.col2::before
```

This creates the dotted circle around your profile picture.

Important CSS:

```css
.col2::before {
    content: "";
    position: absolute;
    inset: -16px;
    border: 5px dotted rgba(255,255,255,0.95);
    border-radius: 50%;
    animation: orbit-ring 10s linear infinite;
}
```

The animation name is:

```css
orbit-ring
```

Animation code:

```css
@keyframes orbit-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

What it does:

- Rotates the dotted ring around the image.

To make it spin faster:

```css
animation: orbit-ring 5s linear infinite;
```

To make it spin slower:

```css
animation: orbit-ring 20s linear infinite;
```

## Quick Reference

| Effect | Selector | Animation Name | File |
| --- | --- | --- | --- |
| Floating background dots | `#home::before` | `particle-float` | `Css-file/Home.css` |
| Moving grid background | `#home::after` | `grid-shift` | `Css-file/Home.css` |
| JavaScript particles | `#homeParticles` | `animate()` | `Java/script.js` |
| Floating profile image | `.flex` | `float-glow` | `Css-file/Home.css` |
| Rotating dotted ring | `.col2::before` | `orbit-ring` | `Css-file/Home.css` |

## Simple Way To Disable Animations

Add this to the bottom of `Css-file/Home.css`:

```css
#home::before,
#home::after,
.flex,
.col2::before {
    animation: none;
}
```

To disable only the JavaScript particles, remove or comment out this line in `index.html`:

```html
<canvas id="homeParticles" aria-hidden="true"></canvas>
```
