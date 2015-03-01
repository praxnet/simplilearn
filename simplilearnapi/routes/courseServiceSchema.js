var mongoose = require('mongoose');

/*
var courseSchema = new mongoose.Schema({
	_id:String, 
	courseName:{type:String, default:"Theory of Computation"},
	courseLecturer:{type:String, default:"David Malan"},
	courseUniversity:{type:String, default:"Harvard University"},
	courseStatus:{type:String, default:"Active"},
	courseMaterialIds:{type:[String]},
	courseQuizes:[String]
});

var courseMaterialSchema = new mongoose.Schema({
	_id:String,
	topic:String,
	subtopics:[String],
	courseAudioUrl:String
});

var courseQuizSchema = new mongoose.Schema({
	_id:String,
	quizQuestion:String,
	quizOptions:[String],
	quizAnswer:String
});

var userDataSchema = new mongoose.Schema({
	_id:String,
	userName:String,
	coursesSubscribed:[String],
	coursesRecommended:[String],
});

var userCourseSchema = new mongoose.Schema({
	_id:String,
	courseId:String,
	courseProgress:String,
	attemptedQuizes:[String]
});
*/
var fUserSchema = new mongoose.Schema({
	_id:String
}, {strict:false});

var fUserModel = mongoose.model('fuser', fUserSchema);
/*
var courseModel = mongoose.model('course',courseSchema);
var courseMaterialModel = mongoose.model('courseMaterial',courseMaterialSchema);
var userDataModel = mongoose.model('userData', userDataSchema);
var userCourseModel = mongoose.model('userCourse', userCourseSchema);
var courseQuizModel = mongoose.model('courseQuiz', courseQuizSchema);*/

/*
exports.courseModel = courseModel;
exports.courseMaterialModel = courseMaterialModel;
exports.userDataModel = userDataModel;
exports.userCourseModel = userCourseModel;
exports.courseQuizModel = courseQuizModel;*/

exports.fUserModel = fUserModel;