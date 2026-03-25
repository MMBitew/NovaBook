window.currentBookData = {
    id: 'wimpy-kid',
    title: 'Diary of a Wimpy Kid',
    chapterIcon: '📔',
    
    sections: [
        { id: 'characters', icon: '👥', title: 'Cast', subtitle: 'The characters', count: 8 },
        { id: 'icon-guide', icon: '🧠', title: 'Icon Guide', subtitle: 'Learn the system', count: null },
        { id: 'chapters', icon: '📔', title: 'Diary Entries', subtitle: 'Greg\'s life', count: 15 }
    ],
    
    iconSystem: [
        { icon: '🤦', label: 'What Greg did', description: 'His action or plan' },
        { icon: '😱', label: 'The problem', description: 'What went wrong' },
        { icon: '😂', label: 'What happened', description: 'The funny result' },
        { icon: '💡', label: 'What he learned', description: 'Lesson (maybe)' }
    ],
    
    characters: [
        {
            name: 'Greg Heffley',
            image: 'images/characters/wimpy-kid/greg.jpg',
            clue: 'Skinny kid with big head',
            who: 'Main character',
            personality: 'Honest, funny, not always smart',
            hint: 'Greg = tells it like it is'
        },
        {
            name: 'Rowley Jefferson',
            image: 'images/characters/wimpy-kid/rowley.jpg',
            clue: 'Goofy smile',
            who: 'Best friend',
            personality: 'Innocent, loyal, immature',
            hint: 'Rowley = loyal but embarrassing'
        },
        {
            name: 'Rodrick Heffley',
            image: 'images/characters/wimpy-kid/rodrick.jpg',
            clue: 'Messy hair, mean',
            who: 'Older brother',
            personality: 'Lazy, mean, in a band',
            hint: 'Rodrick = annoying big brother'
        },
        {
            name: 'Manny Heffley',
            image: 'images/characters/wimpy-kid/manny.jpg',
            clue: 'Little kid',
            who: 'Younger brother',
            personality: 'Spoiled, gets away with everything',
            hint: 'Manny = the favorite'
        },
        {
            name: 'Mom (Susan)',
            image: 'images/characters/wimpy-kid/mom.jpg',
            clue: 'Tries too hard',
            who: 'Mother',
            personality: 'Well-meaning, embarrassing',
            hint: 'Mom = loves him but doesn\'t get it'
        },
        {
            name: 'Dad (Frank)',
            image: 'images/characters/wimpy-kid/dad.jpg',
            clue: 'Grumpy',
            who: 'Father',
            personality: 'Tough love, wants Greg to be "tougher"',
            hint: 'Dad = old-school rules'
        },
        {
            name: 'Fregley',
            image: 'images/characters/wimpy-kid/fregley.jpg',
            clue: 'Super weird',
            who: 'Weird kid',
            personality: 'Strange, gross, too friendly',
            hint: 'Fregley = avoid at all costs'
        },
        {
            name: 'The Cheese',
            image: 'images/characters/wimpy-kid/cheese.jpg',
            clue: 'Moldy + cursed',
            who: 'Legendary danger',
            personality: 'Scary to middle schoolers',
            hint: 'The Cheese = school legend'
        }
    ],
    
    chapters: [
        { number: 1, content: ['Started a diary (NOT a diary, a journal)', 'First day of middle school', 'Worried about fitting in and surviving', 'Middle school is scary but survivable'], hint: '👉 Welcome to middle school' },
        { number: 2, content: ['Tried to become popular', 'School hallways', 'Popular kids ignored him completely', 'Being yourself is less exhausting'], hint: '👉 Popularity is hard' },
        { number: 3, content: ['Avoided the Cheese Touch', 'School playground', 'Everyone treats it like a curse', 'Sometimes fear is silly'], hint: '👉 The Cheese Touch is real' },
        { number: 4, content: ['Got picked on by bigger kids', 'School, neighborhood', 'Had to take different routes home', 'Big kids are everywhere'], hint: '👉 Survival strategies needed' },
        { number: 5, content: ['Tried out for wrestling team to impress Dad', 'School gym', 'Got paired with the worst partner', 'Sports aren\'t for everyone'], hint: '👉 Not a wrestling star' },
        { number: 6, content: ['Halloween planning with Rowley', 'Neighborhood planning', 'Rowley\'s costume idea was embarrassing', 'Friends can be cringey'], hint: '👉 Halloween plans' },
        { number: 7, content: ['Went trick-or-treating, got chased by teenagers', 'Neighborhood streets', 'Had to hide at Gramma\'s house', 'Teenagers ruin everything'], hint: '👉 Halloween disaster' },
        { number: 8, content: ['Joined Safety Patrols with Rowley', 'School patrol duty', 'Rowley got all the credit and glory', 'Life isn\'t fair'], hint: '👉 Rowley gets the attention' },
        { number: 9, content: ['Got in trouble for the Wacky Sentences', 'School, home', 'Blamed Rowley but felt guilty', 'Lying makes things worse'], hint: '👉 Bad choices have consequences' },
        { number: 10, content: ['Fight with Rowley over something stupid', 'School playground', 'Friendship felt over', 'Fighting with friends hurts'], hint: '👉 Big friend fight' },
        { number: 11, content: ['Rowley became popular without Greg', 'School', 'Jealous and alone', 'Sometimes you need space'], hint: '👉 Feeling left out' },
        { number: 12, content: ['Fregley tried to be Greg\'s friend', 'Neighborhood', 'Desperate enough to almost consider it', 'There are limits to loneliness'], hint: '👉 Not that desperate' },
        { number: 13, content: ['Confrontation with the big kids', 'School playground', 'They forced Rowley to eat the Cheese', 'Standing up for friends matters'], hint: '👉 Protect your friends' },
        { number: 14, content: ['Greg took the blame for the Cheese', 'School playground', 'Saved Rowley but got the Touch', 'Sometimes being a friend means sacrifice'], hint: '👉 Greg did the right thing' },
        { number: 15, content: ['Made up with Rowley, survived middle school year', 'End of school year', 'Learned friendship is complicated', 'Made it through together'], hint: '👉 Survived middle school!' }
    ]
};