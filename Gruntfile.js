module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/style.css' : 'assets/css/style.scss'
				}
			}
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: ['last 4 versions']}),
				]
			},
			dist: {
				src: 'assets/css/style.css',
				dest: 'assets/css/master.css'
			}
		},
		watch: {
			files: 'assets/css/*.scss',
			tasks: ['sass', 'postcss']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('dev', ['watch']);
};
