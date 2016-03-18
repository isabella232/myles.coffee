module.exports = function (grunt) {
    'use strict';

    var config, files;

    files = [{
        expand: true,
        cwd: '<%= config.source %>/pages',
        src: '**/*.hbs',
        dest: '<%= config.destination %>'
    }];

    config = {
        options: {
            plugins: [
                'grunt-assemble-sitemap',
                'grunt-assemble-permalinks'
            ],
            data: [
                './config.yml',
                '<%= config.source %>/data/*.yml'
            ],
            flatten: true,
            helpers: '<%= config.source %>/helpers/helpers-*.js',
            layoutdir: '<%= config.source %>/templates/layouts',
            partials: [
                '<%= config.source %>/templates/partials/*.hbs'
            ],
            layout: 'base.hbs',
            permalinks: {
                structure: ':basename/index.html'
            },
            sitemap: {
                homepage: '<%= config.url %>',
                changefreq: 'weekly',
                relativedest: true,
                robot: true
            }
        },
        develop: {
            options: {
                dev: true,
                prod: false
            },
            files: files
        },
        production: {
            options: {
                dev: false,
                prod: true
            },
            files: files
        }
    };

    grunt.config.set('assemble', config);
};
