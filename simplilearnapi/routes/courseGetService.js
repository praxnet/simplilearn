var courseSchema = require('./courseServiceSchema');


exports.getQuiz = function(req, res){
	var quizId = req.params.id;
	getCourseQuiz(quizId, function(err, quizData){
		if(err){
			res.end("error:could not find industries");
			return;
		}
		res.json(quizData);
	})
};
/*
exports.getUserInfo = function(req, res){
	var userId = req.params.id;
	var username = "";
	var courseName = "";
	var courseMaterials = [];
	var courseProgress = "";
	var universityName = "";
	var courseLecturer = "";
	var courseVideoUrl = "";
	var courseNotesUrl = "";
	var courseSlidesUrl = "";
	var courseQuizes = [];
	var attemptedQuizes = [];
	var coursesSubscribed = [];
	courseSchema.userDataModel.find({_id:userId}, function(err, userData){
		if(err){
			res.end("error:could not find industries");
		}
		else{ 
			if(userData){
				username = userData.userName;
				var courses = userData.coursesSubscribed;
				if(courses && courses[0] != null){
					for(var courseIndex = 0; courseIndex < courses.length; courseIndex++){
						getUserCourse(courses[courseIndex], function(err, userCourse){
							if(err){
								console.log(err);
								res.end(err);
								return;
							}
							else{
								courseProgress = userCourse.courseProgress;
								attemptedQuizes = userCourse.attemptedQuizes;
								getCourse(userCourse.courseId, function(err, course){
									if(err){
										console.log(err);
										res.end(err);
										return;
									}
									else{
										courseName = course.courseName;
										courseLecturer = course.courseLecturer;
										courseUniversity = course.courseUniversity;
										courseQuizes = courseMaterial.courseQuizes;
										getCourseMaterial(course.courseId, function(err, courseMaterial){
											if(err){
												console.log(err);
												res.end(err);
												return;
											}
											else{
												var courseMaterialsArray = [];
												for(var courseMaterialIndex=0;courseMaterialIndex<courseMaterial.length;courseMaterialIndex++){
													var topicName = courseMaterial[courseMaterialIndex].topicName;
													var subtopic = courseMaterial[courseMaterialIndex].subtopics;
													var courseQuizes = courseMaterial[courseMaterialIndex].courseQuizes;
													var courseAudioUrl = courseMaterial[courseMaterialIndex].courseAudioUrl;
													courseMaterialsArray.push({
														"topicName":topicName,
														"subtopic":subtopic,
														"courseQuizes":courseQuizes,
														"courseAudioUrl":courseAudioUrl
													});
												}
												var coursesSubscribedData = {
													"courseName":courseName,
													"courseProgress":courseProgress,
													"courseLecturer":courseLecturer,
													"courseMaterials":{
														"courseVideoUrl":courseVideoUrl,
														"courseNotesUrl":courseNotesUrl,
														"courseSlidesUrl":courseSlidesUrl,
														"courseQuizes":courseQuizes
													},
													"attemptedQuizes":attemptedQuizes,
													"universityName":universityName
												}
												coursesSubscribed.push(coursesSubscribedData);
											}
										});
									}
									
								});
							}
						});
					}
					res.json({"username":username, "coursesSubscribed":coursesSubscribed});
				}
			}
			else{
				res.json({});
			}
		}
	});
};

var getCourse = function(courseId, callback){
	courseSchema.courseModel.find({_id:courseId}, function(err, course){
		if(err){
			callback(err, null);
		}
		else{ 
			if(course){
				callback(null, course);
			}
			else{
				callback(null, {});
			}
		}
	});
};

var getCourseMaterial = function(courseId){
	courseSchema.courseMaterialModel.find({_id:courseId}, function(err, courseMaterial){
		if(err){
			callback(err, null);
		}
		else{ 
			if(courseMaterial){
				callback(null, courseMaterial);
			}
			else{
				callback(null, {});
			}
		}
	});

};

var getCourseQuiz = function(courseQuizId){
	courseSchema.courseQuizModel.find({_id:courseQuizId}, function(err, courseQuiz){
		if(err){
			callback(err, null);
		}
		else{ 
			if(courseQuiz){
				callback(null, courseQuiz);
			}
			else{
				callback(null, {});
			}
		}
	});
};

var getUserCourse = function(userCourseId){
	courseSchema.userCourseModel.find({_id:userCourseId}, function(err, userCourseData){
		if(err){
			callback(err, null);
		}
		else{ 
			if(userCourseData){
				callback(null, userCourseData);
			}
			else{
				callback(null, {});
			}
		}
	});
};
*/

exports.getUser = function(req, res){
	var userId = req.params.id;
	courseSchema.fUserModel.find({}, function(err, docs){
		if(docs){
			res.json(docs);
			return;
		}
		res.json({});
	});

};