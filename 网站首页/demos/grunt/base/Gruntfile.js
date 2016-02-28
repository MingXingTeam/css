module.exports = function(grunt){
    grunt.registerTask('speak',function(){
        console.log("I am speaking!");
    });

    grunt.registerTask('yell',function(){
        console.log("I am yelling")
    })

    grunt.registerTask('both',['speak','yell']);

    //grunt.registerTask('default',['speak','yell']);//cmd>grunt


   /*
    合并js
    grunt.initConfig({
            concat:{
                dist:{
                    src:['js/1.js','js/2.js'],
                    dest:'build/script.js'
                },
            },
        });
    */

    //合并js和css
    /*grunt.initConfig({
        concat:{
            js:{
                src:['js/1.js','js/2.js'],
                dest:'build/js/script.js'
            },
            css:{
                src:['css/main.css','css/theme.css'],
                dest:'build/css/styles.css'
            },
        },
    });*/

    grunt.initConfig({
        concat:{
            js:{
                src:['js/1.js','js/2.js'],
                dest:'build/js/script.js'
            },
            css:{
                src:['css/main.css','css/theme.css'],
                dest:'build/css/styles.css'
            },
        },
        watch:{
            js:{
                files:['js/**/*.js'],
                //tasks:['concat'],
                tasks:['concat:js'],/*修改js,只重新创建build/scripts.js,不创建css/styles.css*/
            },
            css:{
                files:['css/**/*.css'],
                tasks:['concat'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['concat','watch']);//cmd>grunt

}