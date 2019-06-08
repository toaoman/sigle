import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Me as MeContainer } from '../modules/layout/components/Me';
import { Container, Link } from '../components';
import { Header } from '../modules/layout/components/Header';
import { Footer } from '../modules/layout/components/Footer';
import { StoryList } from '../modules/stories/components/StoryList';

const Title = styled.h2`
  ${tw`text-2xl font-bold mb-4`};
`;

// TODO protect this page, user needs to be connected
export const Me = () => (
  <React.Fragment>
    <Header />
    <Container>
      <MeContainer>
        <Title>My Stories</Title>

        <StoryList />
      </MeContainer>
    </Container>
    <Footer />
  </React.Fragment>
);
