# Hint.css [![npm version](https://badge.fury.io/js/hint.css.svg)](https://badge.fury.io/js/hint.css) ![downloads/month](https://img.shields.io/npm/dm/hint.css.svg) [![Join the chat at https://gitter.im/chinchang/hint.css](https://badges.gitter.im/chinchang/hint.css.svg)](https://gitter.im/chinchang/hint.css?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
*A tooltip library in CSS for your lovely websites*

[Demo](https://kushagragour.in/lab/hint/) • [Get started](#get-started) • [Who's using this?](#whos-using-this) • [Browser support](#browser-support) • [FAQs](#faqs) • [Contributing](#contributing) • [License](#license)

`hint.css` is written as a pure CSS resource using which you can create cool accessible tooltips for your web app. It does not rely on JavaScript but rather uses **aria-label**/**data-* attribute**, **pseudo elements**, **content property** and **CSS3 transitions** to create the tooltips. Also it uses **BEM** naming convention particularly for the modifiers.

## Get Started

Get the library using one of the following ways:

1. **GitHub**

 Full build
 - [unminified] : https://raw.github.com/chinchang/hint.css/master/hint.css
 - [minified] : https://raw.github.com/chinchang/hint.css/master/hint.min.css

 Base build *(Does not include color themes and fancy effects)*
 - [unminified] : https://raw.github.com/chinchang/hint.css/master/hint.base.css
 - [minified] : https://raw.github.com/chinchang/hint.css/master/hint.base.min.css

2. **Bower** : `bower install hint.css`

3. **npm**: `npm install --save hint.css`

4. **CDN**: [http://www.jsdelivr.com/#!hint.css](http://www.jsdelivr.com/#!hint.css) or [https://cdnjs.com/libraries/hint.css](https://cdnjs.com/libraries/hint.css)

Now include the library in the ``HEAD`` tag of your page:

```html
<link rel="stylesheet" href="hint.css"></link>
```
or

```html
<link rel="stylesheet" href="hint.min.css"></link>
```

Now, all you need to do is give your element any position class and tooltip text using the `aria-label` attribute.
Note, if you don't want to use `aria-label` attribute, you can also specify the tooltip text using the `data-hint` attribute, but its recommended to use `aria-label` in support of accessibility. [Read more about aria-label](https://webaccessibility.withgoogle.com/unit?unit=6&lesson=10).


```html
Hello Sir, <span class="hint--bottom" aria-label="Thank you!">hover me.</span>
```

Use it with other available modifiers in various combinations. Available modifiers:
- *Colors* - `hint--error`, `hint--info`, `hint--warning`, `hint--success`
- *Sizes* - `hint--small`, `hint--medium`, `hint--large`
- `hint--always`
- `hint--rounded`
- `hint--no-animate`
- `hint--bounce`

## Upgrading from v1.x

If you are already using v1.x, you may need to tweak certain position classes because of the way tooltips are positioned in v2.

## Changing the prefix for class names

Don't like BEM naming (`hint--`) or want to use your own prefix for the class names?

Simply customize via the `$hintSelector` and `$hintPrefix` variables defined in [src/hint-variables.scss](src/hint-variables.scss)
To generate the css file, please read the [contributing page](./CONTRIBUTING.md).

## Who's Using This?
- [Webflow Playground](http://playground.webflow.com/)
- [Panda chrome app](http://usepanda.com/)
- [Fiverr](https://www.fiverr.com/)
- [Tolks](https://tolks.io)
- [Tridiv](http://tridiv.com/)
- [Prototyp](http://prototyp.in/)
- [Tradus](http://tradus.com/)
- [Formspree](http://formspree.io/)
- [Stackshare](http://stackshare.io/)
- [LessPass](https://lesspass.com/#/)
- [TypeScript Builder](http://www.typescriptbuilder.com/)
- [codeMagic](http://codemagic.gr/)

Are you using **hint.css** in your awesome project too? Just tweet it out to [@hint_css](https://twitter.com/hint_css) or let us know on the [mailing list](mailto:hintcss@googlegroups.com).

## Browser Support
**hint.css** works on all latest browsers, though the transition effect is supported only on IE10+, Chrome 26+ and FF4+ at present.

- Chrome - basic + transition effects
- Firefox - basic + transition effects
- Opera - basic
- Safari - basic
- IE 10+ - basic + transition effects
- IE 8 & 9 - basic

### FAQs

Checkout the [FAQ Wiki](https://github.com/chinchang/hint.css/wiki/Frequently-Asked-Questions) for some common gotchas to be aware of while using **hint.css**.

## Contributing
`hint.css` is developed in SASS and the source files can be found in the `src/` directory.

If you would like to create more types of tooltips/ fix bugs/ enhance the library etc. you are more than welcome to submit your pull requests.

[Read more on contributing](./CONTRIBUTING.md).

## Changelog & Updates
See the [Changelog](https://github.com/chinchang/hint.css/wiki/Changelog).

To catch all updates and discussion, join the mailing list: [**hintcss@googlegroups.com**](https://groups.google.com/forum/?fromgroups=#!forum/hintcss).

Or follow on twitter: [**@hint_css**](https://twitter.com/hint_css)

## License

### Commercial License

If you want to use Hint.css for business, commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase a Hint.css Commercial License at https://kushagragour.in/lab/hint/#commercial

### Open-source License

Hint.css is free for personal use under the GNU AGPLv3.

## Credits
This doesn't make use of a lot of BEM methodology but big thanks to [@csswizardry](https://twitter.com/csswizardry), [@necolas](https://twitter.com/necolas) for their awesome articles on BEM and to [@joshnh](https://twitter.com/_joshnh) through whose work I came to know about it :)
