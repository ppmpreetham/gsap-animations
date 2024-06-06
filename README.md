# GSAP Animations
Cool GSAP animations that I use

## Center Fall down
Makes the center element fall down first, then the rest of the elements fall down in a staggered manner

Works with a Stagger of elements


<video controls src="src\videos\center_fall_down.mp4" title="Title"></video>

### Code
```javascript
gsap.to(".stagger-box", {
    y:25,
    duration:1,
    stagger:0.5,
    ease:"bounce.out",
    stagger: {
      ease: "back.out",
      amount: 1,
      from: "center",
    }
});

```
## Center Float
Makes the center element float up first, then the rest of the elements float too.

Works with a Stagger of elements
Could be implemented when selection

<video controls src="src\videos\center_fall_down.mp4" title="Title"></video>

### Code
```javascript
gsap.to(".stagger-box", {
    y:-25,
    duration:1,
    stagger:0.5,
    ease:"back.out",
    repeat: -1,
    yoyo: true,
    stagger: {
      ease: "back.out",
      amount: 1,
      from: "center",
    }
})
```