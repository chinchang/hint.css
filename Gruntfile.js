/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
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

		sass: {
			dist: {
				files: {
					'<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss',
					'<%= pkg.name %>.base.css': 'src/<%= pkg.name %>.base.scss'
				}
			}
		},

		cssmin: {
			options: {
				sourceMap: false
			},
			compress: {
				files: {
					'<%= pkg.name %>.min.css': [ '<%= pkg.name %>.css' ],
					'<%= pkg.name %>.base.min.css': [ '<%= pkg.name %>.base.css' ]
				}
			}
		},

		// concat banner to final lib files
		concat: {
			options: {
				banner: '<%= meta.getBanner() %>'
			},
			lib: {
				src: ['<%= pkg.name %>.css'],
				dest: '<%= pkg.name %>.css'
			},
			minLib: {
				src: ['<%= pkg.name %>.min.css'],
				dest: '<%= pkg.name %>.min.css'
			},
			baseLib: {
				options: {
					banner: '<%= meta.getBannerForBaseVersion() %>'
				},
				src: ['<%= pkg.name %>.base.css'],
				dest: '<%= pkg.name %>.base.css'
			},
			baseMinLib: {
				options: {
					banner: '<%= meta.getBannerForBaseVersion() %>'
				},
				src: ['<%= pkg.name %>.base.min.css'],
				dest: '<%= pkg.name %>.base.min.css'
			}
		},

		watch: {
			files: 'src/*.scss',
			tasks: 'default'
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', 'sass');
	grunt.registerTask('deploy', ['sass', 'cssmin', 'concat']);

};
