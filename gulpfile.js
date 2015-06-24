var gulp  = require('gulp');
var react = require('gulp-react');


function compileReact(){
  return gulp.src('public/js/modules/itemComponent.jsx')
             .pipe(react())
             .pipe(gulp.dest('public/js'));
}

gulp.task('compileReact' , compileReact );


gulp.task('default',['compileReact']);
