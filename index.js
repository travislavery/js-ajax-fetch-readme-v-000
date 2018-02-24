const app = "I don't do much.";
const token = 538e73e1cb4277ede8a798bbd5b4fc8ea820d218
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: "token 538e73e1cb4277ede8a798bbd5b4fc8ea820d218"
	}
}).then(res => res.json()).then(json => console.log(json))