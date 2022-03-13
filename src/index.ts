/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05}

	//R01 , R02

	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	const question = (str: string) => new Promise((resolve) => rl.question(str, resolve));

	const totalAlunos = Number(await question('Qual a quantidade de alunos ?')
	)
	
	// R03

	const alunos = []

	for (var i = 0;
		i < totalAlunos; i++) {

		const nomeAlunos = await question('Qual o nome do aluno ?')

		const notaAlunos = Number(await question('Qual a nota do aluno ?'));

		alunos[i] = [notaAlunos, nomeAlunos]
	}

// R04

const nota = alunos.sort((a: any, b: any) => b[1] - a[1])

const maiorNota = nota.sort().reverse()

console.log('O aluno com maior nota é:', maiorNota[0])

});
