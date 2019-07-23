import {
	LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';

const initialState = {
	dreams: [
		{title: "Dream #1",
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 378,
			donationGoal: 500,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #2", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 628,
			donationGoal: 800,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #3", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 378,
			donationGoal: 1000,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #4", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #5", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
				{title: "Dream #6", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #7", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
				{title: "Dream #8", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #9", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
				{title: "Dream #10", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{title: "Dream #11", 
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
			};
		case LOGIN_SUCCESS:
			return {
			};
		case LOGIN_FAILURE:
			return {
			};
		default:
			return state;
	}	
}

export default reducer;