# hint.css
*A tooltip library in CSS*

`hint.css` is created as a pure CSS resource using which you can create cool tooltips for your web app. It does not rely on JavaScript and rather uses **data-* attribute**, **pseudo elements** and **content property** and **CSS3 transitions** to create the tooltips. Also it uses **BEM** naming convention particularly for the modifiers.

*Note*: CSS3 Transitions is currently available on Firefox only. On rest of the browsers, this degrades gracefull without any transition. Though the same will be [coming soon on webkit](https://bugs.webkit.org/show_bug.cgi?id=92591) also.

###Try it out:
http://kushagragour.in/lab/hint/

## Get Started
Download one of the 2 library version:

- [unminified] : https://raw.github.com/chinchang/hint.css/master/hint.css
- [minified] : https://raw.github.com/chinchang/hint.css/master/hint.min.css

And include it in the *HEAD* of your page:

```html
<link rel="stylesheet" href="hint.css"></link>
```
or

```html
<link rel="stylesheet" href="hint.min.css"></link>
```

Any element in your markup which needs to have a tooltip has to be given atleast 2 classes: <code>hint</code> & any one of `hint--top`, `hint--bottom`, `hint--left`, `hint--right` to position the tooltip.

```html
Hello Sir, <span class="hint  hint--bottom">hover me.</span>
```

The tooltip text needs to be given using the `data-hint` attribute on that element.

```html
Hello Sir, <span class="hint  hint--bottom" data-hint="Thank you!">hover me.</span>
```

Use it with other available modifiers in various combinations. Available modifiers:
- `hint--error`
- `hint--info`
- `hint--warning`
- `hint--success`
- `hint--always`


## Contributing
`hint.css` is developed in SASS and the source files can be found in the `src/` directory.

If you would like to create more types of tooltips/ fix bugs/ enhance the library etc. you are more than welcome to submit your pull requests.


## License
Copyright (c) 2013 Kushagra Gour  
Licensed under the MIT license.


