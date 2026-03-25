window.currentBookData = {
    id: 'percy-jackson',
    title: 'Percy Jackson: The Lightning Thief',
    chapterIcon: '⚡',
    
    sections: [
        { id: 'characters', icon: '🎴', title: 'Characters', subtitle: 'Meet the people', count: 8 },
        { id: 'icon-guide', icon: '🧠', title: 'Icon Guide', subtitle: 'Learn the system', count: null },
        { id: 'chapters', icon: '📖', title: 'Chapters', subtitle: 'Read along', count: 22 }
    ],
    
    iconSystem: [
        { icon: '👤', label: 'Who', description: 'People in the scene' },
        { icon: '📍', label: 'Where', description: 'Location' },
        { icon: '⚡', label: 'What happened', description: 'Main event' },
        { icon: '❓', label: 'Confusing', description: 'Questions' }
    ],
    
    characters: [
        {
            name: 'Percy Jackson',
            image: 'images/characters/percy-jackson/percy.jpg',
            clue: 'Messy black hair + green eyes',
            who: 'Main character',
            personality: 'Funny, brave, loyal',
            hint: 'Percy = the one we follow'
        },
        {
            name: 'Annabeth Chase',
            image: 'images/characters/percy-jackson/annabeth.jpg',
            clue: 'Blonde hair + gray eyes',
            who: 'Daughter of Athena',
            personality: 'Smart, strong, strategic',
            hint: 'Annabeth = smart leader'
        },
        {
            name: 'Grover Underwood',
            image: 'images/characters/percy-jackson/grover.jpg',
            clue: 'Nervous + walks funny',
            who: "Percy's protector",
            personality: 'Loyal, anxious, brave when needed',
            hint: 'Grover = loyal helper'
        },
        {
            name: 'Chiron',
            image: 'images/characters/percy-jackson/chiron.jpg',
            clue: 'Wheelchair teacher (secretly a centaur)',
            who: 'Camp director',
            personality: 'Wise, patient, mentor',
            hint: 'Chiron = wise guide'
        },
        {
            name: 'Zeus',
            image: 'images/characters/percy-jackson/zeus.jpg',
            clue: 'Lightning bolt',
            who: 'King of gods',
            personality: 'Powerful, angry, demanding',
            hint: 'Zeus = big authority'
        },
        {
            name: 'Poseidon',
            image: 'images/characters/percy-jackson/poseidon.jpg',
            clue: 'Trident + ocean',
            who: "God of the sea, Percy's dad",
            personality: 'Powerful, distant, protective',
            hint: 'Poseidon = important connection'
        },
        {
            name: 'Hades',
            image: 'images/characters/percy-jackson/hades.jpg',
            clue: 'Dark + underworld',
            who: 'God of the underworld',
            personality: 'Misunderstood, angry, scary',
            hint: 'Hades = mystery character'
        },
        {
            name: 'Luke',
            image: 'images/characters/percy-jackson/luke.jpg',
            clue: 'Scar on face',
            who: 'Older camper',
            personality: 'Friendly, skilled, hiding something',
            hint: 'Luke = surprising twist'
        }
    ],
    
    chapters: [
        { number: 1, content: ['Percy, Mrs. Dodds', 'Museum field trip', 'Teacher turns into fury, attacks Percy', 'How is that possible? Why did no one remember?'], hint: '👉 Things are not normal' },
        { number: 2, content: ['Percy, Mom, Grover', 'Home, school', 'Percy gets expelled, sees weird old ladies', 'Why does trouble follow him everywhere?'], hint: '👉 He doesn\'t fit in' },
        { number: 3, content: ['Percy, Mom, Grover', 'Beach cabin, car chase', 'Grover reveals he\'s a satyr, monster chases them', 'What is chasing them? Is Grover real?'], hint: '👉 Danger is real' },
        { number: 4, content: ['Percy, Mom, Minotaur', 'Road to camp', 'Mom disappears, Percy defeats Minotaur', 'Where did Mom go? Is she dead?'], hint: '👉 Everything changes' },
        { number: 5, content: ['Percy, Chiron, Annabeth', 'Camp Half-Blood', 'Wakes up at camp, learns about gods and demigods', 'Is this real? Are gods real?'], hint: '👉 New world revealed' },
        { number: 6, content: ['Percy, Clarisse, campers', 'Camp Half-Blood', 'Gets bullied, water powers activate', 'What is his skill? Why can he control water?'], hint: '👉 Discovering powers' },
        { number: 7, content: ['Percy, Luke', 'Camp Half-Blood', 'Claimed by Poseidon during capture the flag', 'Why is everyone shocked? What does this mean?'], hint: '👉 Big reveal' },
        { number: 8, content: ['Percy, Annabeth, Chiron', 'Camp Half-Blood', 'Oracle gives prophecy, quest assigned', 'Can they do it? What\'s the prophecy?'], hint: '👉 Mission starts' },
        { number: 9, content: ['Percy, Annabeth, Grover', 'Leaving camp', 'Quest team formed, journey begins', 'Will they succeed? What dangers await?'], hint: '👉 Team assembled' },
        { number: 10, content: ['Percy, friends, Furies', 'Greyhound bus', 'Furies attack on bus', 'Why so many monsters? How will they survive?'], hint: '👉 First real danger' },
        { number: 11, content: ['Percy, Medusa', 'Auntie Em\'s Garden Emporium', 'Encounter Medusa, Percy defeats her', 'Can he trust anyone? What else is out there?'], hint: '👉 Trust no one' },
        { number: 12, content: ['Percy, friends, poodle', 'Road to St. Louis', 'Talking poodle helps them', 'Why are animals helping? What\'s happening?'], hint: '👉 Unexpected allies' },
        { number: 13, content: ['Percy, Echidna, Chimera', 'Gateway Arch', 'Fights Chimera, jumps into Mississippi River', 'How did he survive? What is his power?'], hint: '👉 Water saves him' },
        { number: 14, content: ['Percy, friends', 'Train west', 'On the run, heading to LA', 'Where are they going exactly? What\'s the plan?'], hint: '👉 Getting closer' },
        { number: 15, content: ['Percy, Ares', 'Diner', 'Ares gives them a quest within the quest', 'Can they trust Ares? What\'s his game?'], hint: '👉 Gods have plans' },
        { number: 16, content: ['Percy, friends, animals', 'Truck, road', 'Rescue animals, travel west', 'Are they running out of time?'], hint: '👉 Time is running out' },
        { number: 17, content: ['Percy, friends, Procrustes', 'Crusty\'s Water Bed Palace', 'Trap at water bed store', 'How many traps are there? Will they make it?'], hint: '👉 Always a trick' },
        { number: 18, content: ['Percy, friends, Cerberus', 'Entrance to Underworld', 'Sneak past three-headed dog', 'What\'s in the Underworld? Will they get out?'], hint: '👉 Entering the Underworld' },
        { number: 19, content: ['Percy, Hades', 'Underworld throne room', 'Hades accuses Percy, Percy doesn\'t have the bolt', 'Where\'s the bolt? Who took it? Is Hades lying?'], hint: '👉 Not what it seems' },
        { number: 20, content: ['Percy, Ares', 'Beach in LA', 'Fights Ares, gets bolt back, bolt was in the backpack', 'How did it get there? Who set him up?'], hint: '👉 Luke did it' },
        { number: 21, content: ['Percy, Zeus, Poseidon', 'Olympus', 'Returns lightning bolt to Zeus', 'Will Zeus accept it? Is Percy safe now?'], hint: '👉 Mission complete' },
        { number: 22, content: ['Percy, Luke', 'Camp Half-Blood', 'Luke reveals he\'s the traitor, tries to kill Percy', 'Why did Luke betray everyone? What\'s next?'], hint: '👉 Shocking betrayal' }
    ]
};