/*global module:false*/
module.exports = function(grunt) {

	// Load tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			src: './src',
			dist: './dist',
			getBanner: function () {
				return '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= meta.banner %>';
			},
			getBannerForBaseVersion: function () {
				return '/*! <%= pkg.title || pkg.name %> (base version) - v<%= pkg.version %> - <%= meta.banner %>';
			},
			banner: '<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n\n'
		},

		clean: ['<%= meta.dist %>/*'],

		sass: {
			dist: {
				files: {
					'<%= meta.dist %>/<%= pkg.name %>.css': '<%= meta.src %>/<%= pkg.name %>.scss',
					'<%= meta.dist %>/<%= pkg.name %>.base.css': '<%= meta.src %>/<%= pkg.name %>.base.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= meta.dist %>/',
					dest: '<%= meta.dist %>/',
					src: ['*.css', '!*.min.css']
				}]
			},
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
			}
		},

		cssmin: {
			options: {
				sourceMap: false
			},
			compress: {
				files: [{
					expand: true,
					cwd: '<%= meta.dist %>/',
					dest: '<%= meta.dist %>/',
					src: ['*.css', '!*.min.css'],
					ext: '.min.css'
				}]
			}
		},

		// concat banner to final lib files
		concat: {
			options: {
				banner: '<%= meta.getBanner() %>'
			},
			lib: {
				src: ['<%= meta.dist %>/<%= pkg.name %>.css'],
				dest: '<%= meta.dist %>/<%= pkg.name %>.css'
			},
			minLib: {
				src: ['<%= meta.dist %>/<%= pkg.name %>.min.css'],
				dest: '<%= meta.dist %>/<%= pkg.name %>.min.css'
			},
			baseLib: {
				options: {
					banner: '<%= meta.getBannerForBaseVersion() %>'
				},
				src: ['<%= meta.dist %>/<%= pkg.name %>.base.css'],
				dest: '<%= meta.dist %>/<%= pkg.name %>.base.css'
			},
			baseMinLib: {
				options: {
					banner: '<%= meta.getBannerForBaseVersion() %>'
				},
				src: ['<%= meta.dist %>/<%= pkg.name %>.base.min.css'],
				dest: '<%= meta.dist %>/<%= pkg.name %>.base.min.css'
			}
		},

		watch: {
			files: '<%= meta.src %>/*.scss',
			tasks: 'default'
		}
	});

	// Default task
	grunt.registerTask('default', [
		'sass',
		'autoprefixer'
	]);

	// Deploy task
	grunt.registerTask('deploy', [
		'clean',
		'default',
		'cssmin',
		'concat'
	]);

	// Deploy task alias
	grunt.registerTask('build', ['deploy']);

};
