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
  Notes
} from 'spectacle';

const theme = {
  fonts: {
    header: 'Georgia, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%">
        <Heading>How Chess Engines Work</Heading>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              XX
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide>
    <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div>
    <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide>
    <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    <Slide>
      <Grid
        flex={1}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
            <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide>
    <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));