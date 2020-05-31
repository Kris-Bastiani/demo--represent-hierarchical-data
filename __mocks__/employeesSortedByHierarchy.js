module.exports = [
	{
		id: 150,
		managerId: null,
		name: 'Jamie',
		children: [
			{
				id: 100,
				managerId: 150,
				name: 'Alan',
				children: [
					{
						id: 220,
						managerId: 100,
						name: 'Martin',
						children: [],
					},
					{
						id: 275,
						managerId: 100,
						name: 'Alex',
						children: [],
					},
				],
			},
			{
				id: 400,
				managerId: 150,
				name: 'Steve',
				children: [
					{
						id: 190,
						managerId: 400,
						name: 'David',
						children: [],
					},
				],
			},
		],
	},
];
