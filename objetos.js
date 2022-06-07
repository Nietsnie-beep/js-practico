class Student {
    constructor(name, age, cursosAprobados) {
        this._name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCursos(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
    set name(nombre){

        this._name = nombre;
    }
}

const estudiante = new Student('Nietsnie', 21, 'Javascript')

estudiante.name = "Alberto"
console.log(estudiante)