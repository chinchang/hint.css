/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */<%= "\\n" %>'
		},

		sass: {
			dist: {
				files: {
						'<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
				}
			}
		},

		cssmin: {
			compress: {
				files: {
					'<%= pkg.name %>.min.css': [ '<%= pkg.name %>.css' ]
				}
			}
		},

		// concat banner to final lib files
		concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
			lib: {
				src: ['<%= pkg.name %>.css'],
				dest: '<%= pkg.name %>.css'
			},
			minlib: {
				src: ['<%= pkg.name %>.min.css'],
				dest: '<%= pkg.name %>.min.css'
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
	
	// Default task.
	grunt.registerTask('default', 'sass');
	grunt.registerTask('deploy', ['sass', 'cssmin', 'concat']);

};
