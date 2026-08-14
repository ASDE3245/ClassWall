const listaJuegos = [
    {
        tipo: "test",
        titulo: "Acentuación: ¿Aguda, llana o esdrújula?",
        categoria: "Ortografía",
        desc: "Pon a prueba tus conocimientos sobre la clasificación de las palabras según su sílaba tónica.",
        preguntas: [
            {
                enunciado: "¿Qué tipo de palabra es 'lápiz'?",
                opcion: ["Aguda", "Llana", "Esdrújula", "Sobresdrújula"],
                correcta: 1 // Empieza a contar en 0 (0=Aguda, 1=Llana, etc.)
            },
            {
                enunciado: "¿Qué tipo de palabra es 'canción'?",
                opcion: ["Aguda", "Llana", "Esdrújula", "Sobresdrújula"],
                correcta: 0
            },
            {
                enunciado: "¿Qué tipo de palabra es 'médico'?",
                opcion: ["Aguda", "Llana", "Esdrújula", "Sobresdrújula"],
                correcta: 2
            }
        ]
    },
    {
        tipo: "test",
        titulo: "El Sujeto y el Predicado",
        categoria: "Gramática",
        desc: "Identifica correctamente los elementos básicos de la oración simple.",
        preguntas: [
            {
                enunciado: "En la oración 'Los alumnos estudian lengua', ¿cuál es el sujeto?",
                opcion: ["estudian lengua", "Los alumnos", "estudian", "lengua"],
                correcta: 1
            },
            {
                enunciado: "¿Cuál es el núcleo del predicado en 'El perro corre por el parque'?",
                opcion: ["perro", "parque", "corre", "El"],
                correcta: 2
            }
        ]
    }
];
