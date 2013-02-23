/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},

		sass: {
			dist: {
				files: {
						'<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
				}
			}
		},

		mincss: {
			compress: {
				files: {
					'<%= pkg.name %>.min.css': [ '<%= pkg.name %>.css' ]
				}
			}
		},

		// concat banner to final lib files
		concat: {
			lib: {
				src: ['<banner:meta.banner>', 'hint.css'],
				dest: 'hint.css'
			},
			minlib: {
				src: ['<banner:meta.banner>', 'hint.min.css'],
				dest: 'hint.min.css'
			}
		},

		watch: {
			files: 'src/*.scss',
			tasks: 'default'
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	
	// Default task.
	grunt.registerTask('default', 'sass');
	grunt.registerTask('deploy', 'sass mincss concat');

};
