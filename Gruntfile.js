module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                base: './',
				open: true,
                livereload: true
              }
            }
        },
        sass: {
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass'],
                options: { livereload: 35729 }
            },
            html: {
                files: '*.html',
                options: { livereload: 35729 }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // Default task(s).
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('dev', ['connect', 'watch']);
};
