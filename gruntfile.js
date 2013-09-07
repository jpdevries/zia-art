module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: { /* just defining some properties */
			lib: './lib',
			scss: './_build/sass/',
			css: './assets/css/',
			js: './assets/javascript/'
		},
		bower: {
			install: {
				options: {
					targetDir: './lib'
				}
			}
		},
		rename: { /* move files */
			bourbon: {
				src: './lib/bourbon/',
				dest: '<%= dirs.scss %>',
				force: true
			}
		},
		asciify: {
			zia: {
				options: {
					font: 'larry3d'
				},
				text: 'zia-art'
			}
		},
		concat: { /* concatenate javascript */
			script: {
				options:{
				},
				files: {
					'<%= dirs.js %>main-dev.js' : ['<%= dirs.js %>vendor/jcarousellite_1.0.1.min.js','<%= dirs.js %>vendor/jquery.fancybox-1.3.1.pack.js','<%= dirs.js %>vendor/jquery.easing-1.3.pack.js','<%= dirs.js %>vendor/iscroll.js','<%= dirs.js %>vendor/main.js'] 
				}
			}
		},
	    uglify: { /* minify javascript */
	      options: {
	        banner: '/*!\n <%= asciify_zia %> \n*/\n'
	      },
	      build: {
			src: './<%= dirs.js %>main-dev.js',
			dest: './<%= dirs.js %>main-min.js'
	      }
	    },
		csso: {
			compress: {
				options: {
					report: 'min',
					banner: '/*!\n <%= asciify_zia %> */ /\n'
				},
				files: {
					'<%= dirs.css %>main.css': '<%= dirs.css %>main.css'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: false
				},
				files: {
					'<%= dirs.css %>main.css': '<%= dirs.scss %>main.scss'
				}
			},
			dev: {
				options: {
					style: 'expanded',
					compass: false,
				},
				files: {
					'<%= dirs.css %>main.css': '<%= dirs.scss %>main.scss'
				}
			}
		},
		autoprefixer: { /* this expands the css so it needs to get compressed with csso afterwards */
			options: {
				// Task-specific options go here.
			},

			// just prefix the specified file
			index: {
				options: {},
				src: '<%= dirs.css %>main.css',
				dest: '<%= dirs.css %>main.css'
			}
		},
		watch: { /* trigger tasks on save */
			options: {
				livereload: true
			},
			scss: {
				files: '<%= dirs.scss %>*',
				tasks: ['sass:dist', 'autoprefixer', 'asciify', 'csso', 'growl:sass']
			}
		},
		clean: { /* take out the trash */
			prebuild: ['<%= dirs.scss %>bourbon']
		},
		growl: {
			sass: {
				message: "Sass files created.",
				title: "grunt"
			},
			build: {
				title: "grunt",
				message: "Build complete."
			},
			prefixes: {
				title: "grunt",
				message: "CSS prefixes added."
			},
			watch: {
				title: "grunt",
				message: "Watching. Grunt has its eye on you."
			},
			concat: {
				title: "grunt",
				message: "JavaScript concatenated."
			},
			uglify: {
				title: "grunt",
				message: "JavaScript uglified."
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-rename');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-growl');
	grunt.loadNpmTasks('grunt-asciify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	// Tasks
	grunt.registerTask('default', ['sass:dist', 'autoprefixer', 'growl:prefixes', 'growl:sass', 'asciify', 'csso', 'growl:watch', 'watch']);
	grunt.registerTask('build', ['clean:prebuild', 'bower', 'rename', 'sass:dist', 'autoprefixer', 'growl:prefixes', 'growl:sass', 'asciify', 'csso','concat','growl:concat','uglify','growl:uglify']);
	grunt.registerTask('expand', ['sass:dev', 'autoprefixer', 'growl:prefixes', 'growl:sass']);
};
