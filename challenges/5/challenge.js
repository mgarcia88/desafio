/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
		currentPage: 1,
		perPage: 10,
		total: 20,
		totalPages: 2,
		data: [
			{
				userId: 1,
				id: 1,
				title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
				body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
			},
			[...]
		]
	}
 */

const posts = require('./posts.json')

const paginate = (pageNumber, itemsPerPage) => {
	if (itemsPerPage == null && typeof (pageNumber) == "object") {
		return {
			currentPage: 1,
			perPage: 10,
			total: pageNumber.length,
			totalPages: (pageNumber.length / 10),
			data: pageNumber.slice(0, 10)
		}
	}

	if (isNaN(parseInt(itemsPerPage))) { throw /Expect int and got string/ }

	if (pageNumber == null || pageNumber == undefined) pageNumber = 1;

	if (itemsPerPage == null || itemsPerPage == undefined) itemsPerPage = 10;

	return {
		currentPage: pageNumber,
		perPage: itemsPerPage,
		total: posts.length,
		totalPages: Math.ceil(posts.length / itemsPerPage),
		data: posts.slice(0, itemsPerPage)
	}
}

module.exports = paginate