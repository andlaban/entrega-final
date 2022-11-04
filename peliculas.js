const peliculasBuenas = [
    {
        id:"Adaptation", 
        foto: "./media/peliculas/adaptation.jpg",
        banner: "./media/peliculas/adaptation-banner.gif",
        nombre: "Adaptation (2002)", 
        descripcion: "Surrealismo y chistes meta en un guionazo de Charlie Kaufman.",
        precio: 2000,
    },
    {
        id:"Pig", 
        foto: "./media/peliculas/pig.jpg",
        banner: "./media/peliculas/pig-banner.gif", 
        nombre: "Pig (2021)", 
        descripcion: "Tremendo drama sobre el aferro al amor perdido.",
        precio: 2000
    },
    {
        id:"TUWOMT", 
        foto: "./media/peliculas/the_unbearable_weight_of_massive_talent.jpg",
        banner: "./media/peliculas/the_unbearable_weight_of_massive_talent-banner.gif", 
        nombre: "The Unbearable Weight of Massive Talent (2022)", 
        descripcion: "Un homenaje a toda la carrera de Nicolas Cage en tono de comedia ochentera.",
        precio: 2000
    },
    {
        id:"BOTD", 
        foto: "./media/peliculas/bringing-out-the-dead.jpg",  
        banner: "./media/peliculas/bringing-out-the-dead-banner.gif",
        nombre: "Bringing Out the Dead (1999)", 
        descripcion: "Drama oscurísimo sobre la 'vida' de un conductor de ambulancia en el Nueva York de fines de los 90s.",
        precio: 2000
    },
    {
        id:"RA", 
        foto: "./media/peliculas/raising_arizona.jpg",  
        banner: "./media/peliculas/raising_arizona_banner.gif",
        nombre: "Raising Arizona (1987)", 
        descripcion: "Una comedia lisérgica como solo a los hermanos Coen se les podría ocurrir.",
        precio: 2000
    },
    {
        id:"LOW", 
        foto: "./media/peliculas/lord_of_war.jpg",  
        banner: "./media/peliculas/lord_of_war_banner.gif",
        nombre: "Lord Of War (2005)", 
        descripcion: "Drama con onda sobre el tráfico ilegal de armas.",
        precio: 2000
    },
    {
        id:"Mandy", 
        foto: "./media/peliculas/mandy.jpg",  
        banner: "./media/peliculas/mandy-banner.gif",
        nombre: "Mandy (2018)", 
        descripcion: "Es una cosa rara y hermosa, lerda al principio pero levanta.",
        precio: 2000
    },
    {
        id:"DL", 
        foto: "./media/peliculas/bad-lieutenant.jpg",  
        banner: "./media/peliculas/bad-lieutenant-banner.gif",
        nombre: "Bad Lieutenant: Port of Call New Orleans (2009)", 
        descripcion: "Por que un director Avant Garde se junta con un actor de hollywood para hacer un policial negro? No hay por que.",
        precio: 2000
    },
    {
        id:"LLV",
        foto: "./media/peliculas/Leaving-las-vegas.jpg",
        banner: "./media/peliculas/Leaving-las-vegas-banner.gif",
        nombre: "Leaving Las Vegas (1995)",
        descripcion: "Un guionista alcohólico se va a Las Vegas literalmente a tomarse la vida. Si, es un bajón.",
        precio: 2000
    },
    {
        id:"RRW",
        foto: "./media/peliculas/red-rock-west.jpg",
        banner: "./media/peliculas/red-rock-west-banner.gif",
        nombre: "Red Rock West (1993)",
        descripcion: "No la vi pero internet dice que es buena :D",
        precio: 2000
    },
    {
        id:"moonstruck",
        foto: "./media/peliculas/moonstruck.jpg",
        banner: "./media/peliculas/moonstruck-banner.gif",
        nombre: "Moonstruck (1987)",
        descripcion: "No la ví pero esta Cher (?",
        precio: 2000
    },
    {
        id:"joe",
        foto: "./media/peliculas/joe.jpg",
        banner: "./media/peliculas/joe-banner.gif",
        nombre: "Joe (2013)",
        descripcion: "Nic Cage con barba",
        precio: 2000
    },
    
];
const peliculasMalas = [
    {
        id:"LB", 
        foto: "./media/peliculas/left-behind.jpg", 
        banner: "./media/peliculas/left-behind-banner.gif",
        nombre: "Left Behind (2014)", 
        descripcion: "Nic interpreta a un piloto de avion durante el rapture, `<a href='https://www.youtube.com/watch?v=tuJSQ3Aejzs' target='_blank'>es basura</a>'`",
        precio: 1000
    },
    {
        id:"TSA", 
        foto: "./media/peliculas/the-sorcerers-apprentice.jpg", 
        banner: "./media/peliculas/the-sorcerers-apprentice-banner.gif",
        nombre: "The Sorcerer's Apprentice (2010)", 
        descripcion: "Piratas del Caribe pero sin lo divertido y con magos en lugar de piratas",
        precio: 1000
    },
    {
        id:"Rage", 
        foto: "./media/peliculas/rage-rokarev.jpg",  
        banner: "./media/peliculas/rage-rokarev-banner.jpg",
        nombre: "Rage/Tokarev (2014)", 
        descripcion: "Un embole atómico con un final todavía peor, ni siquiera hay gif para el banner.",
        precio: 1000
    },
    {
        id:"Next", 
        foto: "./media/peliculas/next.jpg",  
        banner: "./media/peliculas/next-banner.gif",
        nombre: "Next (2007)", 
        descripcion: "Ni <a href='https://i.imgflip.com/3120zm.jpg' target='_blank'>el meme</a> alcanza para que valga la pena verla",
        precio: 1000
    },
    {
        id:"COA", 
        foto: "./media/peliculas/city-of-angels.jpg",  
        banner: "./media/peliculas/city-of-angels-banner.gif",
        nombre: "City of Angels (1998)", 
        descripcion: "Un angel se enamora de Meg Ryan y decide renunciar a ser angel porque la eternidad es casi tan aburrida como la pelicula.",
        precio: 1000
    },
    {
        id:"BD", 
        foto: "./media/peliculas/bangkok-dangerous.jpg",  
        banner: "./media/peliculas/bangkok-dangerous-banner.gif",
        nombre: "Bangkok Dangerous (2008)", 
        descripcion: "Solo me acuerdo de que es mala, tan mala que el gif ni siquiera es de esa pelicula.",
        precio: 1000
    },
    {
        id:"GR", 
        foto: "./media/peliculas/ghost-rider.jpg",  
        banner: "./media/peliculas/ghost-rider-banner.gif",
        nombre: "Ghost Rider (2007)", 
        descripcion: "Nic la pega en el palo haciendo Marvel justo antes de que les salga bien la formula del universo cinematografico.",
        precio: 1000
    },
    {
        id:"TWM", 
        foto: "./media/peliculas/the-wicker-man.jpg",  
        banner: "./media/peliculas/the-wicker-man-banner.gif",
        nombre: "The Wicker Man (2006)", 
        descripcion: "Mira Marge, no voy a mentirte, todavía no junte las fuerzas para ver esta pero <a href='https://www.youtube.com/watch?v=EVCrmXW6-Pk' target='_blank'>not the bees!</a>",
        precio: 1000
    }
];
const peliculasFeas = [
    {
        id:"Rock", 
        foto: "./media/peliculas/the-rock.jpg", 
        banner: "./media/peliculas/the-rock-banner.gif",
        nombre: "The Rock (1996)", 
        descripcion: "Un clasicaso pochoclero, increible que sea de Michael Bay",
        precio: 1500
    },
    {
        id:"ConAir", 
        foto: "./media/peliculas/con-air.jpg", 
        banner: "./media/peliculas/con-air-banner.gif",
        nombre: "Con Air (1997)", 
        descripcion: "Otro clasicaso pochoclero pero en un avion",
        precio: 1500
    },
    {
        id:"WW", 
        foto: "./media/peliculas/willys-wonderland.jpg",  
        banner: "./media/peliculas/willys-wonderland-banner.gif",
        nombre: "Willy's Wonderland (2021)", 
        descripcion: "Una bizarreada de bajo presupuesto que entretiene si no le pedis mucho",
        precio: 1500
    },
    {
        id:"NT", 
        foto: "./media/peliculas/national-treasure.jpg",  
        banner: "./media/peliculas/national-treasure-banner.gif",
        nombre: "National Treasure (2004)", 
        descripcion: "Piratas del Caribe sin piratas pero con lo divertido",
        precio: 1500
    },
    {
        id:"FO", 
        foto: "./media/peliculas/faceoff.jpg",  
        banner: "./media/peliculas/faceoff-banner.gif",
        nombre: "Face/Off (1997)", 
        descripcion: "Un delirio que quedó en la historia, es ver para creer",
        precio: 1500
    },
    {
        id:"GISS", 
        foto: "./media/peliculas/gone-in-60-seconds.jpg",  
        banner: "./media/peliculas/gone-in-60-seconds-banner.gif",
        nombre: "Gone in Sixty Seconds (2000)", 
        descripcion: "Nic tiene que robar 50 autos de lujo en una noche, parece que va a ser peor que las de Rapido y Furioso pero entretiene!",
        precio: 1500
    },
    {
        id:"WaH", 
        foto: "./media/peliculas/wild-at-heart.jpg",  
        banner: "./media/peliculas/wild-at-heart-banner.gif",
        nombre: "Wild at Heart (1990)", 
        descripcion: "David Lynch, Nicolas Cage... y Maggie rió, todo fue una confusión.",
        precio: 1500
    },
    {
        id:"Deadfall", 
        foto: "./media/peliculas/deadfall.jpg",  
        banner: "./media/peliculas/deadfall-banner.gif",
        nombre: "Deadfall (1993)", 
        descripcion: "Tendría que ir en las malas pero la pelicula se da cuenta y pega un 180° cuando mete al Nicolas Cage mas bizarro hasta la fecha.",
        precio: 1500
    }
];
