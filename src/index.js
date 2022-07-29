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
    bottom={0}
    width={1}
  >
    <Box padding="1em">
      <Text fontSize="1.5em">@NathanLoding</Text>
    </Box>
    <Box textAlign="right" padding="1em">
      <Text fontSize="1.5em">How Chess Engines Work</Text>
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
        {/* <Box> */}
        <Heading fontSize="h2">Who am I?</Heading>
        {/* </Box>
        <Box> */}
        <UnorderedList>
          <Appear><ListItem>He / him</ListItem></Appear>
          <Appear><ListItem>Husband, father, amateur historian</ListItem></Appear>
          <Appear><ListItem>Oreo enthusiast</ListItem></Appear>
          <Appear><ListItem>Senior Developer Relations Engineer @ <Link href="https://basistheory.com/">Basis Theory</Link></ListItem></Appear>
          <Appear><ListItem><Link href="https://twitter.com/NathanLoding">@NathanLoding</Link>*</ListItem></Appear>
        </UnorderedList>
        {/* </Box> */}
      </FlexBox>
      <Notes>
        why i asked the poll questions - i am no longer the smartest person in the room!
      </Notes>
    </Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
