var courseSchema = require('./courseServiceSchema');

exports.postCourses = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("invalidJson");
		return;
	}

	new courseSchema.courseModel({
		"_id":courseJson._id,
		"courseName":courseJson.courseName,
		"courseLecturer":courseJson.courseLecturer,
		"courseUniversity":courseJson.courseUniversity,
		"courseStatus":courseJson.courseStatus,
		"courseMaterialIds":courseJson.courseMaterialIds
	}).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};

exports.postCourseMaterial = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("invalidJson");
		return;
	}

	new courseSchema.courseMaterialModel({
		"_id":courseJson._id,
		"courseVideoUrl":courseJson.courseVideoUrl,
		"courseNotesUrl":courseJson.courseNotesUrl,
		"courseSlidesUrl":courseJson.courseSlidesUrl,
		"courseQuizes":courseJson.courseQuizes
	}).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};

exports.postCourseQuiz = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("invalidJson");
		return;
	}

	new courseSchema.courseQuizModel({
		"_id":courseJson._id,
		"quizQuestion":courseJson.quizQuestion,
		"quizOptions":courseJson.quizOptions,
		"quizAnswer":courseJson.quizAnswer
	}).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};

exports.postUserData = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("invalidJson");
		return;
	}

	new courseSchema.courseModel({
		"_id":courseJson._id,
		"userName":courseJson.userName,
		"coursesSubscribed":courseJson.coursesSubscribed,
		"coursesRecommended":courseJson.coursesRecommended,
	}).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};

exports.postUserCourse = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("saved");
		return;
	}

	new courseSchema.courseModel({
		"_id":courseJson._id,
		"courseId":courseJson.courseId,
		"courseProgress":courseJson.courseProgress,
		"attemptedQuizes":courseJson.attemptedQuizes
	}).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};


exports.postFUser = function(req, res){
	try{
		courseJson = JSON.parse(JSON.stringify(req.body));
	}
	catch(err){
		res.end("saved");
		return;
	}

	new courseSchema.fUserModel(courseJson).save(function(err){
				if(err) res.end("invalidSchema");
				else{
					res.writeHead(200,{"Content-Type":"text/plain"});
					res.end("saved");
				}
			});
};



