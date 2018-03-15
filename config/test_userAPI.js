var api_request = {};

// Request for login
var api_request = { "service_name":"user_login","phone_number":"9856214785","access_token":"1234", "request_from":"web"};

//Request for user logout
//var api_request = { "service_name":"user_logout","user_id":"58dba62c2a9b4d0a9420f361","access_token":"57997796"};

//Request for Forgot Passoword
//var api_request = { "service_name":"forgot_password","email_id":"dasharath@yopmail.com"};

//Request for change password
//var api_request = { "service_name":"change_password", "user_id":"58d5096086b8929c424b1c1c","current_password":"i2ZwXNjY0xTcGfJrU9bgzA==","new_password":"tigno37swY0nzWVNOMUVLg==","confirm_password":"tigno37swY0nzWVNOMUVLg==","access_token":"40287045"};

//Request for Change Email
//var api_request = { "service_name":"change_email","user_id":"58d5096086b8929c424b1c1c","access_token":"40287045","new_email_id":"dasharath@yopmail.com","current_email":"dasharath@yopmail.com"};

//Request for login via social media
//var api_request = { "service_name":"user_socialmedia_login","social_media_id":"123123123","device_type":"iPhone","device_token":"1289hjhsdf98134"};

//Request for New User Sign-up
/*var api_request = {"service_name":"email_signup",
					"user_type":"Business User",
					"first_name": "Dasharath","last_name": "Ghodke",
					"email_id": "dasharath6@yopmail.com","user_name":"dasharath6",
					"password":"tigno37swY0nzWVNOMUVLg==","confirm_password":"tigno37swY0nzWVNOMUVLg==",
					"service_shop_details":{
										 		"service_shop_name":"test",
										 		"service_shop_address": "shop1 pune",
										 		"latitude":"18.112121311",
										 		"longitude":"19.112121311",
										 		"start_year":"2016-03-30",
										 		"end_year":"2016-03-30",
										 		"specialized_brands":[{
														 			"brand_id":"123131",
														 			"brand_name":"AUDI"
														 		}],
												"work_type_specialities":[{
																	"work_type_id":"1231",
																	"work_type_name":"Lighting"
																}],
										 		"bio":"tttt",
												"contact_number":"111111111"
									 		 },
					"device_token": "1234","device_type": "Android"};*/

//Request for New User Sign-up via Facebook
/*var api_request = { "service_name":"socialmedia_signup",
					"user_type":"Car User",
					"sign_up_type":"Facebook",
					"first_name": "Dasharath",
					"last_name": "Ghodke",
					"email_id": "dasharath8@yopmail.com",
					"social_media_id":"1231231231",
					"phone_number":"1213213123",
					"gender":"Male",
					"profile_picture":"https://scontent.xx.fbcdn.net/v/t1.0-9/311873_10150321864920912_1959788111_n.jpg?oh=94fdaa50bd43d02948a7a0bc4103b048&oe=590A4185",
					"service_shop_details":{
				 		"service_shop_name":"test",
				 		"service_shop_address": "shop1 pune",
				 		"latitude":"18.112121311",
				 		"longitude":"19.112121311",
				 		"start_year":"2016-03-30",
				 		"end_year":"2016-03-30",
				 		"specialized_brands":[{
								 			"brand_id":"123131",
								 			"brand_name":"AUDI"
								 		}],
						"work_type_specialities":[{
											"work_type_id":"1231",
											"work_type_name":"Lighting"
										}],
				 		"bio":"tttt",
						"contact_number":"111111111"
			 		 },
					"device_token": "1234","device_type": "Android"};*/

//Request for view user profile
//var api_request = { "service_name":"user_profile","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","profile_id":"58dd1a4e44f805a01a6b9a51"};

//Request for update user profile
/*var api_request = { "service_name":"update_user_profile",
					"user_id":"58dd1a4e44f805a01a6b9a51",
					"access_token":"10155313",
					"first_name": "Dasharath1",
					"last_name": "Ghodke",
					"email_id": "dasharath61@yopmail.com",
					"phone_number":"7385759105",
					"gender":"Male",
					"profile_picture":"",
					"profile_bio":"test",
					"service_shop_details":{
				 		"service_shop_name":"test1",
				 		"service_shop_address": "shop1 pune",
				 		"latitude":"18.112121311",
				 		"longitude":"19.112121311",
				 		"start_year":"2016-03-30",
				 		"end_year":"2016-03-30",
				 		"specialized_brands":[{
								 			"brand_id":"12313211",
								 			"brand_name":"AUDI",
								 			"models":[{
									 			"model_name":"AUDI",
									 			"years":[{
									 					"year":"2014"
									 				}]
									 			}]
								 		}],
						"work_type_specialities":[{
											"work_type_id":"123211",
											"work_type_name":"Lighting"
										}],
				 		"bio":"tttt",
						"contact_number":"111111111"
			 		 },
			 		 "service_shop_image":"",
			 		 "intrested_car_brand":[{
											"brand_id":"12313211",
								 			"brand_name":"AUDI"
										}],
 		 		};*/

//Request for image paths
//var api_request = { service_name:"image_paths"};

//Request for car type list
//var api_request = { "service_name":"car_type_list","past_datetime":"2017-04-13 12:30:01"};

//Request for work type list
//var api_request = { "service_name":"work_type_list","past_datetime":"2017-04-13 12:30:01"};

//Request for car brand list
//var api_request = { "service_name":"car_brand_list","past_datetime":"2017-04-13 12:30:01"};

//Request for add edit car profile
/*var api_request = { "service_name":"add_edit_car_profile","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"car_profile_id":"58f867f3c2c89dbc09d62825",
					"car_brand_id":"58f4ae9c5f429061386e334a","car_brand":"BMW",
					"car_model_id":"58f4ae9c5f429061386e334a","car_model":"BMW",
					"car_model_year_id":"58f4ae9c5f429061386e334a","car_model_year":"BMW",
					"car_bio":"tesss",
					"picture":""};*/

//Request for user car profile list
//var api_request = { "service_name":"user_car_profile_list","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313"};

//Request for delete user car profile
//var api_request = { "service_name":"users_car_profile_details","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","car_profile_id":"58f867f3c2c89dbc09d62825"};

//Request for delete user car profile
//var api_request = { "service_name":"delete_users_car_profile","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","car_profile_id":"58f867f3c2c89dbc09d62825"};

//Request for update car profile
/*var api_request = { "service_name":"update_car_profile_picture","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"car_profile_id":"58f867f3c2c89dbc09d62825",
					"picture_id":"58f9d2b18813558c26bdfad3",
					"picture":""};*/
//Request for car type list
//var api_request = { "service_name":"event_type_list"};

//Request for add edit events
/*var api_request = { "service_name":"add_edit_event","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"event_id":"","event_title":"new event","event_type":"Car Meet",
					"event_bio":"test","event_address":"pune","event_datetime":"2017-04-28 12:02:00",
					"event_latitude":"18.112121311","event_longitude":"19.112121311",
					"event_route":[{
							"latitude":"18.112121311",
							"longitude":"19.112121311"
						}],
					"car_brand":[{
							"car_brand_id":"58f4ae9c5f429061386e334a",
							"car_brand":"BMW"
						}],
					"phone_number":"7385759105"
				};*/

//Request for user event
//var api_request = { "service_name":"user_events_list","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","profile_id":"58dd1a4e44f805a01a6b9a51"};

//Request for user event
//var api_request = { "service_name":"event_details","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","event_id":"59006b41bc5fdfc7e502fb92"};

//Request for user event attendees list
//var api_request = { "service_name":"event_attendees_list","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","event_id":"59006b41bc5fdfc7e502fb92"};

//Request for delete user event
//var api_request = { "service_name":"delete_users_event","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313","event_id":"58f867f3c2c89dbc09d62825"};

//Request for add user in event
/*var api_request = { "service_name":"add_event_attendee","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"event_id":"58fdfa4425da75b022c8820f","attendee_id":"58dd1a4e44f805a01a6b9a51"};
*/

//Request for block user in event
/*var api_request = { "service_name":"block_event_attendee","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"event_id":"58fdfa4425da75b022c8820f","attendee_id":"58dd1a4e44f805a01a6b9a51","status":"Block"};
*/

//Request for remove user in event
/*var api_request = { "service_name":"remove_event_attendee","user_id":"58dd1a4e44f805a01a6b9a51","access_token":"10155313",
					"event_id":"58fdfa4425da75b022c8820f","attendee_id":"58dd1a4e44f805a01a6b9a51"};
*/

//Request for event list
/*var api_request = { "service_name":"event_list",
 					"location_latitude":"18.112121311",
 					"location_longitude":"19.112121311",
 					"radius":"100",
					"event_title":"test",
					"event_address":"test",
					"event_type":["Cruise"],
					"event_start_date":"2017-04-28",
					"event_end_date":"2017-04-28",
					"user_type":"Car User",
					"search_keyword":"test"
					};*/

//Request for service list
/*var api_request = { "service_name":"service_list",
					"location_latitude":"18.112121311",
 					"location_longitude":"19.112121311",
 					"radius":"100",
					"service_shop_name":"test",
					"service_shop_address":"Wakad",
					"brand_name":"BMW",
					"search_keyword":"test",
					"filters":{
								"car_brand":["BMW"],
								"car_models":["test"],
								"model_years":["2014","2016"],
								"work_type":["Wiring"]
							}
					};*/



//Request for checking email availability
//var api_request = { "service_name":"check_email_availability","email_id":"pratik@arkenea.com"};


// Request for checking user availability
//var api_request = { "service_name":"check_user_availability","user_name":"ptk007"};

//Request to check device token availability
//var api_request = { service_name:"check_device_token_availability","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123"};

//Request to update device token
//var api_request = { service_name:"update_device_token","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","device_token":"123456789"};

//Request for comment on event
/*var api_request = { service_name:"add_comment_on_event","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123",
					"event_id":"58fdfa4425da75b022c8820f",
					"comment_text":"tesssss",
					"comment_image":"",
					};

*/
//Request for event comment list
/*var api_request = { service_name:"event_comment_list","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123",
					"event_id":"58fdfa4425da75b022c8820f"
					};

*/


// Request for Verify Phone Number of User
//var api_request = { service_name:"verify_phone_number","user_id":"58ac0f83e08d2624183340ff","verification_code":"535760" };

//request to resend verification code
//var api_request = { service_name:"resend_verification_code","access_token":"1234", "user_id":"58ac0f83e08d2624183340ff" };


// Encode String in AES 128 Encription
//var api_request = { "service_name":"encript_string","password":"Admin@123"};;

// Encode String in AES 128 Encription
//var api_request =  { "service_name":"decript_string","decripted_password":"678167055a17fb696efa0c52adc464f0"};

// Request Update user Notifications
//var api_request = { service_name:"update_notification_setting","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","daily_registration_reminder":"true","new_hunt_notification":"true","charity_money_notification":"false"};



// Request user registration for hunt
//var api_request = { service_name:"hunt_registration","user_id":"57fdc9c7b4c860adb5f2d7fe","user_name":"Pratik","access_token":"123","hunt_id":"5800ce2e93dc7a680ffb1d1f","paid_amount":0.0};

// Request to get State,County and City list
//var api_request = { service_name:"get_state_county_city_list","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","list_for":"State","key_field":""};



// Request to get my hunts
//var api_request = { service_name:"my_hunts","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123"};

// Request to accept or reject postpone hunt
//var api_request = { service_name:"accept_reject_postponded_hunt","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","hunt_id":"580754677f776378155db686","status":"A"};

// Request to verify redeem code
//var api_request = { service_name:"verify_redemption_code","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","hunt_id":"580754677f776378155db686","redemption_code":"13246"};

// Request to abuse report
//var api_request = { "service_name":"abuse_report","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","content_type":"UserName","user_name":"pratik","user_email":"pratik@arkenea.com","reason":"Advertising / Spam","details":"No such information exist"};

// Request get leader board
//var api_request = { "service_name":"leader_board","user_id":"57fdc9c7b4c860adb5f2d7fe","access_token":"123","difficulty_level":"1" };

// Request get winning price
//var api_request = { "service_name":"winning_price","user_id":"57fdc9c7b4c860adb5f2d7fe","hunt_id":"580754677f776378155db686","access_token":"123"};

// Request to Resend email for winner
//var api_request = { "service_name":"resend_email","user_id":"57fdc9c7b4c860adb5f2d7fe","hunt_id":"580754677f776378155db686","access_token":"123"};

module.exports = api_request;
