How do chess engines work

Poll #1 - who plays chess?
Poll #2 - who has heard of:
* chess
* machine learning
* artificial intelligence
* neural networks
* deep learning
Poll #3 - who has heard of:
* minimax
* alpha-beta pruning
* evaluation functions
* null move pruning
* bitboards

Who am I to talk about this? (why i asked the poll questions - i am no longer the smartest person in the room!)
* devrel @ basis theory
* 1500-ish unrated player (aka better than most, but not very good)
* tinker with technologies - not an AI/ML specialist
* gardener, hiker, i like to argue politics online

Before we get into the weeds ... Evolution of Chess Engines

- anyone have a guess when the first chess engine was created?
1769 - Mechanical Turk ... NOPE FRAUD: https://en.wikipedia.org/wiki/Mechanical_Turk
1950 (same year as Turing Test) - Turochamp, also considered the first "computer game" - never able to run on hardware
1957 - Alex Bernstein @ MIT for IBM 704 (42k instructions/second, 70K memory) - 4 ply search in 8 minutes - first "true" chess program
1958 - chess program NSS beats a human for the first time (player was taught how to play chess 1 hour before the game, but still)
1970 - first all computer championship
1988 - Brent Larsen first GM to lose to a computer in a tournament
1997 - Deep Blue defeats Kasparov
Deep Blue was calculating 50 billion positions every 3 minutes. Kasparov was calculating 10 positions every 3 minutes. DEEP BLUE had 200 processors.
TODAY:
Stockfish
AlphaZero
LeelaChess Zero
Komodo Dragon
Fat Fritz 2

First, quick intro to chess

Why? to understand the problem we need to solve; if you can't explain the rules, how can you design a system to solve it?

- origins in chaturanga, dates to 6th century CE (shogi, xiangqi, janggi, makruk, etc.)
- current version started in 15th century Spain
- "the game of kings"

Goal - checkmate
opening, middlegame, endgame

Pieces

Quirks
- only knights can jump pieces
- en passant
- check
- castling

Chess Theory
- don't worry, not going to teach you theory
- means there are known traps, known patterns
- checkmate patterns

... uh, what about engines?

ok ok ok 

How do engines work? (dude, that's the name of the session, we're already 10 minutes in!)

How do chess players think about the game?
* Candidate moves - instinct, training, repertoire
* educated guess on what opponents response(s) may be
* how would they respond to that move?
* rinse and repeat
* average player 1-3 moves, GMs 10-15 moves deep

Dude, that's great, calculate all the moves and store them ...

{{ decision tree sizes }}
{{ compared to visible universe ... }}

What algorithm [that i already named so this isn't much a quiz] does exactly that?
MINIMAX!

How does minimax work?

Negamax - because chess is zero sum

Alpha-beta pruning

MOAR - move order! opening books, endgame tables, etc.

Where's the machine learning?

Super quick intro to neural networks

Take board state, feed into NN, get next move



Data Sets
-chessbase has 5.5M games going back to 1450, which 65K annotated)