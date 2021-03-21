# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Benjamin Shu

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/enchanted-icy-vein?path=README.md%3A8%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added a visible counter to the amount of mistakes they can make in game
- [x] Added a countdown counter in the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://recordit.co/yRNBGKoD3q)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

An outside resource that I utilized in order to complete my submission was the w3school website that was provided via the concise instructions for this assignment.
For the optional functions, I often referred to StackOverflow for any problems that I encountered. Due to my lack of prior knowledge within HTML and CSS, I used online
resources to help me better understand and learn new functions.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 
Since I have already been exposed to JavaScript in the past, thanks to a computer science course that I had taken in high school, I was able to complete this assignment
with a bit more confidence. The instructions were very well-explained, and it felt like it was honestly not too difficult to follow. However, when it came to the optional features, 
it became more difficult as I was unfamiliar with pretty much all of the HTML and CSS libraries. Fortunately, since I had a background with JavaScript, I was able to implement most features
without having to scour the internet for different types of implementations. One of the most challenging components that I struggled with most was actually dealing with the random secret pattern,
as I was not quite sure how to incorporate a random array into the startGame function. What I ended up doing was a lot more simpler than I expected, as I downgraded my function into normal lines of code that 
were reinserted into the startGame function. Spending a lot of time on that functionality really made me question my intelligence, but at the end of the day, I was able to complete that 
functionality. Going through the rest of the challenges were relatively relaxing and interesting, as I was able to change the boring blocks into something I have always enjoyed from a child
to the present times (thanks to Covid), Pokemon. Being able to mess around with the audio and visual files was something that always interested me, but I never had the chance to do so in 
normal programming classes as we focused more on data structures and the theory/logic of Computer Science in college. Something so simple like changing a colored block to a cute PNG file was enough
to make my day, which is a feeling I want to hold onto whenever I code in the present and the future. The other challenging implementation had to have been the ticking clock, as I had a rough
idea on how to code it, but I wasn't sure on how to exactly implement it. Taking the instruction's advice, I looked up the setInterval and clearInterval methods, and found plentiful resources
and documentations on how these two methods worked. It was frustrating but rewarding to be able to see a functional clock on the game that I created, so I think it was worth the extra time to make
the clock.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Some questions that I have about web development is where should one start when attempting to even develop a larger site? This was a question that I had mustered up in the past, but once I finished this assignment,
I felt as if the process in web development was not nearly as tantalizing as it seemed to be in the past. Once you establish the skeleton, it seems much more achievable to complete a website. However, that does not mean 
I am underestimating the process, as I know that web design and development is difficult as you must always be learning about new methods and functions. Another question is how do people typically learn more about web 
development as it is constantly changing? Is there a database where you can see recent updates for the languages in order to improve your own web development skills?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I'd probably try to make some random songs with the buttons by adjusting their frequencies, or just add a feature where you can see how fast you have completed the game. It would be interesting as it would incentivize people to play the game more, along with the fact that it would be interesting to see how fast people could clear the game. Another thing that I would do would be to perhaps fix up the functions that I created - while the random feature works, I would rather it pick from a variety of different tunes (like short song renditions i.e. pop/classical songs) that one could make with the different notes from the blocks.



## License

    Copyright Benjamin Shu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
