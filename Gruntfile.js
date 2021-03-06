var current_version = '1.1.1';
var new_version = '2.0.0';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-replace');

  grunt.initConfig({
    replace: {
      task1: {
        options: {
          patterns: [
            {
              match: current_version,
              replacement: new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'VERSION.md'
            ]
          }
        ]
      },
      task2: {
        options: {
          patterns: [
            {
              match: 'dockerizedrupal/base-debian-bullseye:' + current_version,
              replacement: 'dockerizedrupal/base-debian-bullseye:' + new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'docker-compose.yml',
              'README.md'
            ]
          }
        ]
      },
      task3: {
        options: {
          patterns: [
            {
              match: 'git checkout ' + current_version,
              replacement: 'git checkout ' + new_version
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'README.md'
            ]
          }
        ]
      },
      task4: {
        options: {
          patterns: [
            {
              match: '"version": "' + current_version + '"',
              replacement: '"version": "' + new_version + '"'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'package.json'
            ]
          }
        ]
      },
      task5: {
        options: {
          patterns: [
            {
              match: 'VERSION = "' + current_version + '"',
              replacement: 'VERSION = "' + new_version + '"'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            src: [
              'Vagrantfile'
            ]
          }
        ]
      }
    }
  });

  grunt.registerTask('bump', 'replace');
  grunt.registerTask('default', 'replace');
};
