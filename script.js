// Real 500 Spanish Words Directory
const decks = {
    "Simple": [{"es": "S\u00ed", "en": "Yes"}, {"es": "No", "en": "No"}, {"es": "Hola", "en": "Hello"}, {"es": "Adi\u00f3s", "en": "Goodbye"}, {"es": "Por favor", "en": "Please"}, {"es": "Gracias", "en": "Thank you"}, {"es": "Perd\u00f3n", "en": "Sorry/Excuse me"}, {"es": "Agua", "en": "Water"}, {"es": "Pan", "en": "Bread"}, {"es": "Leche", "en": "Milk"}, {"es": "Queso", "en": "Cheese"}, {"es": "Carne", "en": "Meat"}, {"es": "Pollo", "en": "Chicken"}, {"es": "Pescado", "en": "Fish"}, {"es": "Manzana", "en": "Apple"}, {"es": "Naranja", "en": "Orange"}, {"es": "Pl\u00e1tano", "en": "Banana"}, {"es": "Uva", "en": "Grape"}, {"es": "Fresa", "en": "Strawberry"}, {"es": "Perro", "en": "Dog"}, {"es": "Gato", "en": "Cat"}, {"es": "P\u00e1jaro", "en": "Bird"}, {"es": "Pez", "en": "Fish (alive)"}, {"es": "Caballo", "en": "Horse"}, {"es": "Vaca", "en": "Cow"}, {"es": "Cerdo", "en": "Pig"}, {"es": "Oveja", "en": "Sheep"}, {"es": "Rojo", "en": "Red"}, {"es": "Azul", "en": "Blue"}, {"es": "Amarillo", "en": "Yellow"}, {"es": "Verde", "en": "Green"}, {"es": "Negro", "en": "Black"}, {"es": "Blanco", "en": "White"}, {"es": "Gris", "en": "Gray"}, {"es": "Marr\u00f3n", "en": "Brown"}, {"es": "Rosa", "en": "Pink"}, {"es": "Uno", "en": "One"}, {"es": "Dos", "en": "Two"}, {"es": "Tres", "en": "Three"}, {"es": "Cuatro", "en": "Four"}, {"es": "Cinco", "en": "Five"}, {"es": "Seis", "en": "Six"}, {"es": "Siete", "en": "Seven"}, {"es": "Ocho", "en": "Eight"}, {"es": "Nueve", "en": "Nine"}, {"es": "Diez", "en": "Ten"}, {"es": "Lunes", "en": "Monday"}, {"es": "Martes", "en": "Tuesday"}, {"es": "Mi\u00e9rcoles", "en": "Wednesday"}, {"es": "Jueves", "en": "Thursday"}, {"es": "Viernes", "en": "Friday"}, {"es": "S\u00e1bado", "en": "Saturday"}, {"es": "Domingo", "en": "Sunday"}, {"es": "Enero", "en": "January"}, {"es": "Febrero", "en": "February"}, {"es": "Marzo", "en": "March"}, {"es": "Abril", "en": "April"}, {"es": "Mayo", "en": "May"}, {"es": "Junio", "en": "June"}, {"es": "Julio", "en": "July"}, {"es": "Agosto", "en": "August"}, {"es": "Septiembre", "en": "September"}, {"es": "Octubre", "en": "October"}, {"es": "Noviembre", "en": "November"}, {"es": "Diciembre", "en": "December"}, {"es": "Hoy", "en": "Today"}, {"es": "Ma\u00f1ana", "en": "Tomorrow"}, {"es": "Ayer", "en": "Yesterday"}, {"es": "D\u00eda", "en": "Day"}, {"es": "Noche", "en": "Night"}, {"es": "Tarde", "en": "Afternoon/Late"}, {"es": "Feliz", "en": "Happy"}, {"es": "Triste", "en": "Sad"}, {"es": "Enojado", "en": "Angry"}, {"es": "Cansado", "en": "Tired"}, {"es": "Enfermo", "en": "Sick"}, {"es": "Sano", "en": "Healthy"}, {"es": "Grande", "en": "Big"}, {"es": "Peque\u00f1o", "en": "Small"}, {"es": "Alto", "en": "Tall/High"}, {"es": "Bajo", "en": "Short/Low"}, {"es": "Gordo", "en": "Fat"}, {"es": "Delgado", "en": "Thin"}, {"es": "Bueno", "en": "Good"}, {"es": "Malo", "en": "Bad"}, {"es": "Bonito", "en": "Pretty"}, {"es": "Feo", "en": "Ugly"}, {"es": "Caliente", "en": "Hot"}, {"es": "Fr\u00edo", "en": "Cold"}, {"es": "Nuevo", "en": "New"}, {"es": "Viejo", "en": "Old"}, {"es": "Joven", "en": "Young"}, {"es": "Hombre", "en": "Man"}, {"es": "Mujer", "en": "Woman"}, {"es": "Ni\u00f1o", "en": "Boy"}, {"es": "Ni\u00f1a", "en": "Girl"}, {"es": "Padre", "en": "Father"}, {"es": "Madre", "en": "Mother"}, {"es": "Hijo", "en": "Son"}, {"es": "Hija", "en": "Daughter"}, {"es": "Hermano", "en": "Brother"}, {"es": "Hermana", "en": "Sister"}, {"es": "Abuelo", "en": "Grandfather"}, {"es": "Abuela", "en": "Grandmother"}, {"es": "T\u00edo", "en": "Uncle"}, {"es": "T\u00eda", "en": "Aunt"}, {"es": "Primo", "en": "Cousin (male)"}, {"es": "Prima", "en": "Cousin (female)"}, {"es": "Amigo", "en": "Friend (male)"}, {"es": "Amiga", "en": "Friend (female)"}, {"es": "Yo", "en": "I"}, {"es": "T\u00fa", "en": "You (informal)"}, {"es": "\u00c9l", "en": "He"}, {"es": "Ella", "en": "She"}, {"es": "Nosotros", "en": "We"}, {"es": "Ellos", "en": "They"}, {"es": "M\u00edo", "en": "Mine"}, {"es": "Tuyo", "en": "Yours"}, {"es": "Casa", "en": "House"}, {"es": "Puerta", "en": "Door"}, {"es": "Ventana", "en": "Window"}, {"es": "Mesa", "en": "Table"}, {"es": "Silla", "en": "Chair"}, {"es": "Cama", "en": "Bed"}, {"es": "Ba\u00f1o", "en": "Bathroom"}, {"es": "Cocina", "en": "Kitchen"}, {"es": "Sala", "en": "Living room"}, {"es": "Jard\u00edn", "en": "Garden"}, {"es": "Coche", "en": "Car"}, {"es": "Bicicleta", "en": "Bicycle"}, {"es": "Tren", "en": "Train"}, {"es": "Avi\u00f3n", "en": "Airplane"}, {"es": "Barco", "en": "Boat"}, {"es": "Calle", "en": "Street"}, {"es": "Ciudad", "en": "City"}, {"es": "Pa\u00eds", "en": "Country"}, {"es": "Mundo", "en": "World"}, {"es": "Sol", "en": "Sun"}, {"es": "Luna", "en": "Moon"}, {"es": "Estrella", "en": "Star"}, {"es": "Cielo", "en": "Sky"}, {"es": "Fuego", "en": "Fire"}, {"es": "Tierra", "en": "Earth/Land"}, {"es": "Aire", "en": "Air"}, {"es": "Ir", "en": "To go"}, {"es": "Venir", "en": "To come"}, {"es": "Ser", "en": "To be (permanent)"}, {"es": "Estar", "en": "To be (temporary)"}, {"es": "Tener", "en": "To have"}, {"es": "Hacer", "en": "To do/make"}, {"es": "Decir", "en": "To say/tell"}, {"es": "Poder", "en": "To be able to"}, {"es": "Saber", "en": "To know (facts)"}, {"es": "Querer", "en": "To want"}, {"es": "Comer", "en": "To eat"}, {"es": "Beber", "en": "To drink"}, {"es": "Dormir", "en": "To sleep"}, {"es": "Hablar", "en": "To speak"}, {"es": "Tarde (Early)", "en": "Evening"}, {"es": "Reloj", "en": "Watch"}, {"es": "Zapato", "en": "Shoe"}, {"es": "Sopa", "en": "Soup"}, {"es": "Caf\u00e9", "en": "Coffee"}, {"es": "T\u00e9", "en": "Tea"}, {"es": "Cerveza", "en": "Beer"}, {"es": "Vino", "en": "Wine"}, {"es": "Az\u00facar", "en": "Sugar"}, {"es": "Sal", "en": "Salt"}, {"es": "Huevo", "en": "Egg"}, {"es": "Carro", "en": "Car"}, {"es": "Bolsa", "en": "Bag"}, {"es": "Dinero", "en": "Money"}],
    "Intermediate": [{"es": "Tiempo", "en": "Time/Weather"}, {"es": "Hora", "en": "Hour"}, {"es": "Minuto", "en": "Minute"}, {"es": "Segundo", "en": "Second"}, {"es": "Semana", "en": "Week"}, {"es": "Mes", "en": "Month"}, {"es": "A\u00f1o", "en": "Year"}, {"es": "Siglo", "en": "Century"}, {"es": "Siempre", "en": "Always"}, {"es": "Nunca", "en": "Never"}, {"es": "A veces", "en": "Sometimes"}, {"es": "Pronto", "en": "Soon"}, {"es": "Tarde (adv)", "en": "Late"}, {"es": "Temprano", "en": "Early"}, {"es": "Aqu\u00ed", "en": "Here"}, {"es": "All\u00ed", "en": "There"}, {"es": "Cerca", "en": "Near"}, {"es": "Lejos", "en": "Far"}, {"es": "Arriba", "en": "Up/Above"}, {"es": "Abajo", "en": "Down/Below"}, {"es": "Izquierda", "en": "Left"}, {"es": "Derecha", "en": "Right"}, {"es": "Adentro", "en": "Inside"}, {"es": "Afuera", "en": "Outside"}, {"es": "F\u00e1cil", "en": "Easy"}, {"es": "Dif\u00edcil", "en": "Difficult"}, {"es": "Suave", "en": "Soft"}, {"es": "Duro", "en": "Hard"}, {"es": "Limpio", "en": "Clean"}, {"es": "Sucio", "en": "Dirty"}, {"es": "Rico", "en": "Rich/Tasty"}, {"es": "Pobre", "en": "Poor"}, {"es": "Caro", "en": "Expensive"}, {"es": "Barato", "en": "Cheap"}, {"es": "Fuerte", "en": "Strong"}, {"es": "D\u00e9bil", "en": "Weak"}, {"es": "Lleno", "en": "Full"}, {"es": "Vac\u00edo", "en": "Empty"}, {"es": "Abierto", "en": "Open"}, {"es": "Cerrado", "en": "Closed"}, {"es": "Cabeza", "en": "Head"}, {"es": "Pelo", "en": "Hair"}, {"es": "Ojo", "en": "Eye"}, {"es": "Oreja", "en": "Ear"}, {"es": "Nariz", "en": "Nose"}, {"es": "Boca", "en": "Mouth"}, {"es": "Diente", "en": "Tooth"}, {"es": "Brazo", "en": "Arm"}, {"es": "Mano", "en": "Hand"}, {"es": "Dedo", "en": "Finger"}, {"es": "Pierna", "en": "Leg"}, {"es": "Pie", "en": "Foot"}, {"es": "Espalda", "en": "Back"}, {"es": "Est\u00f3mago", "en": "Stomach"}, {"es": "Coraz\u00f3n", "en": "Heart"}, {"es": "Sangre", "en": "Blood"}, {"es": "Camisa", "en": "Shirt"}, {"es": "Pantal\u00f3n", "en": "Pants"}, {"es": "Zapato", "en": "Shoe"}, {"es": "Calcet\u00edn", "en": "Sock"}, {"es": "Chaqueta", "en": "Jacket"}, {"es": "Abrigo", "en": "Coat"}, {"es": "Sombrero", "en": "Hat"}, {"es": "Vestido", "en": "Dress"}, {"es": "Falda", "en": "Skirt"}, {"es": "Gafas", "en": "Glasses"}, {"es": "Reloj", "en": "Clock/Watch"}, {"es": "Anillo", "en": "Ring"}, {"es": "Escuela", "en": "School"}, {"es": "Maestro", "en": "Teacher"}, {"es": "Estudiante", "en": "Student"}, {"es": "Libro", "en": "Book"}, {"es": "Cuaderno", "en": "Notebook"}, {"es": "L\u00e1piz", "en": "Pencil"}, {"es": "Bol\u00edgrafo", "en": "Pen"}, {"es": "Papel", "en": "Paper"}, {"es": "Trabajo", "en": "Work/Job"}, {"es": "Oficina", "en": "Office"}, {"es": "Jefe", "en": "Boss"}, {"es": "Dinero", "en": "Money"}, {"es": "Banco", "en": "Bank"}, {"es": "Tienda", "en": "Store"}, {"es": "Mercado", "en": "Market"}, {"es": "Hospital", "en": "Hospital"}, {"es": "M\u00e9dico", "en": "Doctor"}, {"es": "Enfermera", "en": "Nurse"}, {"es": "Polic\u00eda", "en": "Police"}, {"es": "Bombero", "en": "Firefighter"}, {"es": "Restaurante", "en": "Restaurant"}, {"es": "Hotel", "en": "Hotel"}, {"es": "Aeropuerto", "en": "Airport"}, {"es": "Estaci\u00f3n", "en": "Station"}, {"es": "Iglesia", "en": "Church"}, {"es": "Parque", "en": "Park"}, {"es": "Playa", "en": "Beach"}, {"es": "Monta\u00f1a", "en": "Mountain"}, {"es": "R\u00edo", "en": "River"}, {"es": "Bosque", "en": "Forest"}, {"es": "Isla", "en": "Island"}, {"es": "Lago", "en": "Lake"}, {"es": "Mar", "en": "Sea"}, {"es": "Oc\u00e9ano", "en": "Ocean"}, {"es": "Nube", "en": "Cloud"}, {"es": "Lluvia", "en": "Rain"}, {"es": "Nieve", "en": "Snow"}, {"es": "Viento", "en": "Wind"}, {"es": "Tormenta", "en": "Storm"}, {"es": "Conocer", "en": "To know (people/places)"}, {"es": "Pensar", "en": "To think"}, {"es": "Creer", "en": "To believe"}, {"es": "Encontrar", "en": "To find"}, {"es": "Buscar", "en": "To look for"}, {"es": "Dar", "en": "To give"}, {"es": "Tomar", "en": "To take/drink"}, {"es": "Pasar", "en": "To pass/spend time"}, {"es": "Deber", "en": "To owe/must"}, {"es": "Poner", "en": "To put"}, {"es": "Llevar", "en": "To carry/wear"}, {"es": "Dejar", "en": "To leave/let"}, {"es": "Seguir", "en": "To follow/continue"}, {"es": "Llamar", "en": "To call"}, {"es": "Vivir", "en": "To live"}, {"es": "Sentir", "en": "To feel"}, {"es": "Tratar", "en": "To try/treat"}, {"es": "Mirar", "en": "To look at"}, {"es": "Escuchar", "en": "To listen"}, {"es": "Esperar", "en": "To wait/hope"}, {"es": "Entender", "en": "To understand"}, {"es": "Comprar", "en": "To buy"}, {"es": "Vender", "en": "To sell"}, {"es": "Pagar", "en": "To pay"}, {"es": "Jugar", "en": "To play"}, {"es": "Leer", "en": "To read"}, {"es": "Escribir", "en": "To write"}, {"es": "Correr", "en": "To run"}, {"es": "Caminar", "en": "To walk"}, {"es": "Viajar", "en": "To travel"}, {"es": "Aprender", "en": "To learn"}, {"es": "Ense\u00f1ar", "en": "To teach"}, {"es": "Ganar", "en": "To win/earn"}, {"es": "Perder", "en": "To lose"}, {"es": "Empezar", "en": "To begin"}, {"es": "Terminar", "en": "To finish"}, {"es": "Cambiar", "en": "To change"}, {"es": "Necesitar", "en": "To need"}, {"es": "Ayudar", "en": "To help"}, {"es": "Pedir", "en": "To ask for"}, {"es": "Preguntar", "en": "To ask a question"}, {"es": "Recordar", "en": "To remember"}, {"es": "Olvidar", "en": "To forget"}, {"es": "Cantar", "en": "To sing"}, {"es": "Bailar", "en": "To dance"}, {"es": "Re\u00edr", "en": "To laugh"}, {"es": "Llorar", "en": "To cry"}, {"es": "Amar", "en": "To love"}, {"es": "Odiar", "en": "To hate"}],
    "Difficult": [{"es": "Desarrollo", "en": "Development"}, {"es": "Conocimiento", "en": "Knowledge"}, {"es": "Experiencia", "en": "Experience"}, {"es": "Gobierno", "en": "Government"}, {"es": "Econom\u00eda", "en": "Economy"}, {"es": "Sociedad", "en": "Society"}, {"es": "Naturaleza", "en": "Nature"}, {"es": "Medio ambiente", "en": "Environment"}, {"es": "Investigaci\u00f3n", "en": "Research"}, {"es": "Tecnolog\u00eda", "en": "Technology"}, {"es": "Cultura", "en": "Culture"}, {"es": "Independencia", "en": "Independence"}, {"es": "Responsabilidad", "en": "Responsibility"}, {"es": "Oportunidad", "en": "Opportunity"}, {"es": "Caracter\u00edsticas", "en": "Characteristics"}, {"es": "Consecuencia", "en": "Consequence"}, {"es": "Significado", "en": "Meaning"}, {"es": "Pensamiento", "en": "Thought"}, {"es": "Sentimiento", "en": "Feeling"}, {"es": "Comportamiento", "en": "Behavior"}, {"es": "Descubrimiento", "en": "Discovery"}, {"es": "Enfermedad", "en": "Disease"}, {"es": "Salud", "en": "Health"}, {"es": "Seguridad", "en": "Security"}, {"es": "Peligro", "en": "Danger"}, {"es": "Verdad", "en": "Truth"}, {"es": "Mentira", "en": "Lie"}, {"es": "Libertad", "en": "Freedom"}, {"es": "Justicia", "en": "Justice"}, {"es": "Derecho", "en": "Right/Law"}, {"es": "Acuerdo", "en": "Agreement"}, {"es": "Desacuerdo", "en": "Disagreement"}, {"es": "Pol\u00edtica", "en": "Politics"}, {"es": "Democracia", "en": "Democracy"}, {"es": "Elecci\u00f3n", "en": "Election"}, {"es": "Ciudadano", "en": "Citizen"}, {"es": "Impuesto", "en": "Tax"}, {"es": "Inversi\u00f3n", "en": "Investment"}, {"es": "Beneficio", "en": "Benefit/Profit"}, {"es": "P\u00e9rdida", "en": "Loss"}, {"es": "Deuda", "en": "Debt"}, {"es": "Mercado", "en": "Market"}, {"es": "Empresa", "en": "Company/Enterprise"}, {"es": "Industria", "en": "Industry"}, {"es": "Producto", "en": "Product"}, {"es": "Servicio", "en": "Service"}, {"es": "Calidad", "en": "Quality"}, {"es": "Cantidad", "en": "Quantity"}, {"es": "Mayor\u00eda", "en": "Majority"}, {"es": "Minor\u00eda", "en": "Minority"}, {"es": "Ventaja", "en": "Advantage"}, {"es": "Desventaja", "en": "Disadvantage"}, {"es": "\u00c9xito", "en": "Success"}, {"es": "Fracaso", "en": "Failure"}, {"es": "Objetivo", "en": "Objective/Goal"}, {"es": "Prop\u00f3sito", "en": "Purpose"}, {"es": "Raz\u00f3n", "en": "Reason"}, {"es": "Causa", "en": "Cause"}, {"es": "Efecto", "en": "Effect"}, {"es": "Soluci\u00f3n", "en": "Solution"}, {"es": "Problema", "en": "Problem"}, {"es": "Duda", "en": "Doubt"}, {"es": "Certeza", "en": "Certainty"}, {"es": "Realidad", "en": "Reality"}, {"es": "Fantas\u00eda", "en": "Fantasy"}, {"es": "Imaginaci\u00f3n", "en": "Imagination"}, {"es": "Memoria", "en": "Memory"}, {"es": "Atenci\u00f3n", "en": "Attention"}, {"es": "Inter\u00e9s", "en": "Interest"}, {"es": "Esfuerzo", "en": "Effort"}, {"es": "Habilidad", "en": "Skill/Ability"}, {"es": "Talento", "en": "Talent"}, {"es": "Arte", "en": "Art"}, {"es": "Ciencia", "en": "Science"}, {"es": "Historia", "en": "History"}, {"es": "Literatura", "en": "Literature"}, {"es": "M\u00fasica", "en": "Music"}, {"es": "Religi\u00f3n", "en": "Religion"}, {"es": "Filosof\u00eda", "en": "Philosophy"}, {"es": "Psicolog\u00eda", "en": "Psychology"}, {"es": "Educaci\u00f3n", "en": "Education"}, {"es": "Ense\u00f1anza", "en": "Teaching"}, {"es": "Aprendizaje", "en": "Learning"}, {"es": "Evaluaci\u00f3n", "en": "Evaluation"}, {"es": "Proyecto", "en": "Project"}, {"es": "Programa", "en": "Program"}, {"es": "Sistema", "en": "System"}, {"es": "Red", "en": "Network"}, {"es": "Comunicaci\u00f3n", "en": "Communication"}, {"es": "Informaci\u00f3n", "en": "Information"}, {"es": "Mensaje", "en": "Message"}, {"es": "Noticia", "en": "News"}, {"es": "Periodista", "en": "Journalist"}, {"es": "Autor", "en": "Author"}, {"es": "Lector", "en": "Reader"}, {"es": "Espectador", "en": "Spectator"}, {"es": "P\u00fablico", "en": "Public/Audience"}, {"es": "Privado", "en": "Private"}, {"es": "Secreto", "en": "Secret"}, {"es": "Misterio", "en": "Mystery"}, {"es": "Milagro", "en": "Miracle"}, {"es": "Destino", "en": "Destiny"}, {"es": "Casualidad", "en": "Coincidence"}, {"es": "Suerte", "en": "Luck"}, {"es": "Paz", "en": "Peace"}, {"es": "Guerra", "en": "War"}, {"es": "Violencia", "en": "Violence"}, {"es": "Arma", "en": "Weapon"}, {"es": "Ej\u00e9rcito", "en": "Army"}, {"es": "Soldado", "en": "Soldier"}, {"es": "Batalla", "en": "Battle"}, {"es": "Victoria", "en": "Victory"}, {"es": "Derrota", "en": "Defeat"}, {"es": "Crimen", "en": "Crime"}, {"es": "Asesinato", "en": "Murder"}, {"es": "Ladr\u00f3n", "en": "Thief"}, {"es": "C\u00e1rcel", "en": "Prison"}, {"es": "Juez", "en": "Judge"}, {"es": "Juicio", "en": "Trial"}, {"es": "Ley", "en": "Law"}, {"es": "Regla", "en": "Rule"}, {"es": "Norma", "en": "Norm/Standard"}, {"es": "Excepci\u00f3n", "en": "Exception"}, {"es": "Ejemplo", "en": "Example"}, {"es": "Detalle", "en": "Detail"}, {"es": "Resumen", "en": "Summary"}, {"es": "Principio", "en": "Beginning/Principle"}, {"es": "Final", "en": "End"}, {"es": "Mitad", "en": "Half/Middle"}, {"es": "Fondo", "en": "Bottom/Background"}, {"es": "Superficie", "en": "Surface"}, {"es": "Profundidad", "en": "Depth"}, {"es": "Altura", "en": "Height"}, {"es": "Peso", "en": "Weight"}, {"es": "Medida", "en": "Measurement"}, {"es": "Distancia", "en": "Distance"}, {"es": "Velocidad", "en": "Speed"}, {"es": "Fuerza", "en": "Force"}, {"es": "Energ\u00eda", "en": "Energy"}, {"es": "Luz", "en": "Light"}, {"es": "Sombra", "en": "Shadow"}, {"es": "Sonido", "en": "Sound"}, {"es": "Silencio", "en": "Silence"}, {"es": "Ruido", "en": "Noise"}, {"es": "Voz", "en": "Voice"}, {"es": "Grito", "en": "Shout"}, {"es": "Susurro", "en": "Whisper"}, {"es": "Lograr", "en": "To achieve"}, {"es": "Desarrollar", "en": "To develop"}, {"es": "Establecer", "en": "To establish"}, {"es": "Reconocer", "en": "To recognize"}, {"es": "Alcanzar", "en": "To reach/achieve"}, {"es": "Comprender", "en": "To comprehend"}, {"es": "Demostrar", "en": "To demonstrate"}, {"es": "Resolver", "en": "To resolve"}, {"es": "Prevenir", "en": "To prevent"}, {"es": "Proteger", "en": "To protect"}, {"es": "Mejorar", "en": "To improve"}, {"es": "Aumentar", "en": "To increase"}, {"es": "Reducir", "en": "To reduce"}, {"es": "Evitar", "en": "To avoid"}, {"es": "Suponer", "en": "To suppose"}, {"es": "Mantener", "en": "To maintain"}, {"es": "Significar", "en": "To mean"}, {"es": "Parecer", "en": "To seem"}, {"es": "Resultar", "en": "To result/turn out"}, {"es": "Producir", "en": "To produce"}, {"es": "Ocurrir", "en": "To occur"}]
};

// State
let currentDifficulty = "Simple";
let activeDeck = [];
let currentIndex = 0;
let score = 0;

let settings = {
    haptic: true,
    sound: true
};

// DOM Elements
const wordDisplay = document.getElementById('word-display');
const quizOptionsContainer = document.getElementById('quiz-options');
const answerView = document.getElementById('answer-view');
const meaningDisplay = document.getElementById('meaning-display');
const statusMsg = document.getElementById('status-msg');
const scoreDisplay = document.getElementById('score-display');
const btnNext = document.getElementById('btn-next');
const btnSpeak = document.getElementById('btn-speak');
const appContainer = document.getElementById('app');

const settingsModal = document.getElementById('settings-modal');
const btnSettings = document.getElementById('btn-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const diffSelect = document.getElementById('difficulty-select');
const toggleHaptic = document.getElementById('toggle-haptic');
const toggleSound = document.getElementById('toggle-sound');

// Audio Context for beeps
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playBeep(type) {
    if (!settings.sound) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    } else {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

function speakWord(word) {
    if (!settings.sound) return;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
}

function triggerHaptic(duration) {
    if (settings.haptic && navigator.vibrate) {
        navigator.vibrate(duration);
    }
}

function shuffle(array) {
    let curr = array.length, rand;
    while (curr != 0) {
        rand = Math.floor(Math.random() * curr);
        curr--;
        [array[curr], array[rand]] = [array[rand], array[curr]];
    }
    return array;
}

function loadDeck() {
    activeDeck = shuffle([...decks[currentDifficulty]]).slice(0, 50); // Play 50 cards per session
    currentIndex = 0;
    score = 0;
    updateScore();
    showCard();
}

function updateScore() {
    scoreDisplay.innerText = score;
}

function showCard() {
    appContainer.style.backgroundColor = "";
    answerView.classList.add('hidden');
    quizOptionsContainer.classList.remove('hidden');
    quizOptionsContainer.innerHTML = ''; // clear old buttons

    if (currentIndex >= activeDeck.length) {
        wordDisplay.innerText = "¡Completado!";
        wordDisplay.style.animation = "none";
        quizOptionsContainer.innerHTML = `<h2 style="color:var(--primary-color)">Puntuación final: ${score} / ${activeDeck.length}</h2>`;
        return;
    }
    
    const card = activeDeck[currentIndex];
    wordDisplay.innerText = card.es;

    // Generate 4 multiple choice options
    let options = [card.en];
    
    // Get 3 random wrong answers from the same difficulty
    let pool = decks[currentDifficulty].filter(c => c.en !== card.en);
    pool = shuffle(pool);
    options.push(pool[0].en, pool[1].en, pool[2].en);
    
    // Shuffle the 4 options
    options = shuffle(options);

    // Create buttons
    options.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(opt, card.en);
        quizOptionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, correct) {
    // Disable all buttons to prevent double clicking
    const btns = quizOptionsContainer.querySelectorAll('.quiz-btn');
    btns.forEach(b => b.disabled = true);

    if (selected === correct) {
        score++;
        updateScore();
        playBeep('correct');
        triggerHaptic(100);
        appContainer.style.backgroundColor = "rgba(76, 175, 80, 0.2)"; // Green tint
        
        // Auto-advance on correct after a short delay
        setTimeout(() => {
            currentIndex++;
            showCard();
        }, 600);

    } else {
        playBeep('incorrect');
        triggerHaptic(300);
        appContainer.style.backgroundColor = "rgba(244, 67, 54, 0.2)"; // Red tint
        
        // Show Answer View
        quizOptionsContainer.classList.add('hidden');
        answerView.classList.remove('hidden');
        meaningDisplay.innerText = correct;
        statusMsg.innerText = "Incorrecto";
        statusMsg.className = "status-msg status-incorrect";
    }
}

// Event Listeners
btnNext.addEventListener('click', () => {
    currentIndex++;
    showCard();
});

btnSpeak.addEventListener('click', () => {
    if (currentIndex < activeDeck.length) {
        speakWord(activeDeck[currentIndex].es);
    }
});

// Settings
btnSettings.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
});

btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
    
    settings.haptic = toggleHaptic.checked;
    settings.sound = toggleSound.checked;
    
    const newDiff = diffSelect.value;
    if (newDiff !== currentDifficulty) {
        currentDifficulty = newDiff;
        loadDeck();
    }
});

// Init
loadDeck();
