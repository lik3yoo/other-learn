const gulp = require("gulp")
const ts = require("gulp-typescript")

const tsProject = ts.createProject("tsconfig.json")
console.log(tsProject.src())
gulp.task('compile', () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', gulp.series('compile'))
})
gulp.task('default', gulp.series('compile', 'watch'))
