import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Link
} from 'spectacle';

import KnightMoves from './knight_moves.png';

const theme = {
  fonts: {
    header: 'Georgia, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: 'Montserrat, "Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom="-42px"
    width={1}
  >
    <Box padding="0">
      <Text fontSize="1.5em">@NathanLoding</Text>
    </Box>
    <Box textAlign="right" padding="0">
      <Text fontSize="1.5em">
        <strong>Beer City Code</strong> -
        How Chess Engines Work
      </Text>
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="130px">How Chess Engines Work</Heading>
        <Heading fontSize="h3" color="#ebe5da">A look at applied AI/ML principles</Heading>
      </FlexBox>
      <Notes>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Anyone play chess?</Heading>
      </FlexBox>
      <Notes></Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h3">Who has heard of ...</Heading>
        <UnorderedList>
          <Appear><ListItem>Chess</ListItem></Appear>
          <Appear><ListItem>Machine Learning</ListItem></Appear>
          <Appear><ListItem>Artificial Intelligence</ListItem></Appear>
          <Appear><ListItem>Neural Networks</ListItem></Appear>
          <Appear><ListItem>Deep Learning</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes></Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h3">Who has heard of ...</Heading>
        <UnorderedList>
          <Appear><ListItem>Minimax / Negamax</ListItem></Appear>
          <Appear><ListItem>Alpha-Beta Pruning</ListItem></Appear>
          <Appear><ListItem>Evaluation Functions</ListItem></Appear>
          <Appear><ListItem>Reinforcement Learning</ListItem></Appear>
          <Appear><ListItem>Bitboards</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes></Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">Who am I?</Heading>
        <UnorderedList>
          <Appear><ListItem>He / him</ListItem></Appear>
          <Appear><ListItem>Husband, father, amateur historian</ListItem></Appear>
          <Appear><ListItem>Oreo enthusiast</ListItem></Appear>
          <Appear><ListItem>Senior Developer Relations Engineer @ <Link href="https://basistheory.com/">Basis Theory</Link></ListItem></Appear>
          <Appear><ListItem><Link href="https://twitter.com/NathanLoding">@NathanLoding</Link>*</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        why i asked the poll questions - i am no longer the smartest person in the room!
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">Evolution of Chess Engines</Heading>
      </FlexBox>
      <Notes>
        anyone have a guess when the first chess engine was created?
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <UnorderedList>
          <Appear>
            <ListItem>
              <strong>1769</strong>
              <Appear tagName="span"> - Mechanical Turk</Appear>
              <Appear tagName="span"> - <em>fraud!!</em></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1950</strong> - Turochamp, Alan Turing
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1957</strong> - Alex Bernstein @ MIT
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1958</strong> - engine (NSS) beats human for first time
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1970</strong> - first all computer championship
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1988</strong> - Brent Larsen first GM to lose to enginen in tournament
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>1997</strong> - Deep Blue defeats Kasparov
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>1950 - same year as Turing Test, considered the first video game. never ran on hardware, lost to time</li>
          <li>1957 - 42k instructions/second, 70K memory, 4-ply search in 8 minutes, first "true" engine</li>
          <li>1958 - Newell, Shaw, & Simon (NSS), learned chess one hour before game</li>
          <li>1997 - Deep Blue was calculating 50 billion positions every 3 minutes. Kasparov was calculating 10 positions every 3 minutes. DEEP BLUE had 200 processors.</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">Chess Engines Today</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <strong>Stockfish</strong> - <Link href="https://stockfishchess.org/">https://stockfishchess.org/</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Leela Chess Zero</strong> - <Link href="https://lczero.org/">https://lczero.org/</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>AlphaZero</strong> - <Link href="https://www.deepmind.com/">https://www.deepmind.com/</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Komodo Dragon 3</strong> - <Link href="https://komodochess.com/">https://komodochess.com/</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Fat Fritz 2</strong> - <Link href="https://en.chessbase.com/products/fat-fritz">https://en.chessbase.com/products/fat-fritz</Link>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              ... and so many more! <Link href="https://tcec-chess.com/">https://tcec-chess.com/</Link>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Rules of Chess</Heading>
      </FlexBox>
      <Notes></Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">If you can't explain the rules ...</Heading>
        <Heading fontSize="h3" color="#ebe5da">... how can your system follow them?</Heading>
      </FlexBox>
      <Notes>
        <ul>
          <li>not going to explain chess rules - if you wanna learn, see me after!</li>
          <li>origins in Chaturanga from 6th century CE</li>
          <li>what we know as chess today started in 15th century Spain</li>
          <li>goal is checkmate - king can't move without being captured</li>
          <li>pawns, knights, bishops, rooks, king, and queen</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Image src={KnightMoves} maxHeight="100%" width="auto"/>
      </FlexBox>
      <Notes></Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">How Chess Engines Work</Heading>
      </FlexBox>
      <Notes>
        dude, that's the name of the session, we are already 10 minutes in!
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">How do chess players think?</Heading>
        <UnorderedList>
          <Appear><ListItem>Candidate moves - instinct, training, repertoire</ListItem></Appear>
          <Appear><ListItem>What will my opponents next move be?</ListItem></Appear>
          <Appear><ListItem>How do I respond to that move?</ListItem></Appear>
          <Appear><ListItem>Rinse & Repeat</ListItem></Appear>
          <Appear><ListItem><strong>Average player:</strong> 1-2 moves ahead</ListItem></Appear>
          <Appear><ListItem><strong>Grandmasters:</strong> 10-15+ moves ahead</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        why i asked the poll questions - i am no longer the smartest person in the room!
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Easy!</Heading>
        <Heading fontSize="h3" color="#ebe5da">Calculate and store the moves!</Heading>
      </FlexBox>
      <Notes>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">How do chess players think?</Heading>
        <UnorderedList>
          <Appear><ListItem>Candidate moves - instinct, training, repertoire</ListItem></Appear>
          <Appear><ListItem>What will my opponents next move be?</ListItem></Appear>
          <Appear><ListItem>How do I respond to that move?</ListItem></Appear>
          <Appear><ListItem>Rinse & Repeat</ListItem></Appear>
          <Appear><ListItem><strong>Average player:</strong> 1-2 moves ahead</ListItem></Appear>
          <Appear><ListItem><strong>Grandmasters:</strong> 10-15+ moves ahead</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        why i asked the poll questions - i am no longer the smartest person in the room!
      </Notes>
    </Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
