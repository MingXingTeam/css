/**
 * Created by maomao on 15/12/27.
 */
module.exports = function (grunt) {
    grunt.registerMultiTask('osdetect','Detect OS and run different task based on it',function(){
        var tasksToRun = [],done = this.async();;

        //用Node的process.platform 除非命令行中加了--os=linux类似的参数
        var os = grunt.option('os') || process.platform;

        if(!this.data.taskMap){
            grunt.log.error();
            grunt.log.error('You must specify a "taskMap" option for this tasks!');
            grunt.fail.warn('(NOTE: using --force will NOT help in this case!)');
            done(false);
            return;
        }

        //命令行加上--verbose 才会打印这个信息
        grunt.verbose.writeln("Detected OS:"+os)

        //检查OS然后执行正确的任务
        if(/linux/.test(os)){
            if(this.data.taskMap.linux){
                tasksToRun = this.data.taskMap.linux;
            }
        }else if(/win32/.test(os)){
            if(this.data.taskMap.windows){
                tasksToRun = this.data.taskMap.windows;
            }
        }else if(/darwin/.test(os)){
            //判断命令行是否带--force 参数
            if(grunt.option('force')){
                grunt.log.error('OSX is not offically supported')
            }else{
                grunt.fail.warn('OSX is not offically supported')
            }

            //没有带--force不会运行到这一行
            var targetConfig = this.data.taskMap.osx.replace(/:/,'.');
            grunt.config(targetConfig+'.name','OSX');
            grunt.config(targetConfig+'.awesome',true);

            tasksToRun = this.data.taskMap.osx;
        }

        //将任务加到队列中
        grunt.task.run(tasksToRun);

        grunt.log.ok('OS detected,tasks added to queue:',tasksToRun);

        done();

    })

}