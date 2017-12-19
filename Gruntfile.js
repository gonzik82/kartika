"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({
              browsers: [
                "last 2 versions"
              ]
            }),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "build/css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    php: {
        dist: {
            options: {
                hostname: '127.0.0.1',
                port: 9000,
                base: "build", // Project root
                keepalive: false,
                open: false
            }
        }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/js/*.js"

          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      },
      dist: {
           bsFiles: {
             src: [
               "build/*.html",
               "build/css/*.css",
               "build/js/*.js",
               "build/*.php"

             ]
           },
           options: {
               proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
               watchTask: true,
               notify: true,
               open: true,
               logLevel: 'silent',
               ghostMode: {
                   clicks: true,
                   scroll: true,
                   links: true,
                   forms: true
               }
           }
       }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
      php: {
        files: ["*.php"],
        tasks: ["copy:php"]
      },
      js: {
        files: ["js/*.js"],
        tasks: ["copy:js"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "fancybox/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      },
      php: {
        files: [{
          expand: true,
          src: ["*.php",
          "php/**/*.php"
        ],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          src: ["js/*.js"],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      symbols: {
        files: {
          "img/symbols.svg": ["img/icon/*.svg"]
        }
      }
    },

      svgmin: {
        symbols: {
          files: [{
            expand: true,
            src: ["img/icon/*.svg"]
          }]
        }
      }

  });

  grunt.registerTask("symbols", ["svgmin", "svgstore"]);
  grunt.registerTask("serve", [
    "browserSync:server",
    "watch"
  ]);
  grunt.registerTask("servephp", [
    "php:dist",         // Start PHP Server
    "browserSync:dist",
    "watch"
  ]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "imagemin"
  ]);
};
