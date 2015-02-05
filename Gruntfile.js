module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        clean: ['dist/*'],
        watch: {
            '6to5': {
                files: ['fxslider/{,**/}*.js', 'fxslider/index.html', 'fxslider/fxslider.css'],
                tasks: ['clean', '6to5', 'copy:main', 'copy:bower', 'copy:css']
            }
        },
        copy: {
            css: {
                cwd: 'fxslider/',
                src: '*.css',
                dest: 'dist/',
                expand: true,
                flatten: true
            },
            main: {
                cwd: 'fxslider/',
                src: 'index.html',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bower: {
                cwd: '.',
                src: 'bower_components/**/*.*',
                dest: 'dist/',
                expand: true
            }
        },
        '6to5': {
            options: {
                modules: 'amd'
            },

            build: {
                files: [{
                    expand: true,
                    cwd: 'fxslider/',
                    src: ['{,**/}*.js'],
                    dest: 'dist/',
                }],
            }
        }
    });

    grunt.registerTask('default', ['clean', '6to5', 'copy:main', 'copy:css', 'copy:bower']);
}