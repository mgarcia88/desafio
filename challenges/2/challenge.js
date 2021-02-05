/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = unormalized => {
	var id = unormalized.id;
	var reports = unormalized.reports;
	var reportsId = [];
	var reportsNormalized = {};

	var normalizedReport;

	reports.forEach(element => {
		reportsId.push(element.id);

		normalizedReport = {
			"id": element.id,
			"user": unormalized.user.id,
			"document": element.result.document,
			"status": element.result.status,

		};

		reportsNormalized[element.id] = normalizedReport;

	});

	return {
		"results": {
			[id]: {
				id: id,
				user: unormalized.user.id,
				reports: reportsId
			}
		},
		"users": {
			[unormalized.user.id]: { "id": unormalized.user.id, "name": unormalized.user.name }
		},
		"reports": reportsNormalized
	}
}

module.exports = normalizeData
