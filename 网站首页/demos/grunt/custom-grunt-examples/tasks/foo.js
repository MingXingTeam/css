/**
 * Created by maomao on 15/12/27.
 */
module.exports = function(grunt){
    grunt.registerMultiTask('troll','Troll people',function(){
        var name = this.data.name || this.target;
        if(this.data.awesome){
            grunt.log.writeln(name+'is awesome!')
        }else{
            grunt.log.writeln(name+' is .. less than awesome.')
        }
    })
}