class Macara {
    constructor(model, gmax, lbrat, nr_scenariu, containere){
        this.model = model;
        this.gmax = gmax;
        this.lbrat = lbrat;
        this.nr_scenariu = nr_scenariu;
        this.containere = containere;
    }

    ridica() {
        console.log('Ridica container')
    }

    coboara() {
        console.log('Cobaara container')
    }

    miscaBratCorabie() {
        console.log('Misca bratul srpe Corabie')
    }

    miscaBratDoc() {
        console.log('Misca bratul spre DOC')
    }

    caz1() {
        console.log('Greutate prea mare. Oprit.')
    }

    caz2() {
        console.log('Greutate prea mare. Misca la urmatorul.')
    }

    start() {
        var x = 0;
        switch (this.nr_scenariu) {
            case 0: {
                for (x in this.containere) {
                    this.miscaBratCorabie();
                    if (this.containere[x] < this.gmax) {
                        this.ridica();
                        this.miscaBratDoc();
                        this.coboara()
                    } else{
                        this.caz1()
                        break;
                    }
                }
                break;
            }
            case 1: {
                for (x in this.containere) {
                    this.miscaBratCorabie();
                    if (x < this.gmax) {
                        this.ridica();
                        this.miscaBratDoc();
                        this.coboara()
                    } else {
                        this.caz2();
                        continue;
                    }
                }
            }
        }
    }
}

window.onload = function (ev) {
    cont = [1000, 2433, 3243, 1233, 500];
    Mac = new Macara('M14',3000,100, 1, cont)
    Mac.start()
}