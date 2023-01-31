---
author: el
datetime: 2022-12-26T12∶17∶22
layout: ../../../layouts/DocDetails.astro
title: Introduction and basic setup
slug: Intro and basic setup
mom: TS Game Engine
featured: false
draft: false
ogImage: ""
---

## Project Setup

- create new project: ASP.NET web application (.NET framework), requires ASP.NET MVC
- add index.html, app.ts
- might have to install typescript engine from nuget depedning on your local environment
- change ts compile settings:![[VS Typescript compile settings (single output).png]]
- namespaces: containers/classes/global constants
- class scope ts:
  - public: anything outside this engine class can access it >
  - protected: allow access from this class and any class inherit this class >
  - private: only method inside this class can modify it
  - default scope (same js): public
- var for global variables and let for local variables as let makes sure the variable is scoped to that particular function
- private variables: begin with an underscore

## Basic Game loop

### yes

- tell the browser that we want a loop to continously run;
- +the function to be looped, needs to be event based loop
- declare the type of a variable or a method with ": + type"
- good practise to declare both your scope and return types
- requestAnimationFrame():
  - runs about 60 times per second
  - looks for a callback: what to call when it gets the next animation frame

## Scripts completed from this lesson

```typescript
namespace TSE {
  export class Engine {
    private _count: number = 0;

    public constructor() {
      console.log("is this the end?");
    }

    public start(): void {
      this.loop(); // call loop against this instance of the engine, once
    }

    private loop(): void {
      this._count++;
      document.title = this._count.toString();
      requestAnimationFrame(this.loop.bind(this)); // call engine.loop for this instance of engine.loop, will not be called for another instance if created
    }
  }
}

window.onload = function () {
  let e = new TSE.Engine();
  e.start();
  document.body.innerHTML += "Byeeeee";
};
```

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>TypeScript Tutorial</title>
    <script type="text/javascript" src="main.js"></script>
</head>
<body>
    Heloooooo
</body>
</html>
```
