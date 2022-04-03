class Moedas{

    real;
    dolar;
    euro;

    constructor() {

        this.dolar = 4.66;
        this.euro = 5.15;
        this.libra = 6.11;

        this.dolar1 = 4.66;
        this.euro1 = 5.15;
        this.libra1 = 6.11;
    }

    converter_RealDolar() {

        this.real = document.getElementById("realDolar").value;
        const valorEmDolar = parseFloat(this.real) / this.dolar;

        document.getElementById("resultadoRealDolar").innerText = valorEmDolar;

    }

    converter_RealEuro() {

        this.real = document.getElementById("realEuro").value;
        const valorEmEuro = parseFloat(this.real) / this.euro;

        document.getElementById("resultadoRealEuro").innerText = valorEmEuro;
    }

    converter_RealLibra() {

        this.real = document.getElementById("realLibra").value;
        const valorEmLibra = parseFloat(this.real) / this.libra;

        document.getElementById("resultadoRealLibra").innerText = valorEmLibra;
    }




    converter_DolarReal() {

        this.dolar1 = document.getElementById("dolarReal").value;
        const valorEmRealD = parseFloat(this.dolar) * this.dolar1;

        document.getElementById("resultadoDolarReal").innerText = valorEmRealD;
    }

    converter_EuroReal() {

        this.euro1 = document.getElementById("euroReal").value;
        const valorEmRealE = parseFloat(this.euro) * this.euro1;

        document.getElementById("resultadoEuroReal").innerText = valorEmRealE;
    }

    converter_LibraReal() {

        this.libra1 = document.getElementById("libraReal").value;
        const valorEmRealL = parseFloat(this.libra) * this.libra1;

        document.getElementById("resultadoLibraReal").innerText = valorEmRealL;
    }
}

    const conversao = new Moedas();