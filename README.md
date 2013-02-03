# hint.css
*A tooltip library in CSS*


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

## License
Copyright (c) 2013 Kushagra Gour  
Licensed under the MIT license.


