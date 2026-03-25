window.currentBookData = {
    id: 'smile',
    title: 'Smile by Raina Telgemeier',
    chapterIcon: '🎨',
    
    sections: [
        { id: 'characters', icon: '👥', title: 'People', subtitle: 'Who\'s who', count: 6 },
        { id: 'icon-guide', icon: '🧠', title: 'Icon Guide', subtitle: 'Learn the system', count: null },
        { id: 'chapters', icon: '🎨', title: 'Scenes', subtitle: 'Follow the story', count: 12 }
    ],
    
    iconSystem: [
        { icon: '😬', label: 'What happened', description: 'Main event' },
        { icon: '📍', label: 'Where', description: 'Location' },
        { icon: '💭', label: 'How she felt', description: 'Raina\'s emotions' },
        { icon: '😊', label: 'What helped', description: 'Support or solution' }
    ],
    
    characters: [
        {
            name: 'Raina',
            image: 'images/characters/smile/raina.jpg',
            clue: 'Braces + glasses',
            who: 'Main character',
            personality: 'Creative, honest, resilient',
            hint: 'Raina = the one telling the story'
        },
        {
            name: 'Raina\'s Mom',
            image: 'images/characters/smile/mom.jpg',
            clue: 'Always there',
            who: 'Mother',
            personality: 'Caring, supportive',
            hint: 'Mom = steady support'
        },
        {
            name: 'Amara',
            image: 'images/characters/smile/amara.jpg',
            clue: 'Little sister',
            who: 'Sister',
            personality: 'Annoying but lovable',
            hint: 'Amara = family bond'
        },
        {
            name: 'Karin & Melissa',
            image: 'images/characters/smile/friends.jpg',
            clue: 'Former best friends',
            who: 'Friends turned complicated',
            personality: 'Changing, confusing',
            hint: 'Friendship can change'
        },
        {
            name: 'Sean',
            image: 'images/characters/smile/sean.jpg',
            clue: 'Cute boy',
            who: 'Crush',
            personality: 'Nice, friendly',
            hint: 'First crush feelings'
        },
        {
            name: 'Dr. Golden',
            image: 'images/characters/smile/dentist.jpg',
            clue: 'Orthodontist',
            who: 'Dentist',
            personality: 'Professional, reassuring',
            hint: 'Fixing her smile'
        }
    ],
    
    chapters: [
        { number: 1, content: ['Raina falls and knocks out her two front teeth', 'Girl Scouts meeting', 'Shocked, scared, in pain', 'Her friends helped her stand up'], hint: '👉 The accident that changed everything' },
        { number: 2, content: ['Goes to dentist, gets temporary teeth', 'Dentist office', 'Embarrassed, worried about school', 'Mom stayed calm and positive'], hint: '👉 First step to fixing it' },
        { number: 3, content: ['Goes back to school, kids stare and ask questions', 'Middle school', 'Self-conscious, wants to hide', 'Friends acted normal around her'], hint: '👉 Facing everyone was hard' },
        { number: 4, content: ['Gets braces, more dental work begins', 'Orthodontist office', 'Frustrated, feels different', 'Dr. Golden explains the plan'], hint: '👉 Long journey starts' },
        { number: 5, content: ['Earthquake hits during school', 'School classroom', 'Scared but also excited', 'Everyone experienced it together'], hint: '👉 Something bigger than her teeth' },
        { number: 6, content: ['Friendship drama with Karin and Melissa', 'School, sleepovers', 'Confused, left out', 'Started finding new friends'], hint: '👉 Friendships can be complicated' },
        { number: 7, content: ['Gets a crush on Sean, wants to impress him', 'School hallways', 'Nervous, hopeful', 'Just being herself worked'], hint: '👉 First crush feelings' },
        { number: 8, content: ['More dental procedures, surgery needed', 'Hospital, dental offices', 'Tired of it all, frustrated', 'Family support kept her going'], hint: '👉 The hardest part of treatment' },
        { number: 9, content: ['Joins drama club, finds new passion', 'School theater', 'Excited, creative, belongs', 'Found people who got her'], hint: '👉 Discovering what she loves' },
        { number: 10, content: ['Deals with mean girls and gossip', 'School', 'Hurt, angry', 'Realized true friends matter more'], hint: '👉 Not everyone will be kind' },
        { number: 11, content: ['Final dental work, smile is almost done', 'Orthodontist', 'Hopeful, impatient', 'Seeing progress finally'], hint: '👉 Almost there' },
        { number: 12, content: ['Gets braces off, smiles for real', 'Orthodontist, life', 'Proud, confident, relieved', 'She got through it all'], hint: '👉 The smile was worth it' }
    ]
};