import { useState } from "react";

const resp = fetch("https://jsonplaceholder.typicode.com/todos/1", {
	headers: {
		"content-type": "application/json",
	},
	method: "GET",
})
	.then((respone) => {
		if (!respone.ok) {
			throw new Error("Network response was not ok");
		}

		return respone.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("Error: ", error);
	});

type Todos = {
	userId: string;
	id: number;
	title: string;
	completed: boolean;
};
// 기존의 then()방식은 콜백이 중첩되어 가독성이 떨어짐.
// ES2017부터 async/await 사용

const Ex2 = () => {
	const [todos, setTodos] = useState<Todos[]>([]);

	// GET method test
	const getTodos = async () => {
		try {
			const resp = await fetch("https://jsonplaceholder.typicode.com/todos");

			if (!resp.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await resp.json();
			setTodos(data);
		} catch (error) {
			console.error(error);
		}
	};
};
