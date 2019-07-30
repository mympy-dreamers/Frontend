import {
	LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions';
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';
import { FETCH_DREAMS_START, FETCH_DREAMS_SUCCESS, FETCH_DREAMS_FAILURE } from '../actions';

const initialState = {
	token: '',
	username: '',
	message: '',
	error: '',
	status: '',
	decoded: '',
	featured: [
		{
			id: 1,
			title: "Dream #1",
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR School Systems',
			donationsReceived: 378,
			donationGoal: 500,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{
			id: 2,
			title: "Dream #2", 
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR Health Education',
			donationsReceived: 628,
			donationGoal: 800,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{
			id: 3,
			title: "Dream #3", 
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR Sports',
			donationsReceived: 378,
			donationGoal: 1000,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		}
	],
	dreams: [
		{title: "Dream #1",
			id: 1,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 378,
			donationGoal: 500,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #2", 
			id: 2,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 628,
			donationGoal: 800,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #3", 
			id: 3,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 378,
			donationGoal: 1000,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				],
			}
		},
		{title: "Dream #4", 
			id: 4,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #5", 
		  id: 5,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #6", 
			id: 6,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #7", 
			id: 7,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #8", 
			id: 8,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #9", 
			id: 9,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #10", 
			id: 10,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
		{title: "Dream #11", 
			id: 11,
			cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			donationsReceived: 924,
			donationGoal: 1200,
			recentDonations: [
				{
					donation: 50,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 12,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 34,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 200,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 15,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 25,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
				{
					donation: 10,
					user: {
						username: "johndoe",
						firstname: "John",
						lastname: "Doe",
						city: "City",
						dreams: [
							{
								id: 5,
								title:"Dream # 5",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 7,
								title:"Dream # 7",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
							{
								id: 9,
								title:"Dream # 9",
								cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
							},
						]
					},
				},
			],
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City",
				dreams: [
					{
						id: 5,
						title:"Dream # 5",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 7,
						title:"Dream # 7",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
					{
						id: 9,
						title:"Dream # 9",
						cardImg: "https://images.pexels.com/photos/532559/pexels-photo-532559.jpeg?cs=srgb&dl=electronics-grass-lawn-532559.jpg&fm=jpg", 
					},
				]
			}
		},
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload,
				decoded: action.decoded,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case REGISTER_START:
			return {
				...state,
				
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				status: action.payload.status,
			}
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload,
				status: action.payload.status,
			}
		case FETCH_DREAMS_START:
			return {
				...state,
				error: '',
				dreams: [],
			}
		case FETCH_DREAMS_SUCCESS:
			return {
				...state,
				// dreams: [...state.dreams, action.payload],
			}
		case FETCH_DREAMS_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state;
	}	
}

export default reducer;