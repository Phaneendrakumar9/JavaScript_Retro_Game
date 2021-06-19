# JavaScript_Retro_Game
It is designed with javascript with a look of retro design.....

Example — Guess the number game
We follow mozilla's tutorial and build up the game.

Given Requestments
Let's imagine your boss has given you the following brief for creating this game:

I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong — and, if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

Steps
Generate a random number between 1 and 100.
Record the turn number the player is on. Start it on 1.
Provide the player with a way to guess what the number is.
Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
Next, check whether it is the correct number.
If it is correct:
Display congratulations message.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
If it is wrong and the player has turns left:
Tell the player they are wrong.
Allow them to enter another guess.
Increment the turn number by 1.
If it is wrong and the player has no turns left:
Tell the player it is game over.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
