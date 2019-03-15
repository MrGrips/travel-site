var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(done){
    console.log("default task complete");
    done()
});

gulp.task('html',function(done){
    console.log("some html biz happening here");
    done();
});

gulp.task('watch', function(done){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});