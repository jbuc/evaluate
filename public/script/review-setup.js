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
        userChecks = userChecks + '<label for="user-'+k+'">'+ k + '</label> <input type="checkbox" value="'+k+'"  id="user-'+k+'"/> <br>';
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
		data.review.pending = {};
		data.review.complete = {};
		function runTemplate(person, destinations, template) {
			var tmpl = data.val.aspects[template];
			var map = {
				review:data.weekstamp,
				person:person,
				key:template,
				title:tmpl.title,
				group:tmpl.theme,
				path:[template]
			}			
			$.each(tmpl.aspects,function(k,v){
				getAspects(v,destinations,map)
			})
		}
		function getAspects(key, destinations, map) {
			var aspect = data.val.aspects[key];
			if(typeof(aspect) !== "undefined"){
				if(typeof(aspect.aspects) == "undefined" || !aspect.aspects) {
					$.each(destinations, function(k,v){
						var question = {
							path: map.path.join('-'),
							text:aspect.title,
							rating:0,
							review:data.weekstamp,
							map:map
						}
						// console.log(question.path);
					})
				} else {
					$.each(aspect.aspects,function(k,v){
						var lastPath = map.path[map.path.length -1];
						console.log(lastPath, key, k == lastPath);
						if(k !== lastPath) {
							map.path.push(v);
						} else {
							map.path = [map.template];
						}
						
						console.log(map.path);
						getAspects(v, destinations, map);
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
	}
}