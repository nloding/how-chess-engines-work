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

import QueensGambit from './queens-gambit.jpg';
import KnightMoves from './knight_moves.png';
import Minimax from './minmax.gif';
import AlphaBetaPruning from './AB_pruning.png';
import NeuralNetwork from './neural_network.png';
import NeuralNetworkGradient from './nn_gradient.png';
import CNNSingle from './cnn-single.png';
import CNNMulti from './cnn-multi.png';
import MonteCarlo from './monte-carlo.png';
import Reinforcement from './reinforcement.png';

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
        <Image src={QueensGambit} maxHeight="100%" width="auto"/>
      </FlexBox>
      <Notes></Notes>
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
      <FlexBox height="100%">
        <Heading fontSize="h2">
          <em>f</em>(<em>B</em>) &rarr; <em>M</em>
        </Heading>
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

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Decision Tree!</Heading>
      </FlexBox>
      <Notes>
        tree-like representation of decisions and possible consequences
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
        <Heading fontSize="h2">Wait ... <em>how big</em>??</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <strong>Tic-Tac-Toe</strong>
              <Appear tagName="span"> - 10<sup>5</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Connect Four</strong>
              <Appear tagName="span"> - 10<sup>21</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Atoms in Human Body</strong>
              <Appear tagName="span"> - 10<sup>27</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Atoms in Earth</strong>
              <Appear tagName="span"> - 10<sup>49</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Atoms in Milky Way</strong>
              <Appear tagName="span"> - 10<sup>68</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Atoms in Visible Universe</strong>
              <Appear tagName="span"> - 10<sup>78</sup></Appear>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              <strong>Chess</strong>
              <Appear tagName="span"> - 10<sup>123</sup></Appear>
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        go is 10^360
        https://en.wikipedia.org/wiki/Game_complexity#Game_tree_size
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Minimax</Heading>
      </FlexBox>
      <Notes>
        
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h2">Negamax</Heading>
      </FlexBox>
      <Notes>
        
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Image src={Minimax} maxHeight="100%" width="auto" />
      </FlexBox>
      <Notes>
        tree-like representation of decisions and possible consequences
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">Alpha-Beta Pruning</Heading>
        <Heading fontSize="h3" color="#ebe5da">Removes nodes where one possibility is found to be worse a previous move.</Heading>
      </FlexBox>
      <Notes>
        
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Image src={AlphaBetaPruning} maxHeight="100%" maxWidth="100%" width="auto" />
      </FlexBox>
      <Notes>
        tree-like representation of decisions and possible consequences
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">More Optimizations!</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              Move Order
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Opening Books
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Endgame Tables
            </ListItem>
          </Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        go is 10^360
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h2">... that isn't machine learning ...</Heading>
      </FlexBox>
      <Notes>
        first of all, what do you think machine learning is?
      </Notes>
    </Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Machine Learning <em>noun.</em></Heading>
    <Text>the use and development of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyze and draw inferences from patterns in data.</Text>
  </FlexBox>
  <Notes>
    first of all, what do you think machine learning is?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" backgroundColor="white">
    <Image src={NeuralNetwork} maxHeight="100%" width="auto" />
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Heading fontSize="h2">How does a neural network <em>learn</em>?</Heading>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Image src={NeuralNetworkGradient} maxHeight="100%" width="auto"/>
  </FlexBox>
  <Notes></Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">... in laymen's terms please</Heading>
    <Appear><Text><strong>1 + 1 = ?</strong></Text></Appear>
    <FlexBox flexDirection="row">
      <UnorderedList flexDirection="row">
        <Appear>
          <ListItem>
            <strong>✋🏻</strong>
            <Appear tagName="span"> - 11!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>🚫</strong>
            <Appear tagName="span"> - very, very wrong!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>✋🏻</strong>
            <Appear tagName="span"> - 5!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>🚫</strong>
            <Appear tagName="span"> - not as wrong!</Appear>
          </ListItem>
        </Appear>
      </UnorderedList>
      <UnorderedList flexDirection="row">
        <Appear>
          <ListItem>
            <strong>✋🏻</strong>
            <Appear tagName="span"> - 3!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>🚫</strong>
            <Appear tagName="span"> - oh so close!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>✋🏻</strong>
            <Appear tagName="span"> - 2!</Appear>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <strong>✅</strong>
            <Appear tagName="span"> - 🎉🎉🎉</Appear>
          </ListItem>
        </Appear>
      </UnorderedList>
    </FlexBox>
  </FlexBox>
  <Notes>
    go is 10^360
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">In Data Science terms</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>Supervised Learning</strong>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Feedforward</strong> - execute the function
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Loss</strong> - determine how wrong the result is
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Backpropagation</strong> - adjust weights/biases
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          Feedback loops known as <strong>Epoch</strong>
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Unsupervised Learning</Heading>
    <Appear><Text>"analyzing uncategorized, unlabeled data and finding hidden structures in it"</Text></Appear>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>Clustering</strong> - group items by most similarities
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Association</strong> - how certain variables relate to each other
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    unsupervised learning is very hard to understand in my opinion.
    one way to think about it - imagine having a selection of food in front of you,
    but you don't know what is what. so you taste a few things. then you taste a few more.
    you can begin to sort them into sweet, sour, etc.
    then you go back and taste them all again. oh, now i get a hint of this and a hint of
    that ... now i refine those categories. then do it again. and again.
    i still don't _know_ what is in each dish, but i know enough about them to put them
    into logical groups
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Putting the pieces together</Heading>
    <Image src={CNNSingle} maxHeight="100%" width="auto" maxWidth="100%" />
  </FlexBox>
  <Notes>
    can anyone point out the primary issue with this?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Only one move ...</Heading>
    <Text>... based on a <em>single</em> position</Text>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Improving the network</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>CNN</strong> - convolutional neural network
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Input</strong> - board position
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Output</strong> - Multi-head output
          <Appear tagName="ul">
            <li>Move probability (policy head)</li>
            <li>Winning probability (value head)</li>
          </Appear>
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    <ol>
      <li>CNNs are good at image recognition, good fit here</li>
      <li>why a multi-head output? think about images, where you may want to identify the contents and put a box around it (facial recognition)</li>
    </ol>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Image src={CNNMulti} maxHeight="100%" width="auto" maxWidth="100%" />
  </FlexBox>
  <Notes></Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Monte Carlo Tree Search</Heading>
    <Appear>
      <Image src={MonteCarlo} maxHeight="100%" width="auto" maxWidth="100%" />
    </Appear>
  </FlexBox>
  <Notes>
    anyone play Total War: Rome II?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Exploration vs Exploitation</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>Exploration</strong> - fewer simulations, "riskier" moves
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Exploitation</strong> - high winning chances
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    to steal the common example: how would you pick a destination for a vacation?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">MCTS vs Minimax</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>Advantages</strong>
          <UnorderedList>
            <ListItem>No evaluation function</ListItem>
            <ListItem>Grows asymmetrically, less branching</ListItem>
          </UnorderedList>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>Disadvantages</strong>
          <UnorderedList>
            <ListItem>"Trap moves"</ListItem>
            <ListItem>"Off the radar" moves get pruned</ListItem>
          </UnorderedList>
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Image src={CNNMulti} maxHeight="100%" width="auto" maxWidth="100%" />
  </FlexBox>
  <Notes>what's missing?</Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Reinforcement Learning</Heading>
    <Appear>
      <Image src={Reinforcement} maxHeight="100%" width="auto" maxWidth="100%" />
    </Appear>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
