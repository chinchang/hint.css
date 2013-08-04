# Hint.css [v1.3.0]
*A tooltip library in CSS for your lovely websites*

`hint.css` is written as a pure CSS resource using which you can create cool tooltips for your web app. It does not rely on JavaScript and rather uses **data-* attribute**, **pseudo elements**, **content property** and **CSS3 transitions** to create the tooltips. Also it uses **BEM** naming convention particularly for the modifiers.

[Read more about it](http://kushagragour.in/blog/2013/02/years-first-side-project-hint/).

###Try it out:
http://kushagragour.in/lab/hint/

## Get Started

Get the library using one of the following ways:

1. **Github**

 - [unminified] : https://raw.github.com/chinchang/hint.css/master/hint.css
 - [minified] : https://raw.github.com/chinchang/hint.css/master/hint.min.css

2. **Bower**

 ```
 bower install hint.css
 ```

3. **CDN**

 [http://www.jsdelivr.com/#!hint.css](http://www.jsdelivr.com/#!hint.css)

Now include the library in the *HEAD* of your page:

```html
<link rel="stylesheet" href="hint.css"></link>
```
or

```html
<link rel="stylesheet" href="hint.min.css"></link>
```

Any element on your page which needs to have a tooltip has to be given at least one of the position classes: `hint--top`, `hint--bottom`, `hint--left`, `hint--right` to position the tooltip.

```html
Hello Sir, <span class="hint--bottom">hover me.</span>
```

The tooltip text needs to be given using the `data-hint` attribute on that element.

```html
Hello Sir, <span class="hint--bottom" data-hint="Thank you!">hover me.</span>
```

[ **Note**: The `hint` class is no more required and is deprecated. Tooltip is shown on elements which have the `data-hint` attribute instead.]

Use it with other available modifiers in various combinations. Available modifiers:
- `hint--error`
- `hint--info`
- `hint--warning`
- `hint--success`
- `hint--always`
- `hint--rounded`
- `hint--bounce`

Check out some examples at http://kushagragour.in/lab/hint/

## Who's Using This?
- [CSS3 Playground](http://playground.webflow.com/)
- [Inkpen](http://inkpen.in/)
- [BitCast](https://www.bitcast.io/)

Are you using **hint.css** in your awesome project too? Let us know on the [mailing list](mailto:hintcss@googlegroups.com).

## Browser Support
**hint.css** works on all latest browsers, though the transition effect is supported only on IE10+, Chrome 26+ and FF4+ at present.

- Chrome - basic + transition effects
- Firefox - basic + transition effects
- Opera - basic
- Safari - basic
- IE 10+ - basic + transition effects
- IE 8 & 9 - basic


## Contributing
`hint.css` is developed in SASS and the source files can be found in the `src/` directory.

If you would like to create more types of tooltips/ fix bugs/ enhance the library etc. you are more than welcome to submit your pull requests.

[Read more on contributing](./CONTRIBUTING.md).

## Changelog
See the [Changelog](https://github.com/chinchang/hint.css/wiki/Changelog)

To catch all updates and discussion, join the mailing list: **hintcss@googlegroups.com**.

To subscribe: **hintcss+subscribe@googlegroups.com** or visit [here](https://groups.google.com/forum/?fromgroups=#!forum/hintcss).

## License
Copyright (c) 2013 Kushagra Gour
Licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Credits
This doesn't make use of a lot of BEM methodology but big thanks to [@csswizardry](https://twitter.com/csswizardry), [@necolas](https://twitter.com/necolas) for their awesome articles on BEM and to [@joshnh](https://twitter.com/_joshnh) through whose work I came to know about it :)
