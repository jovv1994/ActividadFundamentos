let User1 = 'userA';
let User2 = 'userM';
const users = [
	{ 
	user: 'userA',
	Following: ['userB', 'userD', 'userE', 'userG'] 
	},
	{ 
	user: 'userB',
	Following: ['userC', 'userJ', 'userI', 'userE']
	},
	{ 
	user: 'userC',
	Following: ['userM', 'userN', 'userJ', 'userI', 'userE'] 
	}
]

let i = 0;
let length = 0;
while(i < (users.length - 1)){
	
	const objUsers1 = users[i];
	const objUsers2 = users[i + 1];

	if(objUsers1.user == User1){
		for (let i in objUsers1.Following){
			if(objUsers1.Following[i] == User2){
				length += 1;
			}
			if(objUsers1.Following[i] == objUsers2.user){
				length += 1;
				for(let j in objUsers2.Following){
					if (objUsers2.Following[j] == User2) {
						length += 1;
					}
				}
				User1 = objUsers2.user;
			}
		}
	}
	i++;
}
console.log(length);