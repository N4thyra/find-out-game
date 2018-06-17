$(document).ready(function () {
	var angel = $('.js-angel');
	var devil = $('.js-devil');

	var closeBtn = $('.js-close');
	var continueOne = $('.js-continue-one');
	var continueTwo = $('.js-continue-two');

	var msg = $('.js-msg');
	var msgText = $('.js-msg-text');

	var preface = $('.js-preface');
	var stageOne = $('.js-stage-one');
	var stageTwo = $('.js-stage-two');
	var stageThree = $('.js-stage-three');

	var boxItem = $('.js-box');

	var boxItemOne = $('.js-box-one');
	var boxItemTwo = $('.js-box-two');
	var boxItemThree = $('.js-box-three');
	var boxItemFour = $('.js-box-four');
	var boxItemFive = $('.js-box-five');
	var boxItemSix = $('.js-box-six');
	var boxItemSeven = $('.js-box-seven');
	var boxItemEight = $('.js-box-eight');
	var boxItemNine = $('.js-box-nine');

	msg.hide();


	angel.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Wrong turn!</h1> <br> This path ain\'t for ya <strong>sinner</strong>. <br> It\'s only available to <strong>holy creatures...</strong> ');
		msg.fadeIn(300);
	});


	devil.on('click', function () {
		preface.fadeOut(300, function () {
			stageOne.fadeIn(300);
		});
	});

	continueOne.on('click', function () {
		stageOne.fadeOut(300, function () {
			stageTwo.fadeIn(300);
		});
	});

	continueTwo.on('click', function () {
		stageTwo.fadeOut(300, function () {
			stageThree.fadeIn(300);
		});
	});

	boxItem.on('click', function () {
		$(this).addClass('end');
	});

	boxItemOne.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Amiable</h1> <br>  This is certainly one of the <strong>best traits of yours</strong>. <br> The way you think of others, the way you act... <strong>simply admirable!</strong> <br> Stay as you are. :)! ');
		msg.fadeIn(300);
	});

	boxItemTwo.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Hard-hearted</h1> <br> Here we are. <strong>Sounds familiar?</strong> <br> You have got a good heart, sometimes it\'s <strong>not enough.</strong> <br> You will feel like home, soon. ');
		msg.fadeIn(300);
	});

	boxItemThree.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Outspoken</h1> <br> <strong>No lies, no games, pure honesty</strong>. <br> It may not always be easy to come clean with somebody, but you <strong>got the balls.</strong> <br> Tellin\'g <strong>the truth is vital.</strong> ');
		msg.fadeIn(300);
	});

	boxItemFour.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Bad mother</h1> <br> You <strong>must\'ve seen</strong> it comin\'. <br> Your children love you so much :(. <br> Sometimes, they\'d hug you in the middle of <strong>the night, but</strong> <br> you go bananas and leave them alone... They keep crying. ');
		msg.fadeIn(300);
	});

	boxItemFive.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Diligent</h1> <br> When others are <strong>wastin\'</strong>  their time doin\' nothing, <br> you <strong>are progressing</strong> , the path ain\'t easy, you know better. <br> <strong>Yet, you keep yourself motivated and pursuing your dreams.</strong> ');
		msg.fadeIn(300);
	});

	boxItemSix.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Garrulous</h1> <br> Oh my gosh. Bro, u\'r havin\'g <strong>a hard time</strong> finding the right words? <br> That ain\'t you! <br> You always find <strong> good topics</strong> to discuss.  ');
		msg.fadeIn(300);
	});

	boxItemSeven.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Ingenious</h1> <br> There\'s something in you <strong>girl</strong>. <br> The term boredom is <strong> kinda foreign to you.</strong> <br> You ain\'t the sort of person who has to be led. <br> Show \'em who the <strong>boss</strong> is! ');
		msg.fadeIn(300);
	});

	boxItemEight.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Inquisitive</h1> <br> As I have been keeping an eye on you since you were born. <br> I couldn\'t have unnoticed you being <strong>a bit curious...</strong> <br> This isn\'t obviously why you were condemned to Hell. ');
		msg.fadeIn(300);
	});

	boxItemNine.on('click', function () {
		$(this).addClass('end');
		msgText.html('<h1>Attentive</h1> <br> You have proved to be very <strong>thoughtful</strong>. <br> Others may be not know, but you do.  <br> <strong> You spot everything!</strong> ');
		msg.fadeIn(300);
	});

	closeBtn.on('click', function () {
		msg.fadeOut(300);
	});

});