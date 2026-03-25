window.currentBookData = {
    id: 'harry-potter',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    chapterIcon: '📘',
    
    sections: [
        { id: 'characters', icon: '🎴', title: 'Characters', subtitle: 'Meet the people', count: 7 },
        { id: 'icon-guide', icon: '🧠', title: 'Icon Guide', subtitle: 'Learn the system', count: null },
        { id: 'chapters', icon: '📖', title: 'Chapters', subtitle: 'Read along', count: 17 }
    ],
    
    iconSystem: [
        { icon: '👤', label: 'Who', description: 'People in the scene' },
        { icon: '📍', label: 'Where', description: 'Location' },
        { icon: '⚡', label: 'What happened', description: 'Main event' },
        { icon: '❓', label: 'Confusing', description: 'Questions' }
    ],
    
    characters: [
        {
            name: 'Harry Potter',
            image: 'images/characters/harry-potter/harry.jpg',
            clue: 'Scar + glasses',
            who: 'Main character',
            personality: 'Brave, curious',
            hint: 'Harry = the one we follow'
        },
        {
            name: 'Ron Weasley',
            image: 'images/characters/harry-potter/ron.jpg',
            clue: 'Red hair',
            who: 'Best friend',
            personality: 'Funny, loyal',
            hint: 'Ron = the fun friend'
        },
        {
            name: 'Hermione Granger',
            image: 'images/characters/harry-potter/hermione.jpg',
            clue: 'Loves books',
            who: 'Smart friend',
            personality: 'Organized, confident',
            hint: 'Hermione = the smart helper'
        },
        {
            name: 'Hagrid',
            image: 'images/characters/harry-potter/hagrid.jpg',
            clue: 'Big + beard',
            who: 'Helper',
            personality: 'Kind',
            hint: 'Hagrid = big and kind'
        },
        {
            name: 'Dumbledore',
            image: 'images/characters/harry-potter/dumbledore.jpg',
            clue: 'Long beard',
            who: 'Leader',
            personality: 'Wise',
            hint: 'Dumbledore = wise guide'
        },
        {
            name: 'Snape',
            image: 'images/characters/harry-potter/snape.jpg',
            clue: 'Serious face',
            who: 'Teacher',
            personality: 'Strict',
            hint: 'Snape = not very friendly'
        },
        {
            name: 'Voldemort',
            image: 'images/characters/harry-potter/voldemort.jpg',
            clue: 'Scary, hidden',
            who: 'Villain',
            personality: '',
            hint: "He's the danger behind everything"
        }
    ],
    
    chapters: [
        { number: 1, content: ['Harry (baby), Dumbledore, Hagrid', 'Outside a house', 'Harry survives, parents are gone', 'Why is he special?'], hint: '👉 Big event at the beginning' },
        { number: 2, content: ['Harry, aunt, uncle, Dudley', 'House, zoo', 'Harry treated badly, strange magic happens', 'How did the glass disappear?'], hint: '👉 Harry is different' },
        { number: 3, content: ['Harry, uncle', 'House, cabin', 'Letters keep coming', 'Who sent them?'], hint: '👉 Letters are important' },
        { number: 4, content: ['Harry, Hagrid', 'Cabin', 'Harry learns he is a wizard', "Why didn't he know before?"], hint: '👉 Life changes here' },
        { number: 5, content: ['Harry, Hagrid', 'Diagon Alley', 'Buys school supplies, gets wand', 'Why did wand choose him?'], hint: '👉 Magic world begins' },
        { number: 6, content: ['Harry, Ron', 'Train', 'Meets Ron, goes to school', 'Will they stay friends?'], hint: '👉 Friendship starts' },
        { number: 7, content: ['Harry, students', 'Hogwarts', 'Sorted into Gryffindor', 'What are houses?'], hint: '👉 House matters' },
        { number: 8, content: ['Harry, Snape', 'Classroom', 'Snape is strict', "Why doesn't he like Harry?"], hint: '👉 Important teacher' },
        { number: 9, content: ['Harry, Ron, Hermione', 'Castle at night', 'Finds 3-headed dog', 'What is it guarding?'], hint: '👉 Mystery begins' },
        { number: 10, content: ['Harry, Ron, Hermione', 'School', 'Troll attack → friendship grows', 'Why did they help each other?'], hint: '👉 Friends now' },
        { number: 11, content: ['Harry', 'Quidditch field', 'First game, Harry does great', 'Is someone trying to hurt him?'], hint: '👉 Harry is talented' },
        { number: 12, content: ['Harry', 'Hidden room', 'Mirror shows his parents', 'Is it real?'], hint: '👉 Shows feelings' },
        { number: 13, content: ['Harry, friends', 'School', "Learn about Sorcerer's Stone", 'Why is it important?'], hint: '👉 Main mystery' },
        { number: 14, content: ['Hagrid, Harry', 'Hut', 'Dragon causes trouble', 'Was this a good idea?'], hint: '👉 Breaking rules' },
        { number: 15, content: ['Harry', 'Forest', 'Sees something scary drinking blood', 'What is it?'], hint: '👉 Danger growing' },
        { number: 16, content: ['Harry, Ron, Hermione', 'Trapdoor area', 'Go through challenges', 'Who helped most?'], hint: '👉 Teamwork' },
        { number: 17, content: ['Harry, teacher', 'Final room', 'Villain revealed, Harry wins', 'Were you surprised?'], hint: '👉 Harry saves the day' }
    ]
};