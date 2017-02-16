var setup = {
	resetScreen : function($title,$message,$action) {
		$title.html('').unbind('click');
		$message.html('').unbind('click');
		$action.html('').unbind('click');
	},
	getUsers : function(data,$title,$message,$action, callback) {
	  setup.resetScreen($title,$message,$action);
	  $title.text("Who do you want to review for " + data.weekstamp + "?");
      var userstorate = {};
      userChecks = ''; 
      $.each(data.val.users, function(k,v) {
        userChecks = userChecks + '<label for="user-'+k+'">'+ k + '</label> <input type="checkbox" checked value="'+k+'"  id="user-'+k+'"/> <br>';
      });
      $message.html(userChecks);
      $action.text('setup').click(function(){
        $message.find(':checked').each(function(k, v){
          userstorate[v.value] = {
            total: 3,
            what: 3,
            how: 3,
            review:data.weekstamp,
            tmpl:data.val.users[v.value].tmpl,
            questions: {}
          };
        });
		data.review.users = userstorate;
		callback();

      });
	},
	getQuestions : function(data,$title,$message,$action, callback) {
		setup.resetScreen($title,$message,$action);
		$title.text("Collecting questions for " + data.weekstamp + ".");
		$action.text("loading . . .");
		data.review.pending = {};
		data.review.complete = {};
		function runTemplate(person, destinations, template) {
			var tmpl = data.val.aspects[template];
			if(typeof(tmpl) !== "undefined"){
				var map = {
					review:data.weekstamp,
					person:person,
					key:template,
					title:tmpl.title,
					group:tmpl.theme,
					innerPath: false,
				}			
				$.each(tmpl.aspects,function(k,v){
					var breadcrumb = {
						root: [template, v],
						innerRoom:false,
						finalRoom:false
					}
					getAspects(v,destinations, [person,template, v])
				})
			} else {
				console.warn("NOTE: " + template + " for " + person + " has nothing to rate.")
			}
		}
		function getAspects(key, destinations, map) {
			var aspect = data.val.aspects[key];
			if(typeof(aspect) !== "undefined"){
				if(typeof(aspect.aspects) == "undefined" || !aspect.aspects) {
					var question = {
						path: map.join('-'),
						text:aspect.title,
						rating:0,
						review:data.weekstamp,
						map:map,
						aspect:aspect
					}

					$.each(destinations, function(k,v){
						v[question.path] = question
					})
				} else {
					$.each(aspect.aspects,function(k,v){
						var newBranch = map.slice(0);
						newBranch.push(v);
						getAspects(v, destinations, newBranch);
					})	
				} 
			} else {
				console.warn("NOTE: " + key + " for has nothing to rate.")
			}
				
		}
		$.each(data.review.users, function(k,v){
			// console.log(data.review.pending, data.review.users[k].questions);
			runTemplate(k, [data.review.pending, data.review.users[k].questions], v.tmpl);
			
		});

		callback();
		// console.log(data);
	},
	reviewStatus : function(data,$title,$message,$action, callback) {
		setup.resetScreen($title,$message,$action);
		var pendingQuestions = Object.size(data.pending);
		var users = Object.size(data.users);

		$title.text("Here's the stats for this week's review.");
		$message.text("There are " + pendingQuestions + " pending questions covering " + users + " people left to review.");
		$action.text("Get to it.").click(function(){ window.location = "/rate.html"})
	},
	reviewInit : function(data,$title,$message,$action, callback) {
		setup.resetScreen($title,$message,$action);
		var question = data.val[0];
		$title.text("For : ")
		callback();
	}
}