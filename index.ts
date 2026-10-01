    type Consumidor = {
        nome: string;
        idade: number;
        email: string;
    };

    function criarConsumidor(
        nome: string,
        idade: number,
        email: string
    ): Consumidor {
        return {
            nome,
            idade,
            email
        };
    }

    function calcularMediaIdade(consumidores: Consumidor[]): number {
        const soma = consumidores.reduce(
            (total, consumidor) => total + consumidor.idade,
            0
        );

        return soma / consumidores.length;
    }

    function obterMaiorMenorIdade(consumidores: Consumidor[]): {
        maisVelho: Consumidor;
        maisNovo: Consumidor;
    } {
        const maisVelho = consumidores.reduce((anterior, atual) =>
        atual.idade > anterior.idade ? atual : anterior
    );

    const maisNovo = consumidores.reduce((anterior, atual) =>
        atual.idade < anterior.idade ? atual :  anterior
    );

    return { maisVelho, maisNovo};
    }

    const consumidores: Consumidor[] = [];

    consumidores.push(criarConsumidor("Douglas", 40, "douglas.alex.1212@gmail.com"));
    consumidores.push(criarConsumidor("Alex", 33, "sandyalexg@gmail.com"));
    consumidores.push(criarConsumidor("João", 19, "jalfredo2303@gmail.com"));
    consumidores.push(criarConsumidor("Julia", 18, "jstelinha@gmail.com"));
    consumidores.push(criarConsumidor("Jeremiah Justin Simms", 22, "CyrusWifi@gmail.com"));

    const mediaIdade = calcularMediaIdade(consumidores);

    const { maisVelho, maisNovo } =
        obterMaiorMenorIdade(consumidores);

    console.log("Cosumidores Cadastrados");
    console.log(consumidores);

    console.log("Idades e media dos consumidores");

    console.log(`Media das idades: ${mediaIdade.toFixed(2)} anos`);

    console.log(`consumidor mais velho: ${maisVelho.nome}, ${maisVelho.idade} anos`);

    console.log(`Consumidor mais novo: ${maisNovo.nome}, ${maisNovo.idade} anos`);

