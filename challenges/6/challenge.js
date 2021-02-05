/*
 * Soma Combinacional
 */
/* ENUNCIADO
 * Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
 * entre valores do conjunto que resultem na soma do número alvo.
 * 
 * Observações:
 * 
 * Todos os números, inclusive o alvo, serão inteiros positivos
 * O resultado não deve obter combinações com valores repetidos. Exemplo:
 *  
 *  combinate([2, 3, 5], 8) retornando
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,2,3],
 *       [3,3,2]  
 *       [3,5]
 *       [5,3]
 *   ]
 * 
 * Os valores do conjunto de dados podem se repetir entre si, como por exemplo:
 * 
 * combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.
 * 
 * 
 * Seguem mais alguns exemplos do retorno esperado:
 * 
 *  combinate([2, 3, 5], 8) deve retornar
 * 
 *  [
 *       [2,2,2,2],
 *       [2,3,3],
 *       [3,5]
 *   ]
*
*    outro exemplo: 
*
*    combinate([2, 3, 6, 7], 7) retorna
*
*    [
*       [2, 2, 3],
*       [7]
*    ]
 */

const combinate = (set, target) => {
	var result = [];
	var auxElement = 0;

	set.forEach(element => {
		if (element == target) {
			result.push([element]);
		}

		if (target % element == 0) {
			let totalElements = (target / element);

			if (totalElements > 1) {
				let elementCombinate = [];
				for (let i = 0; i < totalElements; i++) {
					elementCombinate.push(element);
				}

				result.push(elementCombinate);
			}
		}
		else {
			if (auxElement > 0 && target - (auxElement + element) > 0) {
				let teste = target - (auxElement + element);

				const found = set.find(element => element == teste);

				if (found > 0) {
					result.push([auxElement, found, element]);
				}
			}
		}

		if ((auxElement + element) == target) {
			result.push([auxElement, element]);
		}

		auxElement = element;

	});
	return result;
}

module.exports = combinate
