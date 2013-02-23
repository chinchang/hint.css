**Hint** is written in [SASS](http://sass-lang.com/).

#Setup
1. [Fork **Hint.css**](https://help.github.com/articles/fork-a-repo) and clone it on your system.
2. Create a new branch out off `dev` for your fix/feature. `git checkout new-feature dev`

#Building

**Hint.css** uses [Grunt](http://gruntjs.com/) for the build process which you need to have installed on your system.

Also there are two additional Grunt tasks required to build the library:

1. [grunt-contrib-mincss](https://npmjs.org/package/grunt-contrib-mincss)

2. [grunt-sass](https://npmjs.org/package/grunt-sass)

To install all the dependencies, run `npm install`.

Once you have the dependencies installed, run `grunt` from the project directory. This will run the default grunt task which compiles the SCSS files into `hint.css` file.

#Things to remember
- Do not fix multiple issues in a single commit. Keep them one thing per commit so that they can be picked easily incase only few commits require to be merged.

- For every new modifier (example `hint--success`, `hint--top`) added, make a separate file unless it fits into a current modifier file.