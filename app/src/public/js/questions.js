const questions = {
  자기소개: ["Let's start interview now", "Tell me something about yourself"],
  "사는집(1-1)": [
    `I’d like to know talk about where you live.
    Do you live in an apartment or a house?
    Tell me all the things about your home.
    Give me a description with a lot of details.`,
    `Where do you live?
    What does your house look like?
    Please tell me in as much detail as possible.`,
  ],
  "사는집(1-2)": [
    `Please tell me about your current home.
    How is it different from the house where you lived before?
    Please tell me in as much detail as passible.`,
  ],
  "사는집(2)": [
    `I’d like to know about the most memorable moment you can recall in your current home.
    What happened? Who were you with? What did you do?`,
    `Look back into your childhood and tell me something that you remember to this day.
    What happened and what was it that made it so memorable for you?
    Tell me everything about that event.`,
  ],
  가족: [
    `When you meet your family members, you probably do some activities with them.
    What are they? What do you like the most among these activities?`,
  ],
  이웃: [
    `Please tell me about your neighbors.
    Who are they? What do they look like?
    Please give me as many details as possible.`,
    `I’d like to know about the first time you met your neighbors.
    When was it?
    What was the first impression you had of your neighbors?
    What did you say to each other?`,
  ],
  "동네묘사(1-1)": [
    `Can you describe the area around your home?
    Are there any parks or schools?
    Describe the neighborhood where you live in as much detail as possible.`,
  ],
  "동네묘사(1-2)": [
    `Where do you most often visit in your neighborhood?
    Where is it located and how often do you visit?
    What do you usually do in that place?`,
  ],
  "동네묘사(2)": [
    `Can you think of a memorable event that happened in your neighborhood
    since you have been living there?
    Tell me about the things that happened.`,
  ],
  "장소묘사(random)": [
    `Describe the parks that you like to go.`,
    `Please describe your favorite shopping`,
    `Tell me about the movie theater you go to often.`,
  ],
  "장소묘사(store)": [
    `Where do you like to go shopping?
    Do you shop at a department store or a shopping mall?
    Please describe your favorite shopping place.`,
  ],
  "경험묘사(random)": [
    `Describe some of the memorable experience that happened at the parks where you visited`,
    `Tell me about a special incident that happened at the movie theater.`,
  ],
  "경험묘사(store)": [
    `Do you have a special shopping experience?
    What were you shopping for?
    When was it? Who were you with?
    Tell me about the experience.`,
  ],
  "경험묘사(random/Ex-girlfriend)": [
    `Describe some of the memorable experience that happened at the parks where you visited`,
    `Tell me about a special incident that happened at the movie theater.`,
  ],
  "경험묘사(Ex-girlfriend)": [
    `I’d like to know about one of your memorable experiences at a concert.
    Tell me what exactly happened.
    Tell me about the experience with a lot of detail.`,
  ],
  "나도좋아해(books)": [
    `I like to read books, too.
    Ask me three to four questions in order to find out my favorite author.`,
  ],
  "영화보기(1-장소묘사)": [
    `You indicated that you go to the movies in your free time.
    Where do you usually go to see a movie?
    Describe the movie theater you often go to.`,
  ],
  "영화보기(1-경험묘사)": [
    `I’d like to know about one of your memorable experiences at a movie theater.
    Tell me what exactly happend.
    Tell me about the experience with a lot of detail.`,
  ],
  "영화보기(2-영화관가기전)": [
    `Tell me the things that you do before you go to a movie theater.
    Do you check what is playing before you leave.
    If so, what do you use to get information?
    Tell me what you typically do before going to a theater.`,
  ],
  "영화보기(2-나도좋아해)": [
    `I enjoy going to the movies, too.
    Ask me three or four questions to find out what kind of movies I like to see.`,
  ],
  "콘서트/공연(1-장소묘사)": [
    `You indicated in the servey that you like to go to concerts.
    I want to  know about your favorite concert hall.
    Where is it?
    What makes the concert hall different from others?`,
    `Which theater or auditorium do you like the most?
    Where is it?
    What do you like about it?
    Tell me about a show that you have seen at this place.`,
  ],
  "콘서트/공연(1-경험묘사)": [
    `I’d like to know about one of your memorable experiences at a theater.
    Tell me what exactly happened.
    Why was theater so memorable?
    Tell me about the experience with a lot of detail.`,
  ],
  "콘서트/공연(2-콘서트)": [
    `You indicated in the servey that you go to the concert hall to watch concerts?
    What kind of concerts do you like to go to?
    Why do you like going to these events?`,
  ],
  "콘서트/공연(2-공연)": [
    `You indicated in the survey that you go to the theater to watch performances.
    What kind of theater performances do you like to go to?
    Why do you like going to these events?`,
  ],
  "음악감상(1-장르)": [
    `You indicated in the survey that you like to listen to music. 
    What kind of music do you like,
    and When do you usually listen to it?
    Give as many details as possible.`,
    `Why do you like listening to muisic?
    How and When do you typically listen to music?
    Give me all the details.`,
    `Tell me about a singer you like.
    Why do you like that singer?
    What are some popular genres of music these days?`,
  ],
  "음악감상(1-경험묘사)": [
    `Tell me about a memorable incident regarding music.
    What made that incident so memorable?`,
  ],
  "음악감상(2-technology)": [
    `How do you normally listen to music?
    With an MP3 or a CD player?
    Why do you like listen to music with this technology?`,
  ],
  "헬스클럽(1-장소묘사)": [
    `You indicated in the servey that you go to the gym.
    Where is your gym located?
    and What kind of equipment or machines are there?
    Tell me what your gym looks like.`,
  ],
  "헬스클럽(1-나도좋아해)": [
    `I go to a nice gym.
    Ask me three or four questions to learn more about my gym.`,
  ],
  "헬스클럽(2-first&last things)": [
    `I’d like to know what exercises you typically do at the gym.
    How do you have practice them?
    and What is the first thing you do as soon as you arrive at the gym?
    and What is the last thing you do before leaving?`,
  ],
  "공원가기(1-what people do)": [
    `Tell me what adults and children do together at the parks you often go to.`,
  ],
  "공원가기(2-경험묘사)": [
    `Describe some of the memorable events that happened at the parks where you visited.`,
    `Tell me about a memorable or interesting event that happened in a park.
    What exactly happened?
    Why were it so memorable to you?
    Please tell me about it in as much detail as possible.`,
  ],
  "조깅(1-about)": [
    `In your survey, you indicated that you like to go jogging.
    Where do you like to go?
    Why do you go jogging?
    What are the advantages of jogging?`,
    `You indicated in the survey that you like jogging.
    Where, when, and how often do you go jogging? 
    Do you bring anything?
    Tell me as much details as possible.`,
  ],
  "조깅(1-나도좋아해)": [
    `I like to jog, too.
    Ask me three or four questions about jogging.`,
  ],
  "조깅(2-경험묘사)": [
    `Tell me about some of the jogging experiences you have had.
    Where did you go jogging? Were you with anyone?`,
    `Have you recently had any jogging experience that is unforgettable?
    If so, start by telling me how old you were and when it was.
    Then, tell me all of the thing that made the experience unforgettable.`,
  ],
  "조깅(2-걷기와비교)": [
    `There are similarities and differences between jogging and walking.
    What do you think they are?
    Why did you choose jogging rather than walking?`,
  ],
  "걷기(1-장소묘사)": [
    `What are your favorite places for walking?
    What are the places like?
    Where are they located?
    Describe the places in details.`,
  ],
  "걷기(1-경험묘사)": [
    `Let’s talk about the longest distance that you’ve ever walked.
    Where and when did you walk?
    Who were you with?
    Why did you walk such a long distance?
    the end of this walk, how did you feel?
    Please tell me about the memorable experience with a lot of details.`,
  ],
  "걷기(2-과거비교)": [
    `As compared with the past, are people in your country walking more or less frequently?
    Why have people decided to walk more or less than they did previously?
    Tell me in details.`,
  ],
  "요리하기(1-favorite dish)": [
    `You indicated that you love to cook in the survey.
    What’s your favorite dish you like to cook?
    What do you usually cook?
    How did you become interested in cooking?`,
  ],
  "요리하기(1-경험묘사)": [
    `There may have been some unexpected incidents while cooking.
    For example, you may have achieved a result that you didn’t expect or that was not successful.
    What happened and what did you learn from the experience?`,
  ],
  "요리하기(2-나도좋아해)": [
    `I like to cook, too.
    I cook Italian food most often.
    Now ask me three or four questions about how you can cook Italian food well.`,
  ],
  "집안일하기(1-what I do)": [
    `Tell me about some household chores you do at home.
    Do you do the dishes or do the laundry?
    What else?`,
    `You indicated in the survey that you do some household chores.
    What do you usually do at home?
    Tell me as much detail as possible.`,
  ],
  "집안일하기(1-responsible chores)": [
    `You indicated in the survey that you are responsible for household chores.
    What are your responsibilities at home.`,
  ],
  "집안일하기(2-responsible chores)": [
    `On a typical day, how do you handle your responsibilities?
    Do you have your own methods or processes to deal with house chores?
    Have you ever failed to perform your duties?`,
  ],
  "집안일하기(2-과거)": [
    `Tell me about the responsibilities you took when you were a child.
    What was expected of you?
    I’d also like to know how they differ from what you are required to do these days.
    Tell me in as much detail as possible.`,
  ],
  "집에서 보내는 휴가(1-what I do)": [
    `You indicated in the survey that you prefer to stay home for vacation.
    Who do you stay with while you spend your vacation at home?
    What do you usually do?`,
  ],
  "집에서 보내는 휴가(1-what I did)": [
    `You indicated in the survey that you prefer to stay home for vacation.
    What did you do last time when you had a vacation at home?
    Who did you stay with?`,
  ],
  "집에서 보내는 휴가(2-what I do)": [
    `You indicated in the survey that you prefer to stay home for vacation.
    Who do you stay with while you spend your vacation at home?
    What do you usually do?`,
  ],
  "집에서 보내는 휴가(2-what I did)": [
    `You indicated in the survey that you prefer to stay home for vacation.
    What did you do last time when you had a vacation at home?
    Who did you stay with?`,
  ],
  "스포츠관람(1-favorite)": [
    `You indicated in the survey that you like to watch sports.
    Which sport do you enjoy watching most?
    How often do you watch it?
    When and where do you watch it?`,
    `You indicated in the survey that you watch professional sports.
    Tell me about the sports teams and players you like to watch most and why you like them?`,
    `What’s your favorite sport?
    And who’s your favorite player?
    What do you like about him or her?
    Explain why you like the sport and the player?`,
  ],
  "스포츠관람(2-경험묘사)": [
    `Please tell me about a sporting event you watched recently.
    Have you ever had a problem when you watched the game?
    What was it?
    And how did you solve the problem.
    Please tell me about the story in detail.`,
    `Can you describe a sporting event you’ve been to?
    What was the event?
    What was game like?
    What was the final outcome of the game?`,
  ],
  축구: [
    `You indicated in the survey that you like to play soccer.
    How do you play it?
    Are there some important rules to play soccer?
    Give me a detailed description of it.`,
    `How do you play soccer?
    Tell me some of the rules?
    Which route do you take to the stadium?
    How often do you go?
    When do you go and who comes with you?`,
    `You have responded in the survey that you like soccer.
    Tell me about your favorite soccer team and player.
    Why do you like them?`,
  ],
  야구: [
    `What’s your favorite baseball team?
    Why do you like that team?
    Who’s your favorite player on that team and why?
    Give me all the details about your favorite baseball team.`,
    `You indicated that you like baseball.
    Do you like playing baseball or just watching it on TV?
    If you play it by yourself, who do you play it with?
    If you watch it on TV, who do you watch it with?`,
    `You indicated in the survey that you like to play baseball.
    How do you play it?
    Are there some important rules to play baseball?
    Give me a detailed description of it.`,
  ],
  "국내여행(1-what I do)": [
    `You indicated in the survey that you take vacations within your country.
    Tell me about some of the places you have traveled domestically.
    Why do you like going there and how often do you visit that place?`,
  ],
  "국내여행(1-plans)": [
    `You indicated in the survey that you travel domestically. 
    How do you make plans for a domestic trip?
    What kind of things do you consider?
    Can you tell me about the things you put into your bag or luggage when you take a domestic trip?`,
  ],
  "국내여행(2-what I did)": [
    `I’d like to know about a domestic trip you took when you were a child.
    Where did you go? Who did you go with?
    What did you do during the trip?
    Give me as many details as possible.`,
  ],
  "국내여행(2-why I gave up)": [
    `There are times that people plan for a trip, but after some unforeseen events, they cannot go for some reason.
    Have you had a similar experience?
    What made you give up the trip?
    Did something urgent happend?
    Tell me the full story.`,
  ],
  "해외여행(1-what I do)": [
    `You indicated in the survey that you take vacations internationally.
    If you had to pick an overseas vacation spot right away, where would you pick and why?`,
  ],
  "해외여행(1-foods)": [
    `Wow, this is a very interesting question.
    Let me share about the food I eat on a trip.
    I love trying local food.
    It’s such a new experience to me.
    2 years ago, I visited Hawaii during my summer vacation.
    I loved to eat seafood barbeque and coconut juice in Hawaii.
    These are the most famous Hawaiian dishes.
    When I tasted it first, Wow! It was amazing.
    They were served fresh and so delicious.
    Once you taste them, You’ll never forget the flavors.
    I can’t forget the day.
    If I have a chance, I wanna go there again.
    This is about the food I eat on a trip.`,
  ],
  "해외여행(2-what I did)": [
    `I’d like to know about last time when you took an international trip.
    Where did you go?
    Who did you go with?
    What did you do during the trip?
    Give me as many details as possible.`,
  ],
  "해외여행(2-나도좋아해)": [
    `I visit New York, USA often for my vacations.
    Ask me three or four questions about that place in order to find out whether you want to spend a vacation there too.`,
  ],
};

export default questions;
