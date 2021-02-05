/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
	let widthPosition = htmlTemplate.indexOf("width");
	let heightPosition = htmlTemplate.indexOf("height");
	let heightValue = 0;
	let widthValue = 0;

	if (widthPosition > 0 && heightPosition > 0) {
		widthPosition += 7;
		heightPosition += 8;

		let finalPosition = htmlTemplate.substr(heightPosition).indexOf('"');
		heightValue = htmlTemplate.substr(heightPosition, finalPosition);

		finalPosition = htmlTemplate.substr(widthPosition).indexOf(";");
		widthValue = htmlTemplate.substr(widthPosition, finalPosition);

		return {
			width: parseInt(widthValue.replace('%', '').replace("px", "")),
			height: parseInt(heightValue.replace('%', '').replace("px", ""))
		};
	}

	return {
		width: 0,
		height: 0
	}
}

module.exports = extractSize;