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
};

export default questions;
