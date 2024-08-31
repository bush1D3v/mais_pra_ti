import * as readline from "node:readline";

/**
 * Exercise 1
 *
 * Function that returns "even" or "odd" based on a given number.
 *
 * @param value - A number to check if it is even or odd
 *
 * @returns "even" or "odd"
 */
function checkEvenOdd(value: number): string {
    return value % 2 === 0 ? "Par" : "Ímpar";
}

/**
 * Exercise 2
 *
 * Categorize age into different career stages.
 *
 * @param age - The age to categorize
 *
 * @returns The career stage based on the age
 */
function checkCareerCategory(age: number): string {
    if (age < 18) return "Estagiário";

    if (age < 24) return "Junior";

    if (age < 30) return "Pleno";

    if (age < 40) return "Senior";

    return "Tech Lead";
}

/**
 * Exercise 3
 *
 * Classify a grade into "Aprovado", "Recuperação", or "Reprovado".
 *
 * @param grade - The grade to classify (0 to 10)
 *
 * @returns The classification based on the grade
 */
function classifyGrade(grade: number): string {
    if (grade >= 7) return "Aprovado";

    if (grade >= 5) return "Recuperação";

    return "Reprovado";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Exercise 4
 *
 * Show the menu in the console.
 *
 * @returns void
 */
function showMenu(): void {
    function displayMenu() {
        console.log("Escolha uma opção:");
        console.log("1. Verificar se um número é par ou ímpar");
        console.log("2. Categorizar idade");
        console.log("3. Classificar nota");
        console.log("4. Sair");

        rl.question("Digite o número da opção desejada: ", (option: string) => {
            switch (option) {
                case "1":
                    rl.question("Digite um número: ", (num: string) => {
                        const value = Number.parseInt(num, 10);
                        console.log(`O número ${value} é ${checkEvenOdd(value)}.`);
                        displayMenu();
                    });
                    break;
                case "2":
                    rl.question("Digite uma idade: ", (num: string) => {
                        const age = Number.parseInt(num, 10);
                        console.log(
                            `A idade ${age} se enquadra na categoria: ${checkCareerCategory(age)}.`,
                        );
                        displayMenu();
                    });
                    break;
                case "3":
                    rl.question("Digite uma nota (0 a 10): ", (num: string) => {
                        const grade = Number.parseFloat(num);
                        console.log(
                            `A nota ${grade} é classificada como: ${classifyGrade(grade)}.`,
                        );
                        displayMenu();
                    });
                    break;
                case "4":
                    rl.close();
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    displayMenu();
                    break;
            }
        });
    }

    displayMenu();
}

/**
 * Exercise 5
 *
 * Calculate the IMC based on weight and height
 *
 * @param weight - The weight of the person
 * @param height - The height of the person
 *
 * @returns The IMC classification
 */
function imcCalculation(weight: number, height: number): string {
    const imc = weight / (height * height);

    if (imc < 18.5) return "Abaixo do Peso";
    if (imc < 24.9) return "Peso Normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade Grau I";
    if (imc < 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III";
}

/**
 * Exercise 6
 *
 * Function to determine the type of triangle based on its sides.
 *
 * @param A - Side A of the triangle
 * @param B - Side B of the triangle
 * @param C - Side C of the triangle
 *
 * @returns The type of triangle: "Isósceles", "Escaleno", "Equilátero" or "Não é um triângulo"
 */
function determineTriangleType(A: number, B: number, C: number): string {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) return "Equilátero";
        if (A === B || A === C || B === C) return "Isósceles";

        return "Escaleno";
    }
    return "Não é um triângulo";
}

/**
 * Exercise 7
 *
 * Function to calculate the total cost of apples based on the quantity purchased.
 *
 * @param quantity - The number of apples purchased
 *
 * @returns The total cost of the purchase
 */
function calculateAppleCost(quantity: number): number {
    const pricePerApple = quantity < 12 ? 0.3 : 0.25;
    return quantity * pricePerApple;
}

/**
 * Exercise 8
 *
 * Function to sort two distinct values in ascending order.
 *
 * @param value1 - The first value
 * @param value2 - The second value
 *
 * @returns A tuple with the values in ascending order
 */
function sortValues(value1: number, value2: number): [ number, number ] {
    if (value1 < value2) return [ value1, value2 ];

    return [ value2, value1 ];
}

/**
 * Exercise 9
 *
 * Function to display a countdown from 10 to 1 in the console.
 */
function countdown(): void {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

/**
 * Exercise 10
 *
 * Function to read an integer and print it 10 times on the console.
 *
 * @param num - The integer to be printed
 */
function printNumberTenTimes(num: number): void {
    for (let i = 0; i < 10; i++) {
        console.log(num);
    }
}

/**
 * Exercise 11
 *
 * Function to prompt the user for 5 numbers and calculate the total sum using a loop.
 */
function calculateSumOfFiveNumbers(): void {
    const readline = require("node:readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let sum = 0;
    let count = 0;

    function askForNumber() {
        if (count < 5) {
            readline.question(`Digite o número ${count + 1}: `, (num: string) => {
                sum += Number.parseFloat(num);
                count++;
                askForNumber();
            });
        } else {
            console.log(`A soma total dos 5 números é: ${sum}`);
            readline.close();
        }
    }

    askForNumber();
}

/**
 * Exercise 12
 *
 * Function to display the multiplication table of a number provided by the user (from 1 to 10).
 */
function displayMultiplicationTable(): void {
    const readline = require("node:readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Digite um número para ver a tabuada (de 1 a 10): ", (num: string) => {
        const number = Number.parseInt(num, 10);
        console.log(`Tabuada de ${number}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
        readline.close();
    });
}

/**
 * Exercise 13
 *
 * Function to receive decimal numbers until the user enters 0 and calculate the arithmetic mean of these numbers.
 */
function calculateArithmeticMean(): void {
    const readline = require("node:readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let sum = 0;
    let count = 0;

    function askForNumber() {
        readline.question("Digite um número decimal (ou 0 para finalizar): ", (num: string) => {
            const number = Number.parseFloat(num);
            if (number === 0) {
                if (count === 0) {
                    console.log("Nenhum número foi digitado.");
                } else {
                    const mean = sum / count;
                    console.log(`A média aritmética dos números digitados é: ${mean}`);
                }
                readline.close();
            } else {
                sum += number;
                count++;
                askForNumber();
            }
        });
    }

    askForNumber();
}

/**
 * Exercise 14
 *
 * Function to calculate the factorial of a number provided by the user using a loop.
 */
function calculateFactorial(): void {
    const readline = require("node:readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Digite um número para calcular o fatorial: ", (num: string) => {
        const number = Number.parseInt(num, 10);
        if (number < 0) {
            console.log("O fatorial não é definido para números negativos.");
        } else {
            let factorial = 1;
            for (let i = 1; i <= number; i++) {
                factorial *= i;
            }
            console.log(`O fatorial de ${number} é: ${factorial}`);
        }
        readline.close();
    });
}

/**
 * Exercise 15
 *
 * Function to generate and print the first 10 numbers of the Fibonacci sequence using a loop.
 */
function printFibonacciSequence(): void {
    const fibonacci: number[] = [ 0, 1 ];

    for (let i = 2; i < 10; i++) {
        fibonacci[ i ] = fibonacci[ i - 1 ] + fibonacci[ i - 2 ];
    }

    console.log("Os primeiros 10 números da sequência de Fibonacci são:");
    console.log(fibonacci.join(", "));
}
